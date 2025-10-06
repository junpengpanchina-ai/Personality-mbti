import { useState, useEffect } from 'react';
import Head from 'next/head';
import { CheckCircle, XCircle, AlertCircle, ExternalLink } from 'lucide-react';

interface DiagnosisResult {
  test: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  details?: string;
}

export default function AdSenseDiagnosis() {
  const [results, setResults] = useState<DiagnosisResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    runDiagnosis();
  }, []);

  const runDiagnosis = async () => {
    const diagnosisResults: DiagnosisResult[] = [];
    
    // 1. 检查 ads.txt 文件
    try {
      const response = await fetch('/ads.txt');
      if (response.ok) {
        const content = await response.text();
        if (content.includes('google.com') && content.includes('pub-4198974976257818')) {
          diagnosisResults.push({
            test: 'ads.txt 文件可访问',
            status: 'pass',
            message: 'ads.txt 文件正常，AdSense 可以抓取',
            details: `内容: ${content.trim()}`
          });
        } else {
          diagnosisResults.push({
            test: 'ads.txt 文件内容',
            status: 'fail',
            message: 'ads.txt 文件内容不正确',
            details: `实际内容: ${content.trim()}`
          });
        }
      } else {
        diagnosisResults.push({
          test: 'ads.txt 文件可访问',
          status: 'fail',
          message: `ads.txt 文件无法访问 (状态码: ${response.status})`,
          details: 'AdSense 无法验证您的网站'
        });
      }
    } catch (error) {
      diagnosisResults.push({
        test: 'ads.txt 文件可访问',
        status: 'fail',
        message: 'ads.txt 文件访问失败',
        details: `错误: ${error}`
      });
    }

    // 2. 检查 Content-Type
    try {
      const response = await fetch('/ads.txt');
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('text/plain')) {
        diagnosisResults.push({
          test: 'Content-Type 正确',
          status: 'pass',
          message: 'ads.txt 返回正确的 Content-Type',
          details: `Content-Type: ${contentType}`
        });
      } else {
        diagnosisResults.push({
          test: 'Content-Type 正确',
          status: 'fail',
          message: 'ads.txt Content-Type 不正确',
          details: `实际 Content-Type: ${contentType}`
        });
      }
    } catch (error) {
      diagnosisResults.push({
        test: 'Content-Type 正确',
        status: 'fail',
        message: '无法检查 Content-Type',
        details: `错误: ${error}`
      });
    }

    // 3. 检查缓存头
    try {
      const response = await fetch('/ads.txt');
      const cacheControl = response.headers.get('cache-control');
      if (cacheControl) {
        diagnosisResults.push({
          test: '缓存配置',
          status: 'pass',
          message: 'ads.txt 有缓存配置',
          details: `Cache-Control: ${cacheControl}`
        });
      } else {
        diagnosisResults.push({
          test: '缓存配置',
          status: 'warning',
          message: 'ads.txt 缺少缓存配置',
          details: '建议添加适当的缓存头'
        });
      }
    } catch (error) {
      diagnosisResults.push({
        test: '缓存配置',
        status: 'fail',
        message: '无法检查缓存配置',
        details: `错误: ${error}`
      });
    }

    // 4. 检查 AdSense 脚本加载
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        diagnosisResults.push({
          test: 'AdSense 脚本',
          status: 'pass',
          message: 'AdSense 脚本已加载',
          details: 'Google AdSense 脚本正常工作'
        });
      } else {
        diagnosisResults.push({
          test: 'AdSense 脚本',
          status: 'warning',
          message: 'AdSense 脚本未加载',
          details: '可能需要等待页面完全加载'
        });
      }
    } catch (error) {
      diagnosisResults.push({
        test: 'AdSense 脚本',
        status: 'fail',
        message: 'AdSense 脚本检查失败',
        details: `错误: ${error}`
      });
    }

    setResults(diagnosisResults);
    setIsLoading(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'fail':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
        return 'bg-green-50 border-green-200';
      case 'fail':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <>
      <Head>
        <title>AdSense 诊断工具 - MBTI Personality Test</title>
        <meta name="description" content="诊断 AdSense 配置和 ads.txt 文件状态" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              🔍 AdSense 诊断工具
            </h1>
            <p className="text-lg text-gray-600">
              检查您的 AdSense 配置和 ads.txt 文件状态
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-600">正在运行诊断...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg border-2 ${getStatusColor(result.status)}`}
                  >
                    <div className="flex items-start space-x-4">
                      {getStatusIcon(result.status)}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {result.test}
                        </h3>
                        <p className="text-gray-700 mb-2">
                          {result.message}
                        </p>
                        {result.details && (
                          <p className="text-sm text-gray-500 font-mono bg-gray-100 p-2 rounded">
                            {result.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                📋 诊断说明
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li>• <strong>ads.txt 文件</strong>: AdSense 需要能够访问此文件来验证您的网站</li>
                <li>• <strong>Content-Type</strong>: 必须是 text/plain 格式</li>
                <li>• <strong>缓存配置</strong>: 适当的缓存可以提高性能</li>
                <li>• <strong>AdSense 脚本</strong>: 确保 Google AdSense 脚本正确加载</li>
              </ul>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={runDiagnosis}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                重新诊断
              </button>
              <a
                href="https://www.google.com/adsense/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>AdSense 控制台</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
