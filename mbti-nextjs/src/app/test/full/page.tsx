'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// 完整的 MBTI 测试题目（93题）
const FULL_QUESTIONS = [
  // EI 维度题目 (24题)
  { id: 1, question: "At a party, you would rather:", options: ["Spend time with a few close friends", "Meet and talk to many new people"], dimension: "EI" },
  { id: 2, question: "You prefer to work:", options: ["In a team with others", "Alone on your own projects"], dimension: "EI" },
  { id: 3, question: "When you have a problem, you:", options: ["Talk it through with friends", "Think about it quietly by yourself"], dimension: "EI" },
  { id: 4, question: "You get energy from:", options: ["Being around people", "Having quiet time alone"], dimension: "EI" },
  { id: 5, question: "In meetings, you:", options: ["Speak up frequently", "Listen more than you speak"], dimension: "EI" },
  { id: 6, question: "You prefer to:", options: ["Have many acquaintances", "Have a few close friends"], dimension: "EI" },
  { id: 7, question: "When making decisions, you:", options: ["Discuss with others first", "Think it through alone first"], dimension: "EI" },
  { id: 8, question: "You are more comfortable:", options: ["In large groups", "In small, intimate settings"], dimension: "EI" },
  { id: 9, question: "You prefer to learn by:", options: ["Discussing with others", "Reading and thinking quietly"], dimension: "EI" },
  { id: 10, question: "At work, you:", options: ["Enjoy frequent interaction with colleagues", "Prefer to focus on tasks with minimal interruption"], dimension: "EI" },
  { id: 11, question: "You recharge by:", options: ["Going out with friends", "Staying home and relaxing"], dimension: "EI" },
  { id: 12, question: "You are more likely to:", options: ["Call someone to discuss an idea", "Write down your thoughts first"], dimension: "EI" },
  { id: 13, question: "In social situations, you:", options: ["Initiate conversations", "Wait for others to approach you"], dimension: "EI" },
  { id: 14, question: "You prefer to:", options: ["Share your ideas with many people", "Develop your ideas privately first"], dimension: "EI" },
  { id: 15, question: "You are more energized by:", options: ["Active, busy environments", "Quiet, peaceful environments"], dimension: "EI" },
  { id: 16, question: "When you have free time, you:", options: ["Plan activities with others", "Enjoy solitary activities"], dimension: "EI" },
  { id: 17, question: "You prefer to communicate:", options: ["Verbally and in person", "Through writing and text"], dimension: "EI" },
  { id: 18, question: "You are more comfortable:", options: ["Speaking in front of groups", "Working behind the scenes"], dimension: "EI" },
  { id: 19, question: "You prefer to:", options: ["Have a wide social network", "Have deep, meaningful relationships"], dimension: "EI" },
  { id: 20, question: "You get more ideas from:", options: ["Brainstorming with others", "Quiet reflection"], dimension: "EI" },
  { id: 21, question: "You prefer to:", options: ["Be the center of attention", "Stay in the background"], dimension: "EI" },
  { id: 22, question: "You are more likely to:", options: ["Make friends easily", "Take time to develop close friendships"], dimension: "EI" },
  { id: 23, question: "You prefer to:", options: ["Work in open, collaborative spaces", "Have your own private workspace"], dimension: "EI" },
  { id: 24, question: "You are more comfortable:", options: ["In large, busy cities", "In quiet, smaller communities"], dimension: "EI" },

  // SN 维度题目 (24题)
  { id: 25, question: "You are more interested in:", options: ["What is real and practical", "What is possible and theoretical"], dimension: "SN" },
  { id: 26, question: "You prefer to focus on:", options: ["Facts and details", "Ideas and concepts"], dimension: "SN" },
  { id: 27, question: "When learning, you prefer:", options: ["Step-by-step instructions", "Understanding the big picture first"], dimension: "SN" },
  { id: 28, question: "You are more drawn to:", options: ["Concrete examples", "Abstract theories"], dimension: "SN" },
  { id: 29, question: "You prefer to work with:", options: ["Established methods", "New and innovative approaches"], dimension: "SN" },
  { id: 30, question: "You are more interested in:", options: ["How things work in practice", "How things could work in theory"], dimension: "SN" },
  { id: 31, question: "You prefer to:", options: ["Follow proven procedures", "Explore new possibilities"], dimension: "SN" },
  { id: 32, question: "You are more comfortable with:", options: ["Specific, detailed plans", "General, flexible guidelines"], dimension: "SN" },
  { id: 33, question: "You prefer to learn by:", options: ["Doing and experiencing", "Reading and studying"], dimension: "SN" },
  { id: 34, question: "You are more interested in:", options: ["Current reality", "Future possibilities"], dimension: "SN" },
  { id: 35, question: "You prefer to work with:", options: ["Tangible, concrete things", "Abstract, conceptual ideas"], dimension: "SN" },
  { id: 36, question: "You are more drawn to:", options: ["Practical applications", "Theoretical frameworks"], dimension: "SN" },
  { id: 37, question: "You prefer to focus on:", options: ["What is happening now", "What might happen in the future"], dimension: "SN" },
  { id: 38, question: "You are more comfortable with:", options: ["Familiar situations", "New and unfamiliar situations"], dimension: "SN" },
  { id: 39, question: "You prefer to:", options: ["Build on what exists", "Create something entirely new"], dimension: "SN" },
  { id: 40, question: "You are more interested in:", options: ["How things are", "How things could be"], dimension: "SN" },
  { id: 41, question: "You prefer to work with:", options: ["Proven techniques", "Experimental methods"], dimension: "SN" },
  { id: 42, question: "You are more drawn to:", options: ["Practical solutions", "Creative solutions"], dimension: "SN" },
  { id: 43, question: "You prefer to focus on:", options: ["Immediate results", "Long-term potential"], dimension: "SN" },
  { id: 44, question: "You are more comfortable with:", options: ["Clear, specific instructions", "General, open-ended tasks"], dimension: "SN" },
  { id: 45, question: "You prefer to:", options: ["Follow established patterns", "Break new ground"], dimension: "SN" },
  { id: 46, question: "You are more interested in:", options: ["What has been proven", "What is being explored"], dimension: "SN" },
  { id: 47, question: "You prefer to work with:", options: ["Concrete data", "Abstract concepts"], dimension: "SN" },
  { id: 48, question: "You are more drawn to:", options: ["Practical experience", "Theoretical knowledge"], dimension: "SN" },

  // TF 维度题目 (24题)
  { id: 49, question: "When making decisions, you:", options: ["Focus on logic and analysis", "Consider people's feelings"], dimension: "TF" },
  { id: 50, question: "You are more concerned with:", options: ["Being right", "Being fair"], dimension: "TF" },
  { id: 51, question: "When giving feedback, you:", options: ["Focus on what needs improvement", "Emphasize positive aspects first"], dimension: "TF" },
  { id: 52, question: "You prefer to:", options: ["Be direct and honest", "Be diplomatic and tactful"], dimension: "TF" },
  { id: 53, question: "You are more motivated by:", options: ["Achievement and success", "Helping and supporting others"], dimension: "TF" },
  { id: 54, question: "When someone is upset, you:", options: ["Try to solve their problem", "Focus on understanding their feelings"], dimension: "TF" },
  { id: 55, question: "You prefer to:", options: ["Be objective and impartial", "Be understanding and supportive"], dimension: "TF" },
  { id: 56, question: "You are more concerned with:", options: ["Efficiency and results", "Harmony and relationships"], dimension: "TF" },
  { id: 57, question: "When making choices, you:", options: ["Analyze the pros and cons", "Consider how it affects others"], dimension: "TF" },
  { id: 58, question: "You prefer to:", options: ["Be firm and decisive", "Be flexible and accommodating"], dimension: "TF" },
  { id: 59, question: "You are more interested in:", options: ["Competition and winning", "Cooperation and teamwork"], dimension: "TF" },
  { id: 60, question: "When dealing with conflict, you:", options: ["Address the issues directly", "Focus on maintaining relationships"], dimension: "TF" },
  { id: 61, question: "You prefer to:", options: ["Be critical and analytical", "Be supportive and encouraging"], dimension: "TF" },
  { id: 62, question: "You are more motivated by:", options: ["Personal achievement", "Contributing to others' success"], dimension: "TF" },
  { id: 63, question: "When evaluating others, you:", options: ["Focus on their performance", "Consider their circumstances"], dimension: "TF" },
  { id: 64, question: "You prefer to:", options: ["Be straightforward", "Be considerate of others' feelings"], dimension: "TF" },
  { id: 65, question: "You are more concerned with:", options: ["Truth and accuracy", "Harmony and peace"], dimension: "TF" },
  { id: 66, question: "When making decisions, you:", options: ["Rely on logic and analysis", "Consider values and principles"], dimension: "TF" },
  { id: 67, question: "You prefer to:", options: ["Be competitive", "Be collaborative"], dimension: "TF" },
  { id: 68, question: "You are more interested in:", options: ["Being right", "Being liked"], dimension: "TF" },
  { id: 69, question: "When giving advice, you:", options: ["Focus on what should be done", "Consider how the person feels"], dimension: "TF" },
  { id: 70, question: "You prefer to:", options: ["Be objective", "Be empathetic"], dimension: "TF" },
  { id: 71, question: "You are more motivated by:", options: ["Success and recognition", "Making a difference for others"], dimension: "TF" },
  { id: 72, question: "When dealing with problems, you:", options: ["Focus on solutions", "Focus on understanding"], dimension: "TF" },

  // JP 维度题目 (21题)
  { id: 73, question: "You prefer to:", options: ["Have things planned and organized", "Keep your options open and flexible"], dimension: "JP" },
  { id: 74, question: "You work better when:", options: ["You have clear deadlines and structure", "You can work at your own pace"], dimension: "JP" },
  { id: 75, question: "You prefer to:", options: ["Make decisions quickly", "Take time to consider all options"], dimension: "JP" },
  { id: 76, question: "You are more comfortable with:", options: ["Having a plan", "Being spontaneous"], dimension: "JP" },
  { id: 77, question: "You prefer to:", options: ["Finish one task before starting another", "Work on multiple tasks simultaneously"], dimension: "JP" },
  { id: 78, question: "You are more comfortable with:", options: ["Clear rules and procedures", "Flexible guidelines"], dimension: "JP" },
  { id: 79, question: "You prefer to:", options: ["Have a schedule", "Be flexible with your time"], dimension: "JP" },
  { id: 80, question: "You work better when:", options: ["You know what's expected", "You can explore and discover"], dimension: "JP" },
  { id: 81, question: "You prefer to:", options: ["Be decisive", "Keep your options open"], dimension: "JP" },
  { id: 82, question: "You are more comfortable with:", options: ["Having closure", "Keeping things open-ended"], dimension: "JP" },
  { id: 83, question: "You prefer to:", options: ["Plan ahead", "Adapt as you go"], dimension: "JP" },
  { id: 84, question: "You work better when:", options: ["You have a clear structure", "You have freedom to explore"], dimension: "JP" },
  { id: 85, question: "You prefer to:", options: ["Be organized", "Be adaptable"], dimension: "JP" },
  { id: 86, question: "You are more comfortable with:", options: ["Having control", "Being flexible"], dimension: "JP" },
  { id: 87, question: "You prefer to:", options: ["Finish what you start", "Start new things"], dimension: "JP" },
  { id: 88, question: "You work better when:", options: ["You have deadlines", "You have flexibility"], dimension: "JP" },
  { id: 89, question: "You prefer to:", options: ["Be prepared", "Be spontaneous"], dimension: "JP" },
  { id: 90, question: "You are more comfortable with:", options: ["Having a routine", "Having variety"], dimension: "JP" },
  { id: 91, question: "You prefer to:", options: ["Make lists", "Go with the flow"], dimension: "JP" },
  { id: 92, question: "You work better when:", options: ["You have clear goals", "You can explore possibilities"], dimension: "JP" },
  { id: 93, question: "You prefer to:", options: ["Be systematic", "Be flexible"], dimension: "JP" }
];

export default function FullTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < FULL_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    answers.forEach((answer, index) => {
      const question = FULL_QUESTIONS[index];
      const dimension = question.dimension;
      
      if (answer === 0) {
        if (dimension === 'EI') scores.E++;
        else if (dimension === 'SN') scores.S++;
        else if (dimension === 'TF') scores.T++;
        else if (dimension === 'JP') scores.J++;
      } else {
        if (dimension === 'EI') scores.I++;
        else if (dimension === 'SN') scores.N++;
        else if (dimension === 'TF') scores.F++;
        else if (dimension === 'JP') scores.P++;
      }
    });

    const type = 
      (scores.E > scores.I ? 'E' : 'I') +
      (scores.S > scores.N ? 'S' : 'N') +
      (scores.T > scores.F ? 'T' : 'F') +
      (scores.J > scores.P ? 'J' : 'P');

    setResult({ type, scores });
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
                Congratulations! You've completed the full MBTI assessment.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = FULL_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / FULL_QUESTIONS.length) * 100;
  const isAnswered = answers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {FULL_QUESTIONS.length}
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

          <div className="space-y-4 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-6 text-left border-2 rounded-lg transition-all duration-200 group ${
                  answers[currentQuestion] === index
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 border-2 rounded-full mr-4 transition-colors ${
                    answers[currentQuestion] === index
                      ? 'border-indigo-500 bg-indigo-500'
                      : 'border-gray-300 group-hover:border-indigo-500'
                  }`}>
                    {answers[currentQuestion] === index && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                  <span className={`text-lg ${
                    answers[currentQuestion] === index
                      ? 'text-indigo-700'
                      : 'text-gray-700 group-hover:text-indigo-700'
                  }`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Previous
            </button>

            <button
              onClick={nextQuestion}
              disabled={!isAnswered}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                isAnswered
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === FULL_QUESTIONS.length - 1 ? 'Complete Test' : 'Next'}
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
