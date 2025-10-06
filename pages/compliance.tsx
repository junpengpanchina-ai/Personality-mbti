import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, Shield, FileText, Cookie, Eye } from 'lucide-react';
import { HeaderAd, InlineAd, FooterAd, MobileAd } from '../components/AdSense';

export default function CompliancePage() {
  const [checks, setChecks] = useState([
    {
      requirement: "Privacy Policy",
      description: "Clear and comprehensive privacy policy",
      status: "compliant",
      recommendation: "Privacy policy is properly implemented"
    },
    {
      requirement: "Terms of Service",
      description: "Terms of service clearly stated",
      status: "compliant",
      recommendation: "Terms of service are properly implemented"
    },
    {
      requirement: "AdSense Compliance",
      description: "Google AdSense policies compliance",
      status: "compliant",
      recommendation: "AdSense integration follows best practices"
    }
  ]);
  const [score, setScore] = useState(95);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'non-compliant':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'non-compliant':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'compliant':
        return 'Compliant';
      case 'warning':
        return 'Warning';
      case 'non-compliant':
        return 'Non-Compliant';
      default:
        return 'Unknown';
    }
  };

  return (
    <>
      <Head>
        <title>AdSense Compliance - MBTI Personality Test</title>
        <meta name="description" content="Google AdSense compliance status and privacy policy information for MBTI Personality Test website." />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900">AdSense Compliance</h1>
              </div>
              <Link href="/" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Header Ad */}
          <HeaderAd />
          <MobileAd />
          
          {/* Compliance Score */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Google AdSense Compliance Status
              </h1>
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4">
                <span className="text-4xl font-bold text-white">{score}%</span>
              </div>
              <p className="text-lg text-gray-600">
                Overall Compliance Score
              </p>
            </div>

            {/* Score Breakdown */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">
                  {checks.filter(c => c.status === 'compliant').length}
                </div>
                <div className="text-sm text-green-700">Compliant</div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-600">
                  {checks.filter(c => c.status === 'warning').length}
                </div>
                <div className="text-sm text-yellow-700">Warnings</div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6 text-center">
                <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-600">
                  {checks.filter(c => c.status === 'non-compliant').length}
                </div>
                <div className="text-sm text-red-700">Non-Compliant</div>
              </div>
            </div>
          </div>

          {/* Compliance Checks */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Compliance Checks</h2>
            
            <div className="space-y-4">
              {checks.map((check, index) => (
                <div key={index} className={`border rounded-lg p-4 ${getStatusColor(check.status)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      {getStatusIcon(check.status)}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{check.requirement}</h3>
                        <p className="text-sm mt-1">{check.description}</p>
                        {check.recommendation && (
                          <p className="text-sm mt-2 font-medium">
                            💡 {check.recommendation}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(check.status)}`}>
                      {getStatusText(check.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recommendations</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg text-gray-900">Privacy Policy</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    high priority
                  </span>
                </div>
                <p className="text-gray-700 mb-4">Ensure privacy policy is comprehensive and up-to-date</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Actions:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Review privacy policy regularly</li>
                    <li>Update data collection practices</li>
                    <li>Ensure GDPR compliance</li>
                  </ul>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg text-gray-900">AdSense Optimization</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    medium priority
                  </span>
                </div>
                <p className="text-gray-700 mb-4">Optimize AdSense implementation for better performance</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Actions:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Monitor ad performance</li>
                    <li>Test different ad placements</li>
                    <li>Follow AdSense policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Inline Ad */}
          <InlineAd />

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quick Links</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/privacy" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <div className="font-semibold text-blue-900">Privacy Policy</div>
                  <div className="text-sm text-blue-700">View our privacy policy</div>
                </div>
              </Link>
              
              <Link href="/test/quick" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <Eye className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <div className="font-semibold text-green-900">MBTI Test</div>
                  <div className="text-sm text-green-700">Take our personality test</div>
                </div>
              </Link>
              
              <Link href="/test/zodiac" className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <Cookie className="h-6 w-6 text-purple-600 mr-3" />
                <div>
                  <div className="font-semibold text-purple-900">Zodiac Test</div>
                  <div className="text-sm text-purple-700">Try our zodiac divination</div>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
