// Production-safe ad configuration
// This file should be used to manage ad settings securely

export const AD_CONFIG = {
  // Production settings
  production: {
    enabled: false,
    provider: 'google-adsense',
    settings: {
      testMode: false,
      debugMode: false
    }
  },
  
  // Development settings
  development: {
    enabled: false,
    provider: 'fallback',
    settings: {
      testMode: true,
      debugMode: true
    }
  }
};

// Get current environment config
export function getAdConfig() {
  const isProduction = process.env.NODE_ENV === 'production';
  return isProduction ? AD_CONFIG.production : AD_CONFIG.development;
}

// Security: Never log sensitive information
export function sanitizeAdUnitId(adUnitId: string): string {
  if (process.env.NODE_ENV === 'development') {
    return adUnitId; // Show full ID in development
  }
  
  // In production, only show first and last few characters
  if (adUnitId.length > 8) {
    return `${adUnitId.substring(0, 4)}...${adUnitId.substring(adUnitId.length - 4)}`;
  }
  
  return '***';
}
