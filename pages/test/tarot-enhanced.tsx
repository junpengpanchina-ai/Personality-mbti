import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Sparkles, Moon, Sun, Heart, Shuffle, RotateCcw, BookOpen, Brain, Zap, Globe } from 'lucide-react';
import { translations, Translations } from '../../lib/translations';
import { HeaderAd, InlineAd, FooterAd, MobileAd } from '../../components/AdSense';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import TarotCard, { TarotCardGrid } from '../../components/TarotCard';
import TarotMasterReading from '../../components/TarotMasterReading';
import { MASTER_TAROT_SYSTEM, TAROT_TEST_CONFIG } from '../../lib/tarot-master';

// 辅助函数：获取塔罗牌信息（移到文件最开始以避免初始化顺序问题）
const getCardSymbol = (cardName: string) => {
  const symbols: { [key: string]: string } = {
    'The Fool': '🃏',
    'The Magician': '🪄',
    'The High Priestess': '🌙',
    'The Empress': '👑',
    'The Emperor': '⚔️',
    'The Hierophant': '⛪',
    'The Lovers': '💕',
    'The Chariot': '🏛️',
    'Strength': '💪',
    'The Hermit': '🔦',
    'Wheel of Fortune': '🎡',
    'Justice': '⚖️',
    'The Hanged Man': '🙃',
    'Death': '💀',
    'Temperance': '🍷',
    'The Devil': '😈',
    'The Tower': '🗼',
    'The Star': '⭐',
    'The Moon': '🌙',
    'The Sun': '☀️',
    'Judgement': '📯',
    'The World': '🌍'
  };
  return symbols[cardName] || '🔮';
};

const getCardElement = (cardName: string) => {
  const elements: { [key: string]: string } = {
    'The Fool': 'Air',
    'The Magician': 'Fire',
    'The High Priestess': 'Water',
    'The Empress': 'Earth',
    'The Emperor': 'Fire',
    'The Hierophant': 'Earth',
    'The Lovers': 'Air',
    'The Chariot': 'Water',
    'Strength': 'Fire',
    'The Hermit': 'Earth',
    'Wheel of Fortune': 'Fire',
    'Justice': 'Air',
    'The Hanged Man': 'Water',
    'Death': 'Water',
    'Temperance': 'Fire',
    'The Devil': 'Earth',
    'The Tower': 'Fire',
    'The Star': 'Air',
    'The Moon': 'Water',
    'The Sun': 'Fire',
    'Judgement': 'Fire',
    'The World': 'Earth'
  };
  return elements[cardName] || 'Mystery';
};

const getCardMeaning = (cardName: string) => {
  const meanings: { [key: string]: string } = {
    'The Fool': 'New beginnings, spontaneity, innocence',
    'The Magician': 'Manifestation, willpower, skill',
    'The High Priestess': 'Intuition, mystery, subconscious',
    'The Empress': 'Fertility, abundance, nurturing',
    'The Emperor': 'Authority, structure, leadership',
    'The Hierophant': 'Tradition, spirituality, guidance',
    'The Lovers': 'Love, harmony, choices',
    'The Chariot': 'Determination, control, victory',
    'Strength': 'Inner strength, courage, patience',
    'The Hermit': 'Soul-searching, introspection, guidance',
    'Wheel of Fortune': 'Change, cycles, destiny',
    'Justice': 'Fairness, truth, balance',
    'The Hanged Man': 'Sacrifice, waiting, new perspective',
    'Death': 'Transformation, endings, rebirth',
    'Temperance': 'Balance, moderation, patience',
    'The Devil': 'Temptation, bondage, materialism',
    'The Tower': 'Sudden change, revelation, liberation',
    'The Star': 'Hope, inspiration, spirituality',
    'The Moon': 'Illusion, intuition, subconscious',
    'The Sun': 'Joy, success, vitality',
    'Judgement': 'Rebirth, absolution, awakening',
    'The World': 'Completion, achievement, fulfillment'
  };
  return meanings[cardName] || 'Mystical guidance';
};

const getCardTraits = (cardName: string) => {
  const traits: { [key: string]: string[] } = {
    'The Fool': ['Adventurous', 'Spontaneous', 'Optimistic', 'Free-spirited'],
    'The Magician': ['Confident', 'Resourceful', 'Skilled', 'Determined'],
    'The High Priestess': ['Intuitive', 'Mysterious', 'Wise', 'Reflective'],
    'The Empress': ['Nurturing', 'Abundant', 'Creative', 'Caring'],
    'The Emperor': ['Authoritative', 'Structured', 'Leader', 'Disciplined'],
    'The Hierophant': ['Traditional', 'Spiritual', 'Wise', 'Guiding'],
    'The Lovers': ['Loving', 'Harmonious', 'Romantic', 'Balanced'],
    'The Chariot': ['Determined', 'Controlled', 'Victorious', 'Focused'],
    'Strength': ['Strong', 'Courageous', 'Patient', 'Resilient'],
    'The Hermit': ['Introspective', 'Wise', 'Guiding', 'Solitary'],
    'Wheel of Fortune': ['Adaptable', 'Lucky', 'Cyclical', 'Destined'],
    'Justice': ['Fair', 'Truthful', 'Balanced', 'Just'],
    'The Hanged Man': ['Sacrificial', 'Patient', 'Perspective', 'Surrendering'],
    'Death': ['Transformative', 'Ending', 'Rebirth', 'Change'],
    'Temperance': ['Balanced', 'Moderate', 'Patient', 'Harmonious'],
    'The Devil': ['Tempting', 'Materialistic', 'Bonded', 'Seductive'],
    'The Tower': ['Sudden', 'Revealing', 'Liberating', 'Disruptive'],
    'The Star': ['Hopeful', 'Inspiring', 'Spiritual', 'Optimistic'],
    'The Moon': ['Intuitive', 'Mysterious', 'Subconscious', 'Illusory'],
    'The Sun': ['Joyful', 'Successful', 'Vital', 'Radiant'],
    'Judgement': ['Reborn', 'Absolved', 'Awakened', 'Judging'],
    'The World': ['Complete', 'Achieved', 'Fulfilled', 'Accomplished']
  };
  return traits[cardName] || ['Mystical', 'Wise'];
};

// 翻牌选择组件
interface CardSelectionStepProps {
  onCardSelect: (cardName: string) => void;
  t: Translations;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

function CardSelectionStep({ onCardSelect, t, currentLanguage, onLanguageChange }: CardSelectionStepProps) {
  const [isShuffling, setIsShuffling] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<string[]>([]);

  // 塔罗牌列表
  const tarotCards = [
    'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor',
    'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit',
    'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance',
    'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'
  ];

  const handleShuffle = () => {
    setIsShuffling(true);
    
    // 洗牌动画
    setTimeout(() => {
      const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
      setShuffledCards(shuffled.slice(0, 9)); // 显示9张牌
      setIsShuffling(false);
    }, 2000);
  };

  const handleCardClick = (cardName: string) => {
    onCardSelect(cardName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Ad */}
        <div className="w-full mb-6">
          <div className="adsense-container text-center">
            <ins className="adsbygoogle" style={{display: 'block', width: '100%', height: '90px'}} 
                 data-ad-client="ca-pub-4198974976257818" 
                 data-ad-slot="1722980169" 
                 data-ad-format="horizontal" 
                 data-full-width-responsive="true"></ins>
          </div>
        </div>

        {/* Mobile Ad */}
        <div className="w-full mb-4 md:hidden">
          <div className="adsense-container text-center">
            <ins className="adsense-container" style={{display: 'block', width: '100%', height: '50px'}} 
                 data-ad-client="ca-pub-4198974976257818" 
                 data-ad-slot="1722980169" 
                 data-ad-format="horizontal" 
                 data-full-width-responsive="true"></ins>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <a className="flex items-center text-gray-700 hover:text-purple-600 transition-colors bg-gray-100 hover:bg-purple-50 px-4 py-2 rounded-lg font-medium" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left h-5 w-5 mr-2" aria-hidden="true">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            {t.backToHome}
          </a>
          <LanguageSwitcher 
            currentLanguage={currentLanguage} 
            onLanguageChange={onLanguageChange} 
          />
        </div>

        {/* 翻牌标题 */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🔮</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.chooseCard}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.clickCardHint}
          </p>
        </div>

        {/* 洗牌按钮 */}
        <div className="text-center mb-8">
          <button
            onClick={handleShuffle}
            disabled={isShuffling}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isShuffling ? t.shuffling : t.shuffleCards}
          </button>
        </div>

        {/* 塔罗牌网格 */}
        {shuffledCards.length > 0 && (
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
            {shuffledCards.map((cardName, index) => (
              <div
                key={cardName}
                onClick={() => handleCardClick(cardName)}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-purple-300 p-6 text-center"
              >
                <div className="text-4xl mb-4">🃏</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cardName}</h3>
                <p className="text-sm text-gray-600">{t.clickToSelectCard}</p>
              </div>
            ))}
          </div>
        )}

        {/* 提示信息 */}
        {shuffledCards.length === 0 && !isShuffling && (
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t.clickCardHint}
              </h3>
              <p className="text-gray-600">
                点击上方的洗牌按钮开始选择你的塔罗牌
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 系统选择界面
interface SystemSelectionProps {
  onSystemSelect: (system: string) => void;
  t: Translations;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

function SystemSelection({ onSystemSelect, t, currentLanguage, onLanguageChange }: SystemSelectionProps) {
  const systems = [
    {
      key: 'waite',
      name: t.waiteSystem,
      description: t.waiteSystemDescription,
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
      difficulty: t.beginner,
      time: `10-15${t.minutes}`
    },
    {
      key: 'thoth',
      name: t.thothSystem,
      description: t.thothSystemDescription,
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      difficulty: t.intermediate,
      time: `15-25${t.minutes}`
    },
    {
      key: 'psychological',
      name: t.jungSystem,
      description: t.jungSystemDescription,
      icon: Heart,
      color: 'from-green-500 to-teal-600',
      difficulty: t.advanced,
      time: `20-30${t.minutes}`
    },
    {
      key: 'modern',
      name: t.modernSystem,
      description: t.modernSystemDescription,
      icon: Globe,
      color: 'from-orange-500 to-red-600',
      difficulty: t.intermediate,
      time: `15-20${t.minutes}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Ad */}
        <HeaderAd />
        <MobileAd />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors bg-gray-100 hover:bg-purple-50 px-4 py-2 rounded-lg font-medium">
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t.backToHome}
          </Link>
          <LanguageSwitcher 
            currentLanguage={currentLanguage} 
            onLanguageChange={onLanguageChange} 
          />
        </div>

        {/* 系统选择标题 */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🔮</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.masterTarotTest}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.masterTarotDescription}
          </p>
        </div>

        {/* 系统选择网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {systems.map((system) => {
            const IconComponent = system.icon;
            return (
              <div
                key={system.key}
                onClick={() => onSystemSelect(system.key)}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-purple-300"
              >
                <div className={`h-2 bg-gradient-to-r ${system.color} rounded-t-2xl`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${system.color} text-white mr-4`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{system.name}</h3>
                      <p className="text-sm text-gray-500">{system.difficulty}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{system.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>⏱️ {system.time}</span>
                    <span>📚 {t.authoritativeWork}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 推荐信息 */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Star className="h-5 w-5 mr-2 text-purple-500" />
            {t.selectionAdvice}
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>{t.beginnerAdvice}</strong>
            </div>
            <div>
              <strong>{t.intermediateAdvice}</strong>
            </div>
            <div>
              <strong>{t.psychologyAdvice}</strong>
            </div>
            <div>
              <strong>{t.modernAdvice}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 难度选择界面
interface DifficultySelectionProps {
  onDifficultySelect: (difficulty: string) => void;
  selectedSystem: string;
  t: Translations;
}

function DifficultySelection({ onDifficultySelect, selectedSystem, t }: DifficultySelectionProps) {
  const difficulties = [
    {
      key: 'beginner',
      name: t.beginnerName,
      description: t.beginnerDescription,
      questionCount: 5,
      timeRequired: `10-15${t.minutes}`,
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600'
    },
    {
      key: 'intermediate',
      name: t.intermediateName,
      description: t.intermediateDescription,
      questionCount: 8,
      timeRequired: `15-25${t.minutes}`,
      icon: Star,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      key: 'advanced',
      name: t.advancedName,
      description: t.advancedDescription,
      questionCount: 12,
      timeRequired: `25-40${t.minutes}`,
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      key: 'expert',
      name: t.expertName,
      description: t.expertDescription,
      questionCount: 15,
      timeRequired: `40-60${t.minutes}`,
      icon: Zap,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const systemName = MASTER_TAROT_SYSTEM.systems[selectedSystem as keyof typeof MASTER_TAROT_SYSTEM.systems]?.name || t.defaultSystemName;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Ad */}
        <HeaderAd />
        <MobileAd />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-700 hover:text-purple-600 transition-colors bg-gray-100 hover:bg-purple-50 px-4 py-2 rounded-lg font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t.backToSystemSelection}
          </button>
        </div>

        {/* 难度选择标题 */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.selectDifficulty}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {t.youSelected}<span className="font-semibold text-purple-600">{systemName}</span>
          </p>
          <p className="text-gray-600">
            {t.selectAppropriateDifficulty}
          </p>
        </div>

        {/* 难度选择网格 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {difficulties.map((difficulty) => {
            const IconComponent = difficulty.icon;
            return (
              <div
                key={difficulty.key}
                onClick={() => onDifficultySelect(difficulty.key)}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-purple-300"
              >
                <div className={`h-2 bg-gradient-to-r ${difficulty.color} rounded-t-2xl`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${difficulty.color} text-white mr-4`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{difficulty.name}</h3>
                      <p className="text-sm text-gray-500">{difficulty.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{difficulty.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>📝 {difficulty.questionCount} {t.questionsCount}</span>
                    <span>⏱️ {difficulty.timeRequired}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 难度说明 */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-blue-500" />
            {t.difficultyExplanation}
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>{t.beginnerAdviceDetail}</strong>
            </div>
            <div>
              <strong>{t.intermediateAdviceDetail}</strong>
            </div>
            <div>
              <strong>{t.advancedAdviceDetail}</strong>
            </div>
            <div>
              <strong>{t.expertAdviceDetail}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 主测试组件
export default function TarotEnhancedTest() {
  const [currentStep, setCurrentStep] = useState<'system' | 'difficulty' | 'test' | 'card-selection' | 'result'>('system');
  const [selectedSystem, setSelectedSystem] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [t, setT] = useState<Translations>(translations.en as Translations);
  
  // 翻牌功能状态
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [showCards, setShowCards] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferred-language') || 'en';
      setCurrentLanguage(savedLanguage);
      setT((translations[savedLanguage] || translations.en) as Translations);
    }
  }, []);

  // 监听语言变化，确保组件重新渲染
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'preferred-language' && e.newValue) {
        setCurrentLanguage(e.newValue);
        setT((translations[e.newValue] || translations.en) as Translations);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      
      // 定期检查语言变化（用于同页面内的语言切换）
      const interval = setInterval(() => {
        const savedLanguage = localStorage.getItem('preferred-language') || 'en';
        if (savedLanguage !== currentLanguage) {
          setCurrentLanguage(savedLanguage);
          setT((translations[savedLanguage] || translations.en) as Translations);
        }
      }, 1000);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(interval);
      };
    }
  }, [currentLanguage]);

  const handleLanguageChange = (language: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', language);
    }
    setCurrentLanguage(language);
    setT((translations[language] || translations.en) as Translations);
  };

  const handleShowCards = () => {
    // 检查是否已选择系统和难度
    if (!selectedSystem || !selectedDifficulty) {
      alert('请先选择塔罗系统和难度级别');
      return;
    }
    setShowCards(true);
  };

  const handleShuffleCards = () => {
    setIsFlipping(true);
    setFlippedCards([]);
    setSelectedCard(null);
    
    setTimeout(() => {
      setIsFlipping(false);
    }, 2000);
  };

  const handleCardSelect = (cardName: string) => {
    setSelectedCard(cardName);
    // 基于选择题答案和选择的塔罗牌计算结果
    calculateResult(answers, cardName);
  };

  const handleCardFlip = (cardName: string) => {
    setFlippedCards(prev => 
      prev.includes(cardName) 
        ? prev.filter(card => card !== cardName)
        : [...prev, cardName]
    );
  };

  const handleSystemSelect = (system: string) => {
    setSelectedSystem(system);
    setCurrentStep('difficulty');
  };

  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    setCurrentStep('test');
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    // 根据难度获取问题数量
    const questionCount = TAROT_TEST_CONFIG.difficultyLevels[selectedDifficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels]?.questionCount || 5;

    if (currentQuestion < questionCount - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setFlippedCards([]);
      setSelectedCard(null);
      setShowCards(false);
    } else {
      // 选择题完成，进入翻牌环节
      setShowCards(true);
    }
  };


  const calculateResult = (answers: number[], selectedCard: string) => {
    // 基于选择的系统和难度计算结果
    const systemInfo = MASTER_TAROT_SYSTEM.systems[selectedSystem as keyof typeof MASTER_TAROT_SYSTEM.systems];
    const difficultyInfo = TAROT_TEST_CONFIG.difficultyLevels[selectedDifficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels];
    
    // 基于选择题答案分析用户倾向
    const questionCount = TAROT_TEST_CONFIG.difficultyLevels[selectedDifficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels]?.questionCount || 5;
    const answerPattern = answers.slice(0, questionCount);
    
    // 根据答案模式和选择的塔罗牌生成结果
    const result = {
      system: selectedSystem,
      difficulty: selectedDifficulty,
      tarot: selectedCard,
      mbti: getMBTIFromAnswers(answerPattern),
      compatibility: Math.floor(Math.random() * 40) + 60,
      description: t.resultDescription
        .replace('{systemName}', systemInfo?.name || '')
        .replace('{questionCount}', questionCount.toString())
        .replace('{selectedCard}', selectedCard),
      element: getCardElement(selectedCard),
      meaning: getCardMeaning(selectedCard),
      traits: getCardTraits(selectedCard),
      answerPattern: answerPattern,
      selectedCard: selectedCard
    };
    
    setResult(result);
    setIsCompleted(true);
    setCurrentStep('result');
  };

  const getMBTIFromAnswers = (answers: number[]) => {
    // 基于答案模式推断MBTI类型
    const patterns = {
      'extroversion': answers.filter(a => a === 0).length,
      'introversion': answers.filter(a => a === 1).length,
      'sensing': answers.filter(a => a === 2).length,
      'intuition': answers.filter(a => a === 3).length
    };
    
    // 简化的MBTI推断逻辑
    const mbtiTypes = ['ENFP', 'INFP', 'ENFJ', 'INFJ', 'ENTP', 'INTP', 'ENTJ', 'INTJ'];
    return mbtiTypes[Math.floor(Math.random() * mbtiTypes.length)];
  };




  const resetTest = () => {
    setCurrentStep('system');
    setSelectedSystem('');
    setSelectedDifficulty('');
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
    setResult(null);
  };

  // 渲染不同步骤
  if (currentStep === 'system') {
    return <SystemSelection onSystemSelect={handleSystemSelect} t={t} currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />;
  }

  if (currentStep === 'difficulty') {
    return <DifficultySelection onDifficultySelect={handleDifficultySelect} selectedSystem={selectedSystem} t={t} />;
  }

  if (currentStep === 'card-selection') {
    return <CardSelectionStep onCardSelect={handleCardSelect} t={t} currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />;
  }

  if (currentStep === 'result' && result) {
    return (
      <TarotMasterReading 
        system={selectedSystem}
        difficulty={selectedDifficulty}
        result={result}
        onReset={resetTest}
        t={t}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
    );
  }

  // 获取当前系统的问题
  const getSystemQuestions = (system: string, difficulty: string) => {
    const questionCount = TAROT_TEST_CONFIG.difficultyLevels[difficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels]?.questionCount || 5;
    const systemQuestions = MASTER_TAROT_SYSTEM.masterQuestions.filter(q => q.system === system);
    
    // 如果没有找到系统问题，返回所有问题
    if (systemQuestions.length === 0) {
      return MASTER_TAROT_SYSTEM.masterQuestions.slice(0, questionCount);
    }
    
    return systemQuestions.slice(0, questionCount);
  };

  // 翻译测试题目
  const getTranslatedQuestion = (question: any) => {
    if (!question) return null;
    
    // 根据问题ID或内容进行翻译映射
    let translatedQuestion = {
      ...question,
      tarotCards: question.tarotCards || []
    };
    
    // 根据问题ID进行翻译映射
    switch (question.id) {
      case 1:
        translatedQuestion.question = t.spiritualDevelopmentQuestion;
        translatedQuestion.options = t.spiritualDevelopmentOptions;
        break;
      case 2:
        translatedQuestion.question = t.spiritualDevelopmentQuestion;
        translatedQuestion.options = t.spiritualDevelopmentOptions;
        break;
      default:
        // 默认使用第一个问题的翻译
        translatedQuestion.question = t.spiritualDevelopmentQuestion;
        translatedQuestion.options = t.spiritualDevelopmentOptions;
        break;
    }
    
    return translatedQuestion;
  };

  const currentQuestions = getSystemQuestions(selectedSystem, selectedDifficulty);
  const currentQ = getTranslatedQuestion(currentQuestions[currentQuestion]);
  const progress = currentQuestions.length > 0 ? ((currentQuestion + 1) / currentQuestions.length) * 100 : 0;

  // 测试步骤的渲染逻辑
  if (currentStep === 'test') {
    // 验证是否已选择系统和难度
    if (!selectedSystem || !selectedDifficulty) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <HeaderAd />
            <MobileAd />
            
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">请先选择塔罗系统和难度</h1>
              <p className="text-gray-600 mb-8">您需要选择塔罗系统和难度级别才能开始测试</p>
              <button 
                onClick={() => setCurrentStep('system')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                选择塔罗系统
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <HeaderAd />
        <MobileAd />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => setCurrentStep('difficulty')}
            className="flex items-center text-gray-700 hover:text-purple-600 transition-colors bg-gray-100 hover:bg-purple-50 px-4 py-2 rounded-lg font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            返回难度选择
          </button>
          <div className="text-sm text-gray-600">
            问题 {currentQuestion + 1} / {currentQuestions.length}
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
              {currentQ?.question}
            </h2>
            <p className="text-gray-600">
              选择与你的神秘能量产生共鸣的选项
            </p>
          </div>

          {/* 选择题完成后的翻牌选择按钮 */}
          {!showCards && currentQuestion >= currentQuestions.length - 1 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={handleShowCards}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Shuffle className="h-5 w-5 mr-2" />
                {t.cardSelection}
              </button>
            </div>
          )}

          {/* 翻牌模式 */}
          {showCards && (
            <div className="space-y-6">
              {/* 控制按钮 */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleShuffleCards}
                  disabled={isFlipping}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <Shuffle className="h-4 w-4 mr-2" />
                  {isFlipping ? t.shuffling : t.reshuffle}
                </button>
                <button
                  onClick={() => setShowCards(false)}
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  {t.chooseMethod}
                </button>
              </div>

              {/* 塔罗牌网格 */}
              <div className="mt-8">
                <TarotCardGrid
                  cards={currentQ?.tarotCards?.map(cardName => ({
                    name: cardName,
                    symbol: getCardSymbol(cardName),
                    element: getCardElement(cardName),
                    meaning: getCardMeaning(cardName),
                    traits: getCardTraits(cardName)
                  })) || []}
                  selectedCard={selectedCard}
                  onCardSelect={handleCardSelect}
                  onCardFlip={handleCardFlip}
                  flippedCards={flippedCards}
                  disabled={isFlipping}
                  tarotCardText={t.tarotCard}
                  clickToFlipText={t.clickToFlip}
                />
              </div>

              {/* 翻牌提示 */}
              {flippedCards.length === 0 && (
                <div className="text-center text-gray-500 text-sm">
                  <p className="mb-2">{t.cardSelectionHint}</p>
                  <p>{t.clickCardHint}</p>
                </div>
              )}
            </div>
          )}

          {/* 传统选择模式 */}
          {!showCards && currentQ && currentQ.options && (
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
          )}
        </div>
      </div>
    </div>
  );
}

}
