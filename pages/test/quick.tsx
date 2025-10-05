import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import AdGate from '../../components/AdGate';

// MBTI 测试题目数据
const QUESTIONS = [
  {
    id: 1,
    question: "At a party, you would rather:",
    options: [
      "Spend time with a few close friends",
      "Meet and talk to many new people"
    ],
    dimension: "EI"
  },
  {
    id: 2,
    question: "When making decisions, you prefer to:",
    options: [
      "Rely on facts and concrete information",
      "Consider possibilities and future implications"
    ],
    dimension: "SN"
  },
  {
    id: 3,
    question: "In a conflict, you tend to:",
    options: [
      "Focus on the logical aspects and fairness",
      "Consider people's feelings and relationships"
    ],
    dimension: "TF"
  },
  {
    id: 4,
    question: "You prefer to:",
    options: [
      "Have things planned and organized",
      "Keep your options open and flexible"
    ],
    dimension: "JP"
  },
  {
    id: 5,
    question: "When learning something new, you:",
    options: [
      "Prefer to work alone and think it through",
      "Like to discuss and collaborate with others"
    ],
    dimension: "EI"
  },
  {
    id: 6,
    question: "You are more interested in:",
    options: [
      "What is real and practical",
      "What is possible and theoretical"
    ],
    dimension: "SN"
  },
  {
    id: 7,
    question: "When giving feedback, you:",
    options: [
      "Focus on what needs to be improved",
      "Emphasize positive aspects first"
    ],
    dimension: "TF"
  },
  {
    id: 8,
    question: "You work better when:",
    options: [
      "You have clear deadlines and structure",
      "You can work at your own pace"
    ],
    dimension: "JP"
  },
  {
    id: 9,
    question: "In social situations, you:",
    options: [
      "Prefer smaller, intimate gatherings",
      "Enjoy large groups and parties"
    ],
    dimension: "EI"
  },
  {
    id: 10,
    question: "You are more drawn to:",
    options: [
      "Concrete facts and details",
      "Big picture ideas and concepts"
    ],
    dimension: "SN"
  },
  {
    id: 11,
    question: "When someone is upset, you:",
    options: [
      "Try to solve their problem logically",
      "Focus on understanding their feelings"
    ],
    dimension: "TF"
  },
  {
    id: 12,
    question: "You prefer to:",
    options: [
      "Make decisions quickly and move on",
      "Take time to consider all options"
    ],
    dimension: "JP"
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
  const [showAdGate, setShowAdGate] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    // 自动进入下一题
    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // 测试完成，计算结果
        calculateResult(newAnswers);
      }
    }, 500);
  };

  const calculateResult = (finalAnswers: number[]) => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    finalAnswers.forEach((answer, index) => {
      const question = QUESTIONS[index];
      const dimension = question.dimension;
      
      if (answer === 0) {
        // 选择第一个选项
        if (dimension === 'EI') scores.E++;
        else if (dimension === 'SN') scores.S++;
        else if (dimension === 'TF') scores.T++;
        else if (dimension === 'JP') scores.J++;
      } else {
        // 选择第二个选项
        if (dimension === 'EI') scores.I++;
        else if (dimension === 'SN') scores.N++;
        else if (dimension === 'TF') scores.F++;
        else if (dimension === 'JP') scores.P++;
      }
    });

    // 计算百分比
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

    // 确定人格类型
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
    // 显示广告门槛
    setShowAdGate(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
    setResult(null);
    setShowAdGate(false);
  };

  const handleAdComplete = () => {
    setShowAdGate(false);
    setIsCompleted(true);
  };

  if (isCompleted && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Your Personality Type: <span className="text-indigo-600">{result.type}</span>
              </h1>
              <p className="text-xl text-gray-600">
                Congratulations! You've completed the MBTI Quick Test.
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
                Take Test Again
              </button>
              <Link href="/">
                <a className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center">
                  Back to Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {showAdGate && (
        <AdGate onComplete={handleAdComplete} duration={10} />
      )}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <a className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </a>
          </Link>
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {QUESTIONS.length}
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
        </div>
      </div>
    </div>
  );
}
