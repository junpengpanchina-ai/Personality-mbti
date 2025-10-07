import { useState, useEffect } from 'react';
import { Star, Sparkles, Moon, Sun, Heart, Brain, BookOpen, Globe, Zap, Shield, Target, Users } from 'lucide-react';

interface TarotMasterReadingProps {
  system: string;
  difficulty: string;
  result: any;
  onReset: () => void;
}

export default function TarotMasterReading({ system, difficulty, result, onReset }: TarotMasterReadingProps) {
  const [currentView, setCurrentView] = useState<'overview' | 'detailed' | 'spread' | 'guidance'>('overview');
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // 系统信息
  const systemInfo = {
    waite: {
      name: '韦特塔罗系统',
      description: '基于Arthur Edward Waite的经典韦特塔罗牌系统',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
      reference: '《The Pictorial Key to the Tarot》'
    },
    thoth: {
      name: '托特塔罗系统',
      description: '基于Aleister Crowley的托特塔罗牌系统',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      reference: '《托特塔罗入门（11周年新修增订版）》'
    },
    psychological: {
      name: '荣格心理学塔罗',
      description: '基于荣格心理学的塔罗牌解读系统',
      icon: Heart,
      color: 'from-green-500 to-teal-600',
      reference: '《Jung and Tarot》by Sallie Nichols'
    },
    modern: {
      name: '现代数字塔罗',
      description: '适应数字时代的现代塔罗牌解读',
      icon: Globe,
      color: 'from-orange-500 to-red-600',
      reference: '《Tarot & Oracle Card Reading For Dummies》'
    }
  };

  const currentSystem = systemInfo[system as keyof typeof systemInfo];

  // 深度解读内容
  const detailedInterpretation = {
    'The Fool': {
      waite: {
        meaning: '新开始、自发性、纯真、冒险',
        personality: '自由精神、乐观、冒险、自发',
        advice: '拥抱新机会，信任你的直觉',
        career: '新职业道路、创意项目、创业',
        love: '新关系、新开始、有趣的连接',
        health: '新的健康习惯、心理清晰、活力',
        shadow: '鲁莽、缺乏方向、判断力差',
        integration: '平衡自发性与责任感'
      },
      thoth: {
        meaning: '纯粹意识、无限潜力、精神觉醒',
        personality: '纯真、开放、无限可能、精神觉醒',
        advice: '保持开放心态，探索无限可能',
        career: '精神导师、创意艺术家、哲学研究',
        love: '精神连接、灵魂伴侣、纯真爱情',
        health: '精神健康、冥想、内在平衡',
        shadow: '过度理想化、脱离现实',
        integration: '连接精神与物质世界'
      },
      psychological: {
        meaning: '自我发展、新身份形成、探索',
        personality: '好奇、开放、实验性、真实',
        advice: '探索你的身份，对新体验保持开放',
        career: '自我探索、创意表达、个人品牌',
        love: '真实连接、自我发现、关系探索',
        health: '心理健康、自我接纳、成长',
        shadow: '身份混乱、缺乏稳定性',
        integration: '发展稳定的自我认同'
      },
      modern: {
        meaning: '数字先锋、真实内容创作者、创业家',
        personality: '创新、真实、冒险、适应',
        advice: '开始数字项目，在线保持真实，拥抱创新',
        career: '数字创业、内容创作、社交媒体影响者',
        love: '数字关系中的真实、不害怕脆弱',
        health: '平衡数字和物理活动，远离屏幕休息',
        shadow: '数字成瘾、缺乏深度连接',
        integration: '平衡数字与真实生活'
      }
    }
  };

  const getCardInterpretation = (cardName: string, system: string) => {
    return detailedInterpretation[cardName as keyof typeof detailedInterpretation]?.[system as keyof typeof detailedInterpretation[typeof cardName]] || null;
  };

  const interpretation = getCardInterpretation(result.tarot, system);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 导航标签 */}
        <div className="flex flex-wrap justify-center mb-8">
          {[
            { key: 'overview', label: '概览', icon: Star },
            { key: 'detailed', label: '详细解读', icon: Sparkles },
            { key: 'spread', label: '占卜方法', icon: Moon },
            { key: 'guidance', label: '生活指导', icon: Sun }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setCurrentView(key as any)}
              className={`flex items-center px-4 py-2 mx-1 mb-2 rounded-lg font-medium transition-all duration-200 ${
                currentView === key
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* 概览视图 */}
        {currentView === 'overview' && (
          <div className="space-y-6">
            {/* 系统信息卡片 */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${currentSystem.color} text-white mr-4`}>
                  <currentSystem.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{currentSystem.name}</h3>
                  <p className="text-sm text-gray-500">{currentSystem.reference}</p>
                </div>
              </div>
              <p className="text-gray-600">{currentSystem.description}</p>
            </div>

            {/* 结果概览 */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🪄</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {result.tarot} × {result.mbti}
                </h2>
                <p className="text-lg text-gray-600">基于 {currentSystem.name} 的深度分析</p>
              </div>

              {/* 兼容性分数 */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">兼容性分析</h3>
                  <span className="text-3xl font-bold text-purple-600">{result.compatibility}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${result.compatibility}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  你的塔罗牌人格与MBTI类型展现出高度的内在一致性
                </p>
              </div>

              {/* 核心特质 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-purple-500" />
                    塔罗牌特质
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.traits.map((trait: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-blue-500" />
                    元素属性
                  </h4>
                  <div className="text-center">
                    <div className="text-3xl mb-2">
                      {result.element === 'Fire' ? '🔥' : result.element === 'Water' ? '💧' : result.element === 'Air' ? '💨' : '🌍'}
                    </div>
                    <p className="text-lg font-semibold text-gray-700">{result.element}</p>
                    <p className="text-sm text-gray-600">{result.meaning}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 详细解读视图 */}
        {currentView === 'detailed' && interpretation && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Sparkles className="h-6 w-6 mr-3 text-purple-500" />
                {result.tarot} 深度解读
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                      基本含义
                    </h4>
                    <p className="text-gray-700">{interpretation.meaning}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-green-500" />
                      人格特质
                    </h4>
                    <p className="text-gray-700">{interpretation.personality}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Star className="h-5 w-5 mr-2 text-purple-500" />
                      生活建议
                    </h4>
                    <p className="text-gray-700">{interpretation.advice}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-orange-500" />
                      职业指导
                    </h4>
                    <p className="text-gray-700">{interpretation.career}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-pink-500" />
                      爱情关系
                    </h4>
                    <p className="text-gray-700">{interpretation.love}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-teal-500" />
                      健康建议
                    </h4>
                    <p className="text-gray-700">{interpretation.health}</p>
                  </div>
                </div>
              </div>

              {/* 阴影面整合 */}
              <div className="mt-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Moon className="h-5 w-5 mr-2 text-gray-500" />
                  阴影面整合
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">阴影面</h5>
                    <p className="text-gray-600 text-sm">{interpretation.shadow}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">整合建议</h5>
                    <p className="text-gray-600 text-sm">{interpretation.integration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 占卜方法视图 */}
        {currentView === 'spread' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Moon className="h-6 w-6 mr-3 text-purple-500" />
                推荐占卜方法
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                    经典凯尔特十字
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">最经典的十张牌占卜法，提供全面的生活指导</p>
                  <div className="text-xs text-gray-500">
                    <div>⏱️ 30-45分钟</div>
                    <div>📚 适合：一般生活指导</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-purple-500" />
                    荣格阴影工作
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">基于荣格心理学的阴影整合占卜法</p>
                  <div className="text-xs text-gray-500">
                    <div>⏱️ 40-50分钟</div>
                    <div>📚 适合：个人成长</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 生活指导视图 */}
        {currentView === 'guidance' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Sun className="h-6 w-6 mr-3 text-purple-500" />
                个性化生活指导
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-green-500" />
                    职业发展
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">基于你的塔罗牌人格特质，推荐以下职业方向：</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 创意产业</li>
                    <li>• 数字营销</li>
                    <li>• 创业项目</li>
                    <li>• 内容创作</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-pink-500" />
                    人际关系
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">在人际关系中发挥你的优势：</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 保持真实和开放</li>
                    <li>• 分享你的创意想法</li>
                    <li>• 建立深度连接</li>
                    <li>• 支持他人成长</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-500" />
                    个人成长
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">持续发展的建议：</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 保持学习新技能</li>
                    <li>• 探索新的可能性</li>
                    <li>• 平衡理想与现实</li>
                    <li>• 培养耐心和坚持</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button 
            onClick={onReset}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            🔮 重新测试
          </button>
          <button 
            onClick={() => window.print()}
            className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            📄 保存结果
          </button>
        </div>
      </div>
    </div>
  );
}
