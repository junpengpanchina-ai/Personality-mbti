import { MASTER_TAROT_SYSTEM, TAROT_TEST_CONFIG } from '../../lib/tarot-master';

export default function TarotDataTest() {
  // 测试数据加载
  const testSystems = ['waite', 'thoth', 'psychological', 'modern'];
  const testDifficulties = ['beginner', 'intermediate', 'advanced', 'expert'];

  const getSystemQuestions = (system: string, difficulty: string) => {
    const questionCount = TAROT_TEST_CONFIG.difficultyLevels[difficulty as keyof typeof TAROT_TEST_CONFIG.difficultyLevels]?.questionCount || 5;
    const systemQuestions = MASTER_TAROT_SYSTEM.masterQuestions.filter(q => q.system === system);
    return systemQuestions.slice(0, questionCount);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">塔罗牌数据测试</h1>
        
        {/* 系统信息 */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">系统信息</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(MASTER_TAROT_SYSTEM.systems).map(([key, system]) => (
              <div key={key} className="border rounded p-4">
                <h3 className="font-semibold">{system.name}</h3>
                <p className="text-sm text-gray-600">{system.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 难度信息 */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">难度信息</h2>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(TAROT_TEST_CONFIG.difficultyLevels).map(([key, difficulty]) => (
              <div key={key} className="border rounded p-4">
                <h3 className="font-semibold">{difficulty.name}</h3>
                <p className="text-sm text-gray-600">{difficulty.description}</p>
                <p className="text-xs text-gray-500">{difficulty.questionCount} 个问题</p>
              </div>
            ))}
          </div>
        </div>

        {/* 问题数据测试 */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">问题数据测试</h2>
          <div className="space-y-4">
            {testSystems.map(system => (
              <div key={system} className="border rounded p-4">
                <h3 className="font-semibold mb-2">{system} 系统</h3>
                <div className="grid grid-cols-4 gap-2">
                  {testDifficulties.map(difficulty => {
                    const questions = getSystemQuestions(system, difficulty);
                    return (
                      <div key={difficulty} className="text-sm">
                        <span className="font-medium">{difficulty}:</span>
                        <span className={`ml-1 ${questions.length > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {questions.length} 个问题
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 总问题数 */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">总问题数</h2>
          <p className="text-lg">
            总问题数: <span className="font-bold text-blue-600">{MASTER_TAROT_SYSTEM.masterQuestions.length}</span>
          </p>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {testSystems.map(system => {
              const systemQuestions = MASTER_TAROT_SYSTEM.masterQuestions.filter(q => q.system === system);
              return (
                <div key={system} className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{systemQuestions.length}</div>
                  <div className="text-sm text-gray-600">{system}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

