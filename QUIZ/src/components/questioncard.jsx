import React from "react";

const QuestionCard = ({ question, selectedAnswer, onSelect }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <h3 className="text-lg font-semibold mb-3">{question.question}</h3>
      <div className="space-y-2">
        {question.options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`block w-full px-4 py-2 text-left rounded-md border 
              ${selectedAnswer === opt ? "bg-blue-400 text-white" : "bg-gray-100 hover:bg-gray-200"}
            `}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
