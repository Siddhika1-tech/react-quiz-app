import { create } from "zustand";

export const useQuizStore = create((set) => ({
  questions: [],
  answers: {},
  score: 0,
  setQuestions: (questions) => set({ questions }),
  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    })),
  resetQuiz: () => set({ answers: {}, score: 0 }),
  calculateScore: () =>
    set((state) => {
      let score = 0;
      state.questions.forEach((q) => {
        if (state.answers[q.id] === q.correctAnswer) score += 1;
      });
      return { score };
    }),
}));
