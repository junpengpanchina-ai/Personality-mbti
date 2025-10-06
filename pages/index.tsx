import Link from 'next/link';
import Head from 'next/head';
import { Brain, Users, BarChart3, Star } from 'lucide-react';
import AdBanner from '../components/AdBanner';

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
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
                       <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
                       <a href="/about" className="text-gray-600 hover:text-indigo-600">About</a>
                       <a href="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy</a>
                       <a href="/compliance" className="text-gray-600 hover:text-indigo-600">Compliance</a>
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
          
                   <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                     <a 
                       href="/test/quick"
                       className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-indigo-300 inline-block text-center"
                     >
                       🚀 Start Quick Test (12 questions)
                     </a>
                     <a 
                       href="/test/full"
                       className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-xl font-bold border-3 border-indigo-600 hover:bg-indigo-50 hover:border-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 hover:text-indigo-700 inline-block text-center"
                     >
                       📊 Full Assessment (93 questions)
                     </a>
                   </div>

                   {/* Entertainment Tests Section */}
                   <div className="mb-16">
                     <div className="text-center mb-8">
                       <h2 className="text-3xl font-bold text-gray-900 mb-4">
                         🔮 Entertainment Tests
                       </h2>
                       <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                         Discover your personality through fun and mystical approaches
                       </p>
                     </div>
                     
                   <div className="flex flex-col sm:flex-row gap-6 justify-center">
                     <a 
                       href="/test/zodiac"
                       className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-purple-300 inline-block text-center"
                     >
                       ✨ MBTI × Zodiac Divination
                     </a>
                     <a 
                       href="/test/bazi"
                       className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-amber-300 inline-block text-center"
                     >
                       🔮 MBTI × Bazi Fortune Reading
                     </a>
                     <a 
                       href="/test/tarot"
                       className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-indigo-300 inline-block text-center"
                     >
                       🃏 MBTI × Tarot Card Reading
                     </a>
                   </div>
                   </div>

          {/* Ad Banner */}
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
