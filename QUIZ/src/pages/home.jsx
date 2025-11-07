import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/usequizstore";
import { questionsData } from "../data";

const Home = () => {
  const navigate = useNavigate();
  const setQuestions = useQuizStore((state) => state.setQuestions);

  const startQuiz = () => {
    setQuestions(questionsData);
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz App</h1>
      <button
        onClick={startQuiz}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
