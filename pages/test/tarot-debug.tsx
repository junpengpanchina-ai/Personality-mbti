import { useState } from 'react';
import { MASTER_TAROT_SYSTEM, TAROT_TEST_CONFIG } from '../../lib/tarot-master';

export default function TarotDebug() {
  const [selectedSystem, setSelectedSystem] = useState('waite');
  const [selectedDifficulty, setSelectedDifficulty] = useState('beginner');

  const systemInfo = MASTER_TAROT_SYSTEM.systems[selectedSystem as keyof typeof MASTER_TAROT_SYSTEM.systems];
  const difficultyInfo = TAROT_TEST_CONFIG.difficultyLevels[selectedDifficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels];
  const questions = MASTER_TAROT_SYSTEM.masterQuestions.filter(q => q.system === selectedSystem);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">塔罗牌测试调试页面</h1>
        
        {/* 系统选择 */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">系统选择</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(MASTER_TAROT_SYSTEM.systems).map(([key, system]) => (
              <button
                key={key}
                onClick={() => setSelectedSystem(key)}
                className={`p-4 rounded-lg border-2 ${
                  selectedSystem === key 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h3 className="font-semibold">{system.name}</h3>
                <p className="text-sm text-gray-600">{system.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 难度选择 */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">难度选择</h2>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(TAROT_TEST_CONFIG.difficultyLevels).map(([key, difficulty]) => (
              <button
                key={key}
                onClick={() => setSelectedDifficulty(key)}
                className={`p-4 rounded-lg border-2 ${
                  selectedDifficulty === key 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h3 className="font-semibold">{difficulty.name}</h3>
                <p className="text-sm text-gray-600">{difficulty.description}</p>
                <p className="text-xs text-gray-500">{difficulty.questionCount} 个问题</p>
                <p className="text-xs text-gray-500">{difficulty.timeRequired}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 当前配置信息 */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">当前配置</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">选择的系统</h3>
              <p>{systemInfo?.name}</p>
              <p className="text-sm text-gray-600">{systemInfo?.description}</p>
            </div>
            <div>
              <h3 className="font-semibold">选择的难度</h3>
              <p>{difficultyInfo?.name}</p>
              <p className="text-sm text-gray-600">{difficultyInfo?.description}</p>
              <p className="text-sm text-gray-600">{difficultyInfo?.questionCount} 个问题</p>
            </div>
          </div>
        </div>

        {/* 问题列表 */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">可用问题</h2>
          <p className="text-sm text-gray-600 mb-4">
            系统: {selectedSystem} | 难度: {selectedDifficulty} | 总问题数: {questions.length}
          </p>
          <div className="space-y-4">
            {questions.slice(0, difficultyInfo?.questionCount || 5).map((question, index) => (
              <div key={question.id} className="border rounded-lg p-4">
                <h3 className="font-semibold">问题 {index + 1}: {question.question}</h3>
                <p className="text-sm text-gray-600 mb-2">类别: {question.category}</p>
                <p className="text-sm text-gray-600 mb-2">系统: {question.system}</p>
                <div className="text-sm">
                  <p className="font-medium">选项:</p>
                  <ul className="list-disc list-inside ml-4">
                    {question.options.slice(0, 3).map((option, optIndex) => (
                      <li key={optIndex} className="text-gray-600">{option}</li>
                    ))}
                    {question.options.length > 3 && (
                      <li className="text-gray-500">... 还有 {question.options.length - 3} 个选项</li>
                    )}
                  </ul>
                </div>
                <div className="text-sm mt-2">
                  <p className="font-medium">对应塔罗牌:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {question.tarotCards.slice(0, 5).map((card, cardIndex) => (
                      <span key={cardIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                        {card}
                      </span>
                    ))}
                    {question.tarotCards.length > 5 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{question.tarotCards.length - 5} 更多
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 测试链接 */}
        <div className="bg-blue-50 rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">测试链接</h2>
          <a 
            href="/test/tarot-enhanced"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            开始增强版塔罗牌测试
          </a>
        </div>
      </div>
    </div>
  );
}

