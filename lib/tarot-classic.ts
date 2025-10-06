// 经典韦特塔罗牌系统 - 基于Rider-Waite-Smith传统
// 参考书籍：《The Pictorial Key to the Tarot》by Arthur Edward Waite

export const CLASSIC_TAROT_CARDS = {
  // 大阿卡纳 (Major Arcana) - 22张牌
  majorArcana: {
    'The Fool': {
      number: 0,
      name: 'The Fool',
      symbol: '🃏',
      element: 'Air',
      astrological: 'Uranus',
      keywords: ['New beginnings', 'Spontaneity', 'Innocence', 'Adventure'],
      upright: {
        meaning: 'New beginnings, spontaneity, innocence, adventure',
        personality: 'Free-spirited, optimistic, adventurous, spontaneous',
        advice: 'Embrace new opportunities, trust your instincts',
        career: 'New career paths, creative projects, entrepreneurship',
        love: 'New relationships, fresh starts, playful connections',
        health: 'New health routines, mental clarity, vitality'
      },
      reversed: {
        meaning: 'Recklessness, lack of direction, poor judgment',
        personality: 'Impulsive, naive, lacking focus, irresponsible',
        advice: 'Think before acting, consider consequences',
        career: 'Unrealistic goals, poor planning, instability',
        love: 'Immature relationships, lack of commitment',
        health: 'Reckless behavior, ignoring health warnings'
      }
    },
    'The Magician': {
      number: 1,
      name: 'The Magician',
      symbol: '🪄',
      element: 'Fire',
      astrological: 'Mercury',
      keywords: ['Manifestation', 'Willpower', 'Skill', 'Confidence'],
      upright: {
        meaning: 'Manifestation, willpower, skill, confidence',
        personality: 'Confident, resourceful, skilled, determined',
        advice: 'Use your skills and resources to achieve goals',
        career: 'Leadership roles, creative projects, technical skills',
        love: 'Confident approach, clear communication',
        health: 'Mental clarity, physical strength, healing'
      },
      reversed: {
        meaning: 'Manipulation, lack of skill, poor planning',
        personality: 'Manipulative, overconfident, lacking focus',
        advice: 'Be honest about your abilities, plan carefully',
        career: 'Overconfidence, poor execution, manipulation',
        love: 'Manipulation, dishonesty, power games',
        health: 'Overconfidence in treatment, ignoring symptoms'
      }
    },
    'The High Priestess': {
      number: 2,
      name: 'The High Priestess',
      symbol: '🌙',
      element: 'Water',
      astrological: 'Moon',
      keywords: ['Intuition', 'Mystery', 'Subconscious', 'Wisdom'],
      upright: {
        meaning: 'Intuition, mystery, subconscious, wisdom',
        personality: 'Intuitive, mysterious, wise, reflective',
        advice: 'Trust your intuition, look within for answers',
        career: 'Research, counseling, spiritual work, teaching',
        love: 'Intuitive connections, spiritual relationships',
        health: 'Intuitive healing, mental health, dreams'
      },
      reversed: {
        meaning: 'Lack of intuition, secrets, hidden agendas',
        personality: 'Secretive, lacking intuition, superficial',
        advice: 'Develop your intuition, be more open',
        career: 'Hidden information, lack of insight',
        love: 'Secrets, lack of emotional connection',
        health: 'Ignoring intuition, mental blocks'
      }
    },
    'The Empress': {
      number: 3,
      name: 'The Empress',
      symbol: '👑',
      element: 'Earth',
      astrological: 'Venus',
      keywords: ['Fertility', 'Abundance', 'Nurturing', 'Creativity'],
      upright: {
        meaning: 'Fertility, abundance, nurturing, creativity',
        personality: 'Nurturing, abundant, creative, caring',
        advice: 'Nurture your projects and relationships',
        career: 'Creative work, nurturing roles, abundance',
        love: 'Fertile relationships, nurturing love',
        health: 'Fertility, physical health, abundance'
      },
      reversed: {
        meaning: 'Infertility, lack of abundance, over-nurturing',
        personality: 'Overprotective, lacking creativity, dependent',
        advice: 'Find balance in nurturing, avoid over-protection',
        career: 'Creative blocks, lack of abundance',
        love: 'Over-dependency, lack of boundaries',
        health: 'Fertility issues, over-indulgence'
      }
    },
    'The Emperor': {
      number: 4,
      name: 'The Emperor',
      symbol: '⚔️',
      element: 'Fire',
      astrological: 'Aries',
      keywords: ['Authority', 'Structure', 'Leadership', 'Discipline'],
      upright: {
        meaning: 'Authority, structure, leadership, discipline',
        personality: 'Authoritative, structured, leader, disciplined',
        advice: 'Take charge, establish structure and order',
        career: 'Leadership roles, management, authority',
        love: 'Stable relationships, traditional values',
        health: 'Physical strength, discipline, structure'
      },
      reversed: {
        meaning: 'Tyranny, lack of structure, poor leadership',
        personality: 'Tyrannical, rigid, lacking authority',
        advice: 'Be flexible, avoid being too controlling',
        career: 'Poor leadership, lack of structure',
        love: 'Controlling relationships, lack of flexibility',
        health: 'Stress, rigidity, lack of discipline'
      }
    }
    // ... 可以继续添加更多大阿卡纳牌
  },

  // 小阿卡纳 (Minor Arcana) - 56张牌
  minorArcana: {
    // 权杖组 (Wands) - 火元素
    wands: {
      'Ace of Wands': {
        name: 'Ace of Wands',
        symbol: '🔥',
        element: 'Fire',
        keywords: ['New beginnings', 'Inspiration', 'Energy', 'Potential'],
        upright: 'New creative projects, inspiration, energy',
        reversed: 'Lack of direction, creative blocks, low energy'
      },
      'Two of Wands': {
        name: 'Two of Wands',
        symbol: '🌍',
        element: 'Fire',
        keywords: ['Planning', 'Future', 'Personal power', 'Discovery'],
        upright: 'Planning for the future, personal power, discovery',
        reversed: 'Lack of planning, fear of the unknown, personal power issues'
      }
      // ... 可以继续添加更多权杖牌
    },

    // 圣杯组 (Cups) - 水元素
    cups: {
      'Ace of Cups': {
        name: 'Ace of Cups',
        symbol: '💧',
        element: 'Water',
        keywords: ['New love', 'Emotional fulfillment', 'Spirituality', 'Intuition'],
        upright: 'New love, emotional fulfillment, spiritual awakening',
        reversed: 'Emotional blocks, lack of love, spiritual emptiness'
      }
      // ... 可以继续添加更多圣杯牌
    },

    // 宝剑组 (Swords) - 风元素
    swords: {
      'Ace of Swords': {
        name: 'Ace of Swords',
        symbol: '⚔️',
        element: 'Air',
        keywords: ['New ideas', 'Mental clarity', 'Truth', 'Justice'],
        upright: 'New ideas, mental clarity, truth, justice',
        reversed: 'Confusion, lack of clarity, injustice'
      }
      // ... 可以继续添加更多宝剑牌
    },

    // 星币组 (Pentacles) - 土元素
    pentacles: {
      'Ace of Pentacles': {
        name: 'Ace of Pentacles',
        symbol: '💰',
        element: 'Earth',
        keywords: ['New opportunities', 'Material gain', 'Stability', 'Security'],
        upright: 'New opportunities, material gain, stability',
        reversed: 'Missed opportunities, financial loss, instability'
      }
      // ... 可以继续添加更多星币牌
    }
  }
};

// 塔罗牌占卜方法
export const TAROT_SPREADS = {
  // 单牌占卜
  singleCard: {
    name: 'Single Card Reading',
    description: 'A simple one-card reading for daily guidance',
    cards: 1,
    positions: ['Current situation or advice']
  },

  // 三牌占卜
  threeCard: {
    name: 'Past, Present, Future',
    description: 'A three-card spread showing past, present, and future',
    cards: 3,
    positions: ['Past', 'Present', 'Future']
  },

  // 凯尔特十字占卜
  celticCross: {
    name: 'Celtic Cross',
    description: 'A comprehensive ten-card spread for detailed readings',
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
    ]
  },

  // 关系占卜
  relationship: {
    name: 'Relationship Spread',
    description: 'A seven-card spread for relationship guidance',
    cards: 7,
    positions: [
      'Your feelings',
      'Their feelings',
      'Relationship dynamics',
      'Communication',
      'Challenges',
      'Strengths',
      'Future potential'
    ]
  }
};

// 塔罗牌与MBTI的深度映射
export const TAROT_MBTI_DEEP_MAPPING = {
  // 基于认知功能的映射
  'The Magician': {
    mbti: ['ENTJ', 'INTJ'],
    cognitiveFunctions: ['Te', 'Ni'],
    description: 'Strategic thinking and manifestation',
    traits: ['Confident', 'Strategic', 'Manifesting', 'Determined']
  },
  'The High Priestess': {
    mbti: ['INFJ', 'INFP'],
    cognitiveFunctions: ['Ni', 'Fi'],
    description: 'Intuitive wisdom and inner knowing',
    traits: ['Intuitive', 'Wise', 'Mysterious', 'Reflective']
  },
  'The Emperor': {
    mbti: ['ESTJ', 'ISTJ'],
    cognitiveFunctions: ['Te', 'Si'],
    description: 'Structured authority and tradition',
    traits: ['Authoritative', 'Structured', 'Traditional', 'Disciplined']
  },
  'The Empress': {
    mbti: ['ESFJ', 'ISFJ'],
    cognitiveFunctions: ['Fe', 'Si'],
    description: 'Nurturing and caring leadership',
    traits: ['Nurturing', 'Caring', 'Abundant', 'Creative']
  }
};
