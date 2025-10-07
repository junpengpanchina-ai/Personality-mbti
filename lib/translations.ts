export interface Translations {
  siteName: string;
  features: string;
  about: string;
  privacy: string;
  compliance: string;
  heroTitle: string;
  heroSubtitle: string;
  quickTest: string;
  fullTest: string;
  entertainmentTests: string;
  entertainmentSubtitle: string;
  zodiacTest: string;
  baziTest: string;
  tarotTest: string;
  professionalAnalysis: string;
  professionalAnalysisDesc: string;
  detailedInsights: string;
  detailedInsightsDesc: string;
  freeAccurate: string;
  freeAccurateDesc: string;
  copyright: string;
  copyrightDesc: string;
  // Test page translations
  backToHome: string;
  question: string;
  of: string;
  next: string;
  previous: string;
  submit: string;
  tryAgain: string;
  takeTestAgain: string;
  takeMBTITest: string;
  quickTestShort: string;
  // Results
  yourResult: string;
  personalityType: string;
  compatibility: string;
  description: string;
  traits: string;
  element: string;
  meaning: string;
  // Tarot specific
  tarotReading: string;
  tarotTraits: string;
  currentLifeFocus: string;
  chooseOption: string;
  // Zodiac specific
  cosmicReading: string;
  cosmicTraits: string;
  cosmicCompatibility: string;
  rulingPlanet: string;
  quality: string;
  // Bazi specific
  baziReading: string;
  baziTraits: string;
  baziCompatibility: string;
  baziElement: string;
  baziNature: string;
  // Test questions
  yourChoice: string;
  explanation: string;
  chooseTraits: string;
  clickToContinue: string;
  defaultExplanation: string;
  questions: {
    party: string;
    partyOptions: string[];
    decisions: string;
    decisionsOptions: string[];
    conflict: string;
    conflictOptions: string[];
    preference: string;
    preferenceOptions: string[];
    learning: string;
    learningOptions: string[];
    interests: string;
    interestsOptions: string[];
    feedback: string;
    feedbackOptions: string[];
    workStyle: string;
    workStyleOptions: string[];
    socialSituations: string;
    socialSituationsOptions: string[];
    drawnTo: string;
    drawnToOptions: string[];
    someoneUpset: string;
    someoneUpsetOptions: string[];
    decisions2: string;
    decisions2Options: string[];
  };
}

export const translations: Record<string, Translations> = {
  en: {
    siteName: "MBTI Personality Test",
    features: "Features",
    about: "About",
    privacy: "Privacy",
    compliance: "Compliance",
    heroTitle: "Discover Your Personality Type",
    heroSubtitle: "Take our professional MBTI personality test to understand your unique traits, strengths, and how you interact with the world around you.",
    quickTest: "Start Quick Test (12 questions)",
    fullTest: "Full Assessment (93 questions)",
    entertainmentTests: "Entertainment Tests",
    entertainmentSubtitle: "Discover your personality through fun and mystical approaches",
    zodiacTest: "MBTI × Zodiac Divination",
    baziTest: "MBTI × Bazi Fortune Reading",
    tarotTest: "MBTI × Tarot Card Reading",
    professionalAnalysis: "Professional Analysis",
    professionalAnalysisDesc: "Based on Carl Jung's psychological types and the Myers-Briggs framework",
    detailedInsights: "Detailed Insights",
    detailedInsightsDesc: "Comprehensive personality analysis with career and relationship guidance",
    freeAccurate: "Free & Accurate",
    freeAccurateDesc: "No registration required. Get instant, scientifically-backed results",
    copyright: "© 2024 MBTI Personality Test. All rights reserved.",
    copyrightDesc: "Discover your personality type with our professional MBTI assessment",
    // Test page translations
    yourChoice: "Your choice:",
    explanation: "Explanation",
    chooseTraits: "Choose your professional traits:",
    clickToContinue: "💡 Click to continue",
    defaultExplanation: "This question helps determine your personality preferences.",
    backToHome: "Back to Home",
    question: "Question",
    of: "of",
    next: "Next",
    previous: "Previous",
    submit: "Submit",
    tryAgain: "Try Again",
    takeTestAgain: "Take Test Again",
    takeMBTITest: "Take MBTI Test",
    quickTestShort: "Quick Test (12 questions)",
    // Results
    yourResult: "Your Result",
    personalityType: "Personality Type",
    compatibility: "Compatibility",
    description: "Description",
    traits: "Traits",
    element: "Element",
    meaning: "Meaning",
    // Tarot specific
    tarotReading: "Tarot Reading",
    tarotTraits: "Your Tarot Traits",
    currentLifeFocus: "What's your current life focus?",
    chooseOption: "Choose the option that resonates with your mystical energy",
    // Zodiac specific
    cosmicReading: "Cosmic Reading",
    cosmicTraits: "Your Cosmic Traits",
    cosmicCompatibility: "Cosmic Compatibility",
    rulingPlanet: "Ruling Planet",
    quality: "Quality",
    // Bazi specific
    baziReading: "Bazi Reading",
    baziTraits: "Your Bazi Traits",
    baziCompatibility: "Bazi Compatibility",
    baziElement: "Bazi Element",
    baziNature: "Bazi Nature",
    // Test questions
    questions: {
      party: "At a party, you would rather:",
      partyOptions: [
        "Spend time with a few close friends",
        "Meet and talk to many new people"
      ],
      decisions: "When making decisions, you prefer to:",
      decisionsOptions: [
        "Rely on facts and concrete information",
        "Consider possibilities and future implications"
      ],
      conflict: "In a conflict, you tend to:",
      conflictOptions: [
        "Focus on the logical aspects and fairness",
        "Consider people's feelings and relationships"
      ],
      preference: "You prefer to:",
      preferenceOptions: [
        "Have things planned and organized",
        "Keep your options open and flexible"
      ],
      learning: "When learning something new, you:",
      learningOptions: [
        "Prefer to work alone and think it through",
        "Like to discuss and collaborate with others"
      ],
      interests: "You are more interested in:",
      interestsOptions: [
        "What is real and practical",
        "What is possible and theoretical"
      ],
      feedback: "When giving feedback, you:",
      feedbackOptions: [
        "Focus on what needs to be improved",
        "Emphasize positive aspects first"
      ],
      workStyle: "You work better when:",
      workStyleOptions: [
        "You have clear deadlines and structure",
        "You can work at your own pace"
      ],
      socialSituations: "In social situations, you:",
      socialSituationsOptions: [
        "Prefer smaller, intimate gatherings",
        "Enjoy large groups and parties"
      ],
      drawnTo: "You are more drawn to:",
      drawnToOptions: [
        "Concrete facts and details",
        "Big picture ideas and concepts"
      ],
      someoneUpset: "When someone is upset, you:",
      someoneUpsetOptions: [
        "Try to solve their problem logically",
        "Focus on understanding their feelings"
      ],
      decisions2: "You prefer to:",
      decisions2Options: [
        "Make decisions quickly and move on",
        "Take time to consider all options"
      ]
    }
  },
  zh: {
    siteName: "MBTI性格测试",
    features: "功能特色",
    about: "关于我们",
    privacy: "隐私政策",
    compliance: "合规声明",
    heroTitle: "发现您的性格类型",
    heroSubtitle: "参加我们的专业MBTI性格测试，了解您独特的特质、优势以及如何与周围世界互动。",
    quickTest: "开始快速测试（12题）",
    fullTest: "完整评估（93题）",
    entertainmentTests: "娱乐测试",
    entertainmentSubtitle: "通过有趣和神秘的方式发现您的性格",
    zodiacTest: "MBTI × 星座占卜",
    baziTest: "MBTI × 八字算命",
    tarotTest: "MBTI × 塔罗牌占卜",
    professionalAnalysis: "专业分析",
    professionalAnalysisDesc: "基于卡尔·荣格的心理类型理论和迈尔斯-布里格斯框架",
    detailedInsights: "详细洞察",
    detailedInsightsDesc: "全面的性格分析，包含职业和关系指导",
    freeAccurate: "免费且准确",
    freeAccurateDesc: "无需注册。获得即时、科学支持的结果",
    copyright: "© 2024 MBTI性格测试。保留所有权利。",
    copyrightDesc: "通过我们的专业MBTI评估发现您的性格类型",
    // Test page translations
    yourChoice: "您的选择：",
    explanation: "解析说明",
    chooseTraits: "选择您的专业特质：",
    clickToContinue: "💡 点击继续",
    defaultExplanation: "这个问题有助于确定您的性格偏好。",
    backToHome: "返回首页",
    question: "问题",
    of: "共",
    next: "下一步",
    previous: "上一步",
    submit: "提交",
    tryAgain: "重试",
    takeTestAgain: "重新测试",
    takeMBTITest: "进行MBTI测试",
    quickTestShort: "快速测试（12题）",
    // Results
    yourResult: "您的结果",
    personalityType: "性格类型",
    compatibility: "匹配度",
    description: "描述",
    traits: "特质",
    element: "元素",
    meaning: "含义",
    // Tarot specific
    tarotReading: "塔罗牌解读",
    tarotTraits: "您的塔罗特质",
    currentLifeFocus: "您当前的生活重心是什么？",
    chooseOption: "选择与您的神秘能量产生共鸣的选项",
    // Zodiac specific
    cosmicReading: "宇宙解读",
    cosmicTraits: "您的宇宙特质",
    cosmicCompatibility: "宇宙匹配度",
    rulingPlanet: "主宰行星",
    quality: "性质",
    // Bazi specific
    baziReading: "八字解读",
    baziTraits: "您的八字特质",
    baziCompatibility: "八字匹配度",
    baziElement: "八字元素",
    baziNature: "八字性质",
    // Test questions
    questions: {
      party: "在聚会上，您更愿意：",
      partyOptions: [
        "与几个亲密朋友共度时光",
        "认识并和许多新朋友交谈"
      ],
      decisions: "做决定时，您更喜欢：",
      decisionsOptions: [
        "依靠事实和具体信息",
        "考虑可能性和未来影响"
      ],
      conflict: "在冲突中，您倾向于：",
      conflictOptions: [
        "关注逻辑方面和公平性",
        "考虑人们的感受和关系"
      ],
      preference: "您更喜欢：",
      preferenceOptions: [
        "有计划和组织地做事",
        "保持选择的开放性和灵活性"
      ],
      learning: "学习新事物时，您：",
      learningOptions: [
        "喜欢独自思考和学习",
        "喜欢与他人讨论和合作"
      ],
      interests: "您对以下更感兴趣：",
      interestsOptions: [
        "真实和实用的东西",
        "可能性和理论性的东西"
      ],
      feedback: "给予反馈时，您：",
      feedbackOptions: [
        "专注于需要改进的地方",
        "首先强调积极方面"
      ],
      workStyle: "您在工作时表现更好：",
      workStyleOptions: [
        "有明确的截止日期和结构时",
        "可以按自己的节奏工作时"
      ],
      socialSituations: "在社交场合中，您：",
      socialSituationsOptions: [
        "更喜欢小型、亲密的聚会",
        "享受大型聚会和派对"
      ],
      drawnTo: "您更被以下吸引：",
      drawnToOptions: [
        "具体的事实和细节",
        "大局观念和概念"
      ],
      someoneUpset: "当有人难过时，您：",
      someoneUpsetOptions: [
        "尝试用逻辑解决他们的问题",
        "专注于理解他们的感受"
      ],
      decisions2: "您更喜欢：",
      decisions2Options: [
        "快速做决定并继续前进",
        "花时间考虑所有选项"
      ]
    }
  },
  ko: {
    siteName: "MBTI 성격 테스트",
    features: "기능",
    about: "소개",
    privacy: "개인정보처리방침",
    compliance: "컴플라이언스",
    heroTitle: "당신의 성격 유형을 발견하세요",
    heroSubtitle: "전문적인 MBTI 성격 테스트를 통해 당신의 독특한 특성, 강점, 그리고 주변 세계와의 상호작용 방식을 이해하세요.",
    quickTest: "빠른 테스트 시작 (12문항)",
    fullTest: "전체 평가 (93문항)",
    entertainmentTests: "엔터테인먼트 테스트",
    entertainmentSubtitle: "재미있고 신비로운 접근법으로 당신의 성격을 발견하세요",
    zodiacTest: "MBTI × 별자리 점성술",
    baziTest: "MBTI × 사주 운세",
    tarotTest: "MBTI × 타로카드 점술",
    professionalAnalysis: "전문 분석",
    professionalAnalysisDesc: "칼 융의 심리 유형과 마이어스-브릭스 프레임워크 기반",
    detailedInsights: "상세한 통찰",
    detailedInsightsDesc: "커리어와 관계 가이드가 포함된 포괄적인 성격 분석",
    freeAccurate: "무료 및 정확",
    freeAccurateDesc: "등록 불필요. 즉시, 과학적으로 뒷받침되는 결과",
    copyright: "© 2024 MBTI 성격 테스트. 모든 권리 보유.",
    copyrightDesc: "전문적인 MBTI 평가로 당신의 성격 유형을 발견하세요",
    // Test page translations
    yourChoice: "당신의 선택:",
    explanation: "설명",
    chooseTraits: "전문적 특성을 선택하세요:",
    clickToContinue: "💡 계속하려면 클릭하세요",
    defaultExplanation: "이 질문은 당신의 성격 선호도를 결정하는 데 도움이 됩니다.",
    backToHome: "홈으로 돌아가기",
    question: "문제",
    of: "중",
    next: "다음",
    previous: "이전",
    submit: "제출",
    tryAgain: "다시 시도",
    takeTestAgain: "테스트 다시하기",
    takeMBTITest: "MBTI 테스트하기",
    quickTestShort: "빠른 테스트 (12문항)",
    // Results
    yourResult: "당신의 결과",
    personalityType: "성격 유형",
    compatibility: "호환성",
    description: "설명",
    traits: "특성",
    element: "원소",
    meaning: "의미",
    // Tarot specific
    tarotReading: "타로카드 읽기",
    tarotTraits: "당신의 타로 특성",
    currentLifeFocus: "현재 당신의 삶의 초점은 무엇인가요?",
    chooseOption: "당신의 신비로운 에너지와 공명하는 옵션을 선택하세요",
    // Zodiac specific
    cosmicReading: "우주 읽기",
    cosmicTraits: "당신의 우주 특성",
    cosmicCompatibility: "우주 호환성",
    rulingPlanet: "지배 행성",
    quality: "성질",
    // Bazi specific
    baziReading: "사주 읽기",
    baziTraits: "당신의 사주 특성",
    baziCompatibility: "사주 호환성",
    baziElement: "사주 원소",
    baziNature: "사주 성질",
    // Test questions
    questions: {
      party: "파티에서 당신은 다음 중 어느 것을 선호하나요?",
      partyOptions: [
        "몇 명의 가까운 친구들과 시간을 보내기",
        "많은 새로운 사람들을 만나고 대화하기"
      ],
      decisions: "결정을 내릴 때 당신은 다음 중 어느 것을 선호하나요?",
      decisionsOptions: [
        "사실과 구체적인 정보에 의존하기",
        "가능성과 미래의 영향을 고려하기"
      ],
      conflict: "갈등 상황에서 당신은 다음 중 어느 쪽에 더 기울어지나요?",
      conflictOptions: [
        "논리적 측면과 공정성에 집중하기",
        "사람들의 감정과 관계를 고려하기"
      ],
      preference: "당신은 다음 중 어느 것을 선호하나요?",
      preferenceOptions: [
        "계획적이고 체계적으로 일하기",
        "선택의 여지를 열어두고 유연하게 대응하기"
      ],
      learning: "새로운 것을 배울 때 당신은:",
      learningOptions: [
        "혼자서 생각하고 학습하는 것을 선호",
        "다른 사람들과 논의하고 협력하는 것을 좋아함"
      ],
      interests: "당신은 다음 중 어느 것에 더 관심이 있나요?",
      interestsOptions: [
        "실제적이고 실용적인 것",
        "가능성과 이론적인 것"
      ],
      feedback: "피드백을 줄 때 당신은:",
      feedbackOptions: [
        "개선이 필요한 부분에 집중",
        "긍정적인 측면을 먼저 강조"
      ],
      workStyle: "당신은 다음 상황에서 더 잘 일하나요?",
      workStyleOptions: [
        "명확한 마감일과 구조가 있을 때",
        "자신의 속도로 일할 수 있을 때"
      ],
      socialSituations: "사회적 상황에서 당신은:",
      socialSituationsOptions: [
        "소규모의 친밀한 모임을 선호",
        "대규모 그룹과 파티를 즐김"
      ],
      drawnTo: "당신은 다음 중 어느 것에 더 끌리나요?",
      drawnToOptions: [
        "구체적인 사실과 세부사항",
        "큰 그림과 개념"
      ],
      someoneUpset: "누군가가 화가 났을 때 당신은:",
      someoneUpsetOptions: [
        "논리적으로 문제를 해결하려고 시도",
        "그들의 감정을 이해하는 데 집중"
      ],
      decisions2: "당신은 다음 중 어느 것을 선호하나요?",
      decisions2Options: [
        "빠르게 결정하고 넘어가기",
        "모든 옵션을 고려할 시간을 갖기"
      ]
    }
  },
  ja: {
    siteName: "MBTI性格テスト",
    features: "機能",
    about: "について",
    privacy: "プライバシー",
    compliance: "コンプライアンス",
    heroTitle: "あなたの性格タイプを発見",
    heroSubtitle: "プロフェッショナルなMBTI性格テストを受けて、あなたのユニークな特性、強み、そして周囲の世界との関わり方を理解しましょう。",
    quickTest: "クイックテスト開始（12問）",
    fullTest: "完全評価（93問）",
    entertainmentTests: "エンターテイメントテスト",
    entertainmentSubtitle: "楽しく神秘的なアプローチで性格を発見",
    zodiacTest: "MBTI × 星座占い",
    baziTest: "MBTI × 八字占い",
    tarotTest: "MBTI × タロットカード占い",
    professionalAnalysis: "プロフェッショナル分析",
    professionalAnalysisDesc: "カール・ユングの心理タイプとマイヤーズ・ブリッグスフレームワークに基づく",
    detailedInsights: "詳細な洞察",
    detailedInsightsDesc: "キャリアと関係性のガイダンスを含む包括的な性格分析",
    freeAccurate: "無料で正確",
    freeAccurateDesc: "登録不要。即座に、科学的に裏付けられた結果",
    copyright: "© 2024 MBTI性格テスト。全著作権所有。",
    copyrightDesc: "プロフェッショナルなMBTI評価で性格タイプを発見",
    // Test page translations
    yourChoice: "あなたの選択:",
    explanation: "説明",
    chooseTraits: "専門的な特性を選択してください:",
    clickToContinue: "💡 続行するにはクリック",
    defaultExplanation: "この質問はあなたの性格の好みを決定するのに役立ちます。",
    backToHome: "ホームに戻る",
    question: "質問",
    of: "の",
    next: "次へ",
    previous: "前へ",
    submit: "送信",
    tryAgain: "再試行",
    takeTestAgain: "テストを再実行",
    takeMBTITest: "MBTIテストを受ける",
    quickTestShort: "クイックテスト（12問）",
    // Results
    yourResult: "あなたの結果",
    personalityType: "性格タイプ",
    compatibility: "相性",
    description: "説明",
    traits: "特徴",
    element: "エレメント",
    meaning: "意味",
    // Tarot specific
    tarotReading: "タロットリーディング",
    tarotTraits: "あなたのタロット特徴",
    currentLifeFocus: "現在のあなたの人生の焦点は何ですか？",
    chooseOption: "あなたの神秘的なエネルギーと共鳴するオプションを選択してください",
    // Zodiac specific
    cosmicReading: "コズミックリーディング",
    cosmicTraits: "あなたのコズミック特徴",
    cosmicCompatibility: "コズミック相性",
    rulingPlanet: "支配惑星",
    quality: "性質",
    // Bazi specific
    baziReading: "八字リーディング",
    baziTraits: "あなたの八字特徴",
    baziCompatibility: "八字相性",
    baziElement: "八字エレメント",
    baziNature: "八字性質",
    // Test questions
    questions: {
      party: "パーティーでは、どちらを選びますか？",
      partyOptions: [
        "少数の親しい友人と時間を過ごす",
        "多くの新しい人と出会い、話す"
      ],
      decisions: "決定を下すとき、どちらを好みますか？",
      decisionsOptions: [
        "事実と具体的な情報に頼る",
        "可能性と将来の影響を考慮する"
      ],
      conflict: "対立では、どちらに傾きますか？",
      conflictOptions: [
        "論理的側面と公平性に焦点を当てる",
        "人々の感情と関係を考慮する"
      ],
      preference: "どちらを好みますか？",
      preferenceOptions: [
        "計画を立てて整理された状態にする",
        "選択肢を開いて柔軟性を保つ"
      ],
      learning: "新しいことを学ぶとき、あなたは：",
      learningOptions: [
        "一人で考えて学習することを好む",
        "他の人と議論し、協力することを好む"
      ],
      interests: "どちらにより興味がありますか？",
      interestsOptions: [
        "現実的で実用的なもの",
        "可能性と理論的なもの"
      ],
      feedback: "フィードバックを与えるとき、あなたは：",
      feedbackOptions: [
        "改善が必要な部分に焦点を当てる",
        "まず積極的な側面を強調する"
      ],
      workStyle: "どちらの状況でより良く働けますか？",
      workStyleOptions: [
        "明確な締切と構造があるとき",
        "自分のペースで働けるとき"
      ],
      socialSituations: "社会的状況では、あなたは：",
      socialSituationsOptions: [
        "小規模で親密な集まりを好む",
        "大きなグループやパーティーを楽しむ"
      ],
      drawnTo: "どちらにより惹かれますか？",
      drawnToOptions: [
        "具体的な事実と詳細",
        "大きな絵と概念"
      ],
      someoneUpset: "誰かが動揺しているとき、あなたは：",
      someoneUpsetOptions: [
        "論理的に問題を解決しようとする",
        "彼らの感情を理解することに焦点を当てる"
      ],
      decisions2: "どちらを好みますか？",
      decisions2Options: [
        "素早く決定して次に進む",
        "すべての選択肢を考慮する時間を取る"
      ]
    }
  },
  de: {
    siteName: "MBTI Persönlichkeitstest",
    features: "Funktionen",
    about: "Über uns",
    privacy: "Datenschutz",
    compliance: "Compliance",
    heroTitle: "Entdecken Sie Ihren Persönlichkeitstyp",
    heroSubtitle: "Machen Sie unseren professionellen MBTI-Persönlichkeitstest, um Ihre einzigartigen Eigenschaften, Stärken und Ihre Interaktion mit der Welt um Sie herum zu verstehen.",
    quickTest: "Schnelltest starten (12 Fragen)",
    fullTest: "Vollständige Bewertung (93 Fragen)",
    entertainmentTests: "Unterhaltungstests",
    entertainmentSubtitle: "Entdecken Sie Ihre Persönlichkeit durch lustige und mystische Ansätze",
    zodiacTest: "MBTI × Sternzeichen-Wahrsagerei",
    baziTest: "MBTI × Bazi-Glückslesung",
    tarotTest: "MBTI × Tarotkarten-Lesung",
    professionalAnalysis: "Professionelle Analyse",
    professionalAnalysisDesc: "Basierend auf Carl Jungs psychologischen Typen und dem Myers-Briggs-Framework",
    detailedInsights: "Detaillierte Einblicke",
    detailedInsightsDesc: "Umfassende Persönlichkeitsanalyse mit Karriere- und Beziehungsberatung",
    freeAccurate: "Kostenlos & Genau",
    freeAccurateDesc: "Keine Registrierung erforderlich. Erhalten Sie sofortige, wissenschaftlich fundierte Ergebnisse",
    copyright: "© 2024 MBTI Persönlichkeitstest. Alle Rechte vorbehalten.",
    copyrightDesc: "Entdecken Sie Ihren Persönlichkeitstyp mit unserer professionellen MBTI-Bewertung",
    // Test page translations
    yourChoice: "Ihre Wahl:",
    explanation: "Erklärung",
    chooseTraits: "Wählen Sie Ihre professionellen Eigenschaften:",
    clickToContinue: "💡 Zum Fortfahren klicken",
    defaultExplanation: "Diese Frage hilft dabei, Ihre Persönlichkeitspräferenzen zu bestimmen.",
    backToHome: "Zurück zur Startseite",
    question: "Frage",
    of: "von",
    next: "Weiter",
    previous: "Zurück",
    submit: "Absenden",
    tryAgain: "Erneut versuchen",
    takeTestAgain: "Test wiederholen",
    takeMBTITest: "MBTI-Test machen",
    quickTestShort: "Schnelltest (12 Fragen)",
    // Results
    yourResult: "Ihr Ergebnis",
    personalityType: "Persönlichkeitstyp",
    compatibility: "Kompatibilität",
    description: "Beschreibung",
    traits: "Eigenschaften",
    element: "Element",
    meaning: "Bedeutung",
    // Tarot specific
    tarotReading: "Tarot-Lesung",
    tarotTraits: "Ihre Tarot-Eigenschaften",
    currentLifeFocus: "Was ist Ihr aktueller Lebensfokus?",
    chooseOption: "Wählen Sie die Option, die mit Ihrer mystischen Energie resonniert",
    // Zodiac specific
    cosmicReading: "Kosmische Lesung",
    cosmicTraits: "Ihre kosmischen Eigenschaften",
    cosmicCompatibility: "Kosmische Kompatibilität",
    rulingPlanet: "Herrscherplanet",
    quality: "Qualität",
    // Bazi specific
    baziReading: "Bazi-Lesung",
    baziTraits: "Ihre Bazi-Eigenschaften",
    baziCompatibility: "Bazi-Kompatibilität",
    baziElement: "Bazi-Element",
    baziNature: "Bazi-Natur",
    // Test questions
    questions: {
      party: "Auf einer Party würden Sie lieber:",
      partyOptions: [
        "Zeit mit ein paar engen Freunden verbringen",
        "Viele neue Leute treffen und mit ihnen sprechen"
      ],
      decisions: "Bei Entscheidungen bevorzugen Sie:",
      decisionsOptions: [
        "Sich auf Fakten und konkrete Informationen verlassen",
        "Möglichkeiten und zukünftige Auswirkungen berücksichtigen"
      ],
      conflict: "Bei Konflikten tendieren Sie dazu:",
      conflictOptions: [
        "Sich auf die logischen Aspekte und Fairness zu konzentrieren",
        "Die Gefühle und Beziehungen der Menschen zu berücksichtigen"
      ],
      preference: "Sie bevorzugen:",
      preferenceOptions: [
        "Dinge geplant und organisiert zu haben",
        "Ihre Optionen offen und flexibel zu halten"
      ],
      learning: "Beim Lernen neuer Dinge:",
      learningOptions: [
        "Arbeiten Sie lieber allein und denken darüber nach",
        "Diskutieren und arbeiten Sie gerne mit anderen zusammen"
      ],
      interests: "Sie interessieren sich mehr für:",
      interestsOptions: [
        "Was real und praktisch ist",
        "Was möglich und theoretisch ist"
      ],
      feedback: "Bei der Rückmeldung:",
      feedbackOptions: [
        "Konzentrieren Sie sich auf das, was verbessert werden muss",
        "Betonen Sie zuerst die positiven Aspekte"
      ],
      workStyle: "Sie arbeiten besser, wenn:",
      workStyleOptions: [
        "Sie klare Fristen und Struktur haben",
        "Sie in Ihrem eigenen Tempo arbeiten können"
      ],
      socialSituations: "In sozialen Situationen:",
      socialSituationsOptions: [
        "Bevorzugen Sie kleinere, intime Treffen",
        "Genießen Sie große Gruppen und Partys"
      ],
      drawnTo: "Sie fühlen sich mehr hingezogen zu:",
      drawnToOptions: [
        "Konkreten Fakten und Details",
        "Großen Ideen und Konzepten"
      ],
      someoneUpset: "Wenn jemand verärgert ist:",
      someoneUpsetOptions: [
        "Versuchen Sie, ihr Problem logisch zu lösen",
        "Konzentrieren Sie sich darauf, ihre Gefühle zu verstehen"
      ],
      decisions2: "Sie bevorzugen:",
      decisions2Options: [
        "Schnell Entscheidungen zu treffen und weiterzumachen",
        "Sich Zeit zu nehmen, alle Optionen zu berücksichtigen"
      ]
    }
  },
  fr: {
    siteName: "Test de Personnalité MBTI",
    features: "Fonctionnalités",
    about: "À propos",
    privacy: "Confidentialité",
    compliance: "Conformité",
    heroTitle: "Découvrez Votre Type de Personnalité",
    heroSubtitle: "Passez notre test de personnalité MBTI professionnel pour comprendre vos traits uniques, vos forces et comment vous interagissez avec le monde qui vous entoure.",
    quickTest: "Commencer le Test Rapide (12 questions)",
    fullTest: "Évaluation Complète (93 questions)",
    entertainmentTests: "Tests de Divertissement",
    entertainmentSubtitle: "Découvrez votre personnalité à travers des approches amusantes et mystiques",
    zodiacTest: "MBTI × Divination Astrologique",
    baziTest: "MBTI × Lecture de Fortune Bazi",
    tarotTest: "MBTI × Lecture de Cartes de Tarot",
    professionalAnalysis: "Analyse Professionnelle",
    professionalAnalysisDesc: "Basée sur les types psychologiques de Carl Jung et le cadre Myers-Briggs",
    detailedInsights: "Insights Détaillés",
    detailedInsightsDesc: "Analyse complète de la personnalité avec conseils de carrière et de relations",
    freeAccurate: "Gratuit et Précis",
    freeAccurateDesc: "Aucune inscription requise. Obtenez des résultats instantanés et scientifiquement étayés",
    copyright: "© 2024 Test de Personnalité MBTI. Tous droits réservés.",
    copyrightDesc: "Découvrez votre type de personnalité avec notre évaluation MBTI professionnelle",
    // Test page translations
    yourChoice: "Votre choix:",
    explanation: "Explication",
    chooseTraits: "Choisissez vos traits professionnels:",
    clickToContinue: "💡 Cliquez pour continuer",
    defaultExplanation: "Cette question aide à déterminer vos préférences de personnalité.",
    backToHome: "Retour à l'accueil",
    question: "Question",
    of: "sur",
    next: "Suivant",
    previous: "Précédent",
    submit: "Soumettre",
    tryAgain: "Réessayer",
    takeTestAgain: "Refaire le test",
    takeMBTITest: "Passer le test MBTI",
    quickTestShort: "Test rapide (12 questions)",
    // Results
    yourResult: "Votre résultat",
    personalityType: "Type de personnalité",
    compatibility: "Compatibilité",
    description: "Description",
    traits: "Traits",
    element: "Élément",
    meaning: "Signification",
    // Tarot specific
    tarotReading: "Lecture de Tarot",
    tarotTraits: "Vos traits de Tarot",
    currentLifeFocus: "Quel est votre focus de vie actuel ?",
    chooseOption: "Choisissez l'option qui résonne avec votre énergie mystique",
    // Zodiac specific
    cosmicReading: "Lecture cosmique",
    cosmicTraits: "Vos traits cosmiques",
    cosmicCompatibility: "Compatibilité cosmique",
    rulingPlanet: "Planète dominante",
    quality: "Qualité",
    // Bazi specific
    baziReading: "Lecture Bazi",
    baziTraits: "Vos traits Bazi",
    baziCompatibility: "Compatibilité Bazi",
    baziElement: "Élément Bazi",
    baziNature: "Nature Bazi",
    // Test questions
    questions: {
      party: "Lors d'une fête, vous préféreriez :",
      partyOptions: [
        "Passer du temps avec quelques amis proches",
        "Rencontrer et parler avec beaucoup de nouvelles personnes"
      ],
      decisions: "Lors de prises de décision, vous préférez :",
      decisionsOptions: [
        "S'appuyer sur des faits et des informations concrètes",
        "Considérer les possibilités et les implications futures"
      ],
      conflict: "Dans un conflit, vous tendez à :",
      conflictOptions: [
        "Vous concentrer sur les aspects logiques et l'équité",
        "Considérer les sentiments et les relations des gens"
      ],
      preference: "Vous préférez :",
      preferenceOptions: [
        "Avoir des choses planifiées et organisées",
        "Garder vos options ouvertes et flexibles"
      ],
      learning: "Lors de l'apprentissage de nouvelles choses :",
      learningOptions: [
        "Préférez travailler seul et y réfléchir",
        "Aimez discuter et collaborer avec d'autres"
      ],
      interests: "Vous êtes plus intéressé par :",
      interestsOptions: [
        "Ce qui est réel et pratique",
        "Ce qui est possible et théorique"
      ],
      feedback: "Lors de la rétroaction :",
      feedbackOptions: [
        "Vous concentrer sur ce qui doit être amélioré",
        "Mettre l'accent d'abord sur les aspects positifs"
      ],
      workStyle: "Vous travaillez mieux quand :",
      workStyleOptions: [
        "Vous avez des délais clairs et de la structure",
        "Vous pouvez travailler à votre propre rythme"
      ],
      socialSituations: "Dans les situations sociales :",
      socialSituationsOptions: [
        "Préférez les petits rassemblements intimes",
        "Appréciez les grands groupes et les fêtes"
      ],
      drawnTo: "Vous êtes plus attiré par :",
      drawnToOptions: [
        "Les faits concrets et les détails",
        "Les grandes idées et les concepts"
      ],
      someoneUpset: "Quand quelqu'un est contrarié :",
      someoneUpsetOptions: [
        "Essayez de résoudre leur problème logiquement",
        "Concentrez-vous sur la compréhension de leurs sentiments"
      ],
      decisions2: "Vous préférez :",
      decisions2Options: [
        "Prendre des décisions rapidement et passer à autre chose",
        "Prendre le temps de considérer toutes les options"
      ]
    }
  },
  hi: {
    siteName: "MBTI व्यक्तित्व परीक्षण",
    features: "सुविधाएं",
    about: "हमारे बारे में",
    privacy: "गोपनीयता",
    compliance: "अनुपालन",
    heroTitle: "अपने व्यक्तित्व प्रकार की खोज करें",
    heroSubtitle: "अपनी अनूठी विशेषताओं, ताकतों और आपके आसपास की दुनिया के साथ कैसे बातचीत करते हैं, इसे समझने के लिए हमारा पेशेवर MBTI व्यक्तित्व परीक्षण लें।",
    quickTest: "त्वरित परीक्षण शुरू करें (12 प्रश्न)",
    fullTest: "पूर्ण मूल्यांकन (93 प्रश्न)",
    entertainmentTests: "मनोरंजन परीक्षण",
    entertainmentSubtitle: "मजेदार और रहस्यमय दृष्टिकोण के माध्यम से अपने व्यक्तित्व की खोज करें",
    zodiacTest: "MBTI × राशि भविष्यवाणी",
    baziTest: "MBTI × बाजी भाग्य पढ़ना",
    tarotTest: "MBTI × टैरो कार्ड रीडिंग",
    professionalAnalysis: "पेशेवर विश्लेषण",
    professionalAnalysisDesc: "कार्ल जंग के मनोवैज्ञानिक प्रकारों और मायर्स-ब्रिग्स फ्रेमवर्क पर आधारित",
    detailedInsights: "विस्तृत अंतर्दृष्टि",
    detailedInsightsDesc: "करियर और रिश्ते मार्गदर्शन के साथ व्यापक व्यक्तित्व विश्लेषण",
    freeAccurate: "मुफ्त और सटीक",
    freeAccurateDesc: "कोई पंजीकरण आवश्यक नहीं। तत्काल, वैज्ञानिक रूप से समर्थित परिणाम प्राप्त करें",
    copyright: "© 2024 MBTI व्यक्तित्व परीक्षण। सभी अधिकार सुरक्षित।",
    copyrightDesc: "हमारे पेशेवर MBTI मूल्यांकन के साथ अपने व्यक्तित्व प्रकार की खोज करें",
    // Test page translations
    yourChoice: "आपकी पसंद:",
    explanation: "व्याख्या",
    chooseTraits: "अपने पेशेवर गुण चुनें:",
    clickToContinue: "💡 जारी रखने के लिए क्लिक करें",
    defaultExplanation: "यह प्रश्न आपकी व्यक्तित्व प्राथमिकताओं को निर्धारित करने में मदद करता है।",
    backToHome: "होम पर वापस जाएं",
    question: "प्रश्न",
    of: "का",
    next: "अगला",
    previous: "पिछला",
    submit: "जमा करें",
    tryAgain: "फिर से कोशिश करें",
    takeTestAgain: "परीक्षण फिर से लें",
    takeMBTITest: "MBTI परीक्षण लें",
    quickTestShort: "त्वरित परीक्षण (12 प्रश्न)",
    // Results
    yourResult: "आपका परिणाम",
    personalityType: "व्यक्तित्व प्रकार",
    compatibility: "अनुकूलता",
    description: "विवरण",
    traits: "गुण",
    element: "तत्व",
    meaning: "अर्थ",
    // Tarot specific
    tarotReading: "टैरो रीडिंग",
    tarotTraits: "आपके टैरो गुण",
    currentLifeFocus: "आपका वर्तमान जीवन फोकस क्या है?",
    chooseOption: "वह विकल्प चुनें जो आपकी रहस्यमय ऊर्जा के साथ प्रतिध्वनित हो",
    // Zodiac specific
    cosmicReading: "ब्रह्मांडीय रीडिंग",
    cosmicTraits: "आपके ब्रह्मांडीय गुण",
    cosmicCompatibility: "ब्रह्मांडीय अनुकूलता",
    rulingPlanet: "शासक ग्रह",
    quality: "गुणवत्ता",
    // Bazi specific
    baziReading: "बाजी रीडिंग",
    baziTraits: "आपके बाजी गुण",
    baziCompatibility: "बाजी अनुकूलता",
    baziElement: "बाजी तत्व",
    baziNature: "बाजी प्रकृति",
    // Test questions
    questions: {
      party: "एक पार्टी में, आप पसंद करेंगे:",
      partyOptions: [
        "कुछ करीबी दोस्तों के साथ समय बिताना",
        "कई नए लोगों से मिलना और बात करना"
      ],
      decisions: "निर्णय लेते समय, आप पसंद करते हैं:",
      decisionsOptions: [
        "तथ्यों और ठोस जानकारी पर भरोसा करना",
        "संभावनाओं और भविष्य के प्रभावों पर विचार करना"
      ],
      conflict: "संघर्ष में, आप प्रवृत्त होते हैं:",
      conflictOptions: [
        "तार्किक पहलुओं और निष्पक्षता पर ध्यान केंद्रित करना",
        "लोगों की भावनाओं और रिश्तों पर विचार करना"
      ],
      preference: "आप पसंद करते हैं:",
      preferenceOptions: [
        "चीजों को योजनाबद्ध और व्यवस्थित रखना",
        "अपने विकल्पों को खुला और लचीला रखना"
      ],
      learning: "नई चीजें सीखते समय, आप:",
      learningOptions: [
        "अकेले काम करना और सोचना पसंद करते हैं",
        "दूसरों के साथ चर्चा और सहयोग करना पसंद करते हैं"
      ],
      interests: "आपकी रुचि अधिक है:",
      interestsOptions: [
        "जो वास्तविक और व्यावहारिक है",
        "जो संभव और सैद्धांतिक है"
      ],
      feedback: "फीडबैक देते समय, आप:",
      feedbackOptions: [
        "जो सुधार की आवश्यकता है उस पर ध्यान केंद्रित करते हैं",
        "पहले सकारात्मक पहलुओं पर जोर देते हैं"
      ],
      workStyle: "आप बेहतर काम करते हैं जब:",
      workStyleOptions: [
        "आपके पास स्पष्ट समय सीमा और संरचना होती है",
        "आप अपनी गति से काम कर सकते हैं"
      ],
      socialSituations: "सामाजिक स्थितियों में, आप:",
      socialSituationsOptions: [
        "छोटे, घनिष्ठ समारोहों को पसंद करते हैं",
        "बड़े समूहों और पार्टियों का आनंद लेते हैं"
      ],
      drawnTo: "आप अधिक आकर्षित होते हैं:",
      drawnToOptions: [
        "ठोस तथ्यों और विवरणों की ओर",
        "बड़ी तस्वीर और अवधारणाओं की ओर"
      ],
      someoneUpset: "जब कोई परेशान होता है, आप:",
      someoneUpsetOptions: [
        "तार्किक रूप से उनकी समस्या को हल करने की कोशिश करते हैं",
        "उनकी भावनाओं को समझने पर ध्यान केंद्रित करते हैं"
      ],
      decisions2: "आप पसंद करते हैं:",
      decisions2Options: [
        "जल्दी निर्णय लेना और आगे बढ़ना",
        "सभी विकल्पों पर विचार करने के लिए समय लेना"
      ]
    }
  }
};
