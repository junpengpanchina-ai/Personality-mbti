import { useState } from 'react';
import { MASTER_TAROT_SYSTEM, TAROT_TEST_CONFIG } from '../../lib/tarot-master';

export default function TarotSimple() {
  const [selectedSystem, setSelectedSystem] = useState('waite');
  const [selectedDifficulty, setSelectedDifficulty] = useState('beginner');
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // 获取问题
  const getSystemQuestions = (system: string, difficulty: string) => {
    const questionCount = TAROT_TEST_CONFIG.difficultyLevels[difficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels]?.questionCount || 5;
    const systemQuestions = MASTER_TAROT_SYSTEM.masterQuestions.filter(q => q.system === system);
    return systemQuestions.slice(0, questionCount);
  };

  const currentQuestions = getSystemQuestions(selectedSystem, selectedDifficulty);
  const currentQ = currentQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">简化塔罗牌测试</h1>
        
        {/* 控制面板 */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">测试配置</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">系统</label>
              <select 
                value={selectedSystem} 
                onChange={(e) => {
                  setSelectedSystem(e.target.value);
                  setCurrentQuestion(0);
                }}
                className="w-full p-2 border rounded"
              >
                <option value="waite">韦特塔罗</option>
                <option value="thoth">托特塔罗</option>
                <option value="psychological">荣格心理学</option>
                <option value="modern">现代数字</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">难度</label>
              <select 
                value={selectedDifficulty} 
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value);
                  setCurrentQuestion(0);
                }}
                className="w-full p-2 border rounded"
              >
                <option value="beginner">初学者 (5题)</option>
                <option value="intermediate">中级 (8题)</option>
                <option value="advanced">高级 (12题)</option>
                <option value="expert">专家级 (15题)</option>
              </select>
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            总问题数: {currentQuestions.length} | 当前问题: {currentQuestion + 1}
          </div>
        </div>

        {/* 问题显示 */}
        {currentQ ? (
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              问题 {currentQuestion + 1}: {currentQ.question}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              类别: {currentQ.category} | 系统: {currentQ.system}
            </p>
            
            <div className="space-y-2">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  className="w-full p-3 text-left border rounded hover:bg-gray-50"
                  onClick={() => {
                    if (currentQuestion < currentQuestions.length - 1) {
                      setCurrentQuestion(currentQuestion + 1);
                    } else {
                      alert('测试完成！');
                    }
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            
            <div className="mt-4">
              <p className="text-sm font-medium">对应塔罗牌:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {currentQ.tarotCards.map((card, index) => (
                  <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">
                    {card}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-600">没有找到问题数据</p>
            <p className="text-sm text-gray-500 mt-2">
              系统: {selectedSystem} | 难度: {selectedDifficulty}
            </p>
          </div>
        )}

        {/* 导航 */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          >
            上一题
          </button>
          <button
            onClick={() => setCurrentQuestion(Math.min(currentQuestions.length - 1, currentQuestion + 1))}
            disabled={currentQuestion >= currentQuestions.length - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            下一题
          </button>
        </div>
      </div>
    </div>
  );
}

