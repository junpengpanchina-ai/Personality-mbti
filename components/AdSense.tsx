import { useEffect } from 'react';
import { getAdConfig } from '../lib/ads-config';

interface AdSenseProps {
  className?: string;
  style?: React.CSSProperties;
  slot?: string;
  format?: string;
  responsive?: boolean;
}

export default function AdSense({ 
  className = '', 
  style = { display: 'block' },
  slot = '1722980169',
  format = 'autorelaxed',
  responsive = true
}: AdSenseProps) {
  const adConfig = getAdConfig();
  
  useEffect(() => {
    try {
      // 确保 adsbygoogle 存在且广告已启用
      if (typeof window !== 'undefined' && adConfig.enabled) {
        // 等待 AdSense 脚本加载完成
        const loadAd = () => {
          try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
          } catch (e) {
            console.error('AdSense push error:', e);
          }
        };

        // 如果脚本已加载，立即执行；否则等待
        if ((window as any).adsbygoogle) {
          loadAd();
        } else {
          // 等待脚本加载
          const checkInterval = setInterval(() => {
            if ((window as any).adsbygoogle) {
              loadAd();
              clearInterval(checkInterval);
            }
          }, 100);
          
          // 5秒后停止检查
          setTimeout(() => clearInterval(checkInterval), 5000);
        }
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adConfig.enabled, slot]);

  // 如果广告未启用，返回占位符
  if (!adConfig.enabled) {
    return (
      <div className={`adsense-container ${className}`} style={{...style, backgroundColor: '#f0f0f0', border: '1px dashed #ccc'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#666'}}>
          {adConfig.settings.debugMode ? 'Ad Placeholder (Ads Disabled)' : ''}
        </div>
      </div>
    );
  }

  return (
    <div className={`adsense-container ${className}`} style={{ minHeight: style.height || 'auto', minWidth: style.width || 'auto' }}>
      <ins 
        className="adsbygoogle"
        style={{...style, display: 'block', textAlign: 'center'}}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "ca-pub-4198974976257818"}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}

// 预定义的广告位置组件
export function HeaderAd() {
  return (
    <div className="w-full mb-6 flex justify-center">
      <AdSense 
        className="text-center"
        style={{ display: 'block', width: '100%', maxWidth: '728px', minHeight: '90px', height: '90px' }}
        format="horizontal"
      />
    </div>
  );
}

export function SidebarAd() {
  return (
    <div className="w-full mb-6">
      <AdSense 
        className="text-center"
        style={{ display: 'block', width: '300px', height: '250px' }}
        format="rectangle"
      />
    </div>
  );
}

export function InlineAd() {
  return (
    <div className="w-full my-8 flex justify-center">
      <AdSense 
        className="text-center"
        style={{ display: 'block', width: '100%', maxWidth: '728px', minHeight: '90px', height: '90px' }}
        format="horizontal"
      />
    </div>
  );
}

export function FooterAd() {
  return (
    <div className="w-full mt-6 flex justify-center">
      <AdSense 
        className="text-center"
        style={{ display: 'block', width: '100%', maxWidth: '728px', minHeight: '90px', height: '90px' }}
        format="horizontal"
      />
    </div>
  );
}

export function MobileAd() {
  return (
    <div className="w-full mb-4 md:hidden">
      <AdSense 
        className="text-center"
        style={{ display: 'block', width: '100%', height: '50px' }}
        format="horizontal"
      />
    </div>
  );
}
