export interface MoneyType {
  code: string;
  name: string;
  emoji: string;
  temperature: number;
  title: string;
  description: string;
  strengths: string[];
  tips: string[];
  bestMatch: string;
  worstMatch: string;
  comment: string;
}

export const moneyTypes: Record<string, MoneyType> = {
  HTCS: {
    code: 'HTCS',
    name: '🔥 불꽃 플렉서',
    emoji: '🔥',
    temperature: 92,
    title: '지금 이 순간을 위해 태어난 소비 전사!',
    description: '트렌드에 민감하고, 돈은 쓸 때 써야 한다는 주의. 새로운 경험과 물건에 아낌없이 투자하며, 주변 사람들과 함께 즐기는 것을 사랑해요.',
    strengths: ['트렌드 감각 최상위', '경험의 가치를 아는 사람', '주변 사람들에게 관대'],
    tips: ['월급의 30%는 자동이체로 저축해보세요', '구매 전 24시간 대기 규칙을 만들어보세요', '월 소비 한도를 정해두면 더 전략적으로 플렉스 가능!'],
    bestMatch: 'CSST',
    worstMatch: 'CSST',
    comment: '"에너지는 최고! 그런데 가끔은 통장도 쉬게 해줘요 😉"'
  },
  HTCT: {
    code: 'HTCT',
    name: '🎪 트렌드 파티러',
    emoji: '🎪',
    temperature: 85,
    title: '함께 쓸 때 가장 빛나는 소비 감각!',
    description: '유행하는 건 일단 경험해야 직성이 풀리고, 혼자보다는 친구들과 나누는 소비를 선호해요. 공동구매부터 맛집 탐방까지, 소비 활동 자체가 곧 소셜 활동!',
    strengths: ['사회적 소비의 달인', '트렌드 정보 허브', '모임의 분위기 메이커'],
    tips: ['친구와의 지출과 개인 지출을 분리해보세요', '"같이 저축 챌린지"로 사교성을 저축에도 활용!', '공동구매할 때 정말 필요한지 한번 더 체크'],
    bestMatch: 'CSSS',
    worstMatch: 'CSSS',
    comment: '"인맥도 넓고 소비도 넓고! 저축 범위도 넓혀볼까요? 🤝"'
  },
  HSTS: {
    code: 'HSTS',
    name: '⚡ 직감 사냥꾼',
    emoji: '⚡',
    temperature: 75,
    title: '가성비 + 충동의 환상 조합!',
    description: '실용적인 물건을 순간적으로 포착하는 능력자! 세일 정보에 빠르게 반응하고, 가성비 좋은 거라면 즉시 결제. 필요 이상으로 사는 게 함정.',
    strengths: ['가성비 탐지 레이더 장착', '세일 타이밍 포착력 최강', '실용적 소비 성향'],
    tips: ['세일이라도 "3개월 내 쓸 것만" 규칙을 만드세요', '장바구니 7일 숙성 후 결제 습관을 들여보세요', '가성비 좋은 적금 상품도 사냥해보세요!'],
    bestMatch: 'CSST',
    worstMatch: 'HTCS',
    comment: '"사냥 본능을 저축 상품 찾기에도 써보면 대박날 듯! 🎯"'
  },
  HSTT: {
    code: 'HSTT',
    name: '🏕️ 함께모험가',
    emoji: '🏕️',
    temperature: 68,
    title: '실속 있게, 그리고 다 같이!',
    description: '가성비를 따지지만 소비의 즐거움은 나눠야 배가 된다는 타입. 단체 할인, 공동구매의 달인이며, 실용적이면서도 사교적인 소비를 즐겨요.',
    strengths: ['공동구매 리더 자질', '실속 있는 모임 기획력', '가성비와 사교성의 균형'],
    tips: ['공구 주도하면서 수수료 수익도 고려해보세요', '모임비를 위한 별도 저축 통장을 만들어보세요', '투자 스터디 모임을 직접 열어보는 건 어때요?'],
    bestMatch: 'CSSS',
    worstMatch: 'HTCS',
    comment: '"사람도 모으고 돈도 모으는 능력자! 두 마리 토끼를 잡아봐요 🐰"'
  },
  CTCS: {
    code: 'CTCS',
    name: '🧊 쿨 매니저',
    emoji: '🧊',
    temperature: 42,
    title: '계획 속에서 트렌드를 즐기는 전략가!',
    description: '유행을 따르되 계획 안에서 움직이는 스마트한 소비자. 예산을 세우고 그 안에서 최신 아이템을 고르는 능력이 탁월해요.',
    strengths: ['전략적 소비의 달인', '트렌드 + 예산의 완벽 밸런스', '체계적인 돈 관리 습관'],
    tips: ['투자도 트렌드가 있어요, ETF부터 시작해보세요', '시즌별 쇼핑 예산을 미리 잡아두면 더 만족스러운 소비!', '가계부 앱을 예쁜 것으로 바꿔보면 꾸준히 할 수 있어요'],
    bestMatch: 'HSTS',
    worstMatch: 'HTCS',
    comment: '"당신의 계획력이면 투자도 잘할 스타일! 시작해볼까요? 📊"'
  },
  CTCT: {
    code: 'CTCT',
    name: '🎯 스마트 커넥터',
    emoji: '🎯',
    temperature: 35,
    title: '계획적 소비로 관계도 자산도 모두 챙기는 사람!',
    description: '돈 쓰는 건 계획적이지만, 주변 사람과 함께하는 소비에는 마음을 여는 타입. 더치페이 앱을 잘 활용하고, 모임 예산도 미리 세워요.',
    strengths: ['인간관계 + 재정관리 동시 가능', '합리적 더치페이 문화 선도', '장기적 관계 투자에 능함'],
    tips: ['경조사비를 위한 연간 예산을 세워보세요', '인맥 관리가 곧 커리어 투자! 전략적으로 접근해봐요', '같이 할 수 있는 재테크 모임에 참여해보세요'],
    bestMatch: 'HSTT',
    worstMatch: 'HTCS',
    comment: '"사람에게 쓰는 돈은 투자! 근데 가끔은 나한테도 써요 💝"'
  },
  CSSS: {
    code: 'CSSS',
    name: '🏦 안전금고',
    emoji: '🏦',
    temperature: 18,
    title: '철통 보안 저축 마스터!',
    description: '가성비를 넘어 "안 사는 게 최고의 가성비"라는 철학. 혼자 조용히 자산을 불려가는 타입이에요. 통장 잔고가 올라가는 게 최고의 취미!',
    strengths: ['저축 습관 최강', '불필요한 소비 제로', '재정적 안정감 최고'],
    tips: ['저축만으로는 인플레이션을 못 이겨요, 투자도 해보세요', '가끔은 자기 자신에게 보상을 주는 것도 필요해요', '"가치 소비" 관점을 추가하면 만족도가 올라갑니다'],
    bestMatch: 'HTCT',
    worstMatch: 'HTCS',
    comment: '"금고가 튼튼한 건 좋은데, 가끔은 문을 열어도 괜찮아요 🔓"'
  },
  CSST: {
    code: 'CSST',
    name: '🤝 절약 메이트',
    emoji: '🤝',
    temperature: 25,
    title: '아끼면서도 함께하는 따뜻한 절약가!',
    description: '기본적으로 절약형이지만 사람과의 관계에는 인색하지 않은 균형 잡힌 타입. 효율적으로 돈을 아끼면서도 중요한 사람에게는 기꺼이 지출해요.',
    strengths: ['선택적 소비의 지혜', '관계 유지 + 저축 동시 달성', '감사 표현에 능함'],
    tips: ['기념일 예산을 미리 잡아두면 더 여유로워요', '같이 절약 챌린지를 하면 더 재밌어요', '소액 투자부터 시작해서 자산을 조금씩 불려보세요'],
    bestMatch: 'HTCS',
    worstMatch: 'HTCS',
    comment: '"아끼는 것도 재능! 이제 불리는 재능도 키워볼 때예요 🌱"'
  },
};
