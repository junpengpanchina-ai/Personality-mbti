import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ArrowLeft, Shield, Cookie, Eye, Database, Users } from 'lucide-react';
import { HeaderAd, InlineAd, FooterAd, MobileAd } from '../components/AdSense';

export default function PrivacyPolicy() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieConsent(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowCookieConsent(false);
  };

  return (
    <>
      <Head>
        <title>Privacy Policy - MBTI Personality Test</title>
        <meta name="description" content="Privacy policy for MBTI Personality Test website, including data collection, cookies, and Google AdSense compliance." />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
              </div>
              <Link href="/">
                <a className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </a>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Ad */}
          <HeaderAd />
          <MobileAd />
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-indigo-600" />
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy describes how MBTI Personality Test ("we", "our", or "us") collects, 
                uses, and protects your information when you use our website and services. We are committed 
                to protecting your privacy and ensuring compliance with applicable data protection laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website, you agree to the collection and use of information in accordance 
                with this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="h-6 w-6 mr-2 text-indigo-600" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Test responses and personality type results</li>
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system information</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Pages visited and time spent on site</li>
                    <li>Test completion rates</li>
                    <li>Navigation patterns</li>
                    <li>Error logs and performance data</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Cookie className="h-6 w-6 mr-2 text-indigo-600" />
                Cookies and Tracking Technologies
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience and provide 
                  personalized content. Our cookie usage includes:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Essential Cookies</h3>
                    <p className="text-blue-700 text-sm">
                      Required for website functionality, including test progress and results storage.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Analytics Cookies</h3>
                    <p className="text-green-700 text-sm">
                      Help us understand how users interact with our website to improve user experience.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Advertising Cookies</h3>
                    <p className="text-purple-700 text-sm">
                      Used by Google AdSense to deliver relevant advertisements and measure ad performance.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Preference Cookies</h3>
                    <p className="text-orange-700 text-sm">
                      Remember your settings and preferences for a personalized experience.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Google AdSense */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-indigo-600" />
                Google AdSense and Third-Party Advertising
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Our website uses Google AdSense to display advertisements. Google AdSense uses cookies 
                  and similar technologies to serve ads based on your visits to our site and other sites 
                  on the Internet.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Important Information</h3>
                  <ul className="list-disc list-inside text-yellow-800 space-y-2">
                    <li>Google may use your data to personalize ads</li>
                    <li>You can opt out of personalized advertising in your Google account settings</li>
                    <li>We do not control Google's data collection practices</li>
                    <li>Google's Privacy Policy applies to their services</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 mr-2 text-indigo-600" />
                How We Use Your Information
              </h2>
              
              <div className="space-y-4">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide and improve our personality testing services</li>
                  <li>Generate personalized MBTI results and insights</li>
                  <li>Analyze website usage and performance</li>
                  <li>Display relevant advertisements through Google AdSense</li>
                  <li>Ensure website security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection and Security</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the Internet is 100% secure.
                </p>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Security Measures</h3>
                  <ul className="list-disc list-inside text-green-800 space-y-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure data storage and processing</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal information</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Access and Portability</h3>
                    <ul className="list-disc list-inside text-blue-800 space-y-1 text-sm">
                      <li>Request access to your data</li>
                      <li>Receive a copy of your data</li>
                      <li>Data portability rights</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-3">Deletion and Correction</h3>
                    <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
                      <li>Request data deletion</li>
                      <li>Correct inaccurate data</li>
                      <li>Object to data processing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Inline Ad */}
            <InlineAd />

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Website:</strong> MBTI Personality Test</p>
                  <p><strong>Email:</strong> privacy@mbti-test.com</p>
                  <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </section>

            {/* Cookie Consent Banner */}
            {showCookieConsent && (
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent</h3>
                      <p className="text-sm text-gray-600">
                        We use cookies to enhance your experience and provide personalized content. 
                        By continuing to use our site, you consent to our use of cookies.
                      </p>
                    </div>
                    <div className="flex space-x-3 ml-4">
                      <button
                        onClick={handleDeclineCookies}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Decline
                      </button>
                      <button
                        onClick={handleAcceptCookies}
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
