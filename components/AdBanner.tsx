import { useEffect, useRef } from 'react';
import { useAdGate } from '../lib/ads';

interface AdBannerProps {
  adUnitId?: string;
  size?: 'banner' | 'rectangle' | 'leaderboard';
  className?: string;
}

export default function AdBanner({ 
  adUnitId = 'ca-pub-4198974976257818',
  size = 'banner',
  className = ''
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const { hasConsent, showAd } = useAdGate();

  useEffect(() => {
    if (!hasConsent()) return;

    const loadAd = async () => {
      try {
        await showAd();
        
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
        console.warn('Ad loading failed:', error);
      }
    };

    loadAd();
  }, [hasConsent, showAd, adUnitId]);

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

  if (!hasConsent()) {
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
