import React from "react";
import { useLocation, useNavigate } from "react-router";
import "./ScoreQues.css";

const ScoreQues = () => {
  // Lấy state từ location
  const location = useLocation();
  const navigate = useNavigate();
  const { score, correctAnswers, incorrectAnswers } = location.state || {};

  const handleSelectAnotherQuiz = () => {
    navigate("/home"); // Điều hướng về trang home (hoặc trang bạn muốn)
  };

  return (
    <div className="your-result">
      <div className="result-content">
        <i className="fa-solid fa-face-smile result-icon"></i>
        <div className="result-score">
          <span className="score-title">Your Score</span>
          <div className="score-value">{score}/3</div> {/* Hiển thị điểm số */}
        </div>

        <div className="stat correct-answer">
          <i className="fa-solid fa-check stat-icon"></i>
          <span>Correct Answer: {correctAnswers}</span> {/* Số câu đúng */}
        </div>
        <div className="stat incorrect-answer">
          <i className="fa-solid fa-xmark incorrect-icon"></i>
          <span>Incorrect Answer: {incorrectAnswers}</span> {/* Số câu sai */}
        </div>
        <button className="retry-button">Try Again</button>
        <button className="retry-button" onClick={handleSelectAnotherQuiz}>
          Select Another Quiz
        </button>
      </div>
    </div>
  );
};

export default ScoreQues;
