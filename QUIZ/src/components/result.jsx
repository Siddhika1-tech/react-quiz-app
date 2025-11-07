import React from "react";
import { useQuizStore } from "../store/usequizstore";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { questions, answers, score, resetQuiz } = useQuizStore();
  const navigate = useNavigate();

  const correctCount = score;
  const total = questions.length;
  const answeredCount = Object.keys(answers).length;

  const restart = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
      <p>Total Questions: {total}</p>
      <p>Answered: {answeredCount}</p>
      <p>Correct: {correctCount}</p>
      <p className="font-semibold text-green-600 mt-3">
        Score: {(correctCount / total) * 100}%
      </p>
      <button
        onClick={restart}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Restart
      </button>
    </div>
  );
};

export default Result;
