import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Shield, AlertTriangle, CheckCircle, XCircle, RefreshCw, ExternalLink } from 'lucide-react';
import { adBlockDetector, AdBlockStrategies } from '../lib/ad-block-strategies';
import { HeaderAd, MobileAd, InlineAd, FooterAd } from '../components/AdSense';

export default function AdBlockInfo() {
  const [detectionResult, setDetectionResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showStrategies, setShowStrategies] = useState(false);

  useEffect(() => {
    const runDetection = async () => {
      setIsLoading(true);
      try {
        const result = await adBlockDetector.detectAdBlock();
        setDetectionResult(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Detection error:', error);
        setIsLoading(false);
      }
    };

    runDetection();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleShowStrategies = () => {
    setShowStrategies(true);
    AdBlockStrategies.showFriendlyMessage();
  };

  const handleShowAlternative = () => {
    AdBlockStrategies.showAlternativeContent();
  };

  const handleRequestSupport = () => {
    AdBlockStrategies.requestUserSupport();
  };

  return (
    <>
      <Head>
        <title>广告屏蔽检测 - MBTI Personality Test</title>
        <meta name="description" content="检测和应对广告屏蔽插件的工具" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Ad */}
          <HeaderAd />
          <MobileAd />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            广告屏蔽检测工具
          </h1>

          {/* 检测结果 */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-blue-500" />
              检测结果
            </h2>
            
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <RefreshCw className="h-6 w-6 animate-spin text-blue-500 mr-2" />
                <span className="text-gray-600">正在检测...</span>
              </div>
            ) : detectionResult ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    {detectionResult.isBlocked ? (
                      <XCircle className="h-5 w-5 text-red-500 mr-3" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    )}
                    <span className="font-medium">广告屏蔽状态</span>
                  </div>
                  <span className={`font-semibold ${
                    detectionResult.isBlocked ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {detectionResult.isBlocked ? '已屏蔽' : '未屏蔽'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">屏蔽插件类型</span>
                  <span className="text-gray-600 capitalize">
                    {detectionResult.blockType}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">检测置信度</span>
                  <span className="text-gray-600">
                    {Math.round(detectionResult.confidence * 100)}%
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                检测失败，请刷新页面重试
              </div>
            )}
          </div>

          {/* 应对策略 */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-yellow-500" />
              应对策略
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={handleShowStrategies}
                className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors text-left"
              >
                <div className="font-medium text-blue-800 mb-2">显示友好提示</div>
                <div className="text-sm text-blue-600">
                  向用户显示友好的广告屏蔽提示信息
                </div>
              </button>

              <button
                onClick={handleShowAlternative}
                className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors text-left"
              >
                <div className="font-medium text-green-800 mb-2">替代内容</div>
                <div className="text-sm text-green-600">
                  在广告位置显示替代内容
                </div>
              </button>

              <button
                onClick={handleRequestSupport}
                className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors text-left"
              >
                <div className="font-medium text-purple-800 mb-2">请求支持</div>
                <div className="text-sm text-purple-600">
                  显示支持请求弹窗
                </div>
              </button>

              <button
                onClick={handleRefresh}
                className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors text-left"
              >
                <div className="font-medium text-gray-800 mb-2">刷新页面</div>
                <div className="text-sm text-gray-600">
                  重新加载页面进行检测
                </div>
              </button>
            </div>
          </div>

          {/* Inline Ad */}
          <InlineAd />

          {/* 用户指南 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">用户指南</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">如何将网站添加到白名单</h3>
                <div className="text-sm text-blue-700 space-y-2">
                  <p><strong>AdBlock Plus:</strong> 点击扩展图标 → 设置 → 白名单 → 添加网站</p>
                  <p><strong>uBlock Origin:</strong> 点击扩展图标 → 关闭此网站的屏蔽</p>
                  <p><strong>AdBlock:</strong> 点击扩展图标 → 设置 → 白名单 → 添加网站</p>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">为什么需要广告支持</h3>
                <div className="text-sm text-green-700">
                  <p>我们的服务依赖广告收入来保持免费。广告收入帮助我们：</p>
                  <ul className="mt-2 space-y-1">
                    <li>• 维护服务器和基础设施</li>
                    <li>• 持续改进用户体验</li>
                    <li>• 开发新功能</li>
                    <li>• 保持服务免费</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">替代支持方式</h3>
                <div className="text-sm text-yellow-700">
                  <p>如果您不想看到广告，可以考虑：</p>
                  <ul className="mt-2 space-y-1">
                    <li>• 一次性捐赠支持我们</li>
                    <li>• 分享我们的网站给朋友</li>
                    <li>• 在社交媒体上推荐我们</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Ad */}
          <FooterAd />
        </div>
      </div>
    </>
  );
}
