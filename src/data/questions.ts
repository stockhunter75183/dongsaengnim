// src/data/questions.ts
export interface Question {
  id: number;
  axis: 'HC' | 'TS' | 'CS' | 'ST';
  text: string;
  options: { label: string; score: number; }[];
}

const questionPool: Question[] = [
  // ── 축1: HC (뜨거운 충동 vs 차가운 계획) ── 10문항
  { id: 101, axis: 'HC', text: '월급이 들어왔다! 가장 먼저 하는 행동은?', options: [{ label: '위시리스트 결제 🔥', score: 1 }, { label: '일단 반은 저축', score: 2 }, { label: '예산 배분부터', score: 3 }] },
  { id: 102, axis: 'HC', text: '"한정수량/오늘마감" 알림이 뜬다면?', options: [{ label: '일단 사고 본다', score: 1 }, { label: '리뷰 보고 결정', score: 2 }, { label: '필요한지 재검토', score: 3 }] },
  { id: 103, axis: 'HC', text: '여행지에서 우연히 예쁜 기념품을 발견했다.', options: [{ label: '운명이야! 즉시 구매', score: 1 }, { label: '가격을 검색해본다', score: 2 }, { label: '짐 되니까 패스', score: 3 }] },
  { id: 104, axis: 'HC', text: '배달 음식을 고를 때 당신의 모습은?', options: [{ label: '먹고 싶은 거 바로!', score: 1 }, { label: '할인 쿠폰부터 확인', score: 2 }, { label: '냉장고 파먹기 시전', score: 3 }] },
  { id: 105, axis: 'HC', text: '스트레스를 받았을 때 나만의 해소법은?', options: [{ label: '금융 치료(쇼핑)', score: 1 }, { label: '맛있는 한 끼 식사', score: 2 }, { label: '그냥 잠을 잔다', score: 3 }] },
  { id: 106, axis: 'HC', text: '편의점에 우유 사러 갔다가 2+1 과자를 봤다.', options: [{ label: '오히려 좋아! 3개 겟', score: 1 }, { label: '잠깐 고민하다 담음', score: 2 }, { label: '우유만 사고 나옴', score: 3 }] },
  { id: 107, axis: 'HC', text: '쇼핑몰 장바구니에 담긴 물건들의 운명은?', options: [{ label: '3일 안에 결제됨', score: 1 }, { label: '세일할 때까지 대기', score: 2 }, { label: '결국 삭제 엔딩', score: 3 }] },
  { id: 108, axis: 'HC', text: '친구가 "이거 대박이야!"라며 추천해준 물건.', options: [{ label: '나도 살래! 결제', score: 1 }, { label: '관심만 가져본다', score: 2 }, { label: '내 스타일 아니면 무시', score: 3 }] },
  { id: 109, axis: 'HC', text: '가계부나 소비 내역을 확인하는 빈도는?', options: [{ label: '거의 안 본다', score: 1 }, { label: '가끔 몰아서 확인', score: 2 }, { label: '매일/주기적 체크', score: 3 }] },
  { id: 110, axis: 'HC', text: '카페에서 주문을 기다리며 진열대를 본다.', options: [{ label: '어느새 케이크 추가', score: 1 }, { label: '먹을까 말까 갈등', score: 2 }, { label: '폰만 본다', score: 3 }] },

  // ── 축2: TS (트렌드·감성 vs 실용·가성비) ── 10문항
  { id: 201, axis: 'TS', text: '새 카페를 고를 때 가장 중요한 건?', options: [{ label: '인스타 감성 인테리어', score: 1 }, { label: '적당한 분위기와 가격', score: 2 }, { label: '커피 맛과 가성비', score: 3 }] },
  { id: 202, axis: 'TS', text: '스마트폰을 바꿀 때 기준은?', options: [{ label: '무조건 최신 기종', score: 1 }, { label: '가격 방어 잘되는 모델', score: 2 }, { label: '가성비 보급형/중고', score: 3 }] },
  { id: 203, axis: 'TS', text: '친구 생일 선물을 고를 때?', options: [{ label: '요즘 핫한 브랜드', score: 1 }, { label: '받고 싶어 했던 것', score: 2 }, { label: '실용적인 기프티콘', score: 3 }] },
  { id: 204, axis: 'TS', text: '점심 메뉴를 고를 때 당신의 태도는?', options: [{ label: '새로 오픈한 맛집', score: 1 }, { label: '검증된 체인점', score: 2 }, { label: '할인/가성비 백반', score: 3 }] },
  { id: 205, axis: 'TS', text: '옷을 고를 때 더 끌리는 것은?', options: [{ label: '이번 시즌 유행 핏', score: 1 }, { label: '나한테 어울리는 스타일', score: 2 }, { label: '오래 입을 수 있는 재질', score: 3 }] },
  { id: 206, axis: 'TS', text: '브랜드 로고가 크게 박힌 티셔츠를 본다면?', options: [{ label: '힙하다! 갖고 싶어', score: 1 }, { label: '브랜드 가치면 인정', score: 2 }, { label: '부담스럽고 비싸 보여', score: 3 }] },
  { id: 207, axis: 'TS', text: '생필품(화장지 등)을 살 때 기준은?', options: [{ label: '환경/성분 따진 프리미엄', score: 1 }, { label: '쓰던 익숙한 브랜드', score: 2 }, { label: '무조건 1+1 최저가', score: 3 }] },
  { id: 208, axis: 'TS', text: '전자제품 구매 전 유튜브 리뷰를 본다.', options: [{ label: '디자인 위주로 감상', score: 1 }, { label: '기능과 가격 비교', score: 2 }, { label: '단점 위주로 체크', score: 3 }] },
  { id: 209, axis: 'TS', text: '취미 생활에 돈을 쓸 때 나는?', options: [{ label: '장비부터 풀세트로!', score: 1 }, { label: '필요한 것만 조금씩', score: 2 }, { label: '가장 저렴하게 시작', score: 3 }] },
  { id: 210, axis: 'TS', text: '편의점 신상 과자가 나왔다!', options: [{ label: '궁금해! 바로 먹어봄', score: 1 }, { label: '리뷰 좋으면 나중에', score: 2 }, { label: '먹던 거나 먹자', score: 3 }] },

  // ── 축3: CS (연결 소비 vs 독립 저축) ── 10문항 (기획안의 소비/저축 반영)
  { id: 301, axis: 'CS', text: '보너스 100만원이 생겼다면?', options: [{ label: '참았던 거 다 산다!', score: 1 }, { label: '반은 쓰고 반은 저축', score: 2 }, { label: '전액 비상금 통장행', score: 3 }] },
  { id: 302, axis: 'CS', text: '나에게 "소비"란 어떤 의미인가?', options: [{ label: '현재를 즐기는 수단', score: 1 }, { label: '삶의 에너지를 충전함', score: 2 }, { label: '미래를 위해 아껴야 할 것', score: 3 }] },
  { id: 303, axis: 'CS', text: '구독 서비스(OTT, 음원 등)를 몇 개나 하나?', options: [{ label: '3개 이상! 다 필요함', score: 1 }, { label: '1~2개로 엄선함', score: 2 }, { label: '가족 공유/무료만', score: 3 }] },
  { id: 304, axis: 'CS', text: '돈을 모아야 하는 가장 큰 이유는?', options: [{ label: '나중에 사고 싶은 거 사려고', score: 1 }, { label: '비상시에 대비하기 위해', score: 2 }, { label: '자산을 불리는 재미 때문에', score: 3 }] },
  { id: 305, axis: 'CS', text: '택시비 1만원이 아깝다고 느낄 때는?', options: [{ label: '거의 없음. 시간/편안함 우선', score: 1 }, { label: '비가 오거나 늦었을 땐 OK', score: 2 }, { label: '무조건 아깝다. 버스 타야지', score: 3 }] },
  { id: 306, axis: 'CS', text: '명품 구매에 대한 당신의 생각은?', options: [{ label: '하나쯤 있으면 좋지', score: 1 }, { label: '여유가 될 때만 고려', score: 2 }, { label: '거품이라고 생각함', score: 3 }] },
  { id: 307, axis: 'CS', text: '주변에서 "짠돌이"라는 말을 들어본 적 있나?', options: [{ label: '전혀 없다', score: 1 }, { label: '가끔 장난식으로', score: 2 }, { label: '자주 듣거나 스스로 자부함', score: 3 }] },
  { id: 308, axis: 'CS', text: '복권 1등에 당첨된다면?', options: [{ label: '슈퍼카 쇼핑부터', score: 1 }, { label: '건물 사고 월세 받기', score: 2 }, { label: '비밀로 하고 예금하기', score: 3 }] },
  { id: 309, axis: 'CS', text: '물건을 버릴 때 당신의 마음은?', options: [{ label: '새거 사야지! 설렘', score: 1 }, { label: '아깝지만 어쩔 수 없지', score: 2 }, { label: '최대한 고쳐서/재활용', score: 3 }] },
  { id: 310, axis: 'CS', text: '이번 달 카드값이 평소보다 많이 나왔다.', options: [{ label: '인생 뭐 있어? 담달 아껴야지', score: 1 }, { label: '어디서 많이 썼나 분석', score: 2 }, { label: '잠이 안 온다. 자괴감 듦', score: 3 }] },

  // ── 축4: ST (솔로 소비 vs 함께 소비) ── 10문항
  { id: 401, axis: 'ST', text: '쇼핑할 때 가장 선호하는 방식은?', options: [{ label: '혼자 온라인으로 비교', score: 1 }, { label: '상황에 따라 다름', score: 2 }, { label: '친구랑 의견 공유하며', score: 3 }] },
  { id: 402, axis: 'ST', text: '맛집 정보를 발견하면 어떻게 하나?', options: [{ label: '혼밥 하기 좋은지 확인', score: 1 }, { label: '내 지도에만 저장', score: 2 }, { label: '단톡방에 공유 "가자!"', score: 3 }] },
  { id: 403, axis: 'ST', text: '공동구매 제안을 받았을 때 내 태도는?', options: [{ label: '귀찮아. 그냥 따로 살게', score: 1 }, { label: '진짜 싸면 고려해봄', score: 2 }, { label: '완전 좋지! 다 같이 사자', score: 3 }] },
  { id: 404, axis: 'ST', text: '큰 돈 나가는 결정을 할 때 누구와 상의하나?', options: [{ label: '나 자신과만 상의', score: 1 }, { label: '익명 커뮤니티 의견 참고', score: 2 }, { label: '가족이나 절친에게 꼭 물어봄', score: 3 }] },
  { id: 405, axis: 'ST', text: '친구와 카페에 가서 결제할 때 나는?', options: [{ label: '내 거 내가 계산(각자)', score: 1 }, { label: '번갈아 가며 사기', score: 2 }, { label: '일단 한 명 몰아주고 정산', score: 3 }] },
  { id: 406, axis: 'ST', text: '선물을 고를 때 당신의 전략은?', options: [{ label: '내가 좋다고 생각한 걸로', score: 1 }, { label: '대중적으로 인기 있는 걸로', score: 2 }, { label: '대놓고 "뭐 갖고 싶어?" 물어봄', score: 3 }] },
  { id: 407, axis: 'ST', text: '여행 경비를 관리할 때 선호하는 방법은?', options: [{ label: '각자 예산 안에서 해결', score: 1 }, { label: '큰 돈만 공용 카드로', score: 2 }, { label: '공금 모아서 투명하게 집행', score: 3 }] },
  { id: 408, axis: 'ST', text: '내가 산 물건을 SNS에 자랑하는 편인가?', options: [{ label: '전혀. 나만 좋으면 됨', score: 1 }, { label: '가끔 진짜 좋은 것만', score: 2 }, { label: '새로 사면 무조건 올림', score: 3 }] },
  { id: 409, axis: 'ST', text: '커피 한 잔도 기왕이면 유명한 곳에서 마시고 싶다.', options: [{ label: '혼자라도 무조건 감', score: 1 }, { label: '친구가 가고 싶어 하면 감', score: 2 }, { label: '동네 저렴한 곳이 편함', score: 3 }] },
  { id: 410, axis: 'ST', text: '경조사비를 낼 때 당신의 기준은?', options: [{ label: '받은 만큼 또는 표준만큼', score: 1 }, { label: '상황과 친밀도에 따라', score: 2 }, { label: '아깝지 않게 팍팍!', score: 3 }] },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomQuestions(): Question[] {
  const axes: Array<'HC' | 'TS' | 'CS' | 'ST'> = ['HC', 'TS', 'CS', 'ST'];
  const selected: Question[] = [];

  axes.forEach((axis) => {
    const pool = questionPool.filter((q) => q.axis === axis);
    // 축당 3개씩 랜덤 추출
    const picked = shuffleArray(pool).slice(0, 3);
    selected.push(...picked);
  });

  // 전체 질문 순서도 한 번 섞어주면 더 새로움 (축 순서 고정 방지)
  return shuffleArray(selected);
}

export const questions = getRandomQuestions();