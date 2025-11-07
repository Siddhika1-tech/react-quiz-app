import React, { useEffect, useMemo, useRef, useState } from "react";
import { useQuizStore } from "../store/usequizstore";
import { useNavigate, useLocation } from "react-router-dom";
import QuestionCard from "../components/questioncard";

const QuizPage = () => {
  const { questions, setAnswer, answers, calculateScore } = useQuizStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (questions.length === 0) navigate("/");
  }, [questions, navigate]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      calculateScore();
      navigate("/result");
    }
  };

  const answeredCount = useMemo(
    () => Object.keys(answers).length,
    [answers]
  );

  const currentQuestion = questions[currentIndex];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Question {currentIndex + 1} / {questions.length}</h2>
      {currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={answers[currentQuestion.id]}
          onSelect={(answer) => setAnswer(currentQuestion.id, answer)}
        />
      )}
      <div className="mt-4 flex justify-between items-center">
        <p>Answered: {answeredCount}</p>
        <button
          onClick={handleNext}
          className="bg-green-500 text-white px-6 py-2 rounded-md"
        >
          {currentIndex === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
