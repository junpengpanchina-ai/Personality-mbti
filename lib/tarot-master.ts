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
    },

    // 更多韦特系统问题
    {
      id: 5,
      system: 'waite',
      category: 'Life Challenges',
      question: "你如何应对生活中的挑战？",
      options: [
        "适应变化，顺其自然",
        "寻求公平和平衡",
        "投降并等待合适的时机",
        "拥抱转变和新开始",
        "在一切中找到平衡和节制",
        "摆脱限制和束缚",
        "保持希望和灵感",
        "信任直觉和内在指导",
        "在努力中找到快乐和成功",
        "做出清晰的判断和决定"
      ],
      tarotCards: ['Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Star', 'The Moon', 'The Sun', 'Judgement'],
      interpretation: '传统塔罗牌挑战和应对方式'
    },

    {
      id: 6,
      system: 'waite',
      category: 'Relationships',
      question: "你在关系中最重要的价值是什么？",
      options: [
        "真诚和开放",
        "信任和忠诚",
        "激情和浪漫",
        "稳定和安全",
        "成长和学习",
        "和谐与平衡",
        "自由和独立",
        "支持和关怀"
      ],
      tarotCards: ['The Lovers', 'The Star', 'The Sun', 'The World', 'The Temperance', 'The Justice', 'The Fool', 'The Empress'],
      interpretation: '传统塔罗牌关系指导'
    },

    {
      id: 7,
      system: 'waite',
      category: 'Career Goals',
      question: "你的职业目标是什么？",
      options: [
        "成为领导者和管理者",
        "创造和表达艺术",
        "帮助和服务他人",
        "探索和研究新领域",
        "建立稳定的基础",
        "创新和改变世界",
        "传授知识和智慧",
        "建立和谐的工作环境"
      ],
      tarotCards: ['The Emperor', 'The Empress', 'The Hierophant', 'The Hermit', 'The World', 'The Magician', 'The High Priestess', 'The Temperance'],
      interpretation: '传统塔罗牌职业指导'
    },

    {
      id: 8,
      system: 'waite',
      category: 'Personal Growth',
      question: "你希望在哪些方面成长？",
      options: [
        "发展直觉和内在智慧",
        "增强意志力和决心",
        "培养创造力和表达",
        "建立权威和领导力",
        "寻求精神指导",
        "平衡理性和感性",
        "找到内在力量",
        "实现完整和成就"
      ],
      tarotCards: ['The High Priestess', 'The Magician', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'Strength', 'The World'],
      interpretation: '传统塔罗牌个人发展'
    },

    // 更多托特系统问题
    {
      id: 9,
      system: 'thoth',
      category: 'Spiritual Awakening',
      question: "你的精神觉醒过程如何？",
      options: [
        "通过纯真和开放开始",
        "运用意志力创造现实",
        "深化内在知识和直觉",
        "培养爱和创造力",
        "建立精神权威",
        "寻求深奥智慧",
        "平衡对立面",
        "实现精神完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '托特塔罗精神觉醒路径'
    },

    {
      id: 10,
      system: 'thoth',
      category: 'Mystical Knowledge',
      question: "你寻求什么样的神秘知识？",
      options: [
        "宇宙的无限可能性",
        "意志力的魔法力量",
        "潜意识的深度智慧",
        "创造力的丰盛表达",
        "精神权威的建立",
        "传统智慧的传承",
        "对立面的和谐统一",
        "精神旅程的完成"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '托特塔罗神秘知识体系'
    },

    // 更多荣格心理学问题
    {
      id: 11,
      system: 'psychological',
      category: 'Shadow Work',
      question: "你如何处理内心的阴影面？",
      options: [
        "通过直觉探索潜意识",
        "运用意志力面对挑战",
        "接受内在的黑暗面",
        "用爱和创造力转化",
        "建立内在权威",
        "寻求传统智慧指导",
        "平衡内在对立面",
        "实现心理完整"
      ],
      tarotCards: ['The High Priestess', 'The Magician', 'The Devil', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格阴影工作与塔罗牌'
    },

    {
      id: 12,
      system: 'psychological',
      category: 'Archetypal Development',
      question: "你正在发展哪个原型？",
      options: [
        "纯真的探索者",
        "强大的魔法师",
        "智慧的女祭司",
        "丰盛的母亲",
        "权威的父亲",
        "传统的导师",
        "和谐的爱人",
        "完整的自我"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格原型发展与塔罗牌'
    },

    // 更多现代系统问题
    {
      id: 13,
      system: 'modern',
      category: 'Technology Integration',
      question: "你如何与技术互动？",
      options: [
        "拥抱新技术和创新",
        "运用技术实现目标",
        "保持数字隐私和神秘",
        "用技术创造和表达",
        "建立技术权威和领导",
        "学习传统技术知识",
        "平衡数字和现实生活",
        "实现技术完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '现代技术与塔罗牌'
    },

    {
      id: 14,
      system: 'modern',
      category: 'Digital Wellness',
      question: "你如何保持数字健康？",
      options: [
        "保持数字纯真和开放",
        "运用技术工具增强能力",
        "信任数字直觉和洞察",
        "用技术培养创造力",
        "建立数字权威和影响力",
        "寻求数字智慧指导",
        "平衡在线和离线生活",
        "实现数字完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '现代数字健康与塔罗牌'
    },

    {
      id: 15,
      system: 'modern',
      category: 'Future Vision',
      question: "你对未来的愿景是什么？",
      options: [
        "探索新的数字可能性",
        "运用技术创造未来",
        "深化数字智慧和洞察",
        "用技术培养未来创造力",
        "建立数字未来权威",
        "传承数字传统智慧",
        "平衡传统和数字未来",
        "实现数字未来完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '现代数字未来与塔罗牌'
    },

    // 更多韦特系统问题
    {
      id: 16,
      system: 'waite',
      category: 'Spiritual Journey',
      question: "你的精神旅程如何？",
      options: [
        "通过纯真开始精神探索",
        "运用意志力实现精神目标",
        "深化内在智慧和直觉",
        "培养精神创造力",
        "建立精神权威",
        "寻求传统精神指导",
        "平衡精神对立面",
        "实现精神完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '韦特塔罗精神旅程'
    },

    {
      id: 17,
      system: 'waite',
      category: 'Inner Wisdom',
      question: "你如何发展内在智慧？",
      options: [
        "保持开放和纯真",
        "运用意志力学习",
        "深化直觉和洞察",
        "培养创造力和表达",
        "建立内在权威",
        "寻求传统智慧指导",
        "平衡理性和感性",
        "实现智慧完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '韦特塔罗内在智慧发展'
    },

    {
      id: 18,
      system: 'waite',
      category: 'Life Purpose',
      question: "你的人生目标是什么？",
      options: [
        "探索新的可能性",
        "运用技能实现目标",
        "深化内在智慧",
        "培养创造力和丰盛",
        "建立权威和领导力",
        "寻求传统指导",
        "平衡对立面",
        "实现人生完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '韦特塔罗人生目标'
    },

    // 更多托特系统问题
    {
      id: 19,
      system: 'thoth',
      category: 'Magical Practice',
      question: "你的魔法实践如何？",
      options: [
        "通过纯真开始魔法学习",
        "运用意志力进行魔法实践",
        "深化魔法直觉和知识",
        "培养魔法创造力",
        "建立魔法权威",
        "寻求传统魔法指导",
        "平衡魔法对立面",
        "实现魔法完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '托特塔罗魔法实践'
    },

    {
      id: 20,
      system: 'thoth',
      category: 'Consciousness Expansion',
      question: "你如何扩展意识？",
      options: [
        "通过纯真探索意识",
        "运用意志力扩展意识",
        "深化意识洞察",
        "培养意识创造力",
        "建立意识权威",
        "寻求传统意识指导",
        "平衡意识对立面",
        "实现意识完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '托特塔罗意识扩展'
    },

    // 更多荣格心理学问题
    {
      id: 21,
      system: 'psychological',
      category: 'Individuation Process',
      question: "你的个性化过程如何？",
      options: [
        "通过纯真开始个性化",
        "运用意志力进行个性化",
        "深化个性化洞察",
        "培养个性化创造力",
        "建立个性化权威",
        "寻求传统个性化指导",
        "平衡个性化对立面",
        "实现个性化完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格个性化过程与塔罗牌'
    },

    {
      id: 22,
      system: 'psychological',
      category: 'Anima/Animus Integration',
      question: "你如何整合内在异性面？",
      options: [
        "通过纯真探索内在异性面",
        "运用意志力整合内在异性面",
        "深化内在异性面洞察",
        "培养内在异性面创造力",
        "建立内在异性面权威",
        "寻求传统内在异性面指导",
        "平衡内在异性面对立面",
        "实现内在异性面完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格内在异性面整合与塔罗牌'
    },

    {
      id: 23,
      system: 'psychological',
      category: 'Collective Unconscious',
      question: "你如何连接集体潜意识？",
      options: [
        "通过纯真连接集体潜意识",
        "运用意志力探索集体潜意识",
        "深化集体潜意识洞察",
        "培养集体潜意识创造力",
        "建立集体潜意识权威",
        "寻求传统集体潜意识指导",
        "平衡集体潜意识对立面",
        "实现集体潜意识完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格集体潜意识与塔罗牌'
    },

    // 更多荣格心理学问题
    {
      id: 26,
      system: 'psychological',
      category: 'Persona Development',
      question: "你如何发展人格面具？",
      options: [
        "通过纯真探索人格面具",
        "运用意志力塑造人格面具",
        "深化人格面具洞察",
        "培养人格面具创造力",
        "建立人格面具权威",
        "寻求传统人格面具指导",
        "平衡人格面具对立面",
        "实现人格面具完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格人格面具发展与塔罗牌'
    },

    {
      id: 27,
      system: 'psychological',
      category: 'Self Realization',
      question: "你如何实现自我实现？",
      options: [
        "通过纯真开始自我实现",
        "运用意志力进行自我实现",
        "深化自我实现洞察",
        "培养自我实现创造力",
        "建立自我实现权威",
        "寻求传统自我实现指导",
        "平衡自我实现对立面",
        "实现自我实现完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格自我实现与塔罗牌'
    },

    {
      id: 28,
      system: 'psychological',
      category: 'Transcendence',
      question: "你如何实现超越？",
      options: [
        "通过纯真实现超越",
        "运用意志力进行超越",
        "深化超越洞察",
        "培养超越创造力",
        "建立超越权威",
        "寻求传统超越指导",
        "平衡超越对立面",
        "实现超越完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格超越与塔罗牌'
    },

    {
      id: 29,
      system: 'psychological',
      category: 'Integration',
      question: "你如何实现整合？",
      options: [
        "通过纯真实现整合",
        "运用意志力进行整合",
        "深化整合洞察",
        "培养整合创造力",
        "建立整合权威",
        "寻求传统整合指导",
        "平衡整合对立面",
        "实现整合完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格整合与塔罗牌'
    },

    {
      id: 30,
      system: 'psychological',
      category: 'Wholeness',
      question: "你如何实现完整性？",
      options: [
        "通过纯真实现完整性",
        "运用意志力进行完整性",
        "深化完整性洞察",
        "培养完整性创造力",
        "建立完整性权威",
        "寻求传统完整性指导",
        "平衡完整性对立面",
        "实现完整性完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格完整性与塔罗牌'
    },

    {
      id: 31,
      system: 'psychological',
      category: 'Individuation',
      question: "你如何实现个体化？",
      options: [
        "通过纯真实现个体化",
        "运用意志力进行个体化",
        "深化个体化洞察",
        "培养个体化创造力",
        "建立个体化权威",
        "寻求传统个体化指导",
        "平衡个体化对立面",
        "实现个体化完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '荣格个体化与塔罗牌'
    },

    // 更多现代系统问题
    {
      id: 24,
      system: 'modern',
      category: 'Digital Transformation',
      question: "你如何进行数字转型？",
      options: [
        "通过纯真开始数字转型",
        "运用意志力进行数字转型",
        "深化数字转型洞察",
        "培养数字转型创造力",
        "建立数字转型权威",
        "寻求传统数字转型指导",
        "平衡数字转型对立面",
        "实现数字转型完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '现代数字转型与塔罗牌'
    },

    {
      id: 25,
      system: 'modern',
      category: 'Virtual Reality',
      question: "你如何与虚拟现实互动？",
      options: [
        "通过纯真探索虚拟现实",
        "运用意志力在虚拟现实中创造",
        "深化虚拟现实洞察",
        "培养虚拟现实创造力",
        "建立虚拟现实权威",
        "寻求传统虚拟现实指导",
        "平衡虚拟现实对立面",
        "实现虚拟现实完整"
      ],
      tarotCards: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The World'],
      interpretation: '现代虚拟现实与塔罗牌'
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
