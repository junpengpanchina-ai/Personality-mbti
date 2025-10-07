// 大师级塔罗牌系统 - 基于经典塔罗牌著作
// 参考书籍：
// 1. 《韦特塔罗》- 经典韦特塔罗牌系统
// 2. 《Tarot & Oracle Card Reading For Dummies》- 实用塔罗牌指南
// 3. 《托特塔罗入门（11周年新修增订版）》- 克劳利托特塔罗
// 4. 《经典塔罗攻略秘籍》- 传统塔罗牌解读
// 5. 《塔罗秘典：从神话与女神信仰出发》- 神话学塔罗牌

export const MASTER_TAROT_SYSTEM = {
  // 塔罗牌系统分类
  systems: {
    riderWaite: {
      name: 'Rider-Waite-Smith',
      chineseName: '韦特塔罗',
      description: '最经典的塔罗牌系统，由A.E.韦特和Pamela Colman Smith设计',
      focus: '传统象征主义、直观图像、精神成长',
      bestFor: '初学者、传统主义者、精神探索',
      characteristics: ['直观', '传统', '精神性', '象征主义']
    },
    thoth: {
      name: 'Thoth Tarot',
      chineseName: '托特塔罗',
      description: '由阿莱斯特·克劳利和弗里达·哈里斯设计的深奥塔罗牌系统',
      focus: '深奥智慧、卡巴拉、占星学、炼金术',
      bestFor: '高级学习者、神秘主义者、深奥研究',
      characteristics: ['深奥', '复杂', '神秘', '智慧']
    },
    mythological: {
      name: 'Mythological Tarot',
      chineseName: '神话塔罗',
      description: '基于世界神话和女神信仰的塔罗牌解读',
      focus: '神话原型、女神能量、集体无意识',
      bestFor: '神话爱好者、女性主义者、原型研究',
      characteristics: ['原型', '神话', '女神', '集体无意识']
    },
    modern: {
      name: 'Modern Tarot',
      chineseName: '现代塔罗',
      description: '适应现代生活的塔罗牌解读方法',
      focus: '现代生活、心理治疗、个人成长',
      bestFor: '现代人、心理治疗、个人发展',
      characteristics: ['现代', '心理', '实用', '成长']
    }
  },

  // 大阿卡纳 - 基于韦特塔罗的深度解读
  majorArcana: {
    'The Fool': {
      number: 0,
      name: 'The Fool',
      chineseName: '愚者',
      symbol: '🃏',
      element: 'Air',
      astrological: 'Uranus',
      mythological: 'Dionysus, Hermes, Trickster',
      goddess: 'Persephone (少女时期)',
      keywords: ['新开始', '纯真', '冒险', '信任'],
      
      // 韦特塔罗解读
      riderWaite: {
        upright: {
          meaning: '新开始、纯真、冒险、信任宇宙',
          personality: '自由精神、乐观、冒险、天真',
          advice: '拥抱新机会，信任你的直觉',
          career: '新事业、创意项目、创业',
          love: '新恋情、纯真爱情、自由恋爱',
          health: '新健康习惯、精神活力、身体自由'
        },
        reversed: {
          meaning: '鲁莽、缺乏方向、判断失误',
          personality: '冲动、天真、缺乏专注、不负责任',
          advice: '三思而后行，考虑后果',
          career: '不切实际的目标、缺乏计划、不稳定',
          love: '不成熟的关系、缺乏承诺',
          health: '鲁莽行为、忽视健康警告'
        }
      },
      
      // 托特塔罗解读
      thoth: {
        meaning: '纯粹意识、无限可能性、精神觉醒',
        qabalistic: 'Kether - 王冠',
        alchemical: '原始物质',
        astrological: '天王星 - 革命与创新',
        interpretation: '代表意识的原始状态，所有可能性的源头'
      },
      
      // 神话解读
      mythological: {
        archetype: 'Trickster, Innocent Child',
        myth: 'Dionysus的青春时期，Hermes的顽皮',
        goddess: 'Persephone在冥界前的纯真',
        meaning: '生命循环的开始，纯真的智慧',
        lesson: '有时无知是最大的智慧'
      },
      
      // MBTI映射
      mbtiMapping: {
        primary: ['ENFP', 'ESFP'],
        secondary: ['ENTP', 'ESTP'],
        cognitiveFunctions: ['Ne', 'Se'],
        traits: ['创新', '自由', '乐观', '冒险'],
        shadow: ['过度冲动', '缺乏计划', '不负责任']
      }
    },

    'The Magician': {
      number: 1,
      name: 'The Magician',
      chineseName: '魔术师',
      symbol: '🪄',
      element: 'Air',
      astrological: 'Mercury',
      mythological: 'Hermes, Thoth, Merlin',
      goddess: 'Athena (智慧女神)',
      keywords: ['显化', '意志力', '技能', '自信'],
      
      riderWaite: {
        upright: {
          meaning: '显化、意志力、技能、自信',
          personality: '自信、有资源、有技能、有决心',
          advice: '运用你的技能和资源实现目标',
          career: '领导角色、创意项目、技术技能',
          love: '自信的方法、清晰沟通',
          health: '精神清晰、身体力量、治愈'
        },
        reversed: {
          meaning: '操纵、缺乏技能、计划不周',
          personality: '操纵性、过度自信、缺乏专注',
          advice: '诚实面对你的能力，仔细计划',
          career: '过度自信、执行不力、操纵',
          love: '操纵、不诚实、权力游戏',
          health: '对治疗过度自信、忽视症状'
        }
      },
      
      thoth: {
        meaning: '意志的力量、意识的统一、创造性能量',
        qabalistic: 'Kether to Chokmah - 从王冠到智慧',
        alchemical: '硫磺 - 主动原则',
        astrological: '水星 - 沟通与智慧',
        interpretation: '代表意识的统一，将精神转化为物质的能力'
      },
      
      mythological: {
        archetype: 'Divine Creator, Shaman',
        myth: 'Hermes作为神使，Thoth作为智慧之神',
        goddess: 'Athena的智慧与技能',
        meaning: '神圣创造力的体现，将想法转化为现实',
        lesson: '真正的力量来自内在的统一'
      },
      
      mbtiMapping: {
        primary: ['ENTJ', 'INTJ'],
        secondary: ['ENFJ', 'INFJ'],
        cognitiveFunctions: ['Te', 'Ni'],
        traits: ['战略', '自信', '有技能', '有决心'],
        shadow: ['操纵', '过度自信', '缺乏同理心']
      }
    },

    'The High Priestess': {
      number: 2,
      name: 'The High Priestess',
      chineseName: '女祭司',
      symbol: '🌙',
      element: 'Water',
      astrological: 'Moon',
      mythological: 'Isis, Persephone, Hecate',
      goddess: 'Isis, Persephone, Hecate',
      keywords: ['直觉', '神秘', '潜意识', '智慧'],
      
      riderWaite: {
        upright: {
          meaning: '直觉、神秘、潜意识、智慧',
          personality: '直觉、神秘、智慧、反思',
          advice: '信任你的直觉，向内寻找答案',
          career: '研究、咨询、精神工作、教学',
          love: '直觉连接、精神关系',
          health: '直觉治愈、心理健康、梦境'
        },
        reversed: {
          meaning: '缺乏直觉、秘密、隐藏议程',
          personality: '秘密、缺乏直觉、肤浅',
          advice: '发展你的直觉，更加开放',
          career: '隐藏信息、缺乏洞察',
          love: '秘密、缺乏情感连接',
          health: '忽视直觉、心理障碍'
        }
      },
      
      thoth: {
        meaning: '潜意识智慧、直觉知识、神秘洞察',
        qabalistic: 'Chokmah - 智慧',
        alchemical: '水银 - 被动原则',
        astrological: '月亮 - 直觉与情感',
        interpretation: '代表潜意识的智慧，直觉知识的源泉'
      },
      
      mythological: {
        archetype: 'Mystical Woman, Oracle',
        myth: 'Isis的智慧，Persephone的冥界知识',
        goddess: 'Isis, Persephone, Hecate',
        meaning: '女性智慧的体现，直觉与神秘知识',
        lesson: '真正的智慧来自内在的静默'
      },
      
      mbtiMapping: {
        primary: ['INFJ', 'INFP'],
        secondary: ['ISFJ', 'ISFP'],
        cognitiveFunctions: ['Ni', 'Fi'],
        traits: ['直觉', '神秘', '智慧', '反思'],
        shadow: ['过度神秘', '缺乏行动', '逃避现实']
      }
    }
  },

  // 小阿卡纳 - 四元素系统
  minorArcana: {
    // 权杖组 (Wands) - 火元素
    wands: {
      element: 'Fire',
      chineseName: '权杖',
      meaning: '行动、创造、激情、意志',
      astrological: '火象星座 (白羊、狮子、射手)',
      mythological: 'Prometheus的火种',
      goddess: 'Brigid (凯尔特火女神)',
      
      cards: {
        'Ace of Wands': {
          name: 'Ace of Wands',
          chineseName: '权杖王牌',
          symbol: '🔥',
          meaning: '新开始、灵感、能量、潜力',
          upright: '新创意项目、灵感、能量、潜力',
          reversed: '缺乏方向、创意障碍、低能量',
          mbtiTypes: ['ENFP', 'ENTP', 'ESFP', 'ESTP']
        },
        'Two of Wands': {
          name: 'Two of Wands',
          chineseName: '权杖二',
          symbol: '🌍',
          meaning: '计划、未来、个人力量、发现',
          upright: '未来规划、个人力量、发现',
          reversed: '缺乏计划、对未知的恐惧、个人力量问题',
          mbtiTypes: ['ENTJ', 'INTJ', 'ENFJ', 'INFJ']
        }
      }
    },

    // 圣杯组 (Cups) - 水元素
    cups: {
      element: 'Water',
      chineseName: '圣杯',
      meaning: '情感、直觉、关系、精神',
      astrological: '水象星座 (巨蟹、天蝎、双鱼)',
      mythological: '圣杯传说',
      goddess: 'Aphrodite (爱与美之神)',
      
      cards: {
        'Ace of Cups': {
          name: 'Ace of Cups',
          chineseName: '圣杯王牌',
          symbol: '💧',
          meaning: '新爱、情感满足、精神、直觉',
          upright: '新爱、情感满足、精神觉醒',
          reversed: '情感障碍、缺乏爱、精神空虚',
          mbtiTypes: ['ENFP', 'INFP', 'ESFP', 'ISFP']
        }
      }
    },

    // 宝剑组 (Swords) - 风元素
    swords: {
      element: 'Air',
      chineseName: '宝剑',
      meaning: '思想、沟通、冲突、真理',
      astrological: '风象星座 (双子、天秤、水瓶)',
      mythological: 'Excalibur剑',
      goddess: 'Athena (智慧与战争女神)',
      
      cards: {
        'Ace of Swords': {
          name: 'Ace of Swords',
          chineseName: '宝剑王牌',
          symbol: '⚔️',
          meaning: '新想法、精神清晰、真理、正义',
          upright: '新想法、精神清晰、真理、正义',
          reversed: '困惑、缺乏清晰、不公正',
          mbtiTypes: ['ENTP', 'INTP', 'ESTP', 'ISTP']
        }
      }
    },

    // 星币组 (Pentacles) - 土元素
    pentacles: {
      element: 'Earth',
      chineseName: '星币',
      meaning: '物质、金钱、健康、实际',
      astrological: '土象星座 (金牛、处女、摩羯)',
      mythological: '点石成金',
      goddess: 'Demeter (大地女神)',
      
      cards: {
        'Ace of Pentacles': {
          name: 'Ace of Pentacles',
          chineseName: '星币王牌',
          symbol: '💰',
          meaning: '新机会、物质收获、稳定、安全',
          upright: '新机会、物质收获、稳定',
          reversed: '错失机会、财务损失、不稳定',
          mbtiTypes: ['ESTJ', 'ISTJ', 'ESFJ', 'ISFJ']
        }
      }
    }
  },

  // 专业占卜方法
  spreads: {
    // 经典三牌占卜
    threeCard: {
      name: 'Three Card Spread',
      chineseName: '三牌占卜',
      description: '过去、现在、未来的经典占卜',
      cards: 3,
      positions: ['过去', '现在', '未来'],
      system: 'riderWaite',
      bestFor: '日常指导、简单问题'
    },

    // 凯尔特十字
    celticCross: {
      name: 'Celtic Cross',
      chineseName: '凯尔特十字',
      description: '最全面的十牌占卜法',
      cards: 10,
      positions: [
        '当前情况',
        '挑战或机会',
        '遥远的过去',
        '最近的过去',
        '可能的未来',
        '即将的未来',
        '你的方法',
        '外部影响',
        '希望和恐惧',
        '最终结果'
      ],
      system: 'riderWaite',
      bestFor: '复杂问题、全面指导'
    },

    // 托特深奥占卜
    thothDeep: {
      name: 'Thoth Deep Reading',
      chineseName: '托特深奥占卜',
      description: '基于卡巴拉和占星学的深奥占卜',
      cards: 7,
      positions: [
        '意识层面',
        '潜意识层面',
        '精神层面',
        '情感层面',
        '物质层面',
        '灵魂层面',
        '整体指导'
      ],
      system: 'thoth',
      bestFor: '精神探索、深奥研究'
    },

    // 女神占卜
    goddessReading: {
      name: 'Goddess Reading',
      chineseName: '女神占卜',
      description: '基于女神原型的占卜方法',
      cards: 5,
      positions: [
        '内在女神',
        '女神能量',
        '女神智慧',
        '女神挑战',
        '女神指导'
      ],
      system: 'mythological',
      bestFor: '女性力量、原型探索'
    }
  },

  // 塔罗牌与MBTI的深度映射
  mbtiMapping: {
    // 直觉型 (N)
    intuitive: {
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Hermit', 'The Star', 'The Moon'],
      mbtiTypes: ['INTJ', 'INFJ', 'ENTJ', 'ENFJ', 'INTP', 'ENTP', 'INFP', 'ENFP'],
      characteristics: ['未来导向', '抽象思维', '创新', '洞察力'],
      shadow: ['脱离现实', '过度理想化', '缺乏行动']
    },

    // 感觉型 (S)
    sensing: {
      tarotCards: ['The Emperor', 'The Hierophant', 'The Sun', 'The World', 'The Four of Pentacles'],
      mbtiTypes: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'],
      characteristics: ['现实导向', '具体思维', '实用', '经验'],
      shadow: ['缺乏想象力', '过度保守', '抗拒变化']
    },

    // 思考型 (T)
    thinking: {
      tarotCards: ['The Magician', 'The Emperor', 'The Justice', 'The Hermit', 'The Seven of Swords'],
      mbtiTypes: ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'ISTJ', 'ISTP', 'ESTJ', 'ESTP'],
      characteristics: ['逻辑思维', '客观', '分析', '公正'],
      shadow: ['缺乏情感', '过度批判', '冷漠']
    },

    // 情感型 (F)
    feeling: {
      tarotCards: ['The High Priestess', 'The Empress', 'The Lovers', 'The Star', 'The Ten of Cups'],
      mbtiTypes: ['INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISFJ', 'ISFP', 'ESFJ', 'ESFP'],
      characteristics: ['情感导向', '同理心', '和谐', '价值观'],
      shadow: ['过度情绪化', '缺乏逻辑', '过度妥协']
    }
  }
};

// 塔罗牌测试问题 - 基于经典著作
export const MASTER_TAROT_QUESTIONS = [
  {
    id: 1,
    system: 'riderWaite',
    category: 'Life Focus',
    question: "你当前的生活重点是什么？",
    options: [
      "开始新的令人兴奋的事情",
      "运用技能实现目标",
      "跟随直觉和内在智慧",
      "培养和创造丰盛",
      "掌控和领导他人",
      "遵循传统价值观和指导",
      "寻求爱和有意义的关系",
      "以决心向前推进",
      "寻找内在力量和勇气",
      "反思和寻求更深层的意义"
    ],
    tarotCards: [
      'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor',
      'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit'
    ],
    interpretation: '基于韦特塔罗的传统解读'
  },

  {
    id: 2,
    system: 'thoth',
    category: 'Spiritual Development',
    question: "你的精神发展处于哪个阶段？",
    options: [
      "原始意识的觉醒",
      "意志力的统一",
      "潜意识的智慧",
      "创造力的表达",
      "权威和结构的建立",
      "传统智慧的传承",
      "爱与和谐的选择",
      "决心和控制的胜利",
      "内在力量的发现",
      "命运的循环变化"
    ],
    tarotCards: [
      'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor',
      'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'Wheel of Fortune'
    ],
    interpretation: '基于托特塔罗的深奥解读'
  },

  {
    id: 3,
    system: 'mythological',
    category: 'Archetypal Energy',
    question: "你与哪个神话原型最共鸣？",
    options: [
      "纯真的孩子（Dionysus）",
      "智慧的创造者（Hermes）",
      "神秘的女祭司（Isis）",
      "丰盛的女神（Demeter）",
      "权威的国王（Zeus）",
      "传统的导师（Chiron）",
      "和谐的爱人（Aphrodite）",
      "胜利的战士（Athena）",
      "内在的力量（Hercules）",
      "智慧的隐士（Odysseus）"
    ],
    tarotCards: [
      'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor',
      'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit'
    ],
    interpretation: '基于神话原型的深度解读'
  },

  {
    id: 4,
    system: 'integrated',
    category: 'Life Challenges',
    question: "你如何应对生活的挑战？",
    options: [
      "适应变化，顺其自然",
      "寻求公平和平衡",
      "投降并等待正确时机",
      "拥抱转变和新开始",
      "在一切中找到平衡和节制",
      "打破限制和束缚",
      "保持希望和灵感",
      "信任直觉和内在指导",
      "在努力中找到快乐和成功",
      "做出清晰的判断和决定"
    ],
    tarotCards: [
      'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance',
      'The Devil', 'The Star', 'The Moon', 'The Sun', 'Judgement'
    ],
    interpretation: '综合所有系统的解读'
  }
];

// 塔罗牌解读配置
export const TAROT_INTERPRETATION_CONFIG = {
  // 解读深度
  depth: {
    basic: {
      name: '基础解读',
      description: '简单的正逆位含义',
      includes: ['基本含义', '性格特征', '简单建议']
    },
    detailed: {
      name: '详细解读',
      description: '包含多个生活领域的解读',
      includes: ['基本含义', '性格特征', '职业指导', '爱情建议', '健康建议']
    },
    comprehensive: {
      name: '综合解读',
      description: '结合多种系统的深度解读',
      includes: ['韦特解读', '托特解读', '神话解读', 'MBTI映射', '生活指导']
    },
    master: {
      name: '大师解读',
      description: '基于经典著作的专家级解读',
      includes: ['经典解读', '深奥智慧', '神话原型', '心理分析', '精神指导']
    }
  },

  // 解读系统
  systems: {
    riderWaite: {
      name: '韦特塔罗',
      focus: '传统象征主义',
      bestFor: '初学者和传统主义者'
    },
    thoth: {
      name: '托特塔罗',
      focus: '深奥智慧',
      bestFor: '高级学习者和神秘主义者'
    },
    mythological: {
      name: '神话塔罗',
      focus: '原型和女神能量',
      bestFor: '神话爱好者和原型研究者'
    },
    modern: {
      name: '现代塔罗',
      focus: '心理治疗和个人成长',
      bestFor: '现代人和心理治疗师'
    }
  }
};
