import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import AdGate from '../../components/AdGate';
import AdBanner from '../../components/AdBanner';
import { adGateUtils } from '../../lib/ads';

// Full MBTI test questions (93 questions)
const FULL_QUESTIONS = [
  // Extraversion vs Introversion (31 questions)
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
    question: "When working on a project, you prefer to:",
    options: [
      "Work alone and think things through",
      "Collaborate with others and discuss ideas"
    ],
    dimension: "EI"
  },
  {
    id: 3,
    question: "In social situations, you:",
    options: [
      "Prefer smaller, intimate gatherings",
      "Enjoy large groups and parties"
    ],
    dimension: "EI"
  },
  {
    id: 4,
    question: "When learning something new, you:",
    options: [
      "Prefer to work alone and think it through",
      "Like to discuss and collaborate with others"
    ],
    dimension: "EI"
  },
  {
    id: 5,
    question: "Your ideal weekend involves:",
    options: [
      "Quiet time at home with a good book",
      "Social activities with friends"
    ],
    dimension: "EI"
  },
  {
    id: 6,
    question: "When making decisions, you:",
    options: [
      "Think it through alone first",
      "Discuss with others to get input"
    ],
    dimension: "EI"
  },
  {
    id: 7,
    question: "At work, you prefer:",
    options: [
      "Independent work with minimal interaction",
      "Team collaboration and regular meetings"
    ],
    dimension: "EI"
  },
  {
    id: 8,
    question: "When you have free time, you:",
    options: [
      "Enjoy solitary activities like reading or hobbies",
      "Seek out social activities and company"
    ],
    dimension: "EI"
  },
  {
    id: 9,
    question: "In a group discussion, you:",
    options: [
      "Listen more than you speak",
      "Actively participate and share your thoughts"
    ],
    dimension: "EI"
  },
  {
    id: 10,
    question: "Your energy comes from:",
    options: [
      "Quiet reflection and internal processing",
      "Interaction with others and external stimulation"
    ],
    dimension: "EI"
  },
  {
    id: 11,
    question: "When meeting new people, you:",
    options: [
      "Take time to observe before engaging",
      "Immediately start conversations"
    ],
    dimension: "EI"
  },
  {
    id: 12,
    question: "Your ideal work environment is:",
    options: [
      "Quiet and private",
      "Open and collaborative"
    ],
    dimension: "EI"
  },
  {
    id: 13,
    question: "When you need to recharge, you:",
    options: [
      "Spend time alone",
      "Spend time with others"
    ],
    dimension: "EI"
  },
  {
    id: 14,
    question: "In a classroom setting, you:",
    options: [
      "Prefer to listen and take notes",
      "Like to ask questions and participate"
    ],
    dimension: "EI"
  },
  {
    id: 15,
    question: "When solving problems, you:",
    options: [
      "Work through them internally first",
      "Talk through them with others"
    ],
    dimension: "EI"
  },
  {
    id: 16,
    question: "Your communication style is:",
    options: [
      "Thoughtful and deliberate",
      "Spontaneous and expressive"
    ],
    dimension: "EI"
  },
  {
    id: 17,
    question: "When you're stressed, you:",
    options: [
      "Withdraw to process alone",
      "Seek support from others"
    ],
    dimension: "EI"
  },
  {
    id: 18,
    question: "Your ideal vacation is:",
    options: [
      "A quiet retreat in nature",
      "An active trip with friends"
    ],
    dimension: "EI"
  },
  {
    id: 19,
    question: "When giving presentations, you:",
    options: [
      "Prefer smaller, intimate groups",
      "Enjoy speaking to large audiences"
    ],
    dimension: "EI"
  },
  {
    id: 20,
    question: "Your social media usage is:",
    options: [
      "Minimal and selective",
      "Active and frequent"
    ],
    dimension: "EI"
  },
  {
    id: 21,
    question: "When networking, you:",
    options: [
      "Prefer one-on-one conversations",
      "Enjoy group interactions"
    ],
    dimension: "EI"
  },
  {
    id: 22,
    question: "Your ideal team size is:",
    options: [
      "Small and focused",
      "Large and diverse"
    ],
    dimension: "EI"
  },
  {
    id: 23,
    question: "When you have an idea, you:",
    options: [
      "Develop it privately first",
      "Share it immediately with others"
    ],
    dimension: "EI"
  },
  {
    id: 24,
    question: "Your ideal workspace is:",
    options: [
      "Private office or quiet corner",
      "Open area with others around"
    ],
    dimension: "EI"
  },
  {
    id: 25,
    question: "When you need advice, you:",
    options: [
      "Research and think it through yourself",
      "Ask multiple people for their opinions"
    ],
    dimension: "EI"
  },
  {
    id: 26,
    question: "Your ideal meeting format is:",
    options: [
      "Small group or one-on-one",
      "Large group with many participants"
    ],
    dimension: "EI"
  },
  {
    id: 27,
    question: "When you're excited about something, you:",
    options: [
      "Share it with a few close people",
      "Tell everyone about it"
    ],
    dimension: "EI"
  },
  {
    id: 28,
    question: "Your ideal party size is:",
    options: [
      "Small gathering of close friends",
      "Large party with many people"
    ],
    dimension: "EI"
  },
  {
    id: 29,
    question: "When you need to focus, you:",
    options: [
      "Need complete quiet and solitude",
      "Can work with background noise and people"
    ],
    dimension: "EI"
  },
  {
    id: 30,
    question: "Your ideal communication method is:",
    options: [
      "Written (email, text)",
      "Verbal (phone, in-person)"
    ],
    dimension: "EI"
  },
  {
    id: 31,
    question: "When you're in a new environment, you:",
    options: [
      "Take time to observe and adapt",
      "Immediately start exploring and engaging"
    ],
    dimension: "EI"
  },

  // Sensing vs Intuition (31 questions)
  {
    id: 32,
    question: "When making decisions, you prefer to:",
    options: [
      "Rely on facts and concrete information",
      "Consider possibilities and future implications"
    ],
    dimension: "SN"
  },
  {
    id: 33,
    question: "You are more interested in:",
    options: [
      "What is real and practical",
      "What is possible and theoretical"
    ],
    dimension: "SN"
  },
  {
    id: 34,
    question: "When learning, you prefer:",
    options: [
      "Step-by-step instructions",
      "Big picture concepts first"
    ],
    dimension: "SN"
  },
  {
    id: 35,
    question: "You are more drawn to:",
    options: [
      "Concrete facts and details",
      "Big picture ideas and concepts"
    ],
    dimension: "SN"
  },
  {
    id: 36,
    question: "When planning a project, you:",
    options: [
      "Focus on specific steps and timelines",
      "Think about the overall vision and goals"
    ],
    dimension: "SN"
  },
  {
    id: 37,
    question: "You prefer information that is:",
    options: [
      "Specific and detailed",
      "General and conceptual"
    ],
    dimension: "SN"
  },
  {
    id: 38,
    question: "When solving problems, you:",
    options: [
      "Use proven methods and past experience",
      "Look for new and innovative approaches"
    ],
    dimension: "SN"
  },
  {
    id: 39,
    question: "You are more comfortable with:",
    options: [
      "Established procedures",
      "New and untested methods"
    ],
    dimension: "SN"
  },
  {
    id: 40,
    question: "When reading, you prefer:",
    options: [
      "Practical, how-to books",
      "Theoretical and philosophical books"
    ],
    dimension: "SN"
  },
  {
    id: 41,
    question: "You are more interested in:",
    options: [
      "Current events and practical news",
      "Future trends and possibilities"
    ],
    dimension: "SN"
  },
  {
    id: 42,
    question: "When working on a task, you:",
    options: [
      "Follow the established process",
      "Look for shortcuts and improvements"
    ],
    dimension: "SN"
  },
  {
    id: 43,
    question: "You prefer to work with:",
    options: [
      "Concrete, tangible materials",
      "Abstract concepts and ideas"
    ],
    dimension: "SN"
  },
  {
    id: 44,
    question: "When making plans, you:",
    options: [
      "Focus on immediate, practical steps",
      "Consider long-term implications and possibilities"
    ],
    dimension: "SN"
  },
  {
    id: 45,
    question: "You are more attracted to:",
    options: [
      "Proven solutions",
      "Innovative approaches"
    ],
    dimension: "SN"
  },
  {
    id: 46,
    question: "When learning a new skill, you:",
    options: [
      "Practice with real examples",
      "Understand the theory first"
    ],
    dimension: "SN"
  },
  {
    id: 47,
    question: "You prefer to focus on:",
    options: [
      "What is happening now",
      "What could happen in the future"
    ],
    dimension: "SN"
  },
  {
    id: 48,
    question: "When evaluating ideas, you:",
    options: [
      "Look for practical applications",
      "Consider theoretical implications"
    ],
    dimension: "SN"
  },
  {
    id: 49,
    question: "You are more comfortable with:",
    options: [
      "Familiar routines",
      "New and varied experiences"
    ],
    dimension: "SN"
  },
  {
    id: 50,
    question: "When problem-solving, you:",
    options: [
      "Use tried and true methods",
      "Experiment with new approaches"
    ],
    dimension: "SN"
  },
  {
    id: 51,
    question: "You prefer information that is:",
    options: [
      "Specific and concrete",
      "General and abstract"
    ],
    dimension: "SN"
  },
  {
    id: 52,
    question: "When making decisions, you:",
    options: [
      "Consider practical implications",
      "Focus on potential and possibilities"
    ],
    dimension: "SN"
  },
  {
    id: 53,
    question: "You are more interested in:",
    options: [
      "How things work",
      "Why things work"
    ],
    dimension: "SN"
  },
  {
    id: 54,
    question: "When working on a project, you:",
    options: [
      "Follow the established plan",
      "Adapt and modify as you go"
    ],
    dimension: "SN"
  },
  {
    id: 55,
    question: "You prefer to learn through:",
    options: [
      "Hands-on experience",
      "Theoretical understanding"
    ],
    dimension: "SN"
  },
  {
    id: 56,
    question: "When evaluating options, you:",
    options: [
      "Look for practical benefits",
      "Consider creative potential"
    ],
    dimension: "SN"
  },
  {
    id: 57,
    question: "You are more comfortable with:",
    options: [
      "Clear, specific instructions",
      "General guidelines and freedom"
    ],
    dimension: "SN"
  },
  {
    id: 58,
    question: "When planning, you:",
    options: [
      "Focus on immediate steps",
      "Consider long-term vision"
    ],
    dimension: "SN"
  },
  {
    id: 59,
    question: "You prefer to work with:",
    options: [
      "Existing systems and processes",
      "New and innovative approaches"
    ],
    dimension: "SN"
  },
  {
    id: 60,
    question: "When learning, you:",
    options: [
      "Prefer practical applications",
      "Enjoy theoretical discussions"
    ],
    dimension: "SN"
  },
  {
    id: 61,
    question: "You are more drawn to:",
    options: [
      "Concrete results",
      "Abstract concepts"
    ],
    dimension: "SN"
  },
  {
    id: 62,
    question: "When solving problems, you:",
    options: [
      "Use proven methods",
      "Look for creative solutions"
    ],
    dimension: "SN"
  },

  // Thinking vs Feeling (31 questions)
  {
    id: 63,
    question: "In a conflict, you tend to:",
    options: [
      "Focus on the logical aspects and fairness",
      "Consider people's feelings and relationships"
    ],
    dimension: "TF"
  },
  {
    id: 64,
    question: "When giving feedback, you:",
    options: [
      "Focus on what needs to be improved",
      "Emphasize positive aspects first"
    ],
    dimension: "TF"
  },
  {
    id: 65,
    question: "When someone is upset, you:",
    options: [
      "Try to solve their problem logically",
      "Focus on understanding their feelings"
    ],
    dimension: "TF"
  },
  {
    id: 66,
    question: "In decision-making, you prioritize:",
    options: [
      "Objective analysis and logic",
      "Personal values and impact on people"
    ],
    dimension: "TF"
  },
  {
    id: 67,
    question: "When evaluating performance, you:",
    options: [
      "Focus on measurable results",
      "Consider effort and personal circumstances"
    ],
    dimension: "TF"
  },
  {
    id: 68,
    question: "In a disagreement, you:",
    options: [
      "Present logical arguments",
      "Try to understand the other person's perspective"
    ],
    dimension: "TF"
  },
  {
    id: 69,
    question: "When making tough decisions, you:",
    options: [
      "Focus on what's most logical and fair",
      "Consider how it will affect people emotionally"
    ],
    dimension: "TF"
  },
  {
    id: 70,
    question: "When giving criticism, you:",
    options: [
      "Be direct and honest about problems",
      "Be gentle and considerate of feelings"
    ],
    dimension: "TF"
  },
  {
    id: 71,
    question: "In team settings, you:",
    options: [
      "Focus on efficiency and results",
      "Focus on harmony and relationships"
    ],
    dimension: "TF"
  },
  {
    id: 72,
    question: "When someone makes a mistake, you:",
    options: [
      "Point out what went wrong and how to fix it",
      "Offer support and encouragement"
    ],
    dimension: "TF"
  },
  {
    id: 73,
    question: "In negotiations, you:",
    options: [
      "Focus on facts and logical arguments",
      "Consider the relationship and mutual benefit"
    ],
    dimension: "TF"
  },
  {
    id: 74,
    question: "When evaluating ideas, you:",
    options: [
      "Look for logical flaws and inconsistencies",
      "Consider the potential positive impact"
    ],
    dimension: "TF"
  },
  {
    id: 75,
    question: "In leadership, you:",
    options: [
      "Focus on competence and results",
      "Focus on people and their development"
    ],
    dimension: "TF"
  },
  {
    id: 76,
    question: "When resolving conflicts, you:",
    options: [
      "Focus on finding the right solution",
      "Focus on making everyone feel heard"
    ],
    dimension: "TF"
  },
  {
    id: 77,
    question: "In decision-making, you:",
    options: [
      "Use objective criteria",
      "Consider personal values and impact"
    ],
    dimension: "TF"
  },
  {
    id: 78,
    question: "When someone is struggling, you:",
    options: [
      "Offer practical solutions and advice",
      "Provide emotional support and understanding"
    ],
    dimension: "TF"
  },
  {
    id: 79,
    question: "In evaluations, you:",
    options: [
      "Focus on measurable performance",
      "Consider effort and personal growth"
    ],
    dimension: "TF"
  },
  {
    id: 80,
    question: "When making changes, you:",
    options: [
      "Focus on what's most efficient",
      "Consider how it will affect people"
    ],
    dimension: "TF"
  },
  {
    id: 81,
    question: "In discussions, you:",
    options: [
      "Focus on facts and logic",
      "Consider feelings and relationships"
    ],
    dimension: "TF"
  },
  {
    id: 82,
    question: "When giving advice, you:",
    options: [
      "Provide logical analysis and solutions",
      "Offer emotional support and understanding"
    ],
    dimension: "TF"
  },
  {
    id: 83,
    question: "In problem-solving, you:",
    options: [
      "Focus on finding the best solution",
      "Consider how solutions affect people"
    ],
    dimension: "TF"
  },
  {
    id: 84,
    question: "When someone disagrees with you, you:",
    options: [
      "Present logical arguments to convince them",
      "Try to understand their perspective"
    ],
    dimension: "TF"
  },
  {
    id: 85,
    question: "In team dynamics, you:",
    options: [
      "Focus on competence and efficiency",
      "Focus on collaboration and harmony"
    ],
    dimension: "TF"
  },
  {
    id: 86,
    question: "When making decisions, you:",
    options: [
      "Use objective analysis",
      "Consider personal values and impact"
    ],
    dimension: "TF"
  },
  {
    id: 87,
    question: "In feedback, you:",
    options: [
      "Be direct about what needs improvement",
      "Be supportive and encouraging"
    ],
    dimension: "TF"
  },
  {
    id: 88,
    question: "When evaluating options, you:",
    options: [
      "Focus on logical pros and cons",
      "Consider how it feels and affects people"
    ],
    dimension: "TF"
  },
  {
    id: 89,
    question: "In leadership, you:",
    options: [
      "Focus on results and efficiency",
      "Focus on people and their well-being"
    ],
    dimension: "TF"
  },
  {
    id: 90,
    question: "When someone is upset, you:",
    options: [
      "Try to solve the problem logically",
      "Provide emotional support first"
    ],
    dimension: "TF"
  },
  {
    id: 91,
    question: "In decision-making, you:",
    options: [
      "Use facts and logic",
      "Consider values and relationships"
    ],
    dimension: "TF"
  },
  {
    id: 92,
    question: "When giving feedback, you:",
    options: [
      "Focus on what needs to be fixed",
      "Focus on what's working well"
    ],
    dimension: "TF"
  },
  {
    id: 93,
    question: "In conflicts, you:",
    options: [
      "Focus on finding the right solution",
      "Focus on understanding everyone's feelings"
    ],
    dimension: "TF"
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

export default function FullTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);
  const [showAdGate, setShowAdGate] = useState(false);

  const currentQ = FULL_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / FULL_QUESTIONS.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    
    if (currentQuestion < FULL_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    finalAnswers.forEach((answer, index) => {
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

    // Calculate percentages
    const percentages = {
      E: Math.round((scores.E / 31) * 100),
      I: Math.round((scores.I / 31) * 100),
      S: Math.round((scores.S / 31) * 100),
      N: Math.round((scores.N / 31) * 100),
      T: Math.round((scores.T / 31) * 100),
      F: Math.round((scores.F / 31) * 100),
      J: Math.round((scores.J / 31) * 100),
      P: Math.round((scores.P / 31) * 100),
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
    // Show ad gate - MANDATORY for all results
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

  // Initialize ad consent
  useEffect(() => {
    if (!adGateUtils.hasConsent()) {
      adGateUtils.setConsent(true); // Auto-consent to ensure ad revenue
    }
  }, []);

  if (isCompleted && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <a className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </a>
            </Link>
            <button 
              onClick={resetTest}
              className="text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Take Test Again
            </button>
          </div>

          {/* Result Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Your MBTI Type: {result.type}
              </h1>
              <p className="text-xl text-gray-600">
                Complete Assessment Results
              </p>
            </div>

            {/* Dimension Analysis */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Extraversion vs Introversion</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Extraversion</span>
                    <span className="font-semibold text-blue-900">{result.percentages.E}%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${result.percentages.E}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Introversion</span>
                    <span className="font-semibold text-blue-900">{result.percentages.I}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Sensing vs Intuition</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Sensing</span>
                    <span className="font-semibold text-green-900">{result.percentages.S}%</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${result.percentages.S}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Intuition</span>
                    <span className="font-semibold text-green-900">{result.percentages.N}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">Thinking vs Feeling</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-700">Thinking</span>
                    <span className="font-semibold text-purple-900">{result.percentages.T}%</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${result.percentages.T}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-700">Feeling</span>
                    <span className="font-semibold text-purple-900">{result.percentages.F}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-4">Judging vs Perceiving</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-700">Judging</span>
                    <span className="font-semibold text-orange-900">{result.percentages.J}%</span>
                  </div>
                  <div className="w-full bg-orange-200 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ width: `${result.percentages.J}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-700">Perceiving</span>
                    <span className="font-semibold text-orange-900">{result.percentages.P}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad Banner */}
            <div className="mb-6">
              <AdBanner size="leaderboard" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={resetTest}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🔄 Take Test Again
              </button>
              <Link href="/test/quick">
                <a className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                  ⚡ Quick Test (12 questions)
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {showAdGate && (
        <AdGate onComplete={handleAdComplete} duration={15} />
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
            Question {currentQuestion + 1} of {FULL_QUESTIONS.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300"
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
