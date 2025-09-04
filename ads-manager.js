// 广告管理系统
class AdManager {
    constructor() {
        this.config = window.AD_CONFIG || {};
        this.adHistory = JSON.parse(localStorage.getItem('adHistory') || '[]');
        this.lastAdTime = parseInt(localStorage.getItem('lastAdTime') || '0');
        this.consentKey = 'adsConsent';
        this.consentStatus = localStorage.getItem(this.consentKey) || '';
        this.lazyObserver = null;
        this.viewObserver = null;
        this.elementViewState = new WeakMap(); // element -> { visibleSince, accumulated, lastRefresh }
        this.perAdRefreshCap = 2; // 每个广告位本次会话最多刷新2次
        this.refreshCooldownMs = 30 * 1000; // 连续可见30s才刷新
        this.init();
    }

    // 初始化广告系统
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeAdManager();
            });
        } else {
            this.initializeAdManager();
        }
    }

    // 实际初始化逻辑
    initializeAdManager() {
        this.setupConsent(() => {
            this.loadAdSenseScript();
            this.setupEventListeners();
            this.setupObservers();
        });
        console.log('AdManager initialized');
    }

    // 加载AdSense脚本
    loadAdSenseScript() {
        if (this.consentStatus === 'rejected') {
            console.warn('Ads disabled due to consent rejection');
            return;
        }
        if (typeof adsbygoogle === 'undefined') {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4198974976257818`;
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);
            
            script.onload = () => {
                console.log('AdSense script loaded');
                this.initializeAdSense();
            };
            
            script.onerror = () => {
                console.warn('AdSense script failed to load - likely blocked by ad blocker');
                // 设置一个假的 adsbygoogle 对象来避免错误
                window.adsbygoogle = window.adsbygoogle || [];
                this.initializeAdSense();
            };
        } else {
            this.initializeAdSense();
        }
    }

    // 初始化AdSense
    initializeAdSense() {
        if (typeof adsbygoogle !== 'undefined') {
            // 推送一次以完成初始化
            (adsbygoogle = window.adsbygoogle || []).push({});
            console.log('AdSense initialized');
        }
    }

    // 同意管理（极简版）
    setupConsent(onReady) {
        if (this.consentStatus === 'accepted') {
            onReady && onReady();
            return;
        }
        if (this.consentStatus === 'rejected') {
            // 用户拒绝，仍然初始化监听但不加载广告脚本
            this.setupEventListeners();
            this.setupObservers();
            return;
        }
        const branding = this.config.branding || {};
        const colors = branding.colors || {};
        const messages = branding.messages || {};
        const banner = document.createElement('div');
        banner.id = 'consent-banner';
        Object.assign(banner.style, {
            position: 'fixed', left: '0', right: '0', bottom: '0', zIndex: '99999',
            background: colors.surface || '#111827', color: colors.text || 'white', padding: '12px 16px',
            display: 'flex', alignItems: 'center', gap: '12px',
            boxShadow: '0 -2px 12px rgba(0,0,0,0.2)'
        });
        const consentText = messages.consentText || 'We use cookies to improve experience and show ads. See our Privacy Policy.';
        const privacyUrl = (messages.privacyUrl || '#').replace(/"/g, '');
        banner.innerHTML = `
            <div style="flex:1; font-size:14px; line-height:1.4;">
                ${consentText} ${privacyUrl && privacyUrl !== '#' ? `<a href="${privacyUrl}" target="_blank" style="color:${colors.primary || '#10b981'};text-decoration:underline;">Privacy Policy</a>` : ''}
            </div>
            <button id="consent-reject" style="background:${colors.border || '#374151'};color:${colors.text || '#fff'};border:none;padding:8px 12px;border-radius:6px;cursor:pointer">Reject</button>
            <button id="consent-accept" style="background:${colors.primary || '#10b981'};color:#111827;border:none;padding:8px 12px;border-radius:6px;cursor:pointer;font-weight:600">Accept</button>
        `;
        if (document.body) {
            document.body.appendChild(banner);
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                document.body.appendChild(banner);
            });
        }
        const accept = () => {
            localStorage.setItem(this.consentKey, 'accepted');
            this.consentStatus = 'accepted';
            banner.remove();
            onReady && onReady();
        };
        const reject = () => {
            localStorage.setItem(this.consentKey, 'rejected');
            this.consentStatus = 'rejected';
            banner.remove();
        };
        banner.querySelector('#consent-accept').addEventListener('click', accept);
        banner.querySelector('#consent-reject').addEventListener('click', reject);
    }

    // 设置事件监听器
    setupEventListeners() {
        // 监听页面可见性变化
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.refreshVisibleAds();
            }
        });

        // 监听窗口大小变化
        window.addEventListener('resize', () => {
            this.refreshVisibleAds();
        });
    }

    // 懒加载与可见性统计
    setupObservers() {
        // 懒加载（提前300px）
        this.lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.isIntersecting && !el.dataset.initialized) {
                    try {
                        (adsbygoogle = window.adsbygoogle || []).push({});
                        el.dataset.initialized = '1';
                    } catch (e) {
                        console.error('Lazy load push error', e);
                    }
                }
            });
        }, { root: null, rootMargin: '300px 0px', threshold: 0 });

        // 可见性累计，用于30s刷新
        this.viewObserver = new IntersectionObserver((entries) => {
            const now = Date.now();
            entries.forEach(entry => {
                const el = entry.target;
                let state = this.elementViewState.get(el) || { visibleSince: 0, accumulated: 0, refreshCount: 0, lastRefresh: 0 };
                if (entry.isIntersecting) {
                    if (!state.visibleSince) state.visibleSince = now;
                } else {
                    if (state.visibleSince) {
                        state.accumulated += Math.max(0, now - state.visibleSince);
                        state.visibleSince = 0;
                    }
                }
                // 判断是否满足刷新条件
                const effectiveAccum = state.accumulated + (state.visibleSince ? (now - state.visibleSince) : 0);
                if (effectiveAccum >= this.refreshCooldownMs && state.refreshCount < this.perAdRefreshCap) {
                    // 刷新并重置累计
                    try {
                        (adsbygoogle = window.adsbygoogle || []).push({});
                        state.refreshCount += 1;
                        state.accumulated = 0;
                        state.visibleSince = now; // 继续累计
                        state.lastRefresh = now;
                    } catch (e) {
                        console.error('Visibility refresh error', e);
                    }
                }
                this.elementViewState.set(el, state);
            });
        }, { threshold: 0.5 }); // 50% 可见才计时
    }

    // 创建侧边栏广告
    createSidebarAd() {
        if (!this.config.googleAdsense.enabled) return null;

        const adContainer = document.createElement('div');
        adContainer.id = 'sidebar-ad';
        adContainer.className = 'ad-container sidebar-ad';
        
        // 应用样式
        Object.assign(adContainer.style, this.config.styles.sidebar);

        const adSlot = document.createElement('ins');
        adSlot.className = 'adsbygoogle';
        adSlot.style.display = 'block';
        adSlot.style.minHeight = '250px'; // 预留高度，降低CLS
        adSlot.setAttribute('data-ad-client', this.config.googleAdsense.publisherId);
        adSlot.setAttribute('data-ad-slot', this.config.googleAdsense.adSlots.sidebar.slotId);
        adSlot.setAttribute('data-ad-format', this.config.googleAdsense.adSlots.sidebar.format);

        adContainer.appendChild(adSlot);
        document.body.appendChild(adContainer);

        // 懒加载 & 可见性统计
        this.observeAdSlot(adSlot);
        this.trackAdEvent('sidebar_ad_created');

        return adContainer;
    }

    // 创建信息流广告
    createNativeAd(containerId) {
        if (!this.config.googleAdsense.enabled) return null;

        const container = document.getElementById(containerId);
        if (!container) return null;

        const adContainer = document.createElement('div');
        adContainer.className = 'ad-container native-ad';
        
        // 应用样式
        Object.assign(adContainer.style, this.config.styles.native);

        const adSlot = document.createElement('ins');
        adSlot.className = 'adsbygoogle';
        adSlot.style.display = 'block';
        adSlot.style.minHeight = '250px'; // 预留高度，降低CLS
        adSlot.setAttribute('data-ad-client', this.config.googleAdsense.publisherId);
        adSlot.setAttribute('data-ad-slot', this.config.googleAdsense.adSlots.native.slotId);
        adSlot.setAttribute('data-ad-format', this.config.googleAdsense.adSlots.native.format);

        adContainer.appendChild(adSlot);
        container.appendChild(adContainer);

        // 懒加载 & 可见性统计
        this.observeAdSlot(adSlot);
        this.trackAdEvent('native_ad_created');

        return adContainer;
    }

    // 创建视频广告
    createVideoAd() {
        return new Promise((resolve, reject) => {
            if (!this.config.googleAdsense.enabled) {
                // 无广告时也使用fallback门槛
                this.showFallbackInterstitial(resolve);
                return;
            }

            // 检查广告间隔
            const now = Date.now();
            if (now - this.lastAdTime < this.config.adStrategy.minInterval * 1000) {
                resolve(null);
                return;
            }

            const adContainer = document.createElement('div');
            adContainer.id = 'video-ad-overlay';
            adContainer.className = 'ad-container video-ad';
            
            // 应用样式
            Object.assign(adContainer.style, this.config.styles.video);

            // 创建广告内容 - 使用真实 AdSense 代码
            adContainer.innerHTML = `
                <div class="video-ad-content">
                    <div class="video-ad-header">
                        <span class="ad-label">广告</span>
                        ${this.config.adStrategy.allowSkip ? '<button class="skip-btn" onclick="window.adManager.skipVideoAd()">跳过</button>' : ''}
                    </div>
                    <div class="video-ad-body">
                        <!-- 展示广告 -->
                        <ins class="adsbygoogle"
                             style="display:block"
                             data-ad-format="autorelaxed"
                             data-ad-client="ca-pub-4198974976257818"
                             data-ad-slot="7986197300"></ins>
                    </div>
                    ${this.config.adStrategy.showProgress ? '<div class="video-ad-progress"><div class="progress-bar"></div></div>' : ''}
                </div>
            `;

            // 添加样式
            const style = document.createElement('style');
            style.textContent = `
                .video-ad {
                    background: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(10px);
                }
                .video-ad-content {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                }
                .video-ad-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 15px;
                    background: #f8f9fa;
                    border-bottom: 1px solid #e9ecef;
                }
                .ad-label {
                    font-size: 12px;
                    color: #6c757d;
                    font-weight: 500;
                }
                .skip-btn {
                    background: #6c757d;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-size: 12px;
                    cursor: pointer;
                }
                .skip-btn:hover {
                    background: #5a6268;
                }
                .video-ad-body {
                    padding: 0;
                }
                .video-ad-progress {
                    height: 4px;
                    background: #e9ecef;
                }
                .progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, #007bff, #0056b3);
                    width: 0%;
                    transition: width 0.1s linear;
                }
            `;
            document.head.appendChild(style);

            document.body.appendChild(adContainer);

            // 推送广告
            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
                this.trackAdEvent('video_ad_loaded');
                
                // 若广告在一定时间内未呈现，切换到fallback
                const fallbackIfNoFill = setTimeout(() => {
                    const rendered = adContainer.querySelector('ins.adsbygoogle');
                    const renderedHeight = rendered ? rendered.clientHeight : 0;
                    if (!rendered || renderedHeight < 20) {
                        this.trackAdEvent('video_ad_no_fill');
                        this.removeVideoAd();
                        this.showFallbackInterstitial(resolve);
                    }
                }, 4000);

                // 开始倒计时（正常渲染路径）
                this.startVideoAdCountdown(adContainer, (res) => {
                    clearTimeout(fallbackIfNoFill);
                    resolve(res);
                });
                
                // 更新最后广告时间
                this.lastAdTime = now;
                localStorage.setItem('lastAdTime', this.lastAdTime.toString());
                
            } catch (error) {
                console.error('Video ad error:', error);
                this.removeVideoAd();
                // 发生错误则回退到fallback门槛
                this.showFallbackInterstitial(resolve);
            }
        });
    }

    // 视频广告倒计时
    startVideoAdCountdown(adContainer, resolve) {
        const duration = this.config.adStrategy.videoAdDuration;
        const progressBar = adContainer.querySelector('.progress-bar');
        let timeLeft = duration;

        const countdown = setInterval(() => {
            timeLeft--;
            const progress = ((duration - timeLeft) / duration) * 100;
            
            if (progressBar) {
                progressBar.style.width = progress + '%';
            }

            if (timeLeft <= 0) {
                clearInterval(countdown);
                this.removeVideoAd();
                resolve(adContainer);
            }
        }, 1000);
    }

    // 跳过视频广告
    skipVideoAd() {
        this.removeVideoAd();
        this.trackAdEvent('video_ad_skipped');
    }

    // 移除视频广告
    removeVideoAd() {
        const adContainer = document.getElementById('video-ad-overlay');
        if (adContainer) {
            adContainer.remove();
        }
    }

    // 无填充fallback：展示品牌化倒计时遮罩，结束后解除门槛
    showFallbackInterstitial(resolve) {
        const branding = this.config.branding || {};
        const colors = branding.colors || {};
        const messages = branding.messages || {};
        const logoUrl = branding.logoUrl || '';
        const siteName = branding.siteName || 'Our site';
        const duration = this.config.adStrategy.videoAdDuration;
        const overlay = document.createElement('div');
        overlay.id = 'fallback-ad-overlay';
        Object.assign(overlay.style, {
            position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: '9999', color: '#fff'
        });
        overlay.innerHTML = `
            <div style="width:min(92vw,520px); background:${colors.surface || '#111827'}; border-radius:14px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.4)">
                <div style="padding:14px 16px; display:flex; align-items:center; justify-content:space-between; background:${colors.header || '#1f2937'}; border-bottom:1px solid ${colors.border || '#374151'};">
                    <div style="display:flex; align-items:center; gap:10px;">
                        ${logoUrl ? `<img src="${logoUrl}" alt="logo" style="width:22px;height:22px;border-radius:4px;object-fit:cover;">` : ''}
                        <div style="font-size:14px; opacity:.9; color:${colors.text || '#fff'};">${siteName}</div>
                    </div>
                    <span style="font-size:12px; opacity:.7; color:${colors.text || '#fff'};">Sponsorship</span>
                </div>
                <div style="padding:18px 16px; text-align:center; color:${colors.text || '#fff'};">
                    <div style="font-size:16px; font-weight:600; margin-bottom:8px;">${messages.fallbackTitle || 'Your result unlocks after a brief message'}</div>
                    <div id="fallback-countdown" style="font-size:28px; font-weight:800; color:${colors.primary || '#10b981'}">${duration}</div>
                    <div style="margin-top:8px; font-size:13px; opacity:.8">${messages.fallbackSubtitle || 'We keep tests free by showing a short sponsorship message.'}</div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        this.trackAdEvent('fallback_interstitial_shown');
        this.startGenericCountdown(duration, (left) => {
            const el = document.getElementById('fallback-countdown');
            if (el) el.textContent = String(left);
        }, () => {
            overlay.remove();
            resolve(overlay);
        });
    }

    startGenericCountdown(seconds, onTick, onDone) {
        let remaining = seconds;
        onTick && onTick(remaining);
        const timer = setInterval(() => {
            remaining -= 1;
            onTick && onTick(remaining);
            if (remaining <= 0) {
                clearInterval(timer);
                onDone && onDone();
            }
        }, 1000);
    }

    // 在测试过程中插入广告
    insertAdDuringTest(questionIndex, containerId) {
        if (this.config.adStrategy.adPositions.includes(questionIndex)) {
            const now = Date.now();
            if (now - this.lastAdTime >= this.config.adStrategy.minInterval * 1000) {
                this.createNativeAd(containerId);
                this.lastAdTime = now;
                localStorage.setItem('lastAdTime', this.lastAdTime.toString());
                this.trackAdEvent('test_ad_inserted', { questionIndex });
            }
        }
    }

    // 在结果页面显示广告
    showResultPageAds() {
        // 侧边栏广告
        this.createSidebarAd();
        
        // 结果页广告
        const resultContainer = document.getElementById('result-container') || document.querySelector('.result');
        if (resultContainer) {
            this.createNativeAd(resultContainer.id || 'result-container');
        }
    }

    // 刷新可见广告
    refreshVisibleAds() {
        const ads = document.querySelectorAll('.adsbygoogle');
        ads.forEach(ad => this.observeAdSlot(ad));
    }

    // 观察一个广告槽位（懒加载 + 可见性累计）
    observeAdSlot(adEl) {
        if (!adEl) return;
        try {
            this.lazyObserver && this.lazyObserver.observe(adEl);
            this.viewObserver && this.viewObserver.observe(adEl);
        } catch (e) {
            // ignore
        }
    }

    // 粘性底部小横幅
    createStickyBottomBanner() {
        if (!this.config.googleAdsense.enabled) return null;
        const wrapper = document.createElement('div');
        wrapper.id = 'sticky-bottom-ad';
        Object.assign(wrapper.style, {
            position: 'fixed', left: '0', right: '0', bottom: '0', zIndex: '9999',
            background: 'transparent', padding: '8px', display: 'flex', justifyContent: 'center'
        });
        const inner = document.createElement('div');
        Object.assign(inner.style, {
            position: 'relative', background: '#fff', borderRadius: '10px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.12)', padding: '8px 12px'
        });
        const close = document.createElement('button');
        close.textContent = '×';
        Object.assign(close.style, {
            position: 'absolute', top: '-10px', right: '-10px',
            width: '28px', height: '28px', borderRadius: '14px',
            border: 'none', background: '#111827', color: '#fff', cursor: 'pointer'
        });
        close.addEventListener('click', () => wrapper.remove());
        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.style.display = 'block';
        ins.style.minHeight = '90px';
        ins.setAttribute('data-ad-client', this.config.googleAdsense.publisherId);
        ins.setAttribute('data-ad-slot', this.config.googleAdsense.adSlots.sidebar.slotId);
        ins.setAttribute('data-ad-format', 'auto');
        inner.appendChild(close);
        inner.appendChild(ins);
        wrapper.appendChild(inner);
        document.body.appendChild(wrapper);
        this.observeAdSlot(ins);
        this.trackAdEvent('sticky_bottom_ad_created');
        return wrapper;
    }

    // 追踪广告事件
    trackAdEvent(eventName, data = {}) {
        // Google Analytics 追踪
        if (this.config.tracking.googleAnalytics.enabled && typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: this.config.tracking.googleAnalytics.eventCategory,
                event_label: this.config.tracking.googleAnalytics.eventLabel,
                ...data
            });
        }

        // 自定义追踪
        if (this.config.tracking.customTracking.enabled) {
            this.sendCustomTracking(eventName, data);
        }

        // 本地记录
        this.adHistory.push({
            event: eventName,
            timestamp: Date.now(),
            data: data
        });
        localStorage.setItem('adHistory', JSON.stringify(this.adHistory));
    }

    // 发送自定义追踪数据
    sendCustomTracking(eventName, data) {
        // 跳过本地文件协议的跟踪请求
        if (window.location.protocol === 'file:') {
            console.log('Skipping tracking in file protocol:', eventName, data);
            return;
        }
        
        fetch(this.config.tracking.customTracking.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event: eventName,
                timestamp: Date.now(),
                data: data,
                userAgent: navigator.userAgent,
                url: window.location.href
            })
        }).catch(error => {
            console.error('Custom tracking error:', error);
        });
    }

    // 获取广告统计
    getAdStats() {
        return {
            totalAds: this.adHistory.length,
            lastAdTime: this.lastAdTime,
            adHistory: this.adHistory
        };
    }
}

// 初始化广告管理器
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.adManager = new AdManager();
    });
} else {
    window.adManager = new AdManager();
}

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdManager;
}
