import { create } from 'zustand';
import type { TestResult } from '../engine/calculateResult';

interface Answer {
  questionId: number;
  axis: 'HC' | 'TS' | 'CS' | 'ST';
  score: number;
}

interface TestStore {
  currentStep: number;
  answers: Answer[];
  result: TestResult | null;
  addAnswer: (answer: Answer) => void;
  setResult: (result: TestResult) => void;
  reset: () => void;
}

export const useTestStore = create<TestStore>((set) => ({
  currentStep: 0,
  answers: [],
  result: null,

  addAnswer: (answer) =>
    set((state) => ({
      answers: [...state.answers, answer],
      currentStep: state.currentStep + 1,
    })),

  setResult: (result) => set({ result }),
  reset: () => set({ currentStep: 0, answers: [], result: null }),
}));
