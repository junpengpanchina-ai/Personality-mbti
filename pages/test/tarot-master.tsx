import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Sparkles, Moon, Sun, Heart, BookOpen, Crown, Zap } from 'lucide-react';
import { translations, Translations } from '../../lib/translations';
import { HeaderAd, InlineAd, FooterAd, MobileAd } from '../../components/AdSense';
import TarotCard, { TarotCardGrid } from '../../components/TarotCard';
import { MASTER_TAROT_SYSTEM, MASTER_TAROT_QUESTIONS, TAROT_INTERPRETATION_CONFIG } from '../../lib/tarot-master';

interface TarotMasterResult {
  tarot: string;
  mbti: string;
  system: string;
  compatibility: number;
  description: string;
  element: string;
  meaning: string;
  traits: string[];
  mythological: string;
  goddess: string;
  interpretation: {
    riderWaite: string;
    thoth: string;
    mythological: string;
    modern: string;
  };
}

export default function TarotMasterTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<TarotMasterResult | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [t, setT] = useState<Translations>(translations.en);
  const [selectedSystem, setSelectedSystem] = useState<string>('riderWaite');
  
  // 翻牌功能状态
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [showCards, setShowCards] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferred-language') || 'en';
      setCurrentLanguage(savedLanguage);
      setT(translations[savedLanguage] || translations.en);
    }
  }, []);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < MASTER_TAROT_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setFlippedCards([]);
      setSelectedCard(null);
      setShowCards(false);
    } else {
      calculateResult(newAnswers);
    }
  };

  const handleCardFlip = (cardName: string) => {
    if (!flippedCards.includes(cardName)) {
      setFlippedCards(prev => [...prev, cardName]);
      setIsFlipping(true);
      
      setTimeout(() => {
        setIsFlipping(false);
      }, 600);
    }
  };

  const handleCardSelect = (cardName: string) => {
    setSelectedCard(cardName);
    
    const currentQ = MASTER_TAROT_QUESTIONS[currentQuestion];
    const cardIndex = currentQ.tarotCards.indexOf(cardName);
    if (cardIndex !== -1) {
      handleAnswer(cardIndex);
    }
  };

  const handleShowCards = () => {
    setShowCards(true);
  };

  const handleShuffleCards = () => {
    setFlippedCards([]);
    setSelectedCard(null);
    setIsFlipping(true);
    
    setTimeout(() => {
      setIsFlipping(false);
    }, 300);
  };

  const calculateResult = (answers: any[]) => {
    const tarotIndex = answers[0];
    const selectedTarot = MASTER_TAROT_QUESTIONS[0]?.tarotCards?.[tarotIndex];
    
    if (!selectedTarot) {
      console.error('Invalid Tarot selection');
      return;
    }
    
    // 获取塔罗牌信息
    const tarotInfo = MASTER_TAROT_SYSTEM.majorArcana[selectedTarot as keyof typeof MASTER_TAROT_SYSTEM.majorArcana];
    if (!tarotInfo) {
      console.error('Tarot info not found:', selectedTarot);
      return;
    }

    // 根据塔罗牌获取MBTI类型
    const mbtiMapping = tarotInfo.mbtiMapping;
    const possibleMBTIs = mbtiMapping.primary.concat(mbtiMapping.secondary);
    const randomMBTI = possibleMBTIs[Math.floor(Math.random() * possibleMBTIs.length)];
    
    // 计算兼容性
    const compatibility = Math.floor(Math.random() * 30) + 70; // 70-100%
    
    const result: TarotMasterResult = {
      tarot: selectedTarot,
      mbti: randomMBTI,
      system: selectedSystem,
      compatibility: compatibility,
      element: tarotInfo.element,
      meaning: tarotInfo.riderWaite.upright.meaning,
      traits: tarotInfo.mbtiMapping.traits,
      mythological: tarotInfo.mythological.archetype,
      goddess: tarotInfo.goddess,
      description: `作为${tarotInfo.chineseName}，你体现了${tarotInfo.mythological.archetype}的原型。${tarotInfo.riderWaite.upright.meaning}，你的MBTI类型${randomMBTI}完美地补充了你的塔罗本质。`,
      interpretation: {
        riderWaite: tarotInfo.riderWaite.upright.advice,
        thoth: tarotInfo.thoth.interpretation,
        mythological: tarotInfo.mythological.lesson,
        modern: `在现代生活中，${tarotInfo.chineseName}提醒你${tarotInfo.riderWaite.upright.meaning}。`
      }
    };
    
    setResult(result);
    setIsCompleted(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
    setResult(null);
    setFlippedCards([]);
    setSelectedCard(null);
    setShowCards(false);
  };

  const currentQ = MASTER_TAROT_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / MASTER_TAROT_QUESTIONS.length) * 100;

  if (isCompleted && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <HeaderAd />
          <MobileAd />
          
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t.backToHome}
            </Link>
            <button 
              onClick={resetTest}
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              {t.tryAgain}
            </button>
          </div>

          {/* 结果卡片 */}
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl shadow-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{MASTER_TAROT_SYSTEM.majorArcana[result.tarot as keyof typeof MASTER_TAROT_SYSTEM.majorArcana]?.symbol}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {result.tarot} × {result.mbti}
              </h1>
              <p className="text-xl text-gray-600">{t.yourResult}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  {MASTER_TAROT_SYSTEM.majorArcana[result.tarot as keyof typeof MASTER_TAROT_SYSTEM.majorArcana]?.chineseName}
                </span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                  {result.element} 元素
                </span>
              </div>
            </div>

            {/* 兼容性分数 */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{t.compatibility}</h3>
                <span className="text-2xl font-bold text-purple-600">{result.compatibility}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${result.compatibility}%` }}
                ></div>
              </div>
            </div>

            {/* 塔罗牌解读 */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-purple-500" />
                  韦特塔罗解读
                </h3>
                <p className="text-gray-700 leading-relaxed">{result.interpretation.riderWaite}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Crown className="h-5 w-5 mr-2 text-purple-500" />
                  托特塔罗解读
                </h3>
                <p className="text-gray-700 leading-relaxed">{result.interpretation.thoth}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-purple-500" />
                  神话原型解读
                </h3>
                <p className="text-gray-700 leading-relaxed">{result.interpretation.mythological}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-purple-500" />
                  现代生活解读
                </h3>
                <p className="text-gray-700 leading-relaxed">{result.interpretation.modern}</p>
              </div>
            </div>

            {/* 塔罗牌特征 */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
                塔罗牌特征
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {result.traits.map((trait, index) => (
                  <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-purple-700">{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 神话信息 */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl mb-2">{result.element === 'Fire' ? '🔥' : result.element === 'Water' ? '💧' : result.element === 'Air' ? '💨' : '🌍'}</div>
                <h4 className="font-semibold text-gray-900">元素</h4>
                <p className="text-sm text-gray-600">{result.element}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl mb-2">👑</div>
                <h4 className="font-semibold text-gray-900">神话原型</h4>
                <p className="text-sm text-gray-600">{result.mythological}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl mb-2">✨</div>
                <h4 className="font-semibold text-gray-900">女神能量</h4>
                <p className="text-sm text-gray-600">{result.goddess}</p>
              </div>
            </div>

            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={resetTest}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🔮 {t.tryAgain}
              </button>
              <Link href="/test/quick" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                🧠 {t.takeMBTITest}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .card-flip {
          transform-style: preserve-3d;
          transition: transform 0.7s ease-in-out;
        }
        
        .card-flip.flipped {
          transform: rotateY(180deg);
        }
        
        .card-front, .card-back {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .card-back {
          transform: rotateY(180deg);
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <HeaderAd />
        <MobileAd />
        
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors bg-gray-100 hover:bg-purple-50 px-4 py-2 rounded-lg font-medium">
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t.backToHome}
          </Link>
          <div className="text-sm text-gray-600">
            {t.question} {currentQuestion + 1} {t.of} {MASTER_TAROT_QUESTIONS.length}
          </div>
        </div>

        {/* 进度条 */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* 问题卡片 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🔮</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {currentQ.question}
            </h2>
            <p className="text-gray-600">
              {showCards ? '选择一张塔罗牌' : '选择一种方式'}
            </p>
            <div className="mt-4 flex justify-center">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                {MASTER_TAROT_SYSTEM.systems[currentQ.system as keyof typeof MASTER_TAROT_SYSTEM.systems]?.chineseName}
              </span>
            </div>
          </div>

          {/* 选择方式按钮 */}
          {!showCards && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={handleShowCards}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                翻牌选择
              </button>
              <button
                onClick={() => setShowCards(false)}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Crown className="h-5 w-5 mr-2" />
                传统选择
              </button>
            </div>
          )}

          {/* 翻牌模式 */}
          {showCards && (
            <div className="space-y-6">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleShuffleCards}
                  disabled={isFlipping}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  {isFlipping ? '洗牌中...' : '重新洗牌'}
                </button>
                <button
                  onClick={() => setShowCards(false)}
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
                >
                  <Crown className="h-4 w-4 mr-2" />
                  切换模式
                </button>
              </div>

              <div className="mt-8">
                <TarotCardGrid
                  cards={currentQ.tarotCards.map(cardName => {
                    const cardInfo = MASTER_TAROT_SYSTEM.majorArcana[cardName as keyof typeof MASTER_TAROT_SYSTEM.majorArcana];
                    return {
                      name: cardName,
                      symbol: cardInfo?.symbol || '🔮',
                      element: cardInfo?.element || 'Mystery',
                      meaning: cardInfo?.riderWaite.upright.meaning || 'Mystical guidance',
                      traits: cardInfo?.mbtiMapping.traits || ['Mystical', 'Wise']
                    };
                  })}
                  selectedCard={selectedCard}
                  onCardSelect={handleCardSelect}
                  onCardFlip={handleCardFlip}
                  flippedCards={flippedCards}
                  disabled={isFlipping}
                />
              </div>

              {flippedCards.length === 0 && (
                <div className="text-center text-gray-500 text-sm">
                  💫 点击任意卡片开始翻牌，感受塔罗牌的神秘力量
                </div>
              )}
            </div>
          )}

          {/* 传统选择模式 */}
          {!showCards && (
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
