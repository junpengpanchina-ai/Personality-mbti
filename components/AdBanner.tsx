import { useEffect, useRef, useState } from 'react';
import { adGateUtils } from '../lib/ads';
import { getAdConfig, sanitizeAdUnitId } from '../lib/ads-config';

interface AdBannerProps {
  adUnitId?: string;
  size?: 'banner' | 'rectangle' | 'leaderboard';
  className?: string;
}

export default function AdBanner({ 
  adUnitId = process.env.NEXT_PUBLIC_ADSENSE_AD_UNIT_ID || 'ca-pub-4198974976257818',
  size = 'banner',
  className = ''
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    if (!adGateUtils.hasConsent()) return;

    const loadAd = async () => {
      try {
        await adGateUtils.showAd();
        
        // 创建真实的AdSense广告
        if (adRef.current) {
          const config = getAdConfig();
          const safeAdUnitId = sanitizeAdUnitId(adUnitId);
          
          // 创建AdSense广告脚本
          const script = document.createElement('script');
          script.async = true;
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
          script.setAttribute('data-ad-client', safeAdUnitId);
          
          // 创建广告容器
          const adContainer = document.createElement('ins');
          adContainer.className = 'adsbygoogle';
          adContainer.style.display = 'block';
          adContainer.setAttribute('data-ad-client', safeAdUnitId);
          adContainer.setAttribute('data-ad-slot', 'auto');
          adContainer.setAttribute('data-ad-format', 'auto');
          adContainer.setAttribute('data-full-width-responsive', 'true');
          
          adRef.current.appendChild(adContainer);
          document.head.appendChild(script);
          
          // 初始化广告
          try {
            (window as any).adsbygoogle = (window as any).adsbygoogle || [];
            (window as any).adsbygoogle.push({});
          } catch (error) {
            console.warn('AdSense initialization failed:', error);
          }
        }
      } catch (error) {
        console.warn('Ad loading failed:', error);
      }
    };

    loadAd();
  }, [isClient, adUnitId]);

  const getSizeClass = () => {
    switch (size) {
      case 'banner':
        return 'w-full h-32';
      case 'rectangle':
        return 'w-80 h-60';
      case 'leaderboard':
        return 'w-full h-24';
      default:
        return 'w-full h-32';
    }
  };

  if (!isClient || !adGateUtils.hasConsent()) {
    return null;
  }

  return (
    <div 
      ref={adRef}
      className={`${getSizeClass()} ${className}`}
      data-ad-unit={adUnitId}
    />
  );
}
