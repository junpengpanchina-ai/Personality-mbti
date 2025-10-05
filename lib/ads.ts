// 现代化的广告管理系统 - Next.js 框架集成

// 扩展 Window 接口以支持 Google AdSense
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export interface AdConfig {
  enabled: boolean;
  provider: 'google-adsense' | 'fallback';
  settings: {
    adUnitId?: string;
    publisherId?: string;
    testMode?: boolean;
  };
}

export interface AdGateConfig {
  duration: number;
  showSkipButton: boolean;
  adContent: {
    title: string;
    description: string;
    sponsorMessage: string;
  };
}

// 默认广告配置
export const DEFAULT_AD_CONFIG: AdConfig = {
  enabled: true,
  provider: 'google-adsense',
  settings: {
    adUnitId: 'ca-pub-4198974976257818',
    publisherId: 'pub-4198974976257818',
    testMode: process.env.NODE_ENV === 'development'
  }
};

// 广告门槛配置
export const DEFAULT_AD_GATE_CONFIG: AdGateConfig = {
  duration: 10,
  showSkipButton: false, // 确保广告收入模式
  adContent: {
    title: 'Your result unlocks after a brief message',
    description: 'We keep tests free by showing a short sponsorship message.',
    sponsorMessage: 'Thank you for supporting our free personality tests!'
  }
};

// 广告管理器类
export class AdManager {
  private config: AdConfig;
  private isInitialized: boolean = false;

  constructor(config: AdConfig = DEFAULT_AD_CONFIG) {
    this.config = config;
  }

  // 初始化广告系统
  async initialize(): Promise<boolean> {
    if (this.isInitialized) return true;

    try {
      if (this.config.enabled && this.config.provider === 'google-adsense') {
        await this.loadGoogleAdSense();
      }
      
      this.isInitialized = true;
      return true;
    } catch (error) {
      console.warn('Ad system initialization failed, using fallback:', error);
      this.config.provider = 'fallback';
      this.isInitialized = true;
      return true;
    }
  }

  // 加载 Google AdSense
  private async loadGoogleAdSense(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        reject(new Error('Window object not available'));
        return;
      }

      // 检查是否已加载
      if (window.adsbygoogle) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.config.settings.adUnitId}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google AdSense'));
      
      document.head.appendChild(script);
    });
  }

  // 显示广告
  async showAd(): Promise<void> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    if (this.config.provider === 'google-adsense') {
      await this.showGoogleAd();
    } else {
      await this.showFallbackAd();
    }
  }

  // 显示 Google AdSense 广告
  private async showGoogleAd(): Promise<void> {
    if (typeof window === 'undefined') return;

    try {
      // 推送广告到队列
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.warn('Google AdSense failed, falling back:', error);
      await this.showFallbackAd();
    }
  }

  // 显示备用广告
  private async showFallbackAd(): Promise<void> {
    // 模拟广告显示时间
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }

  // 检查用户同意
  hasUserConsent(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('adsConsent') === 'accepted';
  }

  // 设置用户同意
  setUserConsent(consent: boolean): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('adsConsent', consent ? 'accepted' : 'declined');
  }
}

// 全局广告管理器实例
export const adManager = new AdManager();

// 广告门槛 Hook - 需要在 React 组件中使用
export function useAdGate(config: Partial<AdGateConfig> = {}) {
  const finalConfig = { ...DEFAULT_AD_GATE_CONFIG, ...config };
  
  return {
    config: finalConfig,
    showAd: async () => {
      await adManager.showAd();
    },
    hasConsent: () => adManager.hasUserConsent(),
    setConsent: (consent: boolean) => adManager.setUserConsent(consent)
  };
}

// 非 Hook 版本的广告管理函数
export const adGateUtils = {
  showAd: async () => {
    await adManager.showAd();
  },
  hasConsent: () => adManager.hasUserConsent(),
  setConsent: (consent: boolean) => adManager.setUserConsent(consent)
};
