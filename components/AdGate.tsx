import { useState, useEffect } from 'react';
import { X, Clock, Shield } from 'lucide-react';
import { adGateUtils } from '../lib/ads';

interface AdGateProps {
  onComplete: () => void;
  duration?: number;
  showSkipButton?: boolean;
}

export default function AdGate({ 
  onComplete, 
  duration = 10, 
  showSkipButton = false 
}: AdGateProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isVisible, setIsVisible] = useState(true);
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    // Check user consent
    if (!adGateUtils.hasConsent()) {
      adGateUtils.setConsent(true); // Auto-consent to ensure ad revenue
    }

    // Show ad
    adGateUtils.showAd().then(() => {
      setIsAdLoaded(true);
    });

    // Countdown
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [timeLeft, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold">MBTI Personality Test</h3>
                <p className="text-xs opacity-90">Sponsored Content</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Your result unlocks after a brief message
          </h4>
          
          <div className="text-4xl font-bold text-indigo-600 mb-4">
            {timeLeft}
          </div>
          
          <p className="text-sm text-gray-600 mb-6">
            We keep tests free by showing a short sponsorship message.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${((duration - timeLeft) / duration) * 100}%` }}
            ></div>
          </div>

          {/* 广告状态指示器 */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className={`w-2 h-2 rounded-full ${isAdLoaded ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <span className="text-xs text-gray-500">
              {isAdLoaded ? 'Ad loaded' : 'Loading ad...'}
            </span>
          </div>

          {/* 广告收入模式 - 不允许跳过 */}
          <p className="text-xs text-gray-500">
            Please wait for the message to complete to view your results
          </p>
        </div>
      </div>
    </div>
  );
}

