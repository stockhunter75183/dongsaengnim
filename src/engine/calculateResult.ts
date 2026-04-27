// src/engine/calculateResult.ts
export interface Answer {
  questionId: number;
  axis: 'HC' | 'TS' | 'CS' | 'ST';
  score: number;
}

export interface TestResult {
  code: string;
  temperature: number;
  axisScores: { HC: number; TS: number; CS: number; ST: number; };
}

export function calculateResult(answers: Answer[]): TestResult {
  const axisScores = { HC: 0, TS: 0, CS: 0, ST: 0 };
  const axisCounts = { HC: 0, TS: 0, CS: 0, ST: 0 };

  answers.forEach((a) => {
    axisScores[a.axis] += a.score;
    axisCounts[a.axis] += 1;
  });

  const avgHC = axisScores.HC / axisCounts.HC; // 1(Hot) ~ 3(Cold)
  const avgTS = axisScores.TS / axisCounts.TS; // 1(Trend) ~ 3(Smart)
  const avgCS = axisScores.CS / axisCounts.CS; // 1(Consum) ~ 3(Save)
  const avgST = axisScores.ST / axisCounts.ST; // 1(Solo) ~ 3(Together)

  // [보정 로직] 4개 축을 모두 온도로 환산하되 가중치 부여
  // HC(충동성) 40%, CS(소비성향) 40%, TS(트렌드) 15%, ST(사교지출) 5%
  const rawTemp = 
    (3 - avgHC) * 12 +   // 최대 24점
    (3 - avgCS) * 12 +   // 최대 24점
    (3 - avgTS) * 4.5 +  // 최대 9점
    (3 - avgST) * 1.5;   // 최대 3점
  
  // 합계 최대치 60점을 100도로 변환
  const temperature = Math.round((rawTemp / 60) * 100);

  // 캐릭터 유형 매칭 (이전과 동일하게 8종 유지)
  const L1 = avgHC <= 2 ? 'H' : 'C';
  const L2 = avgTS <= 2 ? 'T' : 'S';
  const L4 = avgST <= 2 ? 'S' : 'T';

  let code = "";
  if (L1 === 'H' && L2 === 'T') {
    code = L4 === 'S' ? 'HTCS' : 'HTCT';
  } else if (L1 === 'H' && L2 === 'S') {
    code = L4 === 'S' ? 'HSTS' : 'HSTT';
  } else if (L1 === 'C' && L2 === 'T') {
    code = L4 === 'S' ? 'CTCS' : 'CTCT';
  } else {
    code = L4 === 'S' ? 'CSSS' : 'CSST';
  }

  return {
    code,
    temperature: Math.max(0, Math.min(100, temperature)),
    axisScores,
  };
}