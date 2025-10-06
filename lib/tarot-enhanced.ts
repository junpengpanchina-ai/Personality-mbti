// 增强版塔罗牌系统 - 整合经典、心理学和现代三种方案
// 参考书籍：
// 1. 《The Pictorial Key to the Tarot》by Arthur Edward Waite (经典)
// 2. 《Jung and Tarot》by Sallie Nichols (心理学)
// 3. 《Modern Tarot》by Michelle Tea (现代)

export const ENHANCED_TAROT_SYSTEM = {
  // 塔罗牌系统选择
  systems: {
    classic: {
      name: 'Classic Rider-Waite-Smith',
      description: 'Traditional tarot with detailed card meanings and spreads',
      focus: 'Traditional symbolism, detailed interpretations',
      bestFor: 'Beginners, traditionalists, detailed readings'
    },
    psychological: {
      name: 'Jungian Psychological Tarot',
      description: 'Based on Jungian psychology and archetypes',
      focus: 'Psychological development, shadow work, integration',
      bestFor: 'Personal growth, therapy, deep self-understanding'
    },
    modern: {
      name: 'Digital Age Tarot',
      description: 'Modern interpretations for digital age and technology',
      focus: 'Career guidance, digital wellness, modern life',
      bestFor: 'Career guidance, digital natives, modern life challenges'
    }
  },

  // 增强版塔罗牌问题
  enhancedQuestions: [
    // 经典系统问题
    {
      id: 1,
      system: 'classic',
      category: 'Life Focus',
      question: "What's your current life focus?",
      options: [
        "Starting something new and exciting",
        "Using my skills to achieve goals",
        "Following my intuition and inner wisdom",
        "Nurturing and creating abundance",
        "Taking charge and leading others",
        "Following traditional values and guidance",
        "Seeking love and meaningful connections",
        "Pushing forward with determination",
        "Finding inner strength and courage",
        "Reflecting and seeking deeper meaning"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit'],
      interpretation: 'Traditional tarot meanings and symbolism'
    },

    // 心理学系统问题
    {
      id: 2,
      system: 'psychological',
      category: 'Psychological Development',
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
      interpretation: 'Jungian cognitive functions and psychological development'
    },

    // 现代系统问题
    {
      id: 3,
      system: 'modern',
      category: 'Digital Identity',
      question: "How do you present yourself online?",
      options: [
        "I share my authentic self and personal journey",
        "I focus on professional achievements and expertise",
        "I create entertaining and engaging content",
        "I build communities and foster connections",
        "I provide educational and informative content",
        "I showcase my creative work and artistic vision",
        "I advocate for causes and social issues",
        "I maintain privacy and selective sharing"
      ],
      tarotCards: ['The Star', 'The Emperor', 'The Sun', 'The Lovers', 'The Hierophant', 'The Empress', 'The Justice', 'The High Priestess'],
      interpretation: 'Modern digital identity and online presence'
    },

    // 综合问题
    {
      id: 4,
      system: 'integrated',
      category: 'Life Challenges',
      question: "How do you handle life's challenges?",
      options: [
        "I adapt to change and go with the flow",
        "I seek fairness and balance in all things",
        "I surrender and wait for the right moment",
        "I embrace transformation and new beginnings",
        "I find balance and moderation in everything",
        "I break free from limitations and restrictions",
        "I maintain hope and stay inspired",
        "I trust my intuition and inner guidance",
        "I find joy and success in my endeavors",
        "I make clear judgments and decisions"
      ],
      tarotCards: ['Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Star', 'The Moon', 'The Sun', 'Judgement'],
      interpretation: 'Integrated approach combining all three systems'
    }
  ],

  // 增强版塔罗牌解读
  enhancedInterpretations: {
    'The Fool': {
      classic: {
        meaning: 'New beginnings, spontaneity, innocence, adventure',
        personality: 'Free-spirited, optimistic, adventurous, spontaneous',
        advice: 'Embrace new opportunities, trust your instincts'
      },
      psychological: {
        meaning: 'Ego development, new identity formation, exploration',
        personality: 'Curious, open-minded, experimental, authentic',
        advice: 'Explore your identity, be open to new experiences'
      },
      modern: {
        meaning: 'Digital pioneer, authentic content creator, startup founder',
        personality: 'Innovative, authentic, risk-taking, adaptable',
        advice: 'Start a digital project, be authentic online, embrace innovation'
      },
      integrated: {
        meaning: 'New beginnings in all areas of life, authentic self-expression',
        personality: 'Authentic, innovative, adventurous, open-minded',
        advice: 'Embrace new opportunities while staying true to yourself'
      }
    },
    'The Magician': {
      classic: {
        meaning: 'Manifestation, willpower, skill, confidence',
        personality: 'Confident, resourceful, skilled, determined',
        advice: 'Use your skills and resources to achieve goals'
      },
      psychological: {
        meaning: 'Ego strength, conscious awareness, personal power',
        personality: 'Self-aware, empowered, focused, determined',
        advice: 'Develop your personal power, focus on your goals'
      },
      modern: {
        meaning: 'Tech leader, digital strategist, online influencer',
        personality: 'Strategic, influential, tech-savvy, confident',
        advice: 'Lead digital transformation, build your personal brand'
      },
      integrated: {
        meaning: 'Personal power and manifestation in all areas',
        personality: 'Empowered, strategic, confident, resourceful',
        advice: 'Use your personal power to manifest your goals'
      }
    }
  },

  // 增强版占卜方法
  enhancedSpreads: {
    'Classic Celtic Cross': {
      name: 'Classic Celtic Cross',
      description: 'Traditional ten-card spread for comprehensive readings',
      cards: 10,
      positions: [
        'Current situation',
        'Challenge or opportunity',
        'Distant past',
        'Recent past',
        'Possible future',
        'Immediate future',
        'Your approach',
        'External influences',
        'Hopes and fears',
        'Final outcome'
      ],
      system: 'classic',
      bestFor: 'General life guidance, comprehensive readings'
    },
    'Psychological Development': {
      name: 'Psychological Development Spread',
      description: 'Jungian-based spread for personal growth and integration',
      cards: 7,
      positions: [
        'Conscious self',
        'Shadow aspects',
        'Anima/Animus',
        'Current challenges',
        'Integration opportunities',
        'Growth potential',
        'Wholeness path'
      ],
      system: 'psychological',
      bestFor: 'Personal growth, therapy, self-understanding'
    },
    'Digital Career Path': {
      name: 'Digital Career Path',
      description: 'Modern spread for career guidance in the digital age',
      cards: 6,
      positions: [
        'Current digital skills',
        'Hidden potential',
        'Market opportunities',
        'Challenges to overcome',
        'Recommended path',
        'Success timeline'
      ],
      system: 'modern',
      bestFor: 'Career guidance, digital transformation'
    },
    'Integrated Life Reading': {
      name: 'Integrated Life Reading',
      description: 'Combines all three systems for comprehensive guidance',
      cards: 12,
      positions: [
        'Current situation (Classic)',
        'Psychological state (Jungian)',
        'Digital presence (Modern)',
        'Past influences',
        'Present challenges',
        'Future opportunities',
        'Personal growth',
        'Relationship dynamics',
        'Career development',
        'Spiritual path',
        'Integration needs',
        'Overall guidance'
      ],
      system: 'integrated',
      bestFor: 'Comprehensive life guidance, all areas of life'
    }
  },

  // 塔罗牌与MBTI的深度映射
  enhancedMBTIMapping: {
    'The Fool': {
      mbtiTypes: ['ENFP', 'ESFP', 'ENTP', 'ESTP'],
      cognitiveFunctions: ['Ne', 'Se'],
      classicTraits: ['Adventurous', 'Spontaneous', 'Optimistic', 'Free-spirited'],
      psychologicalTraits: ['Authentic', 'Exploratory', 'Open-minded', 'Experimental'],
      modernTraits: ['Innovative', 'Digital-native', 'Content-creator', 'Startup-minded'],
      careerPaths: ['Entrepreneur', 'Content creator', 'Digital marketer', 'Innovation consultant']
    },
    'The Magician': {
      mbtiTypes: ['ENTJ', 'INTJ', 'ENFJ', 'INFJ'],
      cognitiveFunctions: ['Te', 'Ni', 'Fe'],
      classicTraits: ['Confident', 'Resourceful', 'Skilled', 'Determined'],
      psychologicalTraits: ['Self-aware', 'Empowered', 'Focused', 'Manifesting'],
      modernTraits: ['Strategic', 'Tech-savvy', 'Influential', 'Digital-leader'],
      careerPaths: ['Tech CEO', 'Digital strategist', 'Online educator', 'Tech consultant']
    },
    'The High Priestess': {
      mbtiTypes: ['INFJ', 'INFP', 'ISFJ', 'ISFP'],
      cognitiveFunctions: ['Ni', 'Fi', 'Si'],
      classicTraits: ['Intuitive', 'Mysterious', 'Wise', 'Reflective'],
      psychologicalTraits: ['Introspective', 'Intuitive', 'Wise', 'Inner-knowing'],
      modernTraits: ['Data-savvy', 'UX-focused', 'Wellness-advocate', 'Analytical'],
      careerPaths: ['Data scientist', 'UX researcher', 'Digital therapist', 'Analytics expert']
    }
  }
};

// 塔罗牌测试配置
export const TAROT_TEST_CONFIG = {
  // 问题数量配置
  questionCounts: {
    quick: 5,      // 快速测试
    standard: 10,  // 标准测试
    comprehensive: 15, // 综合测试
    deep: 20       // 深度测试
  },

  // 系统选择配置
  systemSelection: {
    auto: 'auto',           // 自动选择
    classic: 'classic',     // 经典系统
    psychological: 'psychological', // 心理学系统
    modern: 'modern',       // 现代系统
    integrated: 'integrated' // 综合系统
  },

  // 解读深度配置
  interpretationDepth: {
    basic: 'basic',         // 基础解读
    detailed: 'detailed',   // 详细解读
    comprehensive: 'comprehensive', // 综合解读
    expert: 'expert'        // 专家级解读
  }
};
