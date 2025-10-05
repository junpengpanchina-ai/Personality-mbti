// Modern ad management system - Next.js framework integration

// Extend Window interface to support Google AdSense
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

// Default ad configuration
export const DEFAULT_AD_CONFIG: AdConfig = {
  enabled: true,
  provider: 'google-adsense',
  settings: {
    adUnitId: 'ca-pub-4198974976257818',
    publisherId: 'pub-4198974976257818',
    testMode: process.env.NODE_ENV === 'development'
  }
};

// Ad gate configuration
export const DEFAULT_AD_GATE_CONFIG: AdGateConfig = {
  duration: 10,
  showSkipButton: false, // Ensure ad revenue model
  adContent: {
    title: 'Your result unlocks after a brief message',
    description: 'We keep tests free by showing a short sponsorship message.',
    sponsorMessage: 'Thank you for supporting our free personality tests!'
  }
};

// Ad manager class
export class AdManager {
  private config: AdConfig;
  private isInitialized: boolean = false;

  constructor(config: AdConfig = DEFAULT_AD_CONFIG) {
    this.config = config;
  }

  // Initialize ad system
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

  // Load Google AdSense
  private async loadGoogleAdSense(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        reject(new Error('Window object not available'));
        return;
      }

      // Check if already loaded
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

  // Show ad
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

  // Show Google AdSense ad
  private async showGoogleAd(): Promise<void> {
    if (typeof window === 'undefined') return;

    try {
      // Push ad to queue
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.warn('Google AdSense failed, falling back:', error);
      await this.showFallbackAd();
    }
  }

  // Show fallback ad
  private async showFallbackAd(): Promise<void> {
    // Simulate ad display time
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }

  // Check user consent
  hasUserConsent(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('adsConsent') === 'accepted';
  }

  // Set user consent
  setUserConsent(consent: boolean): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('adsConsent', consent ? 'accepted' : 'declined');
  }
}

// Global ad manager instance
export const adManager = new AdManager();

// Ad gate Hook - must be used in React components
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

// Non-Hook version of ad management functions
export const adGateUtils = {
  showAd: async () => {
    await adManager.showAd();
  },
  hasConsent: () => adManager.hasUserConsent(),
  setConsent: (consent: boolean) => adManager.setUserConsent(consent)
};
