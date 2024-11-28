import React, { useState } from "react";
import "./AnsQues.css";
import { useNavigate } from "react-router";

const AnswerQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question:
        "What does the typeof operator in JavaScript return with the following data types?",
      options: ["A: string", "B: number", "C: boolean", "D: undefined"],
      correctAnswer: "D: undefined",
    },
    {
      id: 2,
      question: "Which company developed JavaScript?",
      options: ["A: Microsoft", "B: Netscape", "C: Google", "D: IBM"],
      correctAnswer: "B: Netscape",
    },
    {
      id: 3,
      question: "Which company developed JavaScript?",
      options: ["A: Microsoft", "B: Netscape", "C: Google", "D: IBM"],
      correctAnswer: "B: Netscape",
    },
  ]); // Questions list
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = option; // Store selected option for current question
      return updatedAnswers;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        calculatedScore++;
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    });

    setScore(calculatedScore); // Cập nhật điểm trong state
    // Điều hướng đến trang ScoreQues và truyền dữ liệu điểm số, đúng và sai
    navigate("/Score", {
      state: { score: calculatedScore, correctAnswers, incorrectAnswers },
    });
  };

  return (
    <div className="answer-question-form">
      <div className="quiz-container">
        <div className="quiz-info">
          <div className="icon-container">
            <i className="fa-solid fa-code quiz-icon"></i>
          </div>
          <div className="quiz-details">
            <h2 className="quiz-title">Javascript Quiz</h2>
            <span className="quiz-subtitle">{questions.length} Questions</span>
          </div>
        </div>
        <div className="timer">
          <i className="fa-solid fa-stopwatch timer-icon"></i>
          <span className="timer-text">00:00:29</span>
        </div>
      </div>
      <div>
        <div className="question-block">
          <div className="question-number">{currentQuestionIndex + 1}</div>
          <p>{questions[currentQuestionIndex].question}</p>
        </div>
        <div className="answer-options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div
              key={index}
              className={`answer-option ${
                selectedAnswers[currentQuestionIndex] === option
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-7">
        <div className="button-group">
          <button
            className="button"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          {currentQuestionIndex === questions.length - 1 ? (
            <button className="button" onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            <button className="button" onClick={handleNextQuestion}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestions;
