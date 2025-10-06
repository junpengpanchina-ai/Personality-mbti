import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Sparkles, Moon, Sun } from 'lucide-react';
import { HeaderAd, InlineAd, FooterAd, MobileAd } from '../../components/AdSense';

// Zodiac and MBTI mapping
const ZODIAC_MBTI_MAPPING = {
  // Fire signs - usually correspond to extraversion, intuition, judging
  Aries: ['ENTJ', 'ESTJ', 'ENFJ', 'ESFJ'],
  Leo: ['ENTJ', 'ENFJ', 'ESTJ', 'ESFJ'],
  Sagittarius: ['ENTP', 'ENFP', 'ESTP', 'ESFP'],
  
  // Earth signs - usually correspond to introversion, sensing, judging
  Taurus: ['ISFJ', 'ISTJ', 'ESFJ', 'ESTJ'],
  Virgo: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'],
  Capricorn: ['ISTJ', 'INTJ', 'ESTJ', 'ENTJ'],
  
  // Air signs - usually correspond to extraversion, intuition, perceiving
  Gemini: ['ENFP', 'ENTP', 'ESFP', 'ESTP'],
  Libra: ['ENFP', 'ENFJ', 'ESFP', 'ESFJ'],
  Aquarius: ['ENTP', 'INTJ', 'ENTJ', 'INTP'],
  
  // Water signs - usually correspond to introversion, feeling, perceiving
  Cancer: ['ISFJ', 'INFJ', 'ESFJ', 'ENFJ'],
  Scorpio: ['INFJ', 'INTJ', 'ENFJ', 'ENTJ'],
  Pisces: ['INFP', 'ISFP', 'ENFP', 'ESFP']
};

// Zodiac information
const ZODIAC_INFO = {
  Aries: { name: 'Aries', symbol: '♈', element: 'Fire', quality: 'Cardinal', planet: 'Mars' },
  Taurus: { name: 'Taurus', symbol: '♉', element: 'Earth', quality: 'Fixed', planet: 'Venus' },
  Gemini: { name: 'Gemini', symbol: '♊', element: 'Air', quality: 'Mutable', planet: 'Mercury' },
  Cancer: { name: 'Cancer', symbol: '♋', element: 'Water', quality: 'Cardinal', planet: 'Moon' },
  Leo: { name: 'Leo', symbol: '♌', element: 'Fire', quality: 'Fixed', planet: 'Sun' },
  Virgo: { name: 'Virgo', symbol: '♍', element: 'Earth', quality: 'Mutable', planet: 'Mercury' },
  Libra: { name: 'Libra', symbol: '♎', element: 'Air', quality: 'Cardinal', planet: 'Venus' },
  Scorpio: { name: 'Scorpio', symbol: '♏', element: 'Water', quality: 'Fixed', planet: 'Pluto' },
  Sagittarius: { name: 'Sagittarius', symbol: '♐', element: 'Fire', quality: 'Mutable', planet: 'Jupiter' },
  Capricorn: { name: 'Capricorn', symbol: '♑', element: 'Earth', quality: 'Cardinal', planet: 'Saturn' },
  Aquarius: { name: 'Aquarius', symbol: '♒', element: 'Air', quality: 'Fixed', planet: 'Uranus' },
  Pisces: { name: 'Pisces', symbol: '♓', element: 'Water', quality: 'Mutable', planet: 'Neptune' }
};

// MBTI type descriptions
const MBTI_DESCRIPTIONS = {
  INTJ: { name: 'The Architect', traits: ['Strategic', 'Independent', 'Determined', 'Analytical'] },
  INTP: { name: 'The Thinker', traits: ['Innovative', 'Curious', 'Logical', 'Flexible'] },
  ENTJ: { name: 'The Commander', traits: ['Bold', 'Confident', 'Strategic', 'Decisive'] },
  ENTP: { name: 'The Debater', traits: ['Smart', 'Curious', 'Enthusiastic', 'Creative'] },
  INFJ: { name: 'The Advocate', traits: ['Creative', 'Insightful', 'Principled', 'Passionate'] },
  INFP: { name: 'The Mediator', traits: ['Idealistic', 'Curious', 'Loyal', 'Adaptable'] },
  ENFJ: { name: 'The Protagonist', traits: ['Charismatic', 'Inspiring', 'Natural-born leader', 'Passionate'] },
  ENFP: { name: 'The Campaigner', traits: ['Enthusiastic', 'Creative', 'Sociable', 'Free-spirited'] },
  ISTJ: { name: 'The Logistician', traits: ['Practical', 'Fact-minded', 'Reliable', 'Responsible'] },
  ISFJ: { name: 'The Protector', traits: ['Supportive', 'Reliable', 'Patient', 'Imaginative'] },
  ESTJ: { name: 'The Executive', traits: ['Dedicated', 'Strong-willed', 'Direct', 'Honest'] },
  ESFJ: { name: 'The Consul', traits: ['Caring', 'Social', 'Popular', 'Dependable'] },
  ISTP: { name: 'The Virtuoso', traits: ['Bold', 'Practical', 'Curious', 'Spontaneous'] },
  ISFP: { name: 'The Adventurer', traits: ['Flexible', 'Charming', 'Sensitive', 'Imaginative'] },
  ESTP: { name: 'The Entrepreneur', traits: ['Smart', 'Energetic', 'Perceptive', 'Spontaneous'] },
  ESFP: { name: 'The Entertainer', traits: ['Spontaneous', 'Enthusiastic', 'Friendly', 'Generous'] }
};

// Divination questions
const DIVINATION_QUESTIONS = [
  {
    id: 1,
    question: "What's your birth month?",
    options: [
      "March 21 - April 19 (Aries)",
      "April 20 - May 20 (Taurus)", 
      "May 21 - June 20 (Gemini)",
      "June 21 - July 22 (Cancer)",
      "July 23 - August 22 (Leo)",
      "August 23 - September 22 (Virgo)",
      "September 23 - October 22 (Libra)",
      "October 23 - November 21 (Scorpio)",
      "November 22 - December 21 (Sagittarius)",
      "December 22 - January 19 (Capricorn)",
      "January 20 - February 18 (Aquarius)",
      "February 19 - March 20 (Pisces)"
    ],
    zodiacs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
  },
  {
    id: 2,
    question: "What's your ideal weekend?",
    options: [
      "Adventure and exploration",
      "Quiet time with close friends",
      "Social gatherings and parties",
      "Creative projects and hobbies"
    ],
    elements: ['Fire', 'Water', 'Air', 'Earth']
  },
  {
    id: 3,
    question: "How do you handle challenges?",
    options: [
      "Face them head-on with confidence",
      "Analyze carefully before acting",
      "Seek support from others",
      "Adapt and find creative solutions"
    ],
    qualities: ['Cardinal', 'Fixed', 'Mutable', 'Cardinal']
  }
];

interface DivinationResult {
  zodiac: string;
  mbti: string;
  compatibility: number;
  description: string;
  traits: string[];
  element: string;
  quality: string;
  planet: string;
}

export default function ZodiacTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<DivinationResult | null>(null);

  const currentQ = DIVINATION_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / DIVINATION_QUESTIONS.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    
    if (currentQuestion < DIVINATION_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers: any[]) => {
    // Get user's selected zodiac
    const zodiacIndex = answers[0];
    const selectedZodiac = DIVINATION_QUESTIONS[0]?.zodiacs?.[zodiacIndex];
    
    if (!selectedZodiac) {
      console.error('Invalid zodiac selection');
      return;
    }
    
    // Get corresponding MBTI types
    const possibleMBTIs = ZODIAC_MBTI_MAPPING[selectedZodiac as keyof typeof ZODIAC_MBTI_MAPPING];
    if (!possibleMBTIs || possibleMBTIs.length === 0) {
      console.error('No MBTI types found for zodiac:', selectedZodiac);
      return;
    }
    const randomMBTI = possibleMBTIs[Math.floor(Math.random() * possibleMBTIs.length)];
    
    // Get zodiac information
    const zodiacInfo = ZODIAC_INFO[selectedZodiac as keyof typeof ZODIAC_INFO];
    const mbtiInfo = MBTI_DESCRIPTIONS[randomMBTI as keyof typeof MBTI_DESCRIPTIONS];
    
    // Calculate compatibility (random but based on element matching)
    const compatibility = Math.floor(Math.random() * 40) + 60; // 60-100%
    
    const result: DivinationResult = {
      zodiac: selectedZodiac,
      mbti: randomMBTI,
      compatibility,
      description: `As a ${zodiacInfo.name} ${zodiacInfo.symbol}, your cosmic energy aligns with the ${mbtiInfo.name} personality type. The stars reveal your ${zodiacInfo.element.toLowerCase()} nature combined with ${mbtiInfo.name} traits creates a unique cosmic personality blend.`,
      traits: mbtiInfo.traits,
      element: zodiacInfo.element,
      quality: zodiacInfo.quality,
      planet: zodiacInfo.planet
    };
    
    setResult(result);
    setIsCompleted(true);
  };


  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
    setResult(null);
  };

  if (isCompleted && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Ad */}
          <HeaderAd />
          <MobileAd />
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <button 
              onClick={resetTest}
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              Try Again
            </button>
          </div>

          {/* Result Card */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{ZODIAC_INFO[result.zodiac as keyof typeof ZODIAC_INFO]?.symbol}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {result.zodiac} × {result.mbti}
              </h1>
              <p className="text-xl text-gray-600">Your Cosmic Personality Profile</p>
            </div>

            {/* Compatibility Score */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Cosmic Compatibility</h3>
                <span className="text-2xl font-bold text-purple-600">{result.compatibility}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${result.compatibility}%` }}
                ></div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
                Cosmic Reading
              </h3>
              <p className="text-gray-700 leading-relaxed">{result.description}</p>
            </div>

            {/* Traits */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="h-5 w-5 mr-2 text-purple-500" />
                Your Cosmic Traits
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {result.traits.map((trait, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-purple-700">{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Astrological Info */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl mb-2">{result.element === 'Fire' ? '🔥' : result.element === 'Water' ? '💧' : result.element === 'Air' ? '💨' : '🌍'}</div>
                <h4 className="font-semibold text-gray-900">Element</h4>
                <p className="text-sm text-gray-600">{result.element}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl mb-2">{result.quality === 'Cardinal' ? '👑' : result.quality === 'Fixed' ? '🔒' : '🔄'}</div>
                <h4 className="font-semibold text-gray-900">Quality</h4>
                <p className="text-sm text-gray-600">{result.quality}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl mb-2">🪐</div>
                <h4 className="font-semibold text-gray-900">Ruling Planet</h4>
                <p className="text-sm text-gray-600">{result.planet}</p>
              </div>
            </div>

            {/* Inline Ad */}
            <InlineAd />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={resetTest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🔮 Try Another Reading
              </button>
              <Link href="/test/quick" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                🧠 Take MBTI Test
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Ad */}
        <HeaderAd />
        <MobileAd />
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors bg-gray-100 hover:bg-purple-50 px-4 py-2 rounded-lg font-medium">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {DIVINATION_QUESTIONS.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🔮</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {currentQ.question}
            </h2>
            <p className="text-gray-600">Choose the option that resonates with your cosmic energy</p>
          </div>

          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-6 text-left border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full mr-4 group-hover:border-purple-500 transition-colors"></div>
                  <span className="text-lg text-gray-700 group-hover:text-purple-700">
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
