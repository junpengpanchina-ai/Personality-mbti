import { HeaderAd, MobileAd, InlineAd, FooterAd } from './AdSense';

interface GlobalAdLayoutProps {
  children: React.ReactNode;
  showHeaderAd?: boolean;
  showMobileAd?: boolean;
  showInlineAd?: boolean;
  showFooterAd?: boolean;
  inlineAdPosition?: 'top' | 'middle' | 'bottom';
}

export default function GlobalAdLayout({ 
  children, 
  showHeaderAd = true, 
  showMobileAd = true, 
  showInlineAd = true, 
  showFooterAd = true,
  inlineAdPosition = 'middle'
}: GlobalAdLayoutProps) {
  return (
    <>
      {/* Header Ads */}
      {showHeaderAd && (
        <>
          <HeaderAd />
          <MobileAd />
        </>
      )}
      
      {/* Top Inline Ad */}
      {showInlineAd && inlineAdPosition === 'top' && <InlineAd />}
      
      {/* Main Content */}
      {children}
      
      {/* Middle Inline Ad */}
      {showInlineAd && inlineAdPosition === 'middle' && <InlineAd />}
      
      {/* Bottom Inline Ad */}
      {showInlineAd && inlineAdPosition === 'bottom' && <InlineAd />}
      
      {/* Footer Ads */}
      {showFooterAd && <FooterAd />}
    </>
  );
}
