import React, { useState } from 'react';
import { MASTER_TAROT_SYSTEM, TAROT_TEST_CONFIG } from '../../lib/tarot-master';

export default function TarotResultDebug() {
  const [selectedSystem, setSelectedSystem] = useState('psychological');
  const [selectedDifficulty, setSelectedDifficulty] = useState('advanced');
  const [testAnswers, setTestAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<any>(null);

  const getSystemQuestions = (system: string, difficulty: string) => {
    const questionCount = TAROT_TEST_CONFIG.difficultyLevels[difficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels]?.questionCount || 5;
    const systemQuestions = MASTER_TAROT_SYSTEM.masterQuestions.filter(q => q.system === system);
    return systemQuestions.slice(0, questionCount);
  };

  const calculateResult = (answers: number[]) => {
    const systemInfo = MASTER_TAROT_SYSTEM.systems[selectedSystem as keyof typeof MASTER_TAROT_SYSTEM.systems];
    const difficultyInfo = TAROT_TEST_CONFIG.difficultyLevels[selectedDifficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels];
    const currentQuestions = getSystemQuestions(selectedSystem, selectedDifficulty);
    
    console.log('Debug Info:', {
      selectedSystem,
      selectedDifficulty,
      answers,
      currentQuestions: currentQuestions.length,
      systemInfo,
      difficultyInfo
    });
    
    // 基于答案计算塔罗牌
    const cardCounts: { [key: string]: number } = {};
    answers.forEach((answerIndex, questionIndex) => {
      if (currentQuestions[questionIndex] && currentQuestions[questionIndex].tarotCards[answerIndex]) {
        const cardName = currentQuestions[questionIndex].tarotCards[answerIndex];
        cardCounts[cardName] = (cardCounts[cardName] || 0) + 1;
      }
    });
    
    console.log('Card Counts:', cardCounts);
    
    // 找到出现次数最多的塔罗牌
    const dominantCard = Object.keys(cardCounts).reduce((a, b) => 
      cardCounts[a] > cardCounts[b] ? a : b, Object.keys(cardCounts)[0] || 'The Fool'
    );
    
    console.log('Dominant Card:', dominantCard);
    
    // 基于主导塔罗牌获取MBTI类型
    const mbtiMapping = MASTER_TAROT_SYSTEM.masterMBTIMapping[dominantCard as keyof typeof MASTER_TAROT_SYSTEM.masterMBTIMapping];
    const mbtiType = mbtiMapping?.mbtiTypes[0] || 'ENFP';
    
    // 计算兼容性分数
    const totalAnswers = answers.length;
    const dominantCount = cardCounts[dominantCard] || 0;
    const compatibility = Math.min(95, Math.max(60, Math.floor((dominantCount / totalAnswers) * 100)));
    
    const result = {
      system: selectedSystem,
      difficulty: selectedDifficulty,
      tarot: dominantCard,
      mbti: mbtiType,
      compatibility: compatibility,
      cardCounts: cardCounts,
      totalQuestions: totalAnswers,
      dominantCount: dominantCount,
      answers: answers
    };
    
    setResult(result);
  };

  const runTest = () => {
    // 生成随机答案进行测试
    const questionCount = TAROT_TEST_CONFIG.difficultyLevels[selectedDifficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels]?.questionCount || 5;
    const randomAnswers = Array.from({ length: questionCount }, () => Math.floor(Math.random() * 8));
    setTestAnswers(randomAnswers);
    calculateResult(randomAnswers);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">塔罗牌结果计算调试</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">测试配置</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">系统</label>
              <select 
                value={selectedSystem} 
                onChange={(e) => setSelectedSystem(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="waite">韦特塔罗系统</option>
                <option value="thoth">托特塔罗系统</option>
                <option value="psychological">荣格心理学塔罗</option>
                <option value="modern">现代数字塔罗</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">难度</label>
              <select 
                value={selectedDifficulty} 
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="beginner">初学者</option>
                <option value="intermediate">中级</option>
                <option value="advanced">高级</option>
                <option value="expert">专家级</option>
              </select>
            </div>
          </div>
          <button 
            onClick={runTest}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            运行测试
          </button>
        </div>

        {testAnswers.length > 0 && (
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">测试答案</h2>
            <div className="grid grid-cols-5 gap-2">
              {testAnswers.map((answer, index) => (
                <div key={index} className="text-center p-2 bg-gray-100 rounded">
                  <div className="text-sm text-gray-600">问题 {index + 1}</div>
                  <div className="font-bold">选项 {answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {result && (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">计算结果</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">基本信息</h3>
                <p><strong>系统:</strong> {result.system}</p>
                <p><strong>难度:</strong> {result.difficulty}</p>
                <p><strong>主导塔罗牌:</strong> {result.tarot}</p>
                <p><strong>MBTI类型:</strong> {result.mbti}</p>
                <p><strong>兼容性:</strong> {result.compatibility}%</p>
                <p><strong>总问题数:</strong> {result.totalQuestions}</p>
                <p><strong>主导牌出现次数:</strong> {result.dominantCount}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">塔罗牌统计</h3>
                <div className="space-y-1">
                  {Object.entries(result.cardCounts).map(([card, count]) => (
                    <div key={card} className="flex justify-between">
                      <span className="text-sm">{card}:</span>
                      <span className="font-bold">{count as number}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

