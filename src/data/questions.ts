export interface Question {
  id: number;
  axis: 'HC' | 'TS' | 'CS' | 'ST';
  text: string;
  options: {
    label: string;
    score: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    axis: 'HC',
    text: '월급이 들어왔다! 첫 번째 행동은?',
    options: [
      { label: '위시리스트 폭주! 바로 장바구니 결제 🔥', score: 1 },
      { label: '일단 반은 저축, 나머지로 쇼핑 리스트 작성', score: 2 },
      { label: '가계부 열고 이번 달 예산 배분부터', score: 3 },
    ]
  },
  {
    id: 2,
    axis: 'HC',
    text: '친구가 "이거 지금 안 사면 품절!" 이라고 하면?',
    options: [
      { label: '헉 바로 결제! 품절되면 어떡해!', score: 1 },
      { label: '일단 장바구니에 넣고 30분 고민', score: 2 },
      { label: '"진짜 필요한지" 체크리스트부터 확인', score: 3 },
    ]
  },
  {
    id: 3,
    axis: 'HC',
    text: '여행 경비를 쓸 때 나는?',
    options: [
      { label: '여행은 인생! 가고 싶은 곳 다 간다', score: 1 },
      { label: '큰 항목만 계획하고 나머지는 유동적으로', score: 2 },
      { label: '일일 예산 정해놓고 앱으로 추적', score: 3 },
    ]
  },
  {
    id: 4,
    axis: 'TS',
    text: '새 카페를 고를 때 기준은?',
    options: [
      { label: '인스타 감성 인테리어가 최우선!', score: 1 },
      { label: '분위기도 좋고 가격도 적당한 곳', score: 2 },
      { label: '맛 대비 가격! 가성비가 왕이다', score: 3 },
    ]
  },
  {
    id: 5,
    axis: 'TS',
    text: '옷을 살 때 가장 중요한 건?',
    options: [
      { label: '올해 트렌드 컬러·핏이 가장 중요', score: 1 },
      { label: '스타일도 보고 소재·내구성도 확인', score: 2 },
      { label: '3년은 입을 수 있는 기본템 위주', score: 3 },
    ]
  },
  {
    id: 6,
    axis: 'TS',
    text: '핸드폰 바꿀 때 기준은?',
    options: [
      { label: '신상 나오면 바로! 최신 기능 경험해야지', score: 1 },
      { label: '1년 정도 쓰고 좋은 보상판매 타이밍에', score: 2 },
      { label: '고장날 때까지 쓴다. 멀쩡한데 왜 바꿔?', score: 3 },
    ]
  },
  {
    id: 7,
    axis: 'CS',
    text: '보너스 100만원이 생겼다!',
    options: [
      { label: '그동안 참았던 거 다 산다!', score: 1 },
      { label: '반은 쓰고 반은 저축', score: 2 },
      { label: '전액 비상금 통장에 넣기', score: 3 },
    ]
  },
  {
    id: 8,
    axis: 'CS',
    text: '"현재의 행복 vs 미래의 안정" 중 택 1?',
    options: [
      { label: '지금 아니면 언제 즐겨! 현재가 우선', score: 1 },
      { label: '둘 다 중요해서 적절히 밸런스', score: 2 },
      { label: '미래가 불안하면 현재도 못 즐겨, 저축!', score: 3 },
    ]
  },
  {
    id: 9,
    axis: 'CS',
    text: '구독 서비스(넷플릭스, 음악 등)에 대한 태도는?',
    options: [
      { label: '좋아하는 건 다 구독! 월 5만원 이상', score: 1 },
      { label: '2~3개만 엄선해서 구독', score: 2 },
      { label: '무료 체험만 돌려쓰거나 가족 공유', score: 3 },
    ]
  },
  {
    id: 10,
    axis: 'ST',
    text: '쇼핑할 때 선호하는 방식은?',
    options: [
      { label: '혼자 조용히 온라인으로 비교하며', score: 1 },
      { label: '상황에 따라 혼자도, 같이도', score: 2 },
      { label: '친구랑 같이! 의견 들으며 고르기', score: 3 },
    ]
  },
  {
    id: 11,
    axis: 'ST',
    text: '맛집을 발견했다! 어떻게 하지?',
    options: [
      { label: '혼밥 각! 나만의 맛집으로 킵', score: 1 },
      { label: '사진 찍어서 SNS에만 살짝', score: 2 },
      { label: '단톡방에 바로 공유! 같이 가자!', score: 3 },
    ]
  },
  {
    id: 12,
    axis: 'ST',
    text: '공동구매 링크가 왔다!',
    options: [
      { label: '귀찮아, 필요하면 그냥 혼자 산다', score: 1 },
      { label: '진짜 싸면 참여, 아님 말고', score: 2 },
      { label: '공구 최고! 직접 모집도 해본다', score: 3 },
    ]
  },
];
