import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./InfoQues.css";
const InfoQues = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/Answer"); // Điều hướng về trang home (hoặc trang bạn muốn)
  };
  const handleSelectAnotherQuiz = () => {
    navigate("/home"); // Điều hướng về trang home (hoặc trang bạn muốn)
  };
  return (
    <div class="quiz-overview-content">
      <i class="fa-solid fa-face-smile result-icon"></i>
      <div class="quiz-title">
        <h2 className="quiz-title">Javascript Quiz</h2>
        <span className="quiz-subtitle">20 Questions</span>
        <div className="timer">
          <i className="fa-solid fa-stopwatch timer-icon"></i>
          <span className="timer-text">00:00:29</span>
        </div>
      </div>
      {/* Nut Save */}
      <button class="start-button" onClick={handleStart}>
        Start now
      </button>

      <button className="start-button" onClick={handleSelectAnotherQuiz}>
        Select Another Quiz
      </button>
    </div>
  );
};

export default InfoQues;
