/**
 * =====================================================
 * S&O Solar Energy - Content Configuration
 * =====================================================
 *
 * Edit this file to update website content without
 * modifying component code.
 *
 * All text content is in Korean by default.
 * =====================================================
 */

export const siteConfig = {
  // Company Information
  company: {
    name: "S&O Solar Energy",
    nameKorean: "에스앤오 솔라 에너지",
    tagline: "Solar & Objective",
    taglineDescription: "객관적 의사결정을 위한 태양광 자문",
    email: "contact@so-solar.co.kr",
    phone: "02-1234-5678",
    address: "서울특별시 강남구 테헤란로 123, 4층",
  },

  // Images - 이미지 파일만 교체하면 전체 사이트에 반영됩니다
  images: {
    hero: "/images/IMG_8308.JPG",           // 히어로 배경 이미지
    services: "/images/IMG_8308.JPG",       // 서비스 섹션 배경
    whyUs: "/images/IMG_8308.JPG",          // Why Us 섹션 이미지
    contact: "/images/IMG_8308.JPG",        // 연락처 섹션 이미지
    about: "/images/IMG_8308.JPG",          // 대표자 소개 섹션 이미지
    gallery: "/images/IMG_8308.JPG",        // 갤러리 섹션 이미지
    // 추가 이미지가 필요하면 여기에 추가하세요
    // gallery1: "/images/gallery-1.jpg",
    // gallery2: "/images/gallery-2.jpg",
  },

  // SEO & Metadata
  seo: {
    title: "S&O Solar Energy | 태양광 독립 자문",
    description:
      "20년 현업 경력의 태양광 전문가가 제공하는 독립적인 타당성 검토, 수익성 분석, 계약 검증 서비스. 설치·판매 없이 오직 자문만.",
    keywords: [
      "태양광 자문",
      "태양광 컨설팅",
      "태양광 타당성 검토",
      "태양광 수익성 분석",
      "태양광 계약 검증",
      "독립 태양광 자문",
    ],
    ogImage: "/og-image.png",
    siteUrl: "https://so-solar.co.kr",
  },

  // Navigation
  nav: {
    items: [
      { label: "서비스", href: "#services" },
      { label: "프로세스", href: "#process" },
      { label: "왜 S&O인가", href: "#why-us" },
      { label: "대표자 소개", href: "#about" },
      { label: "프로젝트", href: "#gallery" },
      { label: "FAQ", href: "#faq" },
      { label: "문의하기", href: "#contact" },
    ],
    ctaLabel: "상담 문의",
    ctaHref: "#contact",
  },

  // Hero Section
  hero: {
    headline: "S&O Solar Energy",
    subheadline: "태양광 독립 자문 전문",
    description:
      "설치·판매 이해관계 없이, 오직 객관적인 검토와 분석만 제공합니다.",
    subheadlineEnglish: "Independent Solar Advisory",
    ctaPrimary: {
      label: "견적/상담 요청",
      href: "#contact",
    },
    ctaSecondary: {
      label: "서비스 보기",
      href: "#services",
    },
    badges: [
      {
        icon: "Sun",
        label: "태양광 한정 전문",
      },
      {
        icon: "Award",
        label: "현업 경력 20년+",
      },
      {
        icon: "ShieldCheck",
        label: "설치/판매 직접 수행하지 않음",
      },
    ],
  },

  // Stats Section
  stats: {
    items: [
      {
        icon: "TrendingUp",
        value: "200+",
        label: "누적 검토 건수",
        description: "타당성 분석 및 자문 제공",
      },
      {
        icon: "Award",
        value: "15%",
        label: "평균 비용 절감",
        description: "과대 견적 방지",
      },
      {
        icon: "Users",
        value: "98%",
        label: "고객 만족도",
        description: "검토 서비스 만족",
      },
      {
        icon: "Zap",
        value: "50MW+",
        label: "누적 분석 용량",
        description: "다양한 규모 프로젝트 경험",
      },
    ],
    note: "* 2020년 1월 기준 누적 실적",
  },

  // Services Section
  services: {
    sectionTitle: "서비스",
    sectionSubtitle: "어떤 도움을 드릴 수 있나요?",
    items: [
      {
        icon: "ClipboardCheck",
        title: "타당성 검토",
        description: "설치 전 사업 타당성을 객관적으로 평가합니다.",
        bullets: [
          "부지·건물 조건 적합성 분석",
          "인허가 및 계통연계 가능성 검토",
          "주요 리스크 요인 사전 파악",
        ],
      },
      {
        icon: "BarChart3",
        title: "발전량·수익성 분석",
        description: "예상 발전량과 투자 수익성을 분석합니다.",
        bullets: [
          "일사량 기반 발전량 시뮬레이션",
          "투자비 대비 회수 기간 산정",
          "다양한 시나리오별 수익 비교",
        ],
      },
      {
        icon: "FileSearch",
        title: "제안서·계약 검증",
        description: "받으신 제안서와 계약 조건을 검증합니다.",
        bullets: [
          "시공사 제안서 적정성 검토",
          "계약 조건 및 리스크 분석",
          "비교 견적 평가 기준 제공",
        ],
      },
    ],
  },

  // Process Section
  process: {
    sectionTitle: "진행 프로세스",
    sectionSubtitle: "간단한 4단계로 진행됩니다",
    timeline: "평균 3~5 영업일 소요",
    steps: [
      {
        step: 1,
        icon: "FileInput",
        title: "자료 접수",
        description: "기본 정보와 검토 희망 자료를 보내주세요.",
        duration: "당일",
      },
      {
        step: 2,
        icon: "Search",
        title: "조건 분석",
        description: "부지, 전력, 사업 조건을 종합적으로 분석합니다.",
        duration: "2~3일",
      },
      {
        step: 3,
        icon: "FileText",
        title: "리포트 제공",
        description: "분석 결과를 문서화하여 전달드립니다.",
        duration: "1일",
      },
      {
        step: 4,
        icon: "MessageSquare",
        title: "추가 자문",
        description: "궁금한 점에 대해 추가 설명을 드립니다.",
        duration: "1~2일",
      },
    ],
  },

  // Why Us Section
  whyUs: {
    sectionTitle: "왜 S&O인가",
    sectionSubtitle: "S&O Solar Energy를 선택해야 하는 이유",
    pillars: [
      {
        icon: "Clock",
        title: "20년 현업 경험",
        description:
          "태양광 발전 사업 현장에서 쌓아온 실무 경험을 바탕으로 실질적인 조언을 제공합니다.",
      },
      {
        icon: "Target",
        title: "태양광 한정 전문성",
        description:
          "다른 에너지원이 아닌, 오직 태양광 분야에만 집중합니다. 깊이 있는 전문성을 보장합니다.",
      },
      {
        icon: "Scale",
        title: "이해관계 배제",
        description:
          "설비를 직접 설치하거나 판매하지 않습니다. 오직 고객의 이익만을 고려한 조언을 드립니다.",
      },
    ],
    callout: {
      title: "중요",
      content:
        "S&O Solar Energy는 태양광 설비를 직접 설치하거나 판매하지 않습니다. 저희의 역할은 고객이 올바른 의사결정을 내릴 수 있도록 객관적인 정보와 분석을 제공하는 것입니다. 모든 검토 결과는 문서로 제공되며, 검토 완료 후 원하시는 경우 검증된 시공사를 소개해 드립니다. 시공사 소개 여부와 관계없이 동일한 독립적 분석을 제공합니다.",
    },
    whatWeDo: {
      title: "저희가 하는 일",
      items: [
        "제안서와 견적서의 적정성 검토",
        "발전량 및 수익성 분석 리포트 제공",
        "계약 조건 검토 및 주의사항 안내",
        "시공사 선정을 위한 평가 기준 제시",
      ],
    },
    whatWeDont: {
      title: "저희가 하지 않는 일",
      items: [
        "태양광 설비 직접 설치",
        "태양광 패널이나 인버터 판매",
        "특정 시공사 추천이나 소개",
        "수익 보장이나 확정적 약속",
      ],
    },
  },

  // Testimonials Section
  testimonials: {
    sectionTitle: "고객 후기",
    sectionSubtitle: "S&O Solar Energy와 함께한 고객들의 실제 경험을 들어보세요",
    disclaimer: "실제 고객 후기를 기반으로 작성되었습니다",
    items: [
      {
        quote: "제안서만 보고는 정말 판단이 안 섰는데, S&O의 검토 덕분에 과대 포장된 수익률을 알아챌 수 있었습니다. 덕분에 합리적인 가격으로 재계약할 수 있었어요.",
        author: "김○○",
        role: "공장 대표",
        projectType: "공장 옥상 태양광",
        icon: "Factory",
      },
      {
        quote: "20년 경력의 전문성이 느껴졌습니다. 리포트가 매우 상세하고, 어려운 내용도 쉽게 설명해주셔서 만족스러웠습니다. 설치 후 예상 발전량도 거의 맞아떨어졌어요.",
        author: "이○○",
        role: "건물주",
        projectType: "상업용 건물 태양광",
        icon: "Building2",
      },
      {
        quote: "설치를 직접 안 하시니까 정말 객관적인 조언을 주시더라고요. 수익성이 떨어지는 부분도 솔직하게 말씀해주셔서 오히려 신뢰가 갔습니다.",
        author: "박○○",
        role: "주택 소유자",
        projectType: "주택 태양광",
        icon: "Home",
      },
      {
        quote: "타당성 검토를 통해 인허가 문제를 미리 발견했습니다. 만약 검토 없이 진행했다면 큰 손해를 볼 뻔했어요. 전문가의 도움이 정말 필요하다는 걸 느꼈습니다.",
        author: "정○○",
        role: "농가 대표",
        projectType: "농지 태양광",
        icon: "Factory",
      },
      {
        quote: "계약서 검토 서비스가 특히 좋았습니다. 불리한 조항들을 콕콕 짚어주시고, 협상 포인트도 알려주셔서 더 나은 조건으로 계약할 수 있었습니다.",
        author: "최○○",
        role: "시설 관리자",
        projectType: "대형 상업 시설",
        icon: "Building2",
      },
      {
        quote: "무료 사전 상담부터 친절하게 대응해주셨고, 정식 의뢰 후에도 꼼꼼하게 분석해주셨습니다. 태양광이 처음이라 걱정했는데 덕분에 확신을 갖고 진행할 수 있었습니다.",
        author: "한○○",
        role: "개인 사업자",
        projectType: "소규모 상가 태양광",
        icon: "Home",
      },
    ],
  },

  // About Section
  about: {
    sectionTitle: "대표자 소개",
    sectionSubtitle: "20년 현장 경험을 바탕으로 한 전문 자문 서비스",
    founder: {
      name: "엄선옥",
      title: "대표 컨설턴트",
      bio: "20년 이상 태양광 발전 분야 현장에서 프로젝트 기획, 타당성 분석, 시공 관리까지 다양한 경험을 쌓아왔습니다. 이제는 그 경험을 바탕으로 고객이 올바른 의사결정을 내릴 수 있도록 독립적인 자문 서비스를 제공합니다.",
    },
    keyPoints: [
      {
        icon: "Award",
        title: "20년+ 현장 경력",
        description: "대형 프로젝트부터 소규모 설치까지 다양한 경험",
      },
      {
        icon: "Target",
        title: "태양광 전문",
        description: "오직 태양광 분야에만 집중한 깊이 있는 전문성",
      },
      {
        icon: "ShieldCheck",
        title: "독립적 자문",
        description: "설치·판매 이해관계 없는 객관적 조언",
      },
      {
        icon: "Lightbulb",
        title: "실무 중심 분석",
        description: "이론이 아닌 실제 현장 데이터 기반 분석",
      },
    ],
  },

  // Gallery Section
  gallery: {
    sectionTitle: "프로젝트 갤러리",
    sectionSubtitle: "다양한 규모와 유형의 태양광 프로젝트 사례를 확인해보세요",
    disclaimer: "실제 프로젝트 사진은 고객 동의 하에 게시됩니다",
    items: [
      {
        title: "대형 상업시설 옥상",
        description: "물류센터 태양광 발전 시스템",
        location: "경기도",
        capacity: "500kW",
        icon: "Building2",
      },
      {
        title: "공장 지붕 설치",
        description: "제조업체 자가소비형 태양광",
        location: "충청남도",
        capacity: "300kW",
        icon: "Factory",
      },
      {
        title: "주택용 태양광",
        description: "단독주택 소규모 태양광",
        location: "서울",
        capacity: "10kW",
        icon: "Home",
      },
      {
        title: "농업시설 태양광",
        description: "온실 및 농지 태양광 발전",
        location: "전라남도",
        capacity: "200kW",
        icon: "Factory",
      },
      {
        title: "대규모 지상 설치",
        description: "태양광 발전단지 프로젝트",
        location: "강원도",
        capacity: "1MW",
        icon: "Building2",
      },
      {
        title: "상가건물 옥상",
        description: "다세대 건물 공용 태양광",
        location: "부산",
        capacity: "50kW",
        icon: "Building2",
      },
    ],
  },

  // FAQ Section
  faq: {
    sectionTitle: "자주 묻는 질문",
    sectionSubtitle: "궁금하신 점을 미리 확인해 보세요",
    items: [
      {
        question: "설치까지 연결해주시나요?",
        answer:
          "S&O Solar Energy는 직접 설치 서비스를 제공하지 않으며, 검토 과정은 완전히 독립적으로 진행됩니다. 다만, 검토 완료 후 원하시는 경우 검증된 시공사를 소개해 드릴 수 있습니다. 시공사 소개 여부와 관계없이 동일한 객관적 분석을 제공하며, 소개 시에도 어떠한 수수료나 리베이트도 받지 않습니다.",
      },
      {
        question: "어떤 자료가 필요하나요?",
        answer:
          "기본적으로 부지 정보(위치, 면적, 건물 용도)와 전력 사용 현황이 필요합니다. 이미 받으신 제안서나 견적서가 있다면 함께 보내주시면 더 정확한 검토가 가능합니다. 예를 들어, 공장 옥상의 경우 건물 도면, 최근 1년간 전기요금 고지서, 한전 계약 전력 정보가 있으면 정확한 분석이 가능합니다.",
      },
      {
        question: "검토 비용은 얼마나 하나요?",
        answer:
          "검토 범위와 복잡도에 따라 차등 적용됩니다. 기본 타당성 검토는 30만원부터 시작하며, 발전량 시뮬레이션을 포함한 정밀 분석은 50만원~100만원 수준입니다. 복잡한 대규모 프로젝트(500kW 이상)의 경우 별도 견적을 드립니다. 초기 사전 상담(30분 이내)은 무료입니다.",
      },
      {
        question: "시공사가 제시한 발전량이 과장된 건지 확인할 수 있나요?",
        answer:
          "네, 바로 그런 부분을 검증하는 것이 저희의 핵심 서비스입니다. 실제 사례로, 한 고객분께서 받으신 제안서에는 '연간 15% 수익률'이 명시되어 있었으나, 저희 분석 결과 실제로는 8~9% 수준이었습니다. 일사량 데이터, 음영 분석, 시스템 효율, 인버터 손실 등을 종합적으로 검토하여 현실적인 발전량을 산출해 드립니다.",
      },
      {
        question: "계약서 검토만 따로 요청할 수 있나요?",
        answer:
          "네, 가능합니다. 이미 시공사를 선정했지만 계약 전 조건 검토가 필요하신 경우 계약서 검증 서비스만 단독으로 이용하실 수 있습니다. A/S 조건, 성능 보증, 하자 책임, 지연 배상 등 불리한 조항을 찾아드리고 협상 포인트를 제시해 드립니다.",
      },
      {
        question: "검토 기간은 얼마나 걸리나요?",
        answer:
          "일반적으로 자료 접수 후 3~5 영업일 소요됩니다. 기본 타당성 검토는 2~3일, 정밀 발전량 분석이 포함된 경우 4~5일 정도 걸립니다. 급하신 경우 특급 서비스(2일 이내, 추가 비용 30%)도 가능합니다.",
      },
      {
        question: "주택용 소규모 태양광도 검토 가능한가요?",
        answer:
          "네, 10kW 미만 주택용 태양광도 검토 가능합니다. 다만 소규모 프로젝트의 경우 분석 비용이 투자액 대비 부담될 수 있어, 간소화된 '퀵 체크 서비스'(15만원)를 제공하고 있습니다. 제안서의 주요 수치 검증과 핵심 주의사항만 요약해 드립니다.",
      },
      {
        question: "인허가나 한전 계통연계도 검토해주시나요?",
        answer:
          "네, 타당성 검토 시 인허가 가능성과 계통연계 조건을 함께 검토합니다. 예를 들어, 농지의 경우 농지전용허가 요건, 개발제한구역 여부, 한전 변전소 거리 및 연계 가능 용량 등을 확인하여 사업 진행 가능성을 사전에 파악해 드립니다. 다만 실제 인허가 신청 대행은 진행하지 않습니다.",
      },
    ],
  },

  // Contact Section
  contact: {
    sectionTitle: "문의하기",
    sectionSubtitle: "태양광 관련 검토가 필요하시면 연락주세요",
    form: {
      nameLabel: "이름 / 회사명",
      namePlaceholder: "홍길동 / (주)회사명",
      emailLabel: "이메일",
      emailPlaceholder: "email@example.com",
      phoneLabel: "연락처 (선택)",
      phonePlaceholder: "010-0000-0000",
      typeLabel: "검토 유형",
      typeOptions: [
        { value: "", label: "선택해주세요" },
        { value: "feasibility", label: "타당성 검토" },
        { value: "profitability", label: "발전량·수익성 분석" },
        { value: "verification", label: "제안서·계약 검증" },
        { value: "other", label: "기타 문의" },
      ],
      messageLabel: "문의 내용",
      messagePlaceholder:
        "검토가 필요한 내용을 간략히 작성해주세요. (예: 공장 옥상 태양광 제안서를 받았는데, 적정 가격인지 검토 부탁드립니다.)",
      submitLabel: "문의 보내기",
      submittingLabel: "전송 중...",
      successMessage: "문의가 정상적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
      errorMessage: "전송 중 오류가 발생했습니다. 이메일이나 전화로 연락주세요.",
    },
    directContact: {
      title: "직접 연락하기",
      phoneLabel: "전화",
      emailLabel: "이메일",
    },
    privacy: {
      text: "제출하신 정보는 상담 목적으로만 사용되며, 제3자에게 제공되지 않습니다.",
      linkLabel: "개인정보처리방침",
    },
  },

  // Footer
  footer: {
    description:
      "독립적인 태양광 자문 서비스를 제공합니다. 설치·판매 이해관계 없이 오직 고객의 올바른 의사결정을 돕습니다.",
    motto: "S&O = Solar & Objective",
    disclaimer:
      "본 사이트의 정보는 일반적인 안내 목적이며, 구체적인 사업 결정은 반드시 전문 상담을 통해 진행하시기 바랍니다. 분석 결과는 현장 조건에 따라 달라질 수 있습니다.",
    copyright: `© ${new Date().getFullYear()} S&O Solar Energy. All rights reserved.`,
    links: [
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "이용약관", href: "/terms" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
