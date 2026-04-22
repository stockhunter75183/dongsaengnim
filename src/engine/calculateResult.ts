export interface Answer {
  questionId: number;
  axis: 'HC' | 'TS' | 'CS' | 'ST';
  score: number;
}

export interface TestResult {
  code: string;
  temperature: number;
  axisScores: {
    HC: number;
    TS: number;
    CS: number;
    ST: number;
  };
}

export function calculateResult(answers: Answer[]): TestResult {
  const axisScores = { HC: 0, TS: 0, CS: 0, ST: 0 };

  answers.forEach((a) => {
    axisScores[a.axis] += a.score;
  });

  const letter1 = axisScores.HC <= 6 ? 'H' : 'C';
  const letter2 = axisScores.TS <= 6 ? 'T' : 'S';
  const letter3 = axisScores.CS <= 6 ? 'C' : 'S';
  const letter4 = axisScores.ST <= 6 ? 'S' : 'T';

  const code = letter1 + letter2 + letter3 + letter4;

  const rawTemp =
    (9 - axisScores.HC) * 4 +
    (9 - axisScores.TS) * 2 +
    (9 - axisScores.CS) * 3.5 +
    (9 - axisScores.ST) * 0.5;

  const temperature = Math.round((rawTemp / 60) * 100);

  return {
    code,
    temperature: Math.max(0, Math.min(100, temperature)),
    axisScores,
  };
}
