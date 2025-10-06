// 现代数字塔罗牌系统 - 结合科技和数字时代
// 参考书籍：《Modern Tarot》by Michelle Tea, 《The Tarot of the New Vision》by Pietro Alligo

export const MODERN_TAROT = {
  // 数字时代塔罗牌重新诠释
  digitalAgeCards: {
    'The Fool': {
      modernInterpretation: 'Digital nomad, startup founder, social media influencer',
      keywords: ['Innovation', 'Risk-taking', 'Digital presence', 'Authenticity'],
      careerPaths: ['Entrepreneur', 'Content creator', 'Digital marketer', 'Startup founder'],
      socialMedia: 'Instagram, TikTok, YouTube - platforms for authentic expression',
      technology: 'AI, blockchain, social media, mobile apps',
      mbtiTypes: ['ENFP', 'ENTP', 'ESFP', 'ESTP']
    },
    'The Magician': {
      modernInterpretation: 'Tech CEO, digital creator, online educator',
      keywords: ['Leadership', 'Innovation', 'Digital mastery', 'Influence'],
      careerPaths: ['Tech CEO', 'Digital strategist', 'Online educator', 'Tech consultant'],
      socialMedia: 'LinkedIn, Twitter, professional platforms',
      technology: 'AI, machine learning, automation, digital tools',
      mbtiTypes: ['ENTJ', 'INTJ', 'ENFJ', 'INFJ']
    },
    'The High Priestess': {
      modernInterpretation: 'Data scientist, UX researcher, digital therapist',
      keywords: ['Intuition', 'Data insights', 'User experience', 'Digital wellness'],
      careerPaths: ['Data scientist', 'UX researcher', 'Digital therapist', 'Analytics expert'],
      socialMedia: 'Professional networks, research platforms',
      technology: 'Data analytics, AI, machine learning, user research tools',
      mbtiTypes: ['INFJ', 'INFP', 'ISFJ', 'ISFP']
    },
    'The Empress': {
      modernInterpretation: 'Content creator, community manager, digital parent',
      keywords: ['Creativity', 'Community', 'Nurturing', 'Content creation'],
      careerPaths: ['Content creator', 'Community manager', 'Digital marketing', 'Social media manager'],
      socialMedia: 'Instagram, Pinterest, Facebook, community platforms',
      technology: 'Content management systems, social media tools, design software',
      mbtiTypes: ['ESFJ', 'ISFJ', 'ENFJ', 'INFP']
    },
    'The Emperor': {
      modernInterpretation: 'Tech executive, project manager, digital strategist',
      keywords: ['Authority', 'Structure', 'Leadership', 'Strategic planning'],
      careerPaths: ['Tech executive', 'Project manager', 'Digital strategist', 'Operations manager'],
      socialMedia: 'LinkedIn, professional networks',
      technology: 'Project management tools, enterprise software, analytics',
      mbtiTypes: ['ESTJ', 'ISTJ', 'ENTJ', 'INTJ']
    }
  },

  // 数字时代占卜方法
  digitalSpreads: {
    'Career Path Reading': {
      name: 'Digital Career Path',
      description: 'A modern spread for career guidance in the digital age',
      cards: 5,
      positions: [
        'Current digital skills',
        'Hidden potential',
        'Market opportunities',
        'Challenges to overcome',
        'Recommended path forward'
      ],
      focus: 'Career development in tech and digital fields'
    },
    'Social Media Presence': {
      name: 'Digital Presence Reading',
      description: 'Guidance for building authentic online presence',
      cards: 4,
      positions: [
        'Your authentic voice',
        'Platform strategy',
        'Content approach',
        'Community building'
      ],
      focus: 'Personal branding and social media strategy'
    },
    'Tech Innovation': {
      name: 'Innovation Reading',
      description: 'Guidance for tech innovation and startup ventures',
      cards: 6,
      positions: [
        'Innovation potential',
        'Market readiness',
        'Team dynamics',
        'Funding opportunities',
        'Technical challenges',
        'Success timeline'
      ],
      focus: 'Tech innovation and entrepreneurship'
    },
    'Digital Wellness': {
      name: 'Digital Wellness Reading',
      description: 'Guidance for healthy technology use and digital balance',
      cards: 4,
      positions: [
        'Current digital habits',
        'Wellness challenges',
        'Balance strategies',
        'Digital detox needs'
      ],
      focus: 'Digital wellness and technology balance'
    }
  },

  // 现代塔罗牌问题
  modernQuestions: [
    {
      id: 1,
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
      modernFocus: 'Digital identity and online presence'
    },
    {
      id: 2,
      category: 'Technology Relationship',
      question: "How do you interact with technology?",
      options: [
        "I embrace new technologies and innovations",
        "I use technology as a tool for efficiency",
        "I prefer simple, user-friendly interfaces",
        "I enjoy exploring and experimenting with tech",
        "I use technology for creative expression",
        "I focus on technology's social and ethical implications",
        "I use technology to connect with others",
        "I maintain a balanced relationship with technology"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The Hermit', 'The Chariot', 'The Empress', 'The Justice', 'The Lovers', 'The Temperance'],
      modernFocus: 'Technology adoption and usage patterns'
    },
    {
      id: 3,
      category: 'Digital Communication',
      question: "How do you prefer to communicate digitally?",
      options: [
        "I prefer written communication and deep discussions",
        "I enjoy visual content and multimedia",
        "I like quick, efficient messaging",
        "I prefer video calls and face-to-face interaction",
        "I enjoy group discussions and forums",
        "I prefer one-on-one private conversations",
        "I like creative and artistic expression",
        "I prefer structured and formal communication"
      ],
      tarotCards: ['The Hermit', 'The Empress', 'The Chariot', 'The Sun', 'The Lovers', 'The High Priestess', 'The Star', 'The Emperor'],
      modernFocus: 'Digital communication preferences'
    },
    {
      id: 4,
      category: 'Future Vision',
      question: "What excites you most about the future?",
      options: [
        "Technological breakthroughs and innovations",
        "Global connectivity and collaboration",
        "Environmental and social solutions",
        "Personal growth and self-discovery",
        "Creative expression and artistic freedom",
        "Scientific discoveries and knowledge",
        "Human connection and relationships",
        "Spiritual and philosophical understanding"
      ],
      tarotCards: ['The Magician', 'The World', 'The Star', 'The Hermit', 'The Empress', 'The Hierophant', 'The Lovers', 'The High Priestess'],
      modernFocus: 'Future aspirations and vision'
    }
  ],

  // 数字时代塔罗牌解读
  digitalInterpretations: {
    'The Fool': {
      digitalMeaning: 'Digital pioneer, early adopter, authentic content creator',
      modernTraits: ['Innovative', 'Authentic', 'Risk-taking', 'Adaptable'],
      careerAdvice: 'Embrace new technologies, start a digital project, be authentic online',
      relationshipAdvice: 'Be genuine in digital relationships, don\'t be afraid to be vulnerable',
      healthAdvice: 'Balance digital and physical activities, take breaks from screens'
    },
    'The Magician': {
      digitalMeaning: 'Tech leader, digital strategist, online influencer',
      modernTraits: ['Strategic', 'Influential', 'Tech-savvy', 'Confident'],
      careerAdvice: 'Lead digital transformation, build your personal brand, mentor others',
      relationshipAdvice: 'Use technology to enhance relationships, be a digital connector',
      healthAdvice: 'Use technology for health tracking, but maintain human connections'
    },
    'The High Priestess': {
      digitalMeaning: 'Data analyst, UX researcher, digital wellness advocate',
      modernTraits: ['Intuitive', 'Analytical', 'Wise', 'Reflective'],
      careerAdvice: 'Focus on data-driven insights, user experience, digital wellness',
      relationshipAdvice: 'Trust your intuition in digital relationships, maintain privacy',
      healthAdvice: 'Use technology for meditation and mindfulness, digital detox regularly'
    }
  },

  // 现代塔罗牌与MBTI映射
  modernMBTIMapping: {
    'Digital Leaders': {
      mbtiTypes: ['ENTJ', 'INTJ', 'ENFJ', 'INFJ'],
      tarotCards: ['The Magician', 'The Emperor', 'The Hierophant', 'The Justice'],
      digitalRoles: ['Tech CEO', 'Digital strategist', 'Online educator', 'Tech consultant'],
      characteristics: ['Strategic thinking', 'Visionary leadership', 'Digital innovation', 'Systematic approach']
    },
    'Creative Innovators': {
      mbtiTypes: ['ENFP', 'INFP', 'ESFP', 'ISFP'],
      tarotCards: ['The Fool', 'The Star', 'The Sun', 'The Empress'],
      digitalRoles: ['Content creator', 'Digital artist', 'Social media influencer', 'Creative director'],
      characteristics: ['Creative expression', 'Authentic content', 'Visual storytelling', 'Emotional connection']
    },
    'Analytical Experts': {
      mbtiTypes: ['ENTP', 'INTP', 'ESTP', 'ISTP'],
      tarotCards: ['The Chariot', 'The Hermit', 'The Seven of Swords', 'The Page of Swords'],
      digitalRoles: ['Data scientist', 'Tech developer', 'Digital analyst', 'System architect'],
      characteristics: ['Technical expertise', 'Problem-solving', 'Innovation', 'Efficiency']
    },
    'Community Builders': {
      mbtiTypes: ['ESFJ', 'ISFJ', 'ESTJ', 'ISTJ'],
      tarotCards: ['The Lovers', 'The Temperance', 'The Four of Pentacles', 'The Nine of Pentacles'],
      digitalRoles: ['Community manager', 'Digital marketer', 'Project manager', 'Operations specialist'],
      characteristics: ['Community focus', 'Reliability', 'Organization', 'Supportive leadership']
    }
  }
};
