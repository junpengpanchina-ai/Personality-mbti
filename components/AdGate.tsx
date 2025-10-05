import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface AdGateProps {
  onComplete: () => void;
  duration?: number;
}

export default function AdGate({ onComplete, duration = 10 }: AdGateProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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
                <span className="text-sm font-bold">🧠</span>
              </div>
              <div>
                <h3 className="font-semibold">Personality MBTI</h3>
                <p className="text-xs opacity-90">Sponsorship</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
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

          {/* Skip Button (Optional) */}
          {timeLeft > 5 && (
            <button
              onClick={() => {
                setTimeLeft(0);
                onComplete();
              }}
              className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
            >
              Skip to Results
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
