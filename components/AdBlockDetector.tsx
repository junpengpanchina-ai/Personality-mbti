import { useState, useEffect } from 'react';
import { AlertTriangle, X, RefreshCw } from 'lucide-react';

interface AdBlockDetectorProps {
  onAdBlockDetected?: () => void;
  onAdBlockRemoved?: () => void;
}

export default function AdBlockDetector({ 
  onAdBlockDetected, 
  onAdBlockRemoved 
}: AdBlockDetectorProps) {
  const [isAdBlocked, setIsAdBlocked] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [detectionCount, setDetectionCount] = useState(0);

  useEffect(() => {
    const detectAdBlock = () => {
      // 创建测试广告元素
      const testAd = document.createElement('div');
      testAd.innerHTML = '&nbsp;';
      testAd.className = 'adsbox';
      testAd.style.cssText = 'position:absolute;left:-10000px;top:-1000px;width:1px;height:1px;';
      
      document.body.appendChild(testAd);
      
      // 检查广告是否被屏蔽
      const isBlocked = testAd.offsetHeight === 0 || 
                       testAd.offsetWidth === 0 || 
                       testAd.style.display === 'none' ||
                       testAd.style.visibility === 'hidden';
      
      document.body.removeChild(testAd);
      
      return isBlocked;
    };

    const checkAdBlock = () => {
      const blocked = detectAdBlock();
      
      if (blocked && !isAdBlocked) {
        setIsAdBlocked(true);
        setShowBanner(true);
        setDetectionCount(prev => prev + 1);
        onAdBlockDetected?.();
      } else if (!blocked && isAdBlocked) {
        setIsAdBlocked(false);
        setShowBanner(false);
        onAdBlockRemoved?.();
      }
    };

    // 初始检测
    checkAdBlock();

    // 定期检测（每30秒）
    const interval = setInterval(checkAdBlock, 30000);

    // 监听页面可见性变化
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkAdBlock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isAdBlocked, onAdBlockDetected, onAdBlockRemoved]);

  const handleDismiss = () => {
    setShowBanner(false);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  if (!showBanner || !isAdBlocked) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">💝</div>
            <div className="text-sm">
              <p className="font-semibold text-gray-800 mb-1">
                亲爱的朋友，我们想和您说句心里话...
              </p>
              <p className="text-gray-700 leading-relaxed">
                我们是一个小团队，没有会员费，全靠广告收入维持运营。每次您使用我们的服务，
                <span className="font-medium text-indigo-600">广告收入就是我们的"工资"</span>。
                请考虑将我们添加到白名单，让我们能继续为您提供免费服务 ❤️
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              重新检测
            </button>
            <button
              onClick={handleDismiss}
              className="inline-flex items-center p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
              title="关闭提示"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 广告屏蔽检测Hook
export function useAdBlockDetection() {
  const [isAdBlocked, setIsAdBlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectAdBlock = () => {
      return new Promise<boolean>((resolve) => {
        // 创建测试广告元素
        const testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox';
        testAd.style.cssText = 'position:absolute;left:-10000px;top:-1000px;width:1px;height:1px;';
        
        document.body.appendChild(testAd);
        
        // 延迟检查，确保广告屏蔽插件有时间处理
        setTimeout(() => {
          const isBlocked = testAd.offsetHeight === 0 || 
                           testAd.offsetWidth === 0 || 
                           testAd.style.display === 'none' ||
                           testAd.style.visibility === 'hidden';
          
          document.body.removeChild(testAd);
          resolve(isBlocked);
        }, 100);
      });
    };

    const checkAdBlock = async () => {
      try {
        const blocked = await detectAdBlock();
        setIsAdBlocked(blocked);
      } catch (error) {
        console.error('Ad block detection error:', error);
        setIsAdBlocked(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdBlock();
  }, []);

  return { isAdBlocked, isLoading };
}
