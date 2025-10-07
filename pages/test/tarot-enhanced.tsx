import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Sparkles, Moon, Sun, Heart, Shuffle, RotateCcw, BookOpen, Brain, Zap, Globe } from 'lucide-react';
import { translations, Translations } from '../../lib/translations';
import { HeaderAd, InlineAd, FooterAd, MobileAd } from '../../components/AdSense';
import TarotCard, { TarotCardGrid } from '../../components/TarotCard';
import TarotMasterReading from '../../components/TarotMasterReading';
import { MASTER_TAROT_SYSTEM, TAROT_TEST_CONFIG } from '../../lib/tarot-master';

// 系统选择界面
interface SystemSelectionProps {
  onSystemSelect: (system: string) => void;
  t: Translations;
}

function SystemSelection({ onSystemSelect, t }: SystemSelectionProps) {
  const systems = [
    {
      key: 'waite',
      name: '韦特塔罗系统',
      description: '基于Arthur Edward Waite的经典韦特塔罗牌系统',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
      difficulty: '初学者',
      time: '10-15分钟'
    },
    {
      key: 'thoth',
      name: '托特塔罗系统',
      description: '基于Aleister Crowley的托特塔罗牌系统',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      difficulty: '进阶者',
      time: '15-25分钟'
    },
    {
      key: 'psychological',
      name: '荣格心理学塔罗',
      description: '基于荣格心理学的塔罗牌解读系统',
      icon: Heart,
      color: 'from-green-500 to-teal-600',
      difficulty: '高级',
      time: '20-30分钟'
    },
    {
      key: 'modern',
      name: '现代数字塔罗',
      description: '适应数字时代的现代塔罗牌解读',
      icon: Globe,
      color: 'from-orange-500 to-red-600',
      difficulty: '中级',
      time: '15-20分钟'
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
        </div>

        {/* 系统选择标题 */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🔮</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            大师级塔罗牌测试
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            基于权威塔罗牌著作的深度整合系统，选择适合你的塔罗牌解读方式
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
                    <span>📚 权威著作</span>
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
            选择建议
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>初学者：</strong> 选择韦特塔罗系统，经典易懂
            </div>
            <div>
              <strong>进阶者：</strong> 选择托特塔罗系统，深奥哲学
            </div>
            <div>
              <strong>心理爱好者：</strong> 选择荣格心理学塔罗
            </div>
            <div>
              <strong>现代用户：</strong> 选择现代数字塔罗
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
      name: '初学者',
      description: '适合塔罗牌初学者',
      questionCount: 5,
      timeRequired: '10-15分钟',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600'
    },
    {
      key: 'intermediate',
      name: '中级',
      description: '适合有一定塔罗牌基础的用户',
      questionCount: 8,
      timeRequired: '15-25分钟',
      icon: Star,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      key: 'advanced',
      name: '高级',
      description: '适合塔罗牌进阶者',
      questionCount: 12,
      timeRequired: '25-40分钟',
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      key: 'expert',
      name: '专家级',
      description: '适合塔罗牌专家和深度研究者',
      questionCount: 15,
      timeRequired: '40-60分钟',
      icon: Zap,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const systemName = MASTER_TAROT_SYSTEM.systems[selectedSystem as keyof typeof MASTER_TAROT_SYSTEM.systems]?.name || '塔罗牌系统';

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
            返回系统选择
          </button>
        </div>

        {/* 难度选择标题 */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            选择测试难度
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            你选择了：<span className="font-semibold text-purple-600">{systemName}</span>
          </p>
          <p className="text-gray-600">
            请选择适合你当前水平的测试难度
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
                    <span>📝 {difficulty.questionCount} 个问题</span>
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
            难度说明
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>初学者：</strong> 基础塔罗牌知识，简单问题
            </div>
            <div>
              <strong>中级：</strong> 中等深度，结合现代应用
            </div>
            <div>
              <strong>高级：</strong> 深度心理学分析，多系统整合
            </div>
            <div>
              <strong>专家级：</strong> 大师级解读，权威著作深度整合
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 主测试组件
export default function TarotEnhancedTest() {
  const [currentStep, setCurrentStep] = useState<'system' | 'difficulty' | 'test' | 'result'>('system');
  const [selectedSystem, setSelectedSystem] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [t, setT] = useState<Translations>(translations.en);
  
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
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers: number[]) => {
    // 基于选择的系统和难度计算结果
    const systemInfo = MASTER_TAROT_SYSTEM.systems[selectedSystem as keyof typeof MASTER_TAROT_SYSTEM.systems];
    const difficultyInfo = TAROT_TEST_CONFIG.difficultyLevels[selectedDifficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels];
    
    // 模拟结果计算（实际应该基于用户的答案）
    const result = {
      system: selectedSystem,
      difficulty: selectedDifficulty,
      tarot: 'The Magician',
      mbti: 'ENTJ',
      compatibility: Math.floor(Math.random() * 40) + 60,
      description: `基于${systemInfo?.name}的深度分析，你的塔罗牌人格展现出强大的意志力和创造力。`,
      element: 'Fire',
      meaning: '意志力、创造力、精神力量',
      traits: ['意志坚强', '创造力强', '精神力量', '显化能力']
    };
    
    setResult(result);
    setIsCompleted(true);
    setCurrentStep('result');
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
    return <SystemSelection onSystemSelect={handleSystemSelect} t={t} />;
  }

  if (currentStep === 'difficulty') {
    return <DifficultySelection onDifficultySelect={handleDifficultySelect} selectedSystem={selectedSystem} t={t} />;
  }

  if (currentStep === 'result' && result) {
    return (
      <TarotMasterReading 
        system={selectedSystem}
        difficulty={selectedDifficulty}
        result={result}
        onReset={resetTest}
      />
    );
  }

  // 测试进行中的界面（简化版）
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <HeaderAd />
        <MobileAd />
        
        <div className="text-center">
          <div className="text-6xl mb-6">🔮</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            大师级塔罗牌测试进行中
          </h1>
          <p className="text-xl text-gray-600">
            基于 {MASTER_TAROT_SYSTEM.systems[selectedSystem as keyof typeof MASTER_TAROT_SYSTEM.systems]?.name} 的深度分析
          </p>
          <div className="mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">正在准备你的专属塔罗牌解读...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
