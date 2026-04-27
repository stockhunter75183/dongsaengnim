// src/data/types.ts
export interface MoneyType {
  code: string;
  name: string;
  animal: string;
  characterImage: string;
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
    code: 'HTCS', name: '불꽃 플렉서', animal: '불사조', characterImage: '/characters/phoenix.png', emoji: '🔥',
    temperature: 92, title: '지금 이 순간을 위해 태어난 소비 전사!',
    description: '트렌드에 민감하고, 돈은 쓸 때 써야 한다는 주의입니다.',
    strengths: ['트렌드 감각 최상위'], tips: ['월급 30% 선저축'],
    bestMatch: 'CSST', worstMatch: 'CSSS', comment: '통장 타는 냄새 안 나냐?'
  },
  HTCT: {
    code: 'HTCT', name: '트렌드 파티러', animal: '앵무새', characterImage: '/characters/parrot.png', emoji: '🎪',
    temperature: 85, title: '함께 쓸 때 가장 빛나는 소비 감각!',
    description: '유행하는 건 일단 경험해야 하고 친구들과 나누는 소비를 선호해요.',
    strengths: ['사회적 소비의 달인'], tips: ['모임비 예산 따로 관리'],
    bestMatch: 'CSSS', worstMatch: 'CSSS', comment: '파티는 좋은데 카드값은 어쩔?'
  },
  HSTS: {
    code: 'HSTS', name: '직감 사냥꾼', animal: '치타', characterImage: '/characters/cheetah.png', emoji: '⚡',
    temperature: 75, title: '가성비 + 충동의 환상 조합!',
    description: '실용적인 물건을 순간적으로 포착해 결제하는 능력자입니다.',
    strengths: ['가성비 탐지 레이더'], tips: ['장바구니 7일 숙성 규칙'],
    bestMatch: 'CSST', worstMatch: 'HTCS', comment: '필요해서 산 거 맞아?'
  },
  HSTT: {
    code: 'HSTT', name: '함께모험가', animal: '강아지', characterImage: '/characters/puppy.png', emoji: '🏕️',
    temperature: 68, title: '실속 있게, 그리고 다 같이!',
    description: '가성비를 따지지만 소비의 즐거움은 나눠야 배가 된다는 타입입니다.',
    strengths: ['공동구매 리더'], tips: ['투자 스터디 참여'],
    bestMatch: 'CSSS', worstMatch: 'HTCS', comment: '지갑은 혼자 우는 중이야.'
  },
  CTCS: {
    code: 'CTCS', name: '쿨 매니저', animal: '펭귄', characterImage: '/characters/penguin.png', emoji: '🧊',
    temperature: 42, title: '계획 속에서 트렌드를 즐기는 전략가!',
    description: '유행을 따르되 계획 안에서 움직이는 스마트한 소비자입니다.',
    strengths: ['체계적인 돈 관리'], tips: ['지수 투자 시작하기'],
    bestMatch: 'HSTS', worstMatch: 'HTCS', comment: '계획은 완벽하네. 실행은?'
  },
  CTCT: {
    code: 'CTCT', name: '스마트 커넥터', animal: '돌고래', characterImage: '/characters/dolphin.png', emoji: '🎯',
    temperature: 35, title: '계획적 소비로 관계도 자산도 챙기는 사람!',
    description: '돈 쓰는 건 계획적이지만 사람과 함께할 땐 마음을 엽니다.',
    strengths: ['합리적 더치페이'], tips: ['연간 경조사비 예산 수립'],
    bestMatch: 'HSTT', worstMatch: 'HTCS', comment: '사람 챙기다 너도 좀 챙겨.'
  },
  CSSS: {
    code: 'CSSS', name: '안전금고', animal: '거북이', characterImage: '/characters/turtle.png', emoji: '🏦',
    temperature: 18, title: '철통 보안 저축 마스터!',
    description: '안 사는 게 최고의 가성비라는 철학을 가진 저축왕입니다.',
    strengths: ['저축 습관 최강'], tips: ['소액 투자 경험해보기'],
    bestMatch: 'HTCT', worstMatch: 'HTCS', comment: '통장에 곰팡이 피겠다.'
  },
  CSST: {
    code: 'CSST', name: '절약 메이트', animal: '다람쥐', characterImage: '/characters/squirrel.png', emoji: '🤝',
    temperature: 25, title: '아끼면서도 함께하는 따뜻한 절약가!',
    description: '절약형이지만 관계에는 인색하지 않은 균형 잡힌 타입입니다.',
    strengths: ['선택적 소비의 지혜'], tips: ['절약 챌린지 참여'],
    bestMatch: 'HTCS', worstMatch: 'HSTS', comment: '아끼는 재능은 인정해줄게.'
  }
};