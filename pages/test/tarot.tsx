import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Sparkles, Moon, Sun, Heart } from 'lucide-react';
import AdBanner from '../../components/AdBanner';

// Tarot cards and MBTI mapping
const TAROT_MBTI_MAPPING = {
  // Major Arcana - usually correspond to strong personality traits
  'The Fool': ['ENFP', 'ESFP', 'ENTP', 'ESTP'],
  'The Magician': ['ENTJ', 'INTJ', 'ENFJ', 'INFJ'],
  'The High Priestess': ['INFJ', 'INFP', 'ISFJ', 'ISFP'],
  'The Empress': ['ESFJ', 'ENFJ', 'ISFJ', 'INFP'],
  'The Emperor': ['ENTJ', 'ESTJ', 'INTJ', 'ISTJ'],
  'The Hierophant': ['ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'],
  'The Lovers': ['ENFP', 'INFP', 'ESFP', 'ISFP'],
  'The Chariot': ['ENTJ', 'ESTJ', 'ENTP', 'ESTP'],
  'Strength': ['ENFJ', 'ESFJ', 'INFJ', 'ISFJ'],
  'The Hermit': ['INTJ', 'INTP', 'INFJ', 'INFP'],
  'Wheel of Fortune': ['ENTP', 'ENFP', 'ESTP', 'ESFP'],
  'Justice': ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'],
  'The Hanged Man': ['INFP', 'ISFP', 'INTP', 'ISTP'],
  'Death': ['INTJ', 'INFJ', 'ENTJ', 'ENFJ'],
  'Temperance': ['ISFJ', 'ESFJ', 'INFP', 'ENFP'],
  'The Devil': ['ESTP', 'ESFP', 'ENTP', 'ENFP'],
  'The Tower': ['ENTJ', 'ESTJ', 'INTJ', 'ISTJ'],
  'The Star': ['INFP', 'ENFP', 'ISFP', 'ESFP'],
  'The Moon': ['INFP', 'ISFP', 'INFJ', 'ISFJ'],
  'The Sun': ['ENFP', 'ESFP', 'ENFJ', 'ESFJ'],
  'Judgement': ['ENTJ', 'ENFJ', 'INTJ', 'INFJ'],
  'The World': ['ENFJ', 'ESFJ', 'INFJ', 'ISFJ']
};

// Tarot card information
const TAROT_INFO = {
  'The Fool': { 
    name: 'The Fool', 
    symbol: '🃏', 
    element: 'Air', 
    meaning: 'New beginnings, spontaneity, innocence',
    traits: ['Adventurous', 'Spontaneous', 'Optimistic', 'Free-spirited']
  },
  'The Magician': { 
    name: 'The Magician', 
    symbol: '🪄', 
    element: 'Air', 
    meaning: 'Manifestation, willpower, skill',
    traits: ['Confident', 'Resourceful', 'Skilled', 'Determined']
  },
  'The High Priestess': { 
    name: 'The High Priestess', 
    symbol: '🌙', 
    element: 'Water', 
    meaning: 'Intuition, mystery, subconscious',
    traits: ['Intuitive', 'Mysterious', 'Wise', 'Reflective']
  },
  'The Empress': { 
    name: 'The Empress', 
    symbol: '👑', 
    element: 'Earth', 
    meaning: 'Fertility, abundance, nurturing',
    traits: ['Nurturing', 'Abundant', 'Creative', 'Caring']
  },
  'The Emperor': { 
    name: 'The Emperor', 
    symbol: '⚔️', 
    element: 'Fire', 
    meaning: 'Authority, structure, leadership',
    traits: ['Authoritative', 'Structured', 'Leader', 'Disciplined']
  },
  'The Hierophant': { 
    name: 'The Hierophant', 
    symbol: '⛪', 
    element: 'Earth', 
    meaning: 'Tradition, spirituality, guidance',
    traits: ['Traditional', 'Spiritual', 'Wise', 'Guiding']
  },
  'The Lovers': { 
    name: 'The Lovers', 
    symbol: '💕', 
    element: 'Air', 
    meaning: 'Love, harmony, choices',
    traits: ['Loving', 'Harmonious', 'Romantic', 'Balanced']
  },
  'The Chariot': { 
    name: 'The Chariot', 
    symbol: '🏛️', 
    element: 'Water', 
    meaning: 'Determination, control, victory',
    traits: ['Determined', 'Controlled', 'Victorious', 'Focused']
  },
  'Strength': { 
    name: 'Strength', 
    symbol: '💪', 
    element: 'Fire', 
    meaning: 'Inner strength, courage, patience',
    traits: ['Strong', 'Courageous', 'Patient', 'Resilient']
  },
  'The Hermit': { 
    name: 'The Hermit', 
    symbol: '🔦', 
    element: 'Earth', 
    meaning: 'Soul-searching, introspection, guidance',
    traits: ['Introspective', 'Wise', 'Guiding', 'Solitary']
  },
  'Wheel of Fortune': { 
    name: 'Wheel of Fortune', 
    symbol: '🎡', 
    element: 'Fire', 
    meaning: 'Change, cycles, destiny',
    traits: ['Adaptable', 'Lucky', 'Cyclical', 'Destined']
  },
  'Justice': { 
    name: 'Justice', 
    symbol: '⚖️', 
    element: 'Air', 
    meaning: 'Fairness, truth, balance',
    traits: ['Fair', 'Truthful', 'Balanced', 'Just']
  },
  'The Hanged Man': { 
    name: 'The Hanged Man', 
    symbol: '🙃', 
    element: 'Water', 
    meaning: 'Sacrifice, waiting, new perspective',
    traits: ['Sacrificial', 'Patient', 'Perspective', 'Surrendering']
  },
  'Death': { 
    name: 'Death', 
    symbol: '💀', 
    element: 'Water', 
    meaning: 'Transformation, endings, rebirth',
    traits: ['Transformative', 'Ending', 'Rebirth', 'Change']
  },
  'Temperance': { 
    name: 'Temperance', 
    symbol: '🍷', 
    element: 'Fire', 
    meaning: 'Balance, moderation, patience',
    traits: ['Balanced', 'Moderate', 'Patient', 'Harmonious']
  },
  'The Devil': { 
    name: 'The Devil', 
    symbol: '😈', 
    element: 'Earth', 
    meaning: 'Temptation, bondage, materialism',
    traits: ['Tempting', 'Materialistic', 'Bonded', 'Seductive']
  },
  'The Tower': { 
    name: 'The Tower', 
    symbol: '🗼', 
    element: 'Fire', 
    meaning: 'Sudden change, revelation, liberation',
    traits: ['Sudden', 'Revealing', 'Liberating', 'Disruptive']
  },
  'The Star': { 
    name: 'The Star', 
    symbol: '⭐', 
    element: 'Air', 
    meaning: 'Hope, inspiration, spirituality',
    traits: ['Hopeful', 'Inspiring', 'Spiritual', 'Optimistic']
  },
  'The Moon': { 
    name: 'The Moon', 
    symbol: '🌙', 
    element: 'Water', 
    meaning: 'Illusion, intuition, subconscious',
    traits: ['Intuitive', 'Mysterious', 'Subconscious', 'Illusory']
  },
  'The Sun': { 
    name: 'The Sun', 
    symbol: '☀️', 
    element: 'Fire', 
    meaning: 'Joy, success, vitality',
    traits: ['Joyful', 'Successful', 'Vital', 'Radiant']
  },
  'Judgement': { 
    name: 'Judgement', 
    symbol: '📯', 
    element: 'Fire', 
    meaning: 'Rebirth, absolution, awakening',
    traits: ['Reborn', 'Absolved', 'Awakened', 'Judging']
  },
  'The World': { 
    name: 'The World', 
    symbol: '🌍', 
    element: 'Earth', 
    meaning: 'Completion, achievement, fulfillment',
    traits: ['Complete', 'Achieved', 'Fulfilled', 'Accomplished']
  }
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

// Tarot divination questions
const TAROT_QUESTIONS = [
  {
    id: 1,
    question: "What's your current life focus?",
    options: [
      "Starting something new and exciting",
      "Using my skills to achieve goals",
      "Following my intuition and inner wisdom",
      "Nurturing and creating abundance",
      "Taking charge and leading others",
      "Following traditional values and guidance",
      "Seeking love and meaningful connections",
      "Pushing forward with determination",
      "Finding inner strength and courage",
      "Reflecting and seeking deeper meaning"
    ],
    tarotCards: [
      'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor',
      'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit'
    ]
  },
  {
    id: 2,
    question: "How do you handle life's challenges?",
    options: [
      "I adapt to change and go with the flow",
      "I seek fairness and balance in all things",
      "I surrender and wait for the right moment",
      "I embrace transformation and new beginnings",
      "I find balance and moderation in everything",
      "I break free from limitations and restrictions",
      "I maintain hope and stay inspired",
      "I trust my intuition and inner guidance",
      "I find joy and success in my endeavors",
      "I make clear judgments and decisions"
    ],
    tarotCards: [
      'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance',
      'The Devil', 'The Star', 'The Moon', 'The Sun', 'Judgement'
    ]
  },
  {
    id: 3,
    question: "What represents your ultimate goal?",
    options: [
      "Complete freedom and new adventures",
      "Mastery and manifestation of desires",
      "Deep wisdom and spiritual understanding",
      "Abundance and creative fulfillment",
      "Authority and structured leadership",
      "Spiritual guidance and tradition",
      "Perfect love and harmony",
      "Victory and determined success",
      "Inner strength and courage",
      "Complete achievement and fulfillment"
    ],
    tarotCards: [
      'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor',
      'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The World'
    ]
  }
];

interface TarotResult {
  tarot: string;
  mbti: string;
  compatibility: number;
  description: string;
  element: string;
  meaning: string;
  traits: string[];
}

export default function TarotTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<TarotResult | null>(null);


  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < TAROT_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers: any[]) => {
    // Get user's selected tarot card
    const tarotIndex = answers[0];
    const selectedTarot = TAROT_QUESTIONS[0]?.tarotCards?.[tarotIndex];
    
    if (!selectedTarot) {
      console.error('Invalid Tarot selection');
      return;
    }
    
    // Get corresponding MBTI types
    const possibleMBTIs = TAROT_MBTI_MAPPING[selectedTarot as keyof typeof TAROT_MBTI_MAPPING];
    if (!possibleMBTIs || possibleMBTIs.length === 0) {
      console.error('No MBTI types found for Tarot:', selectedTarot);
      return;
    }
    const randomMBTI = possibleMBTIs[Math.floor(Math.random() * possibleMBTIs.length)];
    
    // Get tarot information
    const tarotInfo = TAROT_INFO[selectedTarot as keyof typeof TAROT_INFO];
    const mbtiInfo = MBTI_DESCRIPTIONS[randomMBTI as keyof typeof MBTI_DESCRIPTIONS];
    
    // Calculate compatibility (random but based on element matching)
    const compatibility = Math.floor(Math.random() * 40) + 60; // 60-100%
    
    const result: TarotResult = {
      tarot: selectedTarot,
      mbti: randomMBTI,
      compatibility: compatibility,
      element: tarotInfo.element,
      meaning: tarotInfo.meaning,
      traits: tarotInfo.traits,
      description: `The ${tarotInfo.name} card reveals your mystical personality profile. As someone guided by ${tarotInfo.meaning.toLowerCase()}, your MBTI type ${mbtiInfo.name} perfectly complements your tarot essence. The cards show that you embody the qualities of ${tarotInfo.traits.join(', ').toLowerCase()}, creating a unique blend of ancient wisdom and modern psychology.`
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


  const currentQ = TAROT_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / TAROT_QUESTIONS.length) * 100;


  if (isCompleted && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
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
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl shadow-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{TAROT_INFO[result.tarot as keyof typeof TAROT_INFO]?.symbol}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {result.tarot} × {result.mbti}
              </h1>
              <p className="text-xl text-gray-600">Your Mystical Personality Profile</p>
            </div>

            {/* Compatibility Score */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Mystical Compatibility</h3>
                <span className="text-2xl font-bold text-purple-600">{result.compatibility}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${result.compatibility}%` }}
                ></div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
                Tarot Reading
              </h3>
              <p className="text-gray-700 leading-relaxed">{result.description}</p>
            </div>

            {/* Tarot Traits */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="h-5 w-5 mr-2 text-purple-500" />
                Your Tarot Traits
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {result.traits.map((trait, index) => (
                  <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-purple-700">{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tarot Info */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl mb-2">{result.element === 'Fire' ? '🔥' : result.element === 'Water' ? '💧' : result.element === 'Air' ? '💨' : '🌍'}</div>
                <h4 className="font-semibold text-gray-900">Element</h4>
                <p className="text-sm text-gray-600">{result.element}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl mb-2">🔮</div>
                <h4 className="font-semibold text-gray-900">Meaning</h4>
                <p className="text-sm text-gray-600">{result.meaning}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl mb-2">✨</div>
                <h4 className="font-semibold text-gray-900">MBTI Type</h4>
                <p className="text-sm text-gray-600">{result.mbti}</p>
              </div>
            </div>

            {/* Ad Banner */}
            <div className="mb-6">
              <AdBanner size="leaderboard" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={resetTest}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors bg-gray-100 hover:bg-purple-50 px-4 py-2 rounded-lg font-medium">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {TAROT_QUESTIONS.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300"
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
            <p className="text-gray-600">Choose the option that resonates with your mystical energy</p>
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
