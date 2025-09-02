// 广告管理系统
class AdManager {
    constructor() {
        this.config = window.AD_CONFIG || {};
        this.adHistory = JSON.parse(localStorage.getItem('adHistory') || '[]');
        this.lastAdTime = parseInt(localStorage.getItem('lastAdTime') || '0');
        this.init();
    }

    // 初始化广告系统
    init() {
        this.loadAdSenseScript();
        this.setupEventListeners();
        console.log('AdManager initialized');
    }

    // 加载AdSense脚本
    loadAdSenseScript() {
        if (typeof adsbygoogle === 'undefined') {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.config.googleAdsense.publisherId}`;
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);
            
            script.onload = () => {
                console.log('AdSense script loaded');
                this.initializeAdSense();
            };
        } else {
            this.initializeAdSense();
        }
    }

    // 初始化AdSense
    initializeAdSense() {
        if (typeof adsbygoogle !== 'undefined') {
            (adsbygoogle = window.adsbygoogle || []).push({});
            console.log('AdSense initialized');
        }
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
        adSlot.setAttribute('data-ad-client', this.config.googleAdsense.publisherId);
        adSlot.setAttribute('data-ad-slot', this.config.googleAdsense.adSlots.sidebar.slotId);
        adSlot.setAttribute('data-ad-format', this.config.googleAdsense.adSlots.sidebar.format);

        adContainer.appendChild(adSlot);
        document.body.appendChild(adContainer);

        // 推送广告
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            this.trackAdEvent('sidebar_ad_loaded');
        } catch (error) {
            console.error('Sidebar ad error:', error);
        }

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
        adSlot.setAttribute('data-ad-client', this.config.googleAdsense.publisherId);
        adSlot.setAttribute('data-ad-slot', this.config.googleAdsense.adSlots.native.slotId);
        adSlot.setAttribute('data-ad-format', this.config.googleAdsense.adSlots.native.format);

        adContainer.appendChild(adSlot);
        container.appendChild(adContainer);

        // 推送广告
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            this.trackAdEvent('native_ad_loaded');
        } catch (error) {
            console.error('Native ad error:', error);
        }

        return adContainer;
    }

    // 创建视频广告
    createVideoAd() {
        return new Promise((resolve, reject) => {
            if (!this.config.googleAdsense.enabled) {
                resolve(null);
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

            // 创建广告内容
            adContainer.innerHTML = `
                <div class="video-ad-content">
                    <div class="video-ad-header">
                        <span class="ad-label">广告</span>
                        ${this.config.adStrategy.allowSkip ? '<button class="skip-btn" onclick="window.adManager.skipVideoAd()">跳过</button>' : ''}
                    </div>
                    <div class="video-ad-body">
                        <ins class="adsbygoogle"
                             style="display:block"
                             data-ad-client="${this.config.googleAdsense.publisherId}"
                             data-ad-slot="${this.config.googleAdsense.adSlots.video.slotId}"
                             data-ad-format="${this.config.googleAdsense.adSlots.video.format}">
                        </ins>
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
                
                // 开始倒计时
                this.startVideoAdCountdown(adContainer, resolve);
                
                // 更新最后广告时间
                this.lastAdTime = now;
                localStorage.setItem('lastAdTime', this.lastAdTime.toString());
                
            } catch (error) {
                console.error('Video ad error:', error);
                this.removeVideoAd();
                reject(error);
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
        ads.forEach(ad => {
            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (error) {
                console.error('Ad refresh error:', error);
            }
        });
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
window.adManager = new AdManager();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdManager;
}
