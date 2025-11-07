import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import QuizPage from "./pages/quizpage";
import Result from "./components/result";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
  );
};

export default App;
