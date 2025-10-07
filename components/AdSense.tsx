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
      if (typeof window !== 'undefined' && (window as any).adsbygoogle && adConfig.enabled) {
        // 禁用自动广告，只使用手动配置的广告单元
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({
          google_ad_client: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "ca-pub-4198974976257818",
          enable_page_level_ads: false
        });
        
        // 调试信息
        console.log('AdSense initialized:', {
          enabled: adConfig.enabled,
          publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "ca-pub-4198974976257818",
          slot: slot
        });
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
    <div className={`adsense-container ${className}`}>
      <ins 
        className="adsbygoogle"
        style={style}
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
    <div className="w-full mb-6">
      <AdSense 
        className="text-center"
        style={{ display: 'block', width: '100%', height: '90px' }}
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
        style={{ display: 'block', width: '100%', height: '90px' }}
        format="horizontal"
      />
    </div>
  );
}

export function FooterAd() {
  return (
    <div className="w-full mt-6">
      <AdSense 
        className="text-center"
        style={{ display: 'block', width: '100%', height: '90px' }}
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
