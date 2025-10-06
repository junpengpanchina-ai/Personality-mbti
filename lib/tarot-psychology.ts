// 现代心理学塔罗牌系统 - 基于荣格心理学
// 参考书籍：《Jung and Tarot》by Sallie Nichols, 《Tarot and Psychology》by Arthur Rosengarten

export const PSYCHOLOGICAL_TAROT = {
  // 荣格原型与塔罗牌映射
  jungianArchetypes: {
    'The Self': {
      tarotCard: 'The World',
      description: 'Complete integration of personality',
      mbtiTypes: ['INFJ', 'INTJ', 'ENFJ', 'ENTJ'],
      psychologicalMeaning: 'Wholeness, integration, self-realization',
      shadowAspect: 'Perfectionism, over-identification with persona'
    },
    'The Shadow': {
      tarotCard: 'The Devil',
      description: 'Repressed aspects of personality',
      mbtiTypes: ['All types - repressed opposite functions'],
      psychologicalMeaning: 'Unconscious aspects, denied traits',
      shadowAspect: 'Projection, denial, unconscious behavior'
    },
    'The Anima/Animus': {
      tarotCard: 'The Lovers',
      description: 'Inner feminine/masculine aspects',
      mbtiTypes: ['All types - opposite gender energy'],
      psychologicalMeaning: 'Inner relationship, soul connection',
      shadowAspect: 'Gender role confusion, relationship issues'
    },
    'The Wise Old Man/Woman': {
      tarotCard: 'The Hermit',
      description: 'Inner wisdom and guidance',
      mbtiTypes: ['INFJ', 'INTJ', 'INFP', 'INTP'],
      psychologicalMeaning: 'Inner teacher, spiritual guidance',
      shadowAspect: 'Isolation, excessive introspection'
    },
    'The Great Mother': {
      tarotCard: 'The Empress',
      description: 'Nurturing and creative energy',
      mbtiTypes: ['ESFJ', 'ISFJ', 'ENFJ', 'INFP'],
      psychologicalMeaning: 'Nurturing, creativity, abundance',
      shadowAspect: 'Over-protection, smothering'
    },
    'The Great Father': {
      tarotCard: 'The Emperor',
      description: 'Authority and structure',
      mbtiTypes: ['ESTJ', 'ISTJ', 'ENTJ', 'INTJ'],
      psychologicalMeaning: 'Authority, order, discipline',
      shadowAspect: 'Tyranny, rigidity'
    }
  },

  // 认知功能与塔罗牌映射
  cognitiveFunctions: {
    // 直觉功能
    'Ni': {
      tarotCards: ['The High Priestess', 'The Hermit', 'The Moon'],
      description: 'Introverted Intuition - Inner vision and foresight',
      mbtiTypes: ['INFJ', 'INTJ', 'ENFJ', 'ENTJ'],
      psychologicalMeaning: 'Inner knowing, future vision, depth',
      development: 'Meditation, journaling, dream work'
    },
    'Ne': {
      tarotCards: ['The Fool', 'The Magician', 'The Star'],
      description: 'Extraverted Intuition - Possibilities and connections',
      mbtiTypes: ['ENFP', 'ENTP', 'INFP', 'INTP'],
      psychologicalMeaning: 'Exploration, innovation, possibilities',
      development: 'Brainstorming, networking, creative projects'
    },
    // 感觉功能
    'Si': {
      tarotCards: ['The Hierophant', 'The Four of Pentacles', 'The Nine of Pentacles'],
      description: 'Introverted Sensing - Memory and tradition',
      mbtiTypes: ['ISFJ', 'ISTJ', 'ESFJ', 'ESTJ'],
      psychologicalMeaning: 'Stability, tradition, memory',
      development: 'Routine, tradition, physical activities'
    },
    'Se': {
      tarotCards: ['The Sun', 'The Chariot', 'The Knight of Wands'],
      description: 'Extraverted Sensing - Present moment awareness',
      mbtiTypes: ['ESFP', 'ESTP', 'ISFP', 'ISTP'],
      psychologicalMeaning: 'Present moment, action, experience',
      development: 'Sports, adventure, sensory experiences'
    },
    // 思考功能
    'Ti': {
      tarotCards: ['The Hermit', 'The Seven of Swords', 'The Page of Swords'],
      description: 'Introverted Thinking - Internal logic and analysis',
      mbtiTypes: ['INTP', 'ISTP', 'ENTP', 'ESTP'],
      psychologicalMeaning: 'Logic, analysis, precision',
      development: 'Problem-solving, research, analysis'
    },
    'Te': {
      tarotCards: ['The Emperor', 'The Justice', 'The King of Swords'],
      description: 'Extraverted Thinking - External logic and efficiency',
      mbtiTypes: ['ENTJ', 'ESTJ', 'INTJ', 'ISTJ'],
      psychologicalMeaning: 'Efficiency, organization, fairness',
      development: 'Leadership, management, systems'
    },
    // 情感功能
    'Fi': {
      tarotCards: ['The Star', 'The High Priestess', 'The Queen of Cups'],
      description: 'Introverted Feeling - Personal values and authenticity',
      mbtiTypes: ['INFP', 'ISFP', 'ENFP', 'ESFP'],
      psychologicalMeaning: 'Values, authenticity, inner harmony',
      development: 'Self-reflection, values clarification, art'
    },
    'Fe': {
      tarotCards: ['The Lovers', 'The Temperance', 'The Queen of Wands'],
      description: 'Extraverted Feeling - Harmony and social connection',
      mbtiTypes: ['ENFJ', 'ESFJ', 'INFJ', 'ISFJ'],
      psychologicalMeaning: 'Harmony, connection, social values',
      development: 'Relationships, community, service'
    }
  },

  // 心理发展阶段与塔罗牌
  psychologicalStages: {
    'Ego Development': {
      tarotCards: ['The Fool', 'The Magician', 'The Emperor'],
      description: 'Early ego formation and identity development',
      ageRange: '0-25 years',
      mbtiFocus: 'Dominant function development',
      psychologicalTasks: ['Identity formation', 'Independence', 'Skill development']
    },
    'Shadow Integration': {
      tarotCards: ['The Devil', 'The Tower', 'The Star'],
      description: 'Integration of repressed aspects',
      ageRange: '25-40 years',
      mbtiFocus: 'Inferior function development',
      psychologicalTasks: ['Shadow work', 'Integration', 'Transformation']
    },
    'Anima/Animus Development': {
      tarotCards: ['The Lovers', 'The Temperance', 'The Sun'],
      description: 'Development of inner opposite',
      ageRange: '30-50 years',
      mbtiFocus: 'Auxiliary function development',
      psychologicalTasks: ['Relationship skills', 'Balance', 'Integration']
    },
    'Self Realization': {
      tarotCards: ['The Hermit', 'The Judgement', 'The World'],
      description: 'Integration and wholeness',
      ageRange: '40+ years',
      mbtiFocus: 'All functions integration',
      psychologicalTasks: ['Wisdom', 'Wholeness', 'Transcendence']
    }
  },

  // 心理治疗与塔罗牌
  therapeuticApplications: {
    'Anxiety and Stress': {
      tarotCards: ['The Moon', 'The Nine of Swords', 'The Five of Cups'],
      therapeuticApproach: 'Mindfulness, grounding, emotional processing',
      mbtiTypes: ['High stress types: ENFJ, INFJ, ENFP, INFP'],
      interventions: ['Breathing exercises', 'Meditation', 'Journaling']
    },
    'Depression and Low Mood': {
      tarotCards: ['The Star', 'The Sun', 'The Three of Cups'],
      therapeuticApproach: 'Hope, connection, meaning-making',
      mbtiTypes: ['Introverted types: INFJ, INFP, ISFJ, ISFP'],
      interventions: ['Social connection', 'Meaningful activities', 'Gratitude practice']
    },
    'Relationship Issues': {
      tarotCards: ['The Lovers', 'The Two of Cups', 'The Ten of Cups'],
      therapeuticApproach: 'Communication, empathy, boundaries',
      mbtiTypes: ['All types - relationship patterns'],
      interventions: ['Communication skills', 'Empathy training', 'Boundary setting']
    },
    'Career and Life Direction': {
      tarotCards: ['The Magician', 'The Chariot', 'The Eight of Pentacles'],
      therapeuticApproach: 'Goal setting, skill development, action planning',
      mbtiTypes: ['All types - career alignment'],
      interventions: ['Career assessment', 'Skill development', 'Goal setting']
    }
  }
};

// 塔罗牌心理测试问题
export const PSYCHOLOGICAL_TAROT_QUESTIONS = [
  {
    id: 1,
    category: 'Self-Awareness',
    question: "How do you typically process information?",
    options: [
      "I rely on my inner knowing and intuition",
      "I explore many possibilities and connections",
      "I focus on concrete facts and details",
      "I pay attention to present moment experiences",
      "I analyze and think through problems logically",
      "I organize and structure information efficiently",
      "I consider personal values and authenticity",
      "I focus on harmony and social connections"
    ],
    tarotCards: ['The High Priestess', 'The Fool', 'The Hierophant', 'The Sun', 'The Hermit', 'The Emperor', 'The Star', 'The Lovers'],
    psychologicalFocus: 'Cognitive function preferences'
  },
  {
    id: 2,
    category: 'Emotional Intelligence',
    question: "When facing emotional challenges, you tend to:",
    options: [
      "Reflect deeply on your inner feelings and values",
      "Seek harmony and connection with others",
      "Analyze the situation logically and objectively",
      "Take action to resolve the situation quickly",
      "Withdraw to process your emotions privately",
      "Share your feelings openly with trusted people",
      "Look for patterns and underlying causes",
      "Focus on practical solutions and next steps"
    ],
    tarotCards: ['The Star', 'The Lovers', 'The Hermit', 'The Chariot', 'The Moon', 'The Sun', 'The High Priestess', 'The Magician'],
    psychologicalFocus: 'Emotional processing styles'
  },
  {
    id: 3,
    category: 'Stress Response',
    question: "Under stress, you are most likely to:",
    options: [
      "Become overly critical and perfectionistic",
      "Feel overwhelmed by too many possibilities",
      "Become rigid and controlling",
      "Become overly emotional and reactive",
      "Withdraw and become isolated",
      "Become overly accommodating to others",
      "Become overly analytical and detached",
      "Become overly focused on external validation"
    ],
    tarotCards: ['The Devil', 'The Moon', 'The Tower', 'The Five of Cups', 'The Hermit', 'The Nine of Swords', 'The Seven of Swords', 'The Three of Pentacles'],
    psychologicalFocus: 'Shadow function activation'
  },
  {
    id: 4,
    category: 'Growth and Development',
    question: "What area of personal growth interests you most?",
    options: [
      "Developing deeper self-awareness and wisdom",
      "Exploring new possibilities and experiences",
      "Building stability and security",
      "Living more in the present moment",
      "Improving logical thinking and analysis",
      "Becoming more organized and efficient",
      "Understanding your values and authenticity",
      "Improving relationships and social skills"
    ],
    tarotCards: ['The Hermit', 'The Fool', 'The Four of Pentacles', 'The Sun', 'The Seven of Swords', 'The Eight of Pentacles', 'The Star', 'The Temperance'],
    psychologicalFocus: 'Personal development goals'
  }
];
