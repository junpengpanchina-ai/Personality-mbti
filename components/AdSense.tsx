import { useEffect } from 'react';

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
  useEffect(() => {
    try {
      // 确保 adsbygoogle 存在
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins 
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-4198974976257818"
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
