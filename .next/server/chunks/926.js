"use strict";
exports.id = 926;
exports.ids = [926];
exports.modules = {

/***/ 1926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AdBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_ads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4525);



function AdBanner({ adUnitId ="ca-pub-4198974976257818" , size ="banner" , className =""  }) {
    const adRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: isClient , 1: setIsClient  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsClient(true);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isClient) return;
        if (!_lib_ads__WEBPACK_IMPORTED_MODULE_2__/* .adGateUtils.hasConsent */ .$f.hasConsent()) return;
        const loadAd = async ()=>{
            try {
                await _lib_ads__WEBPACK_IMPORTED_MODULE_2__/* .adGateUtils.showAd */ .$f.showAd();
                // 创建广告元素
                if (adRef.current) {
                    adRef.current.innerHTML = `
            <div class="ad-container bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div class="text-gray-500 text-sm mb-2">Advertisement</div>
              <div class="text-gray-400 text-xs">
                AdSense Ad Unit: ${adUnitId}
              </div>
            </div>
          `;
                }
            } catch (error) {
                console.warn("Ad loading failed:", error);
            }
        };
        loadAd();
    }, [
        isClient,
        adUnitId
    ]);
    const getSizeClass = ()=>{
        switch(size){
            case "banner":
                return "w-full h-32";
            case "rectangle":
                return "w-80 h-60";
            case "leaderboard":
                return "w-full h-24";
            default:
                return "w-full h-32";
        }
    };
    if (!isClient || !_lib_ads__WEBPACK_IMPORTED_MODULE_2__/* .adGateUtils.hasConsent */ .$f.hasConsent()) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: adRef,
        className: `${getSizeClass()} ${className}`,
        "data-ad-unit": adUnitId
    });
}


/***/ }),

/***/ 4525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$f": () => (/* binding */ adGateUtils)
/* harmony export */ });
/* unused harmony exports DEFAULT_AD_CONFIG, DEFAULT_AD_GATE_CONFIG, AdManager, adManager, useAdGate */
// 现代化的广告管理系统 - Next.js 框架集成
// 扩展 Window 接口以支持 Google AdSense
// 默认广告配置
const DEFAULT_AD_CONFIG = {
    enabled: true,
    provider: "google-adsense",
    settings: {
        adUnitId: "ca-pub-4198974976257818",
        publisherId: "pub-4198974976257818",
        testMode: "production" === "development"
    }
};
// 广告门槛配置
const DEFAULT_AD_GATE_CONFIG = {
    duration: 10,
    showSkipButton: false,
    adContent: {
        title: "Your result unlocks after a brief message",
        description: "We keep tests free by showing a short sponsorship message.",
        sponsorMessage: "Thank you for supporting our free personality tests!"
    }
};
// 广告管理器类
class AdManager {
    isInitialized = false;
    constructor(config = DEFAULT_AD_CONFIG){
        this.config = config;
    }
    // 初始化广告系统
    async initialize() {
        if (this.isInitialized) return true;
        try {
            if (this.config.enabled && this.config.provider === "google-adsense") {
                await this.loadGoogleAdSense();
            }
            this.isInitialized = true;
            return true;
        } catch (error) {
            console.warn("Ad system initialization failed, using fallback:", error);
            this.config.provider = "fallback";
            this.isInitialized = true;
            return true;
        }
    }
    // 加载 Google AdSense
    async loadGoogleAdSense() {
        return new Promise((resolve, reject)=>{
            if (true) {
                reject(new Error("Window object not available"));
                return;
            }
            // 检查是否已加载
            if (window.adsbygoogle) {
                resolve();
                return;
            }
            const script = document.createElement("script");
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.config.settings.adUnitId}`;
            script.async = true;
            script.crossOrigin = "anonymous";
            script.onload = ()=>resolve();
            script.onerror = ()=>reject(new Error("Failed to load Google AdSense"));
            document.head.appendChild(script);
        });
    }
    // 显示广告
    async showAd() {
        if (!this.isInitialized) {
            await this.initialize();
        }
        if (this.config.provider === "google-adsense") {
            await this.showGoogleAd();
        } else {
            await this.showFallbackAd();
        }
    }
    // 显示 Google AdSense 广告
    async showGoogleAd() {
        if (true) return;
        try {
            // 推送广告到队列
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.warn("Google AdSense failed, falling back:", error);
            await this.showFallbackAd();
        }
    }
    // 显示备用广告
    async showFallbackAd() {
        // 模拟广告显示时间
        return new Promise((resolve)=>{
            setTimeout(resolve, 2000);
        });
    }
    // 检查用户同意
    hasUserConsent() {
        if (true) return false;
        return localStorage.getItem("adsConsent") === "accepted";
    }
    // 设置用户同意
    setUserConsent(consent) {
        if (true) return;
        localStorage.setItem("adsConsent", consent ? "accepted" : "declined");
    }
}
// 全局广告管理器实例
const adManager = new AdManager();
// 广告门槛 Hook - 需要在 React 组件中使用
function useAdGate(config = {}) {
    const finalConfig = {
        ...DEFAULT_AD_GATE_CONFIG,
        ...config
    };
    return {
        config: finalConfig,
        showAd: async ()=>{
            await adManager.showAd();
        },
        hasConsent: ()=>adManager.hasUserConsent(),
        setConsent: (consent)=>adManager.setUserConsent(consent)
    };
}
// 非 Hook 版本的广告管理函数
const adGateUtils = {
    showAd: async ()=>{
        await adManager.showAd();
    },
    hasConsent: ()=>adManager.hasUserConsent(),
    setConsent: (consent)=>adManager.setUserConsent(consent)
};


/***/ })

};
;