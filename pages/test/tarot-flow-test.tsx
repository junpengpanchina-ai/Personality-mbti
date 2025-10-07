import { useState } from 'react';
import { MASTER_TAROT_SYSTEM, TAROT_TEST_CONFIG } from '../../lib/tarot-master';

export default function TarotFlowTest() {
  const [currentStep, setCurrentStep] = useState<'system' | 'difficulty' | 'test' | 'result'>('system');
  const [selectedSystem, setSelectedSystem] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<any>(null);

  const getSystemQuestions = (system: string, difficulty: string) => {
    const questionCount = TAROT_TEST_CONFIG.difficultyLevels[difficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels]?.questionCount || 5;
    const systemQuestions = MASTER_TAROT_SYSTEM.masterQuestions.filter(q => q.system === system);
    return systemQuestions.slice(0, questionCount);
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

    const questionCount = TAROT_TEST_CONFIG.difficultyLevels[selectedDifficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels]?.questionCount || 5;

    if (currentQuestion < questionCount - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers: number[]) => {
    const systemInfo = MASTER_TAROT_SYSTEM.systems[selectedSystem as keyof typeof MASTER_TAROT_SYSTEM.systems];
    const currentQuestions = getSystemQuestions(selectedSystem, selectedDifficulty);
    
    const cardCounts: { [key: string]: number } = {};
    answers.forEach((answerIndex, questionIndex) => {
      if (currentQuestions[questionIndex] && currentQuestions[questionIndex].tarotCards[answerIndex]) {
        const cardName = currentQuestions[questionIndex].tarotCards[answerIndex];
        cardCounts[cardName] = (cardCounts[cardName] || 0) + 1;
      }
    });
    
    const dominantCard = Object.keys(cardCounts).reduce((a, b) => 
      cardCounts[a] > cardCounts[b] ? a : b, Object.keys(cardCounts)[0] || 'The Fool'
    );
    
    const mbtiMapping = MASTER_TAROT_SYSTEM.masterMBTIMapping[dominantCard as keyof typeof MASTER_TAROT_SYSTEM.masterMBTIMapping];
    const mbtiType = mbtiMapping?.mbtiTypes[0] || 'ENFP';
    
    const totalAnswers = answers.length;
    const dominantCount = cardCounts[dominantCard] || 0;
    const compatibility = Math.min(95, Math.max(60, Math.floor((dominantCount / totalAnswers) * 100)));
    
    const result = {
      system: selectedSystem,
      difficulty: selectedDifficulty,
      tarot: dominantCard,
      mbti: mbtiType,
      compatibility: compatibility,
      description: `基于${systemInfo?.name}的深度分析，你的塔罗牌人格展现出强大的意志力和创造力。`,
      element: 'Fire',
      meaning: '意志力、创造力、精神力量',
      traits: ['意志坚强', '创造力强', '精神力量', '显化能力'],
      cardCounts: cardCounts,
      totalQuestions: totalAnswers,
      dominantCount: dominantCount
    };
    
    setResult(result);
    setCurrentStep('result');
  };

  const resetTest = () => {
    setCurrentStep('system');
    setSelectedSystem('');
    setSelectedDifficulty('');
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  const currentQuestions = getSystemQuestions(selectedSystem, selectedDifficulty);
  const currentQ = currentQuestions[currentQuestion];

  // 系统选择界面
  if (currentStep === 'system') {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">塔罗牌测试流程验证</h1>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">选择塔罗牌系统</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(MASTER_TAROT_SYSTEM.systems).map(([key, system]) => (
                <button
                  key={key}
                  onClick={() => handleSystemSelect(key)}
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  <h3 className="font-semibold">{system.name}</h3>
                  <p className="text-sm text-gray-600">{system.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 难度选择界面
  if (currentStep === 'difficulty') {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">塔罗牌测试流程验证</h1>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">选择测试难度</h2>
            <p className="text-sm text-gray-600 mb-4">已选择系统: {selectedSystem}</p>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(TAROT_TEST_CONFIG.difficultyLevels).map(([key, difficulty]) => (
                <button
                  key={key}
                  onClick={() => handleDifficultySelect(key)}
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  <h3 className="font-semibold">{difficulty.name}</h3>
                  <p className="text-sm text-gray-600">{difficulty.description}</p>
                  <p className="text-xs text-gray-500">{difficulty.questionCount} 个问题</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 测试进行中
  if (currentStep === 'test') {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">塔罗牌测试流程验证</h1>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">测试进行中</h2>
            <p className="text-sm text-gray-600 mb-4">
              系统: {selectedSystem} | 难度: {selectedDifficulty} | 问题 {currentQuestion + 1} / {currentQuestions.length}
            </p>
            
            {currentQ ? (
              <div>
                <h3 className="text-lg font-semibold mb-4">{currentQ.question}</h3>
                <div className="space-y-2">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full p-3 text-left border rounded hover:bg-gray-50"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-red-600">没有找到问题数据</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 结果显示
  if (currentStep === 'result' && result) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">塔罗牌测试流程验证</h1>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">测试结果</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">基本信息</h3>
                <p><strong>系统:</strong> {result.system}</p>
                <p><strong>难度:</strong> {result.difficulty}</p>
                <p><strong>主导塔罗牌:</strong> {result.tarot}</p>
                <p><strong>MBTI类型:</strong> {result.mbti}</p>
                <p><strong>兼容性:</strong> {result.compatibility}%</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">塔罗牌信息</h3>
                <p><strong>元素:</strong> {result.element}</p>
                <p><strong>含义:</strong> {result.meaning}</p>
                <p><strong>特质:</strong> {result.traits.join(', ')}</p>
                <p><strong>总问题数:</strong> {result.totalQuestions}</p>
                <p><strong>主导次数:</strong> {result.dominantCount}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold mb-2">描述</h3>
              <p className="text-gray-700">{result.description}</p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">塔罗牌统计</h3>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(result.cardCounts).map(([card, count]) => (
                  <div key={card} className="text-center p-2 bg-purple-100 rounded">
                    <div className="font-medium">{card}</div>
                    <div className="text-sm text-gray-600">{count} 次</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <button 
                onClick={resetTest}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                重新测试
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">塔罗牌测试流程验证</h1>
        <div className="bg-white rounded-lg p-6">
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    </div>
  );
}

