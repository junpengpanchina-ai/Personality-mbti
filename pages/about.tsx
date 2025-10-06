import Link from 'next/link';
import Head from 'next/head';
import { Brain, Users, BarChart3, Star, Heart, Shield, Globe, Award } from 'lucide-react';
import { HeaderAd, InlineAd, FooterAd, MobileAd } from '../components/AdSense';

export default function About() {
  return (
    <>
      <Head>
        <title>About - MBTI Personality Test</title>
        <meta name="description" content="Learn about our MBTI personality test platform, our mission, and how we help people discover their true selves." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-3">
                <img src="/mbti-logo.svg" alt="MBTI Logo" className="h-8 w-8" />
                <h1 className="text-2xl font-bold text-gray-900">MBTI Personality Test</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
              <Link href="/">
                <a className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Home</a>
              </Link>
                <Link href="/test/quick">
                  <a className="text-gray-600 hover:text-indigo-600 transition-colors">Quick Test</a>
                </Link>
                <Link href="/test/full">
                  <a className="text-gray-600 hover:text-indigo-600 transition-colors">Full Test</a>
                </Link>
                <Link href="/privacy">
                  <a className="text-gray-600 hover:text-indigo-600 transition-colors">Privacy</a>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Ad */}
          <HeaderAd />
          <MobileAd />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {' '}Personality Platform
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover your true self through scientifically-backed personality assessments, 
              combined with ancient wisdom and modern psychology.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="text-center mb-8">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We believe that understanding your personality is the key to personal growth, 
                better relationships, and career success. Our platform combines the proven 
                Myers-Briggs Type Indicator (MBTI) with innovative approaches to make 
                personality assessment accessible, engaging, and insightful for everyone.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Brain className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Scientific Foundation</h3>
              <p className="text-gray-600 text-center">
                Based on Carl Jung's psychological types and the Myers-Briggs framework, 
                our tests provide accurate and reliable personality insights.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Multiple Approaches</h3>
              <p className="text-gray-600 text-center">
                From quick 12-question tests to comprehensive 93-question assessments, 
                plus mystical approaches like zodiac and Bazi readings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Privacy First</h3>
              <p className="text-gray-600 text-center">
                Your data is protected with industry-standard security measures. 
                No registration required - your privacy is our priority.
              </p>
            </div>
          </div>

          {/* Test Types Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Test Types</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quick Test</h3>
                <p className="text-sm text-gray-600">12 questions, instant results with detailed explanations</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Full Assessment</h3>
                <p className="text-sm text-gray-600">93 questions for comprehensive personality analysis</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Zodiac Divination</h3>
                <p className="text-sm text-gray-600">MBTI meets astrology for mystical insights</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Bazi Reading</h3>
                <p className="text-sm text-gray-600">Ancient Chinese wisdom meets modern psychology</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-16 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Globe className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
                <p className="text-sm opacity-90">Free, no-registration personality tests for everyone</p>
              </div>
              
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Quality</h3>
                <p className="text-sm opacity-90">Scientifically-backed, accurate personality assessments</p>
              </div>
              
              <div className="text-center">
                <Heart className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Empathy</h3>
                <p className="text-sm opacity-90">Understanding and celebrating all personality types</p>
              </div>
              
              <div className="text-center">
                <Star className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-sm opacity-90">Combining traditional wisdom with modern psychology</p>
              </div>
            </div>
          </div>

          {/* Inline Ad */}
          <InlineAd />

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Discover Yourself?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Take our personality test and unlock insights about your unique traits, 
              strengths, and how you interact with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/test/quick">
                <a className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Quick Test
                </a>
              </Link>
              <Link href="/test/full">
                <a className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Take Full Assessment
                </a>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Footer Ad */}
            <FooterAd />
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <img src="/mbti-logo.svg" alt="MBTI Logo" className="h-6 w-6" />
                <span className="text-lg font-semibold">MBTI Personality Test</span>
              </div>
              <p className="text-gray-400 mb-4">
                Discover your personality type with our professional MBTI assessment
              </p>
              <p className="text-sm text-gray-500">
                © 2024 MBTI Personality Test. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
