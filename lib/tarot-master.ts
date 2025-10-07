// 大师级塔罗牌系统 - 基于权威著作的深度整合
// 参考书籍：
// 1. 《The Pictorial Key to the Tarot》by Arthur Edward Waite (韦特塔罗)
// 2. 《Tarot & Oracle Card Reading For Dummies》by Amber Jayanti
// 3. 《托特塔罗入门（11周年新修增订版）》by 瑞秋·波拉克
// 4. 《经典塔罗攻略秘籍》by 玛丽·格里尔
// 5. 《塔罗秘典：从神话与女神信仰出发》by 瑞秋·波拉克

export const MASTER_TAROT_SYSTEM = {
  // 塔罗牌系统选择
  systems: {
    waite: {
      name: '韦特塔罗系统',
      description: '基于Arthur Edward Waite的经典韦特塔罗牌系统',
      focus: '传统象征主义、详细解读、经典占卜方法',
      bestFor: '初学者、传统主义者、详细占卜',
      reference: '《The Pictorial Key to the Tarot》'
    },
    thoth: {
      name: '托特塔罗系统',
      description: '基于Aleister Crowley的托特塔罗牌系统',
      focus: '深奥哲学、心理分析、现代象征主义',
      bestFor: '进阶者、哲学爱好者、深度心理分析',
      reference: '《托特塔罗入门（11周年新修增订版）》'
    },
    psychological: {
      name: '荣格心理学塔罗',
      description: '基于荣格心理学的塔罗牌解读系统',
      focus: '心理发展、原型分析、阴影整合',
      bestFor: '心理治疗、个人成长、深度自我理解',
      reference: '《Jung and Tarot》by Sallie Nichols'
    },
    modern: {
      name: '现代数字塔罗',
      description: '适应数字时代的现代塔罗牌解读',
      focus: '职业指导、数字生活、现代挑战',
      bestFor: '职业发展、数字原住民、现代生活指导',
      reference: '《Tarot & Oracle Card Reading For Dummies》'
    }
  },

  // 大师级塔罗牌解读
  masterInterpretations: {
    'The Fool': {
      waite: {
        meaning: '新开始、自发性、纯真、冒险',
        personality: '自由精神、乐观、冒险、自发',
        advice: '拥抱新机会，信任你的直觉',
        career: '新职业道路、创意项目、创业',
        love: '新关系、新开始、有趣的连接',
        health: '新的健康习惯、心理清晰、活力'
      },
      thoth: {
        meaning: '纯粹意识、无限潜力、精神觉醒',
        personality: '纯真、开放、无限可能、精神觉醒',
        advice: '保持开放心态，探索无限可能',
        career: '精神导师、创意艺术家、哲学研究',
        love: '精神连接、灵魂伴侣、纯真爱情',
        health: '精神健康、冥想、内在平衡'
      },
      psychological: {
        meaning: '自我发展、新身份形成、探索',
        personality: '好奇、开放、实验性、真实',
        advice: '探索你的身份，对新体验保持开放',
        career: '自我探索、创意表达、个人品牌',
        love: '真实连接、自我发现、关系探索',
        health: '心理健康、自我接纳、成长'
      },
      modern: {
        meaning: '数字先锋、真实内容创作者、创业家',
        personality: '创新、真实、冒险、适应',
        advice: '开始数字项目，在线保持真实，拥抱创新',
        career: '数字创业、内容创作、社交媒体影响者',
        love: '数字关系中的真实、不害怕脆弱',
        health: '平衡数字和物理活动，远离屏幕休息'
      }
    },
    'The Magician': {
      waite: {
        meaning: '显化、意志力、技能、自信',
        personality: '自信、足智多谋、熟练、坚定',
        advice: '使用你的技能和资源实现目标',
        career: '领导角色、创意项目、技术技能',
        love: '自信的方法、清晰的沟通',
        health: '心理清晰、身体力量、治愈'
      },
      thoth: {
        meaning: '意志、创造力、精神力量、显化',
        personality: '意志坚强、创造力强、精神力量、显化能力',
        advice: '运用你的意志力创造现实',
        career: '精神导师、创意总监、能量治疗师',
        love: '精神连接、意志力、创造关系',
        health: '精神力量、能量平衡、意志力治疗'
      },
      psychological: {
        meaning: '自我力量、意识觉醒、个人力量',
        personality: '自我意识、赋权、专注、坚定',
        advice: '发展你的个人力量，专注于目标',
        career: '个人发展、领导力、自我实现',
        love: '自我赋权、个人力量、关系中的自信',
        health: '心理力量、自我意识、个人成长'
      },
      modern: {
        meaning: '科技领袖、数字战略家、在线影响者',
        personality: '战略、有影响力、技术精通、自信',
        advice: '领导数字转型，建立个人品牌，指导他人',
        career: '科技CEO、数字战略家、在线教育者',
        love: '使用技术增强关系，成为数字连接者',
        health: '使用技术进行健康跟踪，但保持人际连接'
      }
    },
    'The High Priestess': {
      waite: {
        meaning: '直觉、神秘、潜意识、智慧',
        personality: '直觉、神秘、智慧、反思',
        advice: '信任你的直觉，向内寻找答案',
        career: '研究、咨询、精神工作、教学',
        love: '直觉连接、精神关系',
        health: '直觉治愈、心理健康、梦境'
      },
      thoth: {
        meaning: '潜意识、直觉智慧、神秘知识',
        personality: '直觉、神秘、智慧、内在知识',
        advice: '发展你的直觉，探索潜意识',
        career: '神秘学研究、直觉咨询、精神指导',
        love: '精神连接、直觉关系、神秘爱情',
        health: '直觉治愈、梦境工作、精神健康'
      },
      psychological: {
        meaning: '潜意识、直觉发展、内在智慧',
        personality: '直觉、内省、智慧、内在知识',
        advice: '发展你的直觉，向内探索',
        career: '心理学、咨询、直觉发展、内在工作',
        love: '直觉关系、内在连接、精神爱情',
        health: '直觉治愈、内在工作、心理健康'
      },
      modern: {
        meaning: '数据科学家、用户体验研究员、数字治疗师',
        personality: '直觉、分析、智慧、反思',
        advice: '专注于数据驱动的洞察、用户体验、数字健康',
        career: '数据科学家、用户体验研究员、数字治疗师',
        love: '在数字关系中信任直觉，保持隐私',
        health: '使用技术进行冥想和正念，定期数字排毒'
      }
    }
  },

  // 大师级占卜方法
  masterSpreads: {
    'Classic Celtic Cross': {
      name: '经典凯尔特十字',
      description: '最经典的十张牌占卜法，提供全面的生活指导',
      cards: 10,
      positions: [
        '当前情况',
        '挑战或机会',
        '遥远的过去',
        '最近的过去',
        '可能的未来',
        '近期未来',
        '你的方法',
        '外部影响',
        '希望和恐惧',
        '最终结果'
      ],
      system: 'waite',
      difficulty: 'intermediate',
      timeRequired: '30-45分钟',
      bestFor: '一般生活指导、全面占卜'
    },
    'Thoth Tree of Life': {
      name: '托特生命之树',
      description: '基于卡巴拉生命之树的深奥占卜法',
      cards: 10,
      positions: [
        '王冠 - 精神目标',
        '智慧 - 理解',
        '理解 - 智慧',
        '慈悲 - 爱',
        '力量 - 意志',
        '美丽 - 平衡',
        '胜利 - 成功',
        '荣耀 - 成就',
        '基础 - 基础',
        '王国 - 物质世界'
      ],
      system: 'thoth',
      difficulty: 'advanced',
      timeRequired: '45-60分钟',
      bestFor: '精神发展、深奥研究'
    },
    'Jungian Shadow Work': {
      name: '荣格阴影工作',
      description: '基于荣格心理学的阴影整合占卜法',
      cards: 7,
      positions: [
        '意识自我',
        '阴影方面',
        '阿尼玛/阿尼姆斯',
        '当前挑战',
        '整合机会',
        '成长潜力',
        '完整路径'
      ],
      system: 'psychological',
      difficulty: 'advanced',
      timeRequired: '40-50分钟',
      bestFor: '个人成长、心理治疗、自我理解'
    },
    'Digital Career Path': {
      name: '数字职业路径',
      description: '现代数字时代的职业指导占卜法',
      cards: 6,
      positions: [
        '当前数字技能',
        '隐藏潜力',
        '市场机会',
        '需要克服的挑战',
        '推荐路径',
        '成功时间线'
      ],
      system: 'modern',
      difficulty: 'beginner',
      timeRequired: '20-30分钟',
      bestFor: '职业指导、数字转型'
    },
    'Integrated Life Reading': {
      name: '综合生活占卜',
      description: '结合所有系统的综合生活指导',
      cards: 12,
      positions: [
        '当前情况（经典）',
        '心理状态（荣格）',
        '数字存在（现代）',
        '过去影响',
        '当前挑战',
        '未来机会',
        '个人成长',
        '关系动态',
        '职业发展',
        '精神路径',
        '整合需求',
        '整体指导'
      ],
      system: 'integrated',
      difficulty: 'expert',
      timeRequired: '60-90分钟',
      bestFor: '全面生活指导、所有生活领域'
    }
  },

  // 大师级塔罗牌问题
  masterQuestions: [
    // 韦特系统问题
    {
      id: 1,
      system: 'waite',
      category: 'Life Focus',
      question: "你当前的生活重点是什么？",
      options: [
        "开始新的令人兴奋的事情",
        "运用技能实现目标",
        "跟随直觉和内在智慧",
        "培养和创造丰盛",
        "掌控和领导他人",
        "遵循传统价值观和指导",
        "寻求爱情和有意义的连接",
        "坚定地向前推进",
        "寻找内在力量和勇气",
        "反思和寻求更深层的意义"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit'],
      interpretation: '传统塔罗牌意义和象征主义'
    },

    // 托特系统问题
    {
      id: 2,
      system: 'thoth',
      category: 'Spiritual Development',
      question: "你的精神发展重点是什么？",
      options: [
        "探索纯粹意识和无限潜力",
        "发展意志力和创造力",
        "深化直觉和神秘知识",
        "培养爱和慈悲",
        "建立力量和意志",
        "寻求平衡和和谐",
        "追求胜利和成功",
        "建立荣耀和成就",
        "巩固基础和稳定性",
        "在物质世界中实现精神目标"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit'],
      interpretation: '深奥哲学和精神发展'
    },

    // 荣格心理学问题
    {
      id: 3,
      system: 'psychological',
      category: 'Psychological Development',
      question: "你如何处理信息？",
      options: [
        "依靠内在知识和直觉",
        "探索许多可能性和连接",
        "专注于具体事实和细节",
        "关注当下体验",
        "逻辑分析和思考问题",
        "高效组织和构建信息",
        "考虑个人价值观和真实性",
        "专注于和谐和社交连接"
      ],
      tarotCards: ['The High Priestess', 'The Fool', 'The Hierophant', 'The Sun', 'The Hermit', 'The Emperor', 'The Star', 'The Lovers'],
      interpretation: '荣格认知功能和心理发展'
    },

    // 现代系统问题
    {
      id: 4,
      system: 'modern',
      category: 'Digital Identity',
      question: "你如何在网上展示自己？",
      options: [
        "分享真实的自己和个人旅程",
        "专注于专业成就和专业知识",
        "创造娱乐和引人入胜的内容",
        "建立社区和促进连接",
        "提供教育和信息内容",
        "展示创意作品和艺术愿景",
        "倡导事业和社会问题",
        "保持隐私和选择性分享"
      ],
      tarotCards: ['The Star', 'The Emperor', 'The Sun', 'The Lovers', 'The Hierophant', 'The Empress', 'The Justice', 'The High Priestess'],
      interpretation: '现代数字身份和在线存在'
    }
  ],

  // 大师级MBTI映射
  masterMBTIMapping: {
    'The Fool': {
      mbtiTypes: ['ENFP', 'ESFP', 'ENTP', 'ESTP'],
      cognitiveFunctions: ['Ne', 'Se'],
      waiteTraits: ['冒险', '自发', '乐观', '自由精神'],
      thothTraits: ['纯真', '开放', '无限可能', '精神觉醒'],
      psychologicalTraits: ['真实', '探索', '开放', '实验性'],
      modernTraits: ['创新', '数字原生', '内容创作者', '创业思维'],
      careerPaths: ['企业家', '内容创作者', '数字营销', '创新顾问']
    },
    'The Magician': {
      mbtiTypes: ['ENTJ', 'INTJ', 'ENFJ', 'INFJ'],
      cognitiveFunctions: ['Te', 'Ni', 'Fe'],
      waiteTraits: ['自信', '足智多谋', '熟练', '坚定'],
      thothTraits: ['意志坚强', '创造力强', '精神力量', '显化能力'],
      psychologicalTraits: ['自我意识', '赋权', '专注', '显化'],
      modernTraits: ['战略', '技术精通', '有影响力', '数字领袖'],
      careerPaths: ['科技CEO', '数字战略家', '在线教育者', '科技顾问']
    },
    'The High Priestess': {
      mbtiTypes: ['INFJ', 'INFP', 'ISFJ', 'ISFP'],
      cognitiveFunctions: ['Ni', 'Fi', 'Si'],
      waiteTraits: ['直觉', '神秘', '智慧', '反思'],
      thothTraits: ['直觉', '神秘', '智慧', '内在知识'],
      psychologicalTraits: ['内省', '直觉', '智慧', '内在知识'],
      modernTraits: ['数据精通', '用户体验专注', '健康倡导', '分析'],
      careerPaths: ['数据科学家', '用户体验研究员', '数字治疗师', '分析专家']
    }
  }
};

// 塔罗牌测试配置
export const TAROT_TEST_CONFIG = {
  // 测试难度级别
  difficultyLevels: {
    beginner: {
      name: '初学者',
      description: '适合塔罗牌初学者',
      questionCount: 5,
      systems: ['waite'],
      timeRequired: '10-15分钟'
    },
    intermediate: {
      name: '中级',
      description: '适合有一定塔罗牌基础的用户',
      questionCount: 8,
      systems: ['waite', 'modern'],
      timeRequired: '15-25分钟'
    },
    advanced: {
      name: '高级',
      description: '适合塔罗牌进阶者',
      questionCount: 12,
      systems: ['waite', 'thoth', 'psychological'],
      timeRequired: '25-40分钟'
    },
    expert: {
      name: '专家级',
      description: '适合塔罗牌专家和深度研究者',
      questionCount: 15,
      systems: ['waite', 'thoth', 'psychological', 'modern'],
      timeRequired: '40-60分钟'
    }
  },

  // 解读深度配置
  interpretationDepth: {
    basic: {
      name: '基础解读',
      description: '简单的牌意和基本指导',
      detailLevel: 'basic',
      timeRequired: '5-10分钟'
    },
    detailed: {
      name: '详细解读',
      description: '深入的牌意分析和生活指导',
      detailLevel: 'detailed',
      timeRequired: '15-25分钟'
    },
    comprehensive: {
      name: '综合解读',
      description: '多系统综合的深度解读',
      detailLevel: 'comprehensive',
      timeRequired: '30-45分钟'
    },
    master: {
      name: '大师级解读',
      description: '基于权威著作的专家级解读',
      detailLevel: 'master',
      timeRequired: '45-90分钟'
    }
  }
};
