// AMP 广告管理器
class AMPAdManager {
    constructor() {
        this.config = window.AMP_AD_CONFIG || {};
        this.adHistory = [];
        this.init();
    }

    // 初始化 AMP 广告系统
    init() {
        this.setupAMPScript();
        console.log('AMP AdManager initialized');
    }

    // 设置 AMP 脚本
    setupAMPScript() {
        // 加载 AMP 核心脚本
        if (typeof amp === 'undefined') {
            const ampScript = document.createElement('script');
            ampScript.async = true;
            ampScript.src = 'https://cdn.ampproject.org/v0.js';
            document.head.appendChild(ampScript);
        }
        
        // 加载 AMP 广告脚本
        if (!document.querySelector('script[src*="amp-ad-0.1.js"]')) {
            const adScript = document.createElement('script');
            adScript.async = true;
            adScript.setAttribute('custom-element', 'amp-ad');
            adScript.src = 'https://cdn.ampproject.org/v0/amp-ad-0.1.js';
            document.head.appendChild(adScript);
            
            adScript.onload = () => {
                console.log('AMP Ad script loaded');
                this.initializeAMPAds();
            };
        } else {
            this.initializeAMPAds();
        }
    }

    // 初始化 AMP 广告
    initializeAMPAds() {
        // 等待 AMP 准备就绪
        if (typeof amp !== 'undefined') {
            amp.ready(() => {
                console.log('AMP ready, initializing ads');
                this.createAMPAdSlots();
            });
        }
    }

    // 创建 AMP 广告位
    createAMPAdSlots() {
        const config = this.config.ampAdSlots;
        
        // 顶部横幅广告
        if (config.topBanner) {
            this.createAMPAd('top-banner-ad', config.topBanner, this.config.ampStyles.topBanner);
        }
        
        // 侧边栏广告
        if (config.sidebar) {
            this.createAMPAd('sidebar-ad', config.sidebar, this.config.ampStyles.sidebar);
        }
        
        // 信息流广告
        if (config.native) {
            this.createAMPAd('native-ad', config.native, this.config.ampStyles.native);
        }
        
        // 底部粘性广告
        if (config.stickyBottom) {
            this.createAMPAd('sticky-bottom-ad', config.stickyBottom, this.config.ampStyles.stickyBottom);
        }
    }

    // 创建单个 AMP 广告 - 使用真实 AdSense 代码
    createAMPAd(containerId, adConfig, styles) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // 使用你提供的真实 AMP 广告代码
        const ampAd = document.createElement('amp-ad');
        ampAd.setAttribute('width', '100vw');
        ampAd.setAttribute('height', '320');
        ampAd.setAttribute('type', 'adsense');
        ampAd.setAttribute('data-ad-client', 'ca-pub-4198974976257818');
        ampAd.setAttribute('data-ad-slot', '9310887265');
        ampAd.setAttribute('data-auto-format', 'rspv');
        ampAd.setAttribute('data-full-width', '');
        
        // 应用样式
        Object.assign(ampAd.style, styles);
        
        // 添加 overflow div（按你的代码要求）
        const overflowDiv = document.createElement('div');
        overflowDiv.setAttribute('overflow', '');
        ampAd.appendChild(overflowDiv);
        
        // 添加占位符
        const placeholder = document.createElement('div');
        placeholder.setAttribute('placeholder', '');
        placeholder.style.cssText = `
            background: #f3f4f6;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6b7280;
            font-size: 14px;
        `;
        placeholder.textContent = 'Loading ad...';
        ampAd.appendChild(placeholder);
        
        // 添加错误处理
        const fallback = document.createElement('div');
        fallback.setAttribute('fallback', '');
        fallback.style.cssText = `
            background: #f3f4f6;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6b7280;
            font-size: 14px;
        `;
        fallback.textContent = 'Ad not available';
        ampAd.appendChild(fallback);
        
        container.appendChild(ampAd);
        
        // 追踪广告创建
        this.trackAdEvent('amp_ad_created', { containerId, adConfig });
    }

    // 在测试过程中插入 AMP 广告
    insertAMPAdDuringTest(questionIndex, containerId) {
        const strategy = this.config.ampAdStrategy;
        const positions = strategy.testAdPositions || [2, 4];
        
        if (positions.includes(questionIndex)) {
            const now = Date.now();
            const lastAdTime = parseInt(localStorage.getItem('lastAMPAdTime') || '0');
            
            if (now - lastAdTime >= strategy.minInterval * 1000) {
                this.createAMPAd(containerId, this.config.ampAdSlots.testInterstitial, this.config.ampStyles.testInterstitial);
                localStorage.setItem('lastAMPAdTime', now.toString());
                this.trackAdEvent('amp_test_ad_inserted', { questionIndex });
            }
        }
    }

    // 显示结果页 AMP 广告
    showResultPageAMPAds() {
        if (!this.config.ampAdStrategy.showResultPageAds) return;
        
        // 侧边栏广告
        if (this.config.ampAdSlots.sidebar) {
            this.createAMPAd('sidebar-ad', this.config.ampAdSlots.sidebar, this.config.ampStyles.sidebar);
        }
        
        // 结果页广告
        const resultContainer = document.getElementById('result-container') || document.querySelector('.result');
        if (resultContainer && this.config.ampAdSlots.native) {
            this.createAMPAd('result-native-ad', this.config.ampAdSlots.native, this.config.ampStyles.native);
        }
        
        // 底部粘性广告
        if (this.config.ampAdStrategy.enableSticky && this.config.ampAdSlots.stickyBottom) {
            this.createAMPAd('sticky-bottom-ad', this.config.ampAdSlots.stickyBottom, this.config.ampStyles.stickyBottom);
        }
    }

    // 追踪广告事件
    trackAdEvent(eventName, data = {}) {
        // Google Analytics 追踪
        if (window.AD_CONFIG?.tracking?.googleAnalytics?.enabled && typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'amp_advertising',
                event_label: 'amp_personality_test_ad',
                ...data
            });
        }

        // 本地记录
        this.adHistory.push({
            event: eventName,
            timestamp: Date.now(),
            data: data
        });
        
        console.log('AMP Ad Event:', eventName, data);
    }

    // 获取 AMP 广告统计
    getAMPAdStats() {
        return {
            totalAMPAds: this.adHistory.length,
            adHistory: this.adHistory
        };
    }
}

// 初始化 AMP 广告管理器
window.ampAdManager = new AMPAdManager();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AMPAdManager;
}
