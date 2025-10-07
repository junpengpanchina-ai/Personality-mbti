// 广告屏蔽检测和应对策略

export interface AdBlockDetectionResult {
  isBlocked: boolean;
  blockType: 'adblock' | 'ublock' | 'adblockplus' | 'privacy-badger' | 'unknown';
  confidence: number;
}

export class AdBlockDetector {
  private static instance: AdBlockDetector;
  private callbacks: Array<(result: AdBlockDetectionResult) => void> = [];
  private isDetecting = false;

  static getInstance(): AdBlockDetector {
    if (!AdBlockDetector.instance) {
      AdBlockDetector.instance = new AdBlockDetector();
    }
    return AdBlockDetector.instance;
  }

  // 多种检测方法
  async detectAdBlock(): Promise<AdBlockDetectionResult> {
    if (this.isDetecting) {
      return { isBlocked: false, blockType: 'unknown', confidence: 0 };
    }

    this.isDetecting = true;

    try {
      const results = await Promise.all([
        this.detectByTestElement(),
        this.detectByScriptBlocking(),
        this.detectByNetworkRequest(),
        this.detectByDOMChanges()
      ]);

      const blockedCount = results.filter(r => r.isBlocked).length;
      const isBlocked = blockedCount >= 2; // 至少2种方法检测到屏蔽

      const result: AdBlockDetectionResult = {
        isBlocked,
        blockType: this.identifyBlockType(),
        confidence: blockedCount / results.length
      };

      this.notifyCallbacks(result);
      return result;
    } finally {
      this.isDetecting = false;
    }
  }

  // 方法1: 测试元素检测
  private async detectByTestElement(): Promise<{ isBlocked: boolean }> {
    return new Promise((resolve) => {
      const testAd = document.createElement('div');
      testAd.innerHTML = '&nbsp;';
      testAd.className = 'adsbox';
      testAd.style.cssText = 'position:absolute;left:-10000px;top:-1000px;width:1px;height:1px;';
      
      document.body.appendChild(testAd);
      
      setTimeout(() => {
        const isBlocked = testAd.offsetHeight === 0 || 
                         testAd.offsetWidth === 0 || 
                         testAd.style.display === 'none' ||
                         testAd.style.visibility === 'hidden';
        
        document.body.removeChild(testAd);
        resolve({ isBlocked });
      }, 100);
    });
  }

  // 方法2: 脚本阻止检测
  private async detectByScriptBlocking(): Promise<{ isBlocked: boolean }> {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.onload = () => resolve({ isBlocked: false });
      script.onerror = () => resolve({ isBlocked: true });
      
      document.head.appendChild(script);
      
      setTimeout(() => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        resolve({ isBlocked: true });
      }, 2000);
    });
  }

  // 方法3: 网络请求检测
  private async detectByNetworkRequest(): Promise<{ isBlocked: boolean }> {
    try {
      const response = await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
        method: 'HEAD',
        mode: 'no-cors'
      });
      return { isBlocked: false };
    } catch (error) {
      return { isBlocked: true };
    }
  }

  // 方法4: DOM变化检测
  private async detectByDOMChanges(): Promise<{ isBlocked: boolean }> {
    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.removedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                if (element.classList.contains('adsbygoogle') || 
                    element.classList.contains('adsense-container')) {
                  resolve({ isBlocked: true });
                }
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      setTimeout(() => {
        observer.disconnect();
        resolve({ isBlocked: false });
      }, 1000);
    });
  }

  // 识别屏蔽插件类型
  private identifyBlockType(): AdBlockDetectionResult['blockType'] {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (window.navigator.userAgent.includes('AdBlock')) {
      return 'adblock';
    }
    
    if (window.navigator.userAgent.includes('uBlock')) {
      return 'ublock';
    }
    
    if (window.navigator.userAgent.includes('AdBlockPlus')) {
      return 'adblockplus';
    }
    
    if (window.navigator.userAgent.includes('Privacy Badger')) {
      return 'privacy-badger';
    }
    
    return 'unknown';
  }

  // 注册回调
  onDetection(callback: (result: AdBlockDetectionResult) => void): void {
    this.callbacks.push(callback);
  }

  // 通知所有回调
  private notifyCallbacks(result: AdBlockDetectionResult): void {
    this.callbacks.forEach(callback => {
      try {
        callback(result);
      } catch (error) {
        console.error('Ad block detection callback error:', error);
      }
    });
  }
}

// 广告屏蔽应对策略
export class AdBlockStrategies {
  // 策略1: 显示友好提示
  static showFriendlyMessage(): void {
    const message = document.createElement('div');
    message.className = 'ad-block-message';
    message.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        text-align: center;
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        animation: slideDown 0.5s ease-out;
      ">
        <div style="max-width: 900px; margin: 0 auto;">
          <div style="font-size: 32px; margin-bottom: 15px;">💝</div>
          <h3 style="margin: 0 0 15px 0; font-size: 20px; font-weight: 600; line-height: 1.4;">
            亲爱的朋友，我们想和您说句心里话...
          </h3>
          <p style="margin: 0 0 15px 0; font-size: 16px; opacity: 0.95; line-height: 1.6;">
            我们是一个小团队，没有会员费，全靠广告收入维持运营。
            <span style="font-weight: 600; color: #ffd700;">每次您使用我们的服务，广告收入就是我们的"工资"</span>。
          </p>
          <p style="margin: 0; font-size: 14px; opacity: 0.9;">
            请考虑将我们添加到白名单，让我们能继续为您提供免费服务 ❤️
            <a href="/donate" style="color: #ffd700; text-decoration: none; font-weight: 600; margin-left: 8px;">
              或支持我们
            </a>
          </p>
        </div>
      </div>
      <style>
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      </style>
    `;
    
    document.body.appendChild(message);
    
    // 5秒后自动隐藏
    setTimeout(() => {
      if (message.parentNode) {
        message.parentNode.removeChild(message);
      }
    }, 5000);
  }

  // 策略2: 延迟加载内容
  static delayContentLoading(delay: number = 3000): void {
    const content = document.querySelector('.main-content') as HTMLElement;
    if (content) {
      content.style.opacity = '0.3';
      content.style.transition = 'opacity 0.3s ease';
      
      setTimeout(() => {
        content.style.opacity = '1';
      }, delay);
    }
  }

  // 策略3: 显示替代内容
  static showAlternativeContent(): void {
    const adContainers = document.querySelectorAll('.adsense-container');
    adContainers.forEach((container, index) => {
      if (container.querySelector('.adsbygoogle')) {
        container.innerHTML = `
          <div style="
            background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%);
            border: 2px dashed #667eea;
            border-radius: 12px;
            padding: 25px;
            text-align: center;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.1);
            animation: pulse 2s infinite;
          ">
            <div style="font-size: 32px; margin-bottom: 15px;">💝</div>
            <div style="font-weight: 600; margin-bottom: 8px; color: #333; font-size: 16px;">
              亲爱的朋友，这里是我们的"工资"来源
            </div>
            <div style="font-size: 14px; color: #666; line-height: 1.5; margin-bottom: 10px;">
              我们是一个小团队，没有会员费，全靠广告收入维持运营
            </div>
            <div style="font-size: 12px; color: #888; opacity: 0.8;">
              请考虑将我们添加到白名单 ❤️
            </div>
          </div>
          <style>
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.02); }
            }
          </style>
        `;
      }
    });
  }

  // 策略4: 请求用户支持
  static requestUserSupport(): void {
    const supportModal = document.createElement('div');
    supportModal.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        animation: fadeIn 0.3s ease-out;
      ">
        <div style="
          background: white;
          border-radius: 16px;
          padding: 40px;
          max-width: 600px;
          margin: 20px;
          text-align: center;
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
          animation: scaleIn 0.3s ease-out;
        ">
          <div style="font-size: 64px; margin-bottom: 25px;">💝</div>
          <h2 style="margin: 0 0 20px 0; color: #333; font-size: 28px; font-weight: 600; line-height: 1.3;">
            亲爱的朋友，我们想和您说句心里话...
          </h2>
          <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%); border-radius: 12px; padding: 20px; margin: 20px 0;">
            <p style="margin: 0 0 15px 0; color: #555; font-size: 16px; line-height: 1.6;">
              <strong>我们是一个小团队</strong>，没有会员费，全靠广告收入维持运营。
            </p>
            <p style="margin: 0; color: #666; font-size: 15px; line-height: 1.5;">
              每次您使用我们的服务，<span style="color: #667eea; font-weight: 600;">广告收入就是我们的"工资"</span>。
              请考虑将我们添加到白名单，让我们能继续为您提供免费服务 ❤️
            </p>
          </div>
          <div style="display: flex; gap: 15px; justify-content: center; margin-top: 30px;">
            <button onclick="this.closest('.support-modal').remove()" style="
              background: #f8f9fa;
              border: 2px solid #e9ecef;
              padding: 12px 24px;
              border-radius: 8px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 500;
              color: #666;
              transition: all 0.2s ease;
            " onmouseover="this.style.background='#e9ecef'" onmouseout="this.style.background='#f8f9fa'">
              稍后再说
            </button>
            <button onclick="window.location.href='/donate'" style="
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 8px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 600;
              box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
              transition: all 0.2s ease;
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.3)'">
              💝 支持我们
            </button>
          </div>
        </div>
      </div>
      <style>
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      </style>
    `;
    
    supportModal.className = 'support-modal';
    document.body.appendChild(supportModal);
  }
}

// 导出单例实例
export const adBlockDetector = AdBlockDetector.getInstance();
