import Link from 'next/link';
import { Brain, Users, BarChart3, Star } from 'lucide-react';
import AdBanner from '../components/AdBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">MBTI Personality Test</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {' '}Personality Type
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take our professional MBTI personality test to understand your unique traits, 
            strengths, and how you interact with the world around you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/test/quick"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Quick Test (12 questions)
            </Link>
            <Link 
              href="/test/full"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Full Assessment (93 questions)
            </Link>
          </div>

          {/* 广告横幅 */}
          <div className="mb-16">
            <AdBanner size="leaderboard" />
          </div>

          {/* Features Grid */}
          <div id="features" className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Analysis</h3>
              <p className="text-gray-600">
                Based on Carl Jung's psychological types and the Myers-Briggs framework
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <BarChart3 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Detailed Insights</h3>
              <p className="text-gray-600">
                Comprehensive personality analysis with career and relationship guidance
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Star className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free & Accurate</h3>
              <p className="text-gray-600">
                No registration required. Get instant, scientifically-backed results
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Brain className="h-6 w-6" />
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
  );
}
