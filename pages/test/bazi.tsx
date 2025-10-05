import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Sparkles, Moon, Sun, Calendar } from 'lucide-react';
import AdBanner from '../../components/AdBanner';
import AdGate from '../../components/AdGate';
import { adGateUtils } from '../../lib/ads';

// Bazi (Eight Pillars) and MBTI mapping
const BAZI_MBTI_MAPPING = {
  // Wood elements - usually correspond to growth, intuition, feeling
  'Jia': ['ENFP', 'INFP', 'ENFJ', 'INFJ'], // Yang Wood
  'Yi': ['INFP', 'ISFP', 'ENFP', 'ESFP'],  // Yin Wood
  
  // Fire elements - usually correspond to energy, extraversion, judging
  'Bing': ['ENTJ', 'ESTJ', 'ENFJ', 'ESFJ'], // Yang Fire
  'Ding': ['ENFJ', 'ESFJ', 'ENTJ', 'ESTJ'], // Yin Fire
  
  // Earth elements - usually correspond to stability, sensing, judging
  'Wu': ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'],   // Yang Earth
  'Ji': ['ISFJ', 'ISTJ', 'ESFJ', 'ESTJ'],   // Yin Earth
  
  // Metal elements - usually correspond to precision, thinking, judging
  'Geng': ['INTJ', 'ENTJ', 'ISTJ', 'ESTJ'], // Yang Metal
  'Xin': ['INTJ', 'INTP', 'ENTJ', 'ENTP'],  // Yin Metal
  
  // Water elements - usually correspond to flow, intuition, perceiving
  'Ren': ['ENFP', 'ENTP', 'INFP', 'INTP'],  // Yang Water
  'Gui': ['INFP', 'INTP', 'ENFP', 'ENTP']   // Yin Water
};

// Bazi information
const BAZI_INFO = {
  'Jia': { name: '甲木', element: 'Wood', nature: 'Yang', meaning: 'Big Tree', traits: ['Strong', 'Independent', 'Leader-like'] },
  'Yi': { name: '乙木', element: 'Wood', nature: 'Yin', meaning: 'Small Plant', traits: ['Flexible', 'Adaptable', 'Gentle'] },
  'Bing': { name: '丙火', element: 'Fire', nature: 'Yang', meaning: 'Sun', traits: ['Bright', 'Energetic', 'Outgoing'] },
  'Ding': { name: '丁火', element: 'Fire', nature: 'Yin', meaning: 'Candle', traits: ['Warm', 'Caring', 'Intuitive'] },
  'Wu': { name: '戊土', element: 'Earth', nature: 'Yang', meaning: 'Mountain', traits: ['Stable', 'Reliable', 'Strong'] },
  'Ji': { name: '己土', element: 'Earth', nature: 'Yin', meaning: 'Garden', traits: ['Nurturing', 'Patient', 'Supportive'] },
  'Geng': { name: '庚金', element: 'Metal', nature: 'Yang', meaning: 'Sword', traits: ['Sharp', 'Decisive', 'Direct'] },
  'Xin': { name: '辛金', element: 'Metal', nature: 'Yin', meaning: 'Jewelry', traits: ['Refined', 'Elegant', 'Perfectionist'] },
  'Ren': { name: '壬水', element: 'Water', nature: 'Yang', meaning: 'Ocean', traits: ['Flowing', 'Adaptable', 'Wise'] },
  'Gui': { name: '癸水', element: 'Water', nature: 'Yin', meaning: 'Dew', traits: ['Gentle', 'Intuitive', 'Sensitive'] }
};

// MBTI type descriptions
const MBTI_DESCRIPTIONS = {
  INTJ: { name: 'The Architect', traits: ['Strategic', 'Independent', 'Determined', 'Analytical'] },
  INTP: { name: 'The Thinker', traits: ['Innovative', 'Curious', 'Logical', 'Flexible'] },
  ENTJ: { name: 'The Commander', traits: ['Bold', 'Confident', 'Strategic', 'Decisive'] },
  ENTP: { name: 'The Debater', traits: ['Smart', 'Curious', 'Enthusiastic', 'Creative'] },
  INFJ: { name: 'The Advocate', traits: ['Insightful', 'Principled', 'Compassionate', 'Determined'] },
  INFP: { name: 'The Mediator', traits: ['Idealistic', 'Curious', 'Empathetic', 'Adaptable'] },
  ENFJ: { name: 'The Protagonist', traits: ['Charismatic', 'Inspiring', 'Altruistic', 'Sociable'] },
  ENFP: { name: 'The Campaigner', traits: ['Enthusiastic', 'Creative', 'Sociable', 'Spontaneous'] },
  ISTJ: { name: 'The Logistician', traits: ['Practical', 'Responsible', 'Orderly', 'Reliable'] },
  ISFJ: { name: 'The Defender', traits: ['Warm', 'Protective', 'Responsible', 'Observant'] },
  ESTJ: { name: 'The Executive', traits: ['Organized', 'Direct', 'Efficient', 'Traditional'] },
  ESFJ: { name: 'The Consul', traits: ['Caring', 'Sociable', 'Popular', 'Conscientious'] },
  ISTP: { name: 'The Virtuoso', traits: ['Practical', 'Observant', 'Spontaneous', 'Logical'] },
  ISFP: { name: 'The Adventurer', traits: ['Flexible', 'Charming', 'Sensitive', 'Imaginative'] },
  ESTP: { name: 'The Entrepreneur', traits: ['Smart', 'Energetic', 'Perceptive', 'Spontaneous'] },
  ESFP: { name: 'The Entertainer', traits: ['Spontaneous', 'Enthusiastic', 'Friendly', 'Generous'] }
};

// Bazi divination questions
const BAZI_QUESTIONS = [
  {
    id: 1,
    question: "What's your birth year?",
    options: [
      "1984, 1996, 2008 (Rat)", "1985, 1997, 2009 (Ox)", "1986, 1998, 2010 (Tiger)",
      "1987, 1999, 2011 (Rabbit)", "1988, 2000, 2012 (Dragon)", "1989, 2001, 2013 (Snake)",
      "1990, 2002, 2014 (Horse)", "1991, 2003, 2015 (Sheep)", "1992, 2004, 2016 (Monkey)",
      "1993, 2005, 2017 (Rooster)", "1994, 2006, 2018 (Dog)", "1995, 2007, 2019 (Pig)"
    ],
    baziElements: [
      'Gui', 'Ji', 'Jia', 'Yi', 'Bing', 'Ding', 'Wu', 'Ji', 'Geng', 'Xin', 'Ren', 'Gui'
    ]
  },
  {
    id: 2,
    question: "How do you handle challenges in life?",
    options: [
      "Face them head-on with determination",
      "Analyze the situation carefully first",
      "Seek help and support from others",
      "Adapt and flow with the circumstances"
    ]
  },
  {
    id: 3,
    question: "What type of environment energizes you most?",
    options: [
      "Natural outdoor settings with trees and water",
      "Bright, energetic spaces with lots of activity",
      "Stable, grounded environments with clear structure",
      "Dynamic, flowing spaces that allow movement"
    ]
  }
];

interface BaziResult {
  bazi: string;
  mbti: string;
  compatibility: number;
  description: string;
  element: string;
  nature: string;
  meaning: string;
}

export default function BaziTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<BaziResult | null>(null);
  const [showAdGate, setShowAdGate] = useState(false);

  useEffect(() => {
    // Initialize ad consent
    if (!adGateUtils.hasConsent()) {
      adGateUtils.setConsent(true); // Auto-consent to ensure ad revenue
    }
  }, []);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < BAZI_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers: any[]) => {
    // Get user's selected Bazi element
    const baziIndex = answers[0];
    const selectedBazi = BAZI_QUESTIONS[0]?.baziElements?.[baziIndex];
    
    if (!selectedBazi) {
      console.error('Invalid Bazi selection');
      return;
    }
    
    // Get corresponding MBTI types
    const possibleMBTIs = BAZI_MBTI_MAPPING[selectedBazi as keyof typeof BAZI_MBTI_MAPPING];
    if (!possibleMBTIs || possibleMBTIs.length === 0) {
      console.error('No MBTI types found for Bazi:', selectedBazi);
      return;
    }
    const randomMBTI = possibleMBTIs[Math.floor(Math.random() * possibleMBTIs.length)];
    
    // Get Bazi information
    const baziInfo = BAZI_INFO[selectedBazi as keyof typeof BAZI_INFO];
    const mbtiInfo = MBTI_DESCRIPTIONS[randomMBTI as keyof typeof MBTI_DESCRIPTIONS];
    
    // Calculate compatibility (random but based on element matching)
    const compatibility = Math.floor(Math.random() * 40) + 60; // 60-100%
    
    const result: BaziResult = {
      bazi: selectedBazi,
      mbti: randomMBTI,
      compatibility: compatibility,
      element: baziInfo.element,
      nature: baziInfo.nature,
      meaning: baziInfo.meaning,
      description: `Your Bazi element ${baziInfo.name} (${baziInfo.meaning}) combined with your MBTI type ${mbtiInfo.name} reveals a personality that is ${mbtiInfo.traits.join(', ').toLowerCase()}. As a ${baziInfo.nature} ${baziInfo.element} person, you embody the qualities of ${baziInfo.traits.join(', ').toLowerCase()}. This ancient wisdom combined with modern psychology shows your unique path in life.`
    };
    setResult(result);
    setShowAdGate(true); // Activate ad gate
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
    setResult(null);
    setShowAdGate(false);
  };

  const handleAdComplete = () => {
    setShowAdGate(false);
    setIsCompleted(true);
  };

  const currentQ = BAZI_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / BAZI_QUESTIONS.length) * 100;

  if (showAdGate) {
    return <AdGate onComplete={handleAdComplete} duration={10} />;
  }

  if (isCompleted && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Your Bazi-MBTI Profile: <span className="text-amber-600">{result.mbti}</span>
              </h1>
              <p className="text-xl text-gray-600">
                Ancient Chinese wisdom meets modern psychology.
              </p>
            </div>

            {/* Bazi Info */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-amber-600 mr-3" />
                {BAZI_INFO[result.bazi as keyof typeof BAZI_INFO].name} ({result.bazi})
              </h3>
              <div className="grid grid-cols-2 gap-4 text-lg text-gray-700">
                <p><strong>Element:</strong> {result.element}</p>
                <p><strong>Nature:</strong> {result.nature}</p>
                <p><strong>Meaning:</strong> {result.meaning}</p>
                <p><strong>Traits:</strong> {BAZI_INFO[result.bazi as keyof typeof BAZI_INFO].traits.join(', ')}</p>
              </div>
            </div>

            {/* MBTI Info */}
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center justify-center">
                <Star className="h-6 w-6 text-indigo-600 mr-3" />
                {MBTI_DESCRIPTIONS[result.mbti as keyof typeof MBTI_DESCRIPTIONS].name} ({result.mbti})
              </h3>
              <p className="text-lg text-gray-700 mb-3">
                <strong>Traits:</strong> {MBTI_DESCRIPTIONS[result.mbti as keyof typeof MBTI_DESCRIPTIONS].traits.join(', ')}
              </p>
            </div>

            {/* Compatibility */}
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-red-600 mr-3" />
                Bazi-MBTI Harmony
              </h3>
              <p className="text-5xl font-bold text-red-600">{result.compatibility}%</p>
              <p className="text-lg text-gray-700 mt-2">
                Your ancient and modern personality profiles align perfectly!
              </p>
            </div>

            {/* Description */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Unique Bazi-MBTI Profile</h3>
              <p className="text-gray-700 leading-relaxed">{result.description}</p>
            </div>

            {/* Ad Banner */}
            <div className="mb-8">
              <AdBanner size="leaderboard" />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={resetTest}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Retake Bazi Reading
              </button>
              <Link href="/">
                <a className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  Back to Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <a className="flex items-center text-gray-600 hover:text-amber-600 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </a>
          </Link>
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {BAZI_QUESTIONS.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-amber-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            {currentQ.question}
          </h2>

          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-6 text-left border-2 border-gray-200 rounded-lg hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full mr-4 group-hover:border-amber-500 transition-colors"></div>
                  <span className="text-lg text-gray-700 group-hover:text-amber-700">
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
