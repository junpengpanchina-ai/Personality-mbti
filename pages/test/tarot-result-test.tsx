import { useState } from 'react';
import { MASTER_TAROT_SYSTEM, TAROT_TEST_CONFIG } from '../../lib/tarot-master';

export default function TarotResultTest() {
  const [selectedSystem, setSelectedSystem] = useState('waite');
  const [selectedDifficulty, setSelectedDifficulty] = useState('beginner');
  const [testAnswers, setTestAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<any>(null);

  const getSystemQuestions = (system: string, difficulty: string) => {
    const questionCount = TAROT_TEST_CONFIG.difficultyLevels[difficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels]?.questionCount || 5;
    const systemQuestions = MASTER_TAROT_SYSTEM.masterQuestions.filter(q => q.system === system);
    return systemQuestions.slice(0, questionCount);
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
      'The Star': 'Air',
      'The Moon': 'Water',
      'The Sun': 'Fire',
      'Judgement': 'Fire',
      'The World': 'Earth'
    };
    return elements[cardName] || 'Air';
  };

  const getCardMeaning = (cardName: string) => {
    const meanings: { [key: string]: string } = {
      'The Fool': '纯真、冒险、新开始',
      'The Magician': '意志力、创造力、精神力量',
      'The High Priestess': '直觉、内在智慧、神秘知识',
      'The Empress': '丰盛、创造力、母性力量',
      'The Emperor': '权威、领导力、结构',
      'The Hierophant': '传统、智慧、精神指导',
      'The Lovers': '爱情、选择、和谐',
      'The Chariot': '意志力、胜利、控制',
      'Strength': '内在力量、勇气、耐心',
      'The Hermit': '内省、智慧、精神指导',
      'Wheel of Fortune': '命运、变化、机会',
      'Justice': '平衡、公正、真理',
      'The Hanged Man': '牺牲、等待、新视角',
      'Death': '转变、结束、重生',
      'Temperance': '平衡、调和、耐心',
      'The Devil': '束缚、诱惑、阴影',
      'The Star': '希望、灵感、精神指导',
      'The Moon': '直觉、幻觉、潜意识',
      'The Sun': '快乐、成功、活力',
      'Judgement': '觉醒、重生、宽恕',
      'The World': '完成、成就、旅行'
    };
    return meanings[cardName] || '神秘力量';
  };

  const getCardTraits = (cardName: string) => {
    const traits: { [key: string]: string[] } = {
      'The Fool': ['纯真', '冒险', '乐观', '自由'],
      'The Magician': ['意志坚强', '创造力强', '精神力量', '显化能力'],
      'The High Priestess': ['直觉敏锐', '内在智慧', '神秘感', '深度洞察'],
      'The Empress': ['丰盛', '创造力', '母性', '自然'],
      'The Emperor': ['权威', '领导力', '结构', '控制'],
      'The Hierophant': ['传统', '智慧', '精神指导', '教学'],
      'The Lovers': ['爱情', '选择', '和谐', '关系'],
      'The Chariot': ['意志力', '胜利', '控制', '决心'],
      'Strength': ['内在力量', '勇气', '耐心', '温柔'],
      'The Hermit': ['内省', '智慧', '精神指导', '孤独'],
      'Wheel of Fortune': ['命运', '变化', '机会', '循环'],
      'Justice': ['平衡', '公正', '真理', '法律'],
      'The Hanged Man': ['牺牲', '等待', '新视角', '投降'],
      'Death': ['转变', '结束', '重生', '变化'],
      'Temperance': ['平衡', '调和', '耐心', '节制'],
      'The Devil': ['束缚', '诱惑', '阴影', '恐惧'],
      'The Star': ['希望', '灵感', '精神指导', '梦想'],
      'The Moon': ['直觉', '幻觉', '潜意识', '神秘'],
      'The Sun': ['快乐', '成功', '活力', '乐观'],
      'Judgement': ['觉醒', '重生', '宽恕', '救赎'],
      'The World': ['完成', '成就', '旅行', '成功']
    };
    return traits[cardName] || ['神秘', '力量', '智慧'];
  };

  const calculateResult = (answers: number[]) => {
    const systemInfo = MASTER_TAROT_SYSTEM.systems[selectedSystem as keyof typeof MASTER_TAROT_SYSTEM.systems];
    const currentQuestions = getSystemQuestions(selectedSystem, selectedDifficulty);
    
    // 基于答案计算塔罗牌
    const cardCounts: { [key: string]: number } = {};
    answers.forEach((answerIndex, questionIndex) => {
      if (currentQuestions[questionIndex] && currentQuestions[questionIndex].tarotCards[answerIndex]) {
        const cardName = currentQuestions[questionIndex].tarotCards[answerIndex];
        cardCounts[cardName] = (cardCounts[cardName] || 0) + 1;
      }
    });
    
    // 找到出现次数最多的塔罗牌
    const dominantCard = Object.keys(cardCounts).reduce((a, b) => 
      cardCounts[a] > cardCounts[b] ? a : b, Object.keys(cardCounts)[0] || 'The Fool'
    );
    
    // 基于主导塔罗牌获取MBTI类型
    const mbtiMapping = MASTER_TAROT_SYSTEM.masterMBTIMapping[dominantCard as keyof typeof MASTER_TAROT_SYSTEM.masterMBTIMapping];
    const mbtiType = mbtiMapping?.mbtiTypes[0] || 'ENFP';
    
    // 计算兼容性分数
    const totalAnswers = answers.length;
    const dominantCount = cardCounts[dominantCard] || 0;
    const compatibility = Math.min(95, Math.max(60, Math.floor((dominantCount / totalAnswers) * 100)));
    
    const element = getCardElement(dominantCard);
    const meaning = getCardMeaning(dominantCard);
    const traits = getCardTraits(dominantCard);
    
    const description = `基于${systemInfo?.name}的深度分析，你的塔罗牌人格展现出${meaning}的特质。通过${totalAnswers}个问题的深度探索，你与${dominantCard}产生了强烈的共鸣。`;
    
    return {
      system: selectedSystem,
      difficulty: selectedDifficulty,
      tarot: dominantCard,
      mbti: mbtiType,
      compatibility: compatibility,
      description: description,
      element: element,
      meaning: meaning,
      traits: traits,
      cardCounts: cardCounts,
      totalQuestions: totalAnswers,
      dominantCount: dominantCount
    };
  };

  const runTest = () => {
    const currentQuestions = getSystemQuestions(selectedSystem, selectedDifficulty);
    const answers = currentQuestions.map(() => Math.floor(Math.random() * 3)); // 随机答案
    setTestAnswers(answers);
    const testResult = calculateResult(answers);
    setResult(testResult);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">塔罗牌结果测试</h1>
        
        {/* 控制面板 */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">测试配置</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">系统</label>
              <select 
                value={selectedSystem} 
                onChange={(e) => setSelectedSystem(e.target.value)}
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
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="beginner">初学者 (5题)</option>
                <option value="intermediate">中级 (8题)</option>
                <option value="advanced">高级 (12题)</option>
                <option value="expert">专家级 (15题)</option>
              </select>
            </div>
          </div>
          
          <button 
            onClick={runTest}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            运行测试
          </button>
        </div>

        {/* 测试答案 */}
        {testAnswers.length > 0 && (
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">测试答案</h2>
            <div className="grid grid-cols-5 gap-2">
              {testAnswers.map((answer, index) => (
                <div key={index} className="text-center p-2 bg-gray-100 rounded">
                  问题 {index + 1}: {answer}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 结果显示 */}
        {result && (
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
                <p><strong>元素:</strong> {result.element}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">塔罗牌信息</h3>
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
          </div>
        )}
      </div>
    </div>
  );
}

