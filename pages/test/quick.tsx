import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { translations, Translations } from '../../lib/translations';

// MBTI test questions data
const QUESTIONS = [
  {
    id: 1,
    question: "At a party, you would rather:",
    options: [
      "Spend time with a few close friends",
      "Meet and talk to many new people"
    ],
    dimension: "EI",
    explanations: [
      "Introversion: You prefer deep conversations and feel more comfortable and fulfilled in quiet environments with close friends.",
      "Extraversion: You enjoy social activities, love meeting new people, and gain energy from interacting with others."
    ],
    traits: [
      ["Reflective", "Thoughtful", "Independent", "Reserved"],
      ["Outgoing", "Energetic", "Social", "Expressive"]
    ]
  },
  {
    id: 2,
    question: "When making decisions, you prefer to:",
    options: [
      "Rely on facts and concrete information",
      "Consider possibilities and future implications"
    ],
    dimension: "SN",
    explanations: [
      "Sensing: You focus more on practical and concrete information, preferring to make decisions based on facts and past experience.",
      "Intuition: You pay more attention to possibilities and future trends, enjoying exploring new ideas and concepts."
    ],
    traits: [
      ["Practical", "Realistic", "Detail-oriented", "Concrete"],
      ["Imaginative", "Abstract", "Conceptual", "Innovative"]
    ]
  },
  {
    id: 3,
    question: "In a conflict, you tend to:",
    options: [
      "Focus on the logical aspects and fairness",
      "Consider people's feelings and relationships"
    ],
    dimension: "TF",
    explanations: [
      "Thinking: You focus more on logic and fairness, tending to analyze problems objectively and seek reasonable solutions.",
      "Feeling: You pay more attention to interpersonal relationships and emotional factors, considering others' feelings and harmony."
    ],
    traits: [
      ["Analytical", "Logical", "Objective", "Fair"],
      ["Empathetic", "Caring", "Harmonious", "Compassionate"]
    ]
  },
  {
    id: 4,
    question: "You prefer to:",
    options: [
      "Have things planned and organized",
      "Keep your options open and flexible"
    ],
    dimension: "JP",
    explanations: [
      "Judging: You prefer a planned and organized life, tending to plan ahead and complete tasks on time.",
      "Perceiving: You prefer a flexible and open lifestyle, tending to maintain freedom of choice."
    ],
    traits: [
      ["Organized", "Structured", "Decisive", "Planned"],
      ["Flexible", "Adaptable", "Spontaneous", "Open-minded"]
    ]
  },
  {
    id: 5,
    question: "When learning something new, you:",
    options: [
      "Prefer to work alone and think it through",
      "Like to discuss and collaborate with others"
    ],
    dimension: "EI",
    explanations: [
      "Introversion: You prefer independent thinking, understanding and mastering new knowledge through introspection and deep thinking.",
      "Extraversion: You learn through discussion and collaboration with others, gaining new insights from communication."
    ],
    traits: [
      ["Independent", "Reflective", "Focused", "Self-directed"],
      ["Collaborative", "Interactive", "Social", "Communicative"]
    ]
  },
  {
    id: 6,
    question: "You are more interested in:",
    options: [
      "What is real and practical",
      "What is possible and theoretical"
    ],
    dimension: "SN",
    explanations: [
      "Sensing: You focus more on reality and practicality, enjoying handling specific problems and practical applications.",
      "Intuition: You are more interested in theory and possibilities, enjoying exploring abstract concepts and future potential."
    ],
    traits: [
      ["Realistic", "Practical", "Concrete", "Present-focused"],
      ["Theoretical", "Imaginative", "Future-oriented", "Conceptual"]
    ]
  },
  {
    id: 7,
    question: "When giving feedback, you:",
    options: [
      "Focus on what needs to be improved",
      "Emphasize positive aspects first"
    ],
    dimension: "TF",
    explanations: [
      "Thinking: You focus more on objective improvement suggestions, tending to directly point out areas that need improvement.",
      "Feeling: You focus more on encouragement and support, tending to affirm positive aspects before making suggestions."
    ],
    traits: [
      ["Direct", "Objective", "Constructive", "Improvement-focused"],
      ["Supportive", "Encouraging", "Positive", "Relationship-focused"]
    ]
  },
  {
    id: 8,
    question: "You work better when:",
    options: [
      "You have clear deadlines and structure",
      "You can work at your own pace"
    ],
    dimension: "JP",
    explanations: [
      "Judging: You perform better in environments with clear goals and time arrangements, preferring structured environments.",
      "Perceiving: You perform better in flexible and free environments, preferring to arrange your own work pace."
    ],
    traits: [
      ["Structured", "Deadline-driven", "Organized", "Systematic"],
      ["Flexible", "Self-paced", "Adaptive", "Spontaneous"]
    ]
  },
  {
    id: 9,
    question: "In social situations, you:",
    options: [
      "Prefer smaller, intimate gatherings",
      "Enjoy large groups and parties"
    ],
    dimension: "EI",
    explanations: [
      "Introversion: You prefer smaller gatherings and feel more comfortable and at ease in intimate small groups.",
      "Extraversion: You enjoy large parties and love interacting and communicating with others in lively environments."
    ],
    traits: [
      ["Intimate", "Close-knit", "Personal", "Quiet"],
      ["Energetic", "Large-scale", "Public", "Vibrant"]
    ]
  },
  {
    id: 10,
    question: "You are more drawn to:",
    options: [
      "Concrete facts and details",
      "Big picture ideas and concepts"
    ],
    dimension: "SN",
    explanations: [
      "Sensing: You focus more on specific details and facts, enjoying handling specific information and data.",
      "Intuition: You focus more on overall concepts and macro perspectives, enjoying thinking about abstract ideas and possibilities."
    ],
    traits: [
      ["Detail-oriented", "Factual", "Specific", "Precise"],
      ["Big-picture", "Abstract", "Conceptual", "Visionary"]
    ]
  },
  {
    id: 11,
    question: "When someone is upset, you:",
    options: [
      "Try to solve their problem logically",
      "Focus on understanding their feelings"
    ],
    dimension: "TF",
    explanations: [
      "Thinking: You tend to analyze the root cause of problems, providing logical solutions and suggestions.",
      "Feeling: You focus more on the other person's feelings, tending to provide emotional support and understanding."
    ],
    traits: [
      ["Problem-solving", "Logical", "Solution-focused", "Analytical"],
      ["Emotionally supportive", "Understanding", "Compassionate", "Empathetic"]
    ]
  },
  {
    id: 12,
    question: "You prefer to:",
    options: [
      "Make decisions quickly and move on",
      "Take time to consider all options"
    ],
    dimension: "JP",
    explanations: [
      "Judging: You like to make decisions quickly and execute them, tending to solve problems and move forward as soon as possible.",
      "Perceiving: You prefer to take time to consider various options, tending to gather more information before making decisions."
    ],
    traits: [
      ["Decisive", "Quick", "Action-oriented", "Final"],
      ["Deliberate", "Thorough", "Exploratory", "Open-ended"]
    ]
  }
];

interface TestResult {
  type: string;
  scores: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
  percentages: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
}

export default function QuickTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedTrait, setSelectedTrait] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [t, setT] = useState<Translations>(translations.en);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    // 从localStorage获取保存的语言设置
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferred-language') || 'en';
      setCurrentLanguage(savedLanguage);
      setT(translations[savedLanguage] || translations.en);
    }
  }, []);

  // 监听语言变化，确保组件重新渲染
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'preferred-language' && e.newValue) {
        setCurrentLanguage(e.newValue);
        setT(translations[e.newValue] || translations.en);
        setForceUpdate(prev => prev + 1);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      
      // 定期检查语言变化（用于同页面内的语言切换）
      const interval = setInterval(() => {
        const savedLanguage = localStorage.getItem('preferred-language') || 'en';
        if (savedLanguage !== currentLanguage) {
          setCurrentLanguage(savedLanguage);
          setT(translations[savedLanguage] || translations.en);
          setForceUpdate(prev => prev + 1);
        }
      }, 1000);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(interval);
      };
    }
  }, [currentLanguage]);

  // 获取翻译后的题目
  const getTranslatedQuestion = (questionId: number) => {
    const questionMap = {
      1: { question: t.questions.party, options: t.questions.partyOptions },
      2: { question: t.questions.decisions, options: t.questions.decisionsOptions },
      3: { question: t.questions.conflict, options: t.questions.conflictOptions },
      4: { question: t.questions.preference, options: t.questions.preferenceOptions },
      5: { question: t.questions.learning, options: t.questions.learningOptions },
      6: { question: t.questions.interests, options: t.questions.interestsOptions },
      7: { question: t.questions.feedback, options: t.questions.feedbackOptions },
      8: { question: t.questions.workStyle, options: t.questions.workStyleOptions },
      9: { question: t.questions.socialSituations, options: t.questions.socialSituationsOptions },
      10: { question: t.questions.drawnTo, options: t.questions.drawnToOptions },
      11: { question: t.questions.someoneUpset, options: t.questions.someoneUpsetOptions },
      12: { question: t.questions.decisions2, options: t.questions.decisions2Options }
    };
    return questionMap[questionId as keyof typeof questionMap] || QUESTIONS[questionId - 1];
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    setSelectedTrait(null);
    
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Test completed, calculate results
      calculateResult(answers);
    }
  };


  const calculateResult = (finalAnswers: number[]) => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    finalAnswers.forEach((answer, index) => {
      const question = QUESTIONS[index];
      const dimension = question.dimension;
      
      if (answer === 0) {
        // Select first option
        if (dimension === 'EI') scores.E++;
        else if (dimension === 'SN') scores.S++;
        else if (dimension === 'TF') scores.T++;
        else if (dimension === 'JP') scores.J++;
      } else {
        // Select second option
        if (dimension === 'EI') scores.I++;
        else if (dimension === 'SN') scores.N++;
        else if (dimension === 'TF') scores.F++;
        else if (dimension === 'JP') scores.P++;
      }
    });

    // Calculate percentages
    const percentages = {
      E: Math.round((scores.E / 3) * 100),
      I: Math.round((scores.I / 3) * 100),
      S: Math.round((scores.S / 3) * 100),
      N: Math.round((scores.N / 3) * 100),
      T: Math.round((scores.T / 3) * 100),
      F: Math.round((scores.F / 3) * 100),
      J: Math.round((scores.J / 3) * 100),
      P: Math.round((scores.P / 3) * 100),
    };

    // Determine personality type
    const type = 
      (scores.E > scores.I ? 'E' : 'I') +
      (scores.S > scores.N ? 'S' : 'N') +
      (scores.T > scores.F ? 'T' : 'F') +
      (scores.J > scores.P ? 'J' : 'P');

    setResult({
      type,
      scores,
      percentages
    });
    setIsCompleted(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
    setResult(null);
  };


  if (isCompleted && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t.personalityType}: <span className="text-indigo-600">{result.type}</span>
              </h1>
              <p className="text-xl text-gray-600">
                {t.yourResult}
              </p>
            </div>

            {/* 维度分析 */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Extraversion (E) vs Introversion (I)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Extraversion</span>
                    <span>{result.percentages.E}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${result.percentages.E}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Introversion</span>
                    <span>{result.percentages.I}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Sensing (S) vs Intuition (N)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Sensing</span>
                    <span>{result.percentages.S}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${result.percentages.S}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Intuition</span>
                    <span>{result.percentages.N}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Thinking (T) vs Feeling (F)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Thinking</span>
                    <span>{result.percentages.T}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full" 
                      style={{ width: `${result.percentages.T}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Feeling</span>
                    <span>{result.percentages.F}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Judging (J) vs Perceiving (P)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Judging</span>
                    <span>{result.percentages.J}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{ width: `${result.percentages.J}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Perceiving</span>
                    <span>{result.percentages.P}%</span>
                  </div>
                </div>
              </div>
            </div>


            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetTest}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                {t.takeTestAgain}
              </button>
              <Link href="/" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center">
                {t.backToHome}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = getTranslatedQuestion(currentQuestion + 1);
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
             <div className="flex items-center justify-between mb-8">
               <Link href="/" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors bg-gray-100 hover:bg-indigo-50 px-4 py-2 rounded-lg font-medium">
                 <ArrowLeft className="h-5 w-5 mr-2" />
                 {t.backToHome}
               </Link>
          <div className="text-sm text-gray-600">
            {t.question} {currentQuestion + 1} {t.of} {QUESTIONS.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            {currentQ.question}
          </h2>

          {!showExplanation ? (
            <div className="space-y-4">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-6 text-left border-2 border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full mr-4 group-hover:border-indigo-500 transition-colors"></div>
                    <span className="text-lg text-gray-700 group-hover:text-indigo-700">
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {/* 显示选中的选项 */}
              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full mr-4 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-indigo-800">
                    Your choice: {currentQ.options[selectedAnswer!]}
                  </span>
                </div>
              </div>

              {/* 解析说明 */}
              <div 
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 cursor-pointer hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                onClick={handleNextQuestion}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Explanation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {currentQ.explanations[selectedAnswer!]}
                </p>
                
                {/* Professional Traits Selection */}
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-800 mb-3">Choose your professional traits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentQ.traits[selectedAnswer!].map((trait, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTrait(trait)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          selectedTrait === trait
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-white border-2 border-indigo-200 text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50'
                        }`}
                      >
                        {trait}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-500 text-center">
                  💡 Click to continue
                </div>
              </div>

              {/* 继续按钮 */}
              <div className="flex justify-center">
                <button
                  onClick={handleNextQuestion}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {currentQuestion < QUESTIONS.length - 1 ? t.next : t.submit}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
