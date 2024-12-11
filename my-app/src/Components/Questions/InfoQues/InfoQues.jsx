import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getQuizbyId } from "../../../Services/UseService"; // Assuming this is the correct API function
import "./InfoQues.css";

const InfoQues = () => {
  const { quizId } = useParams(); // Get quiz ID from URL
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null); // Store quiz data
  const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await getQuizbyId(quizId); // Fetch quiz by ID
        console.log("Fetched Quiz Data:", data); // Log the fetched data
        setQuiz(data.data); // Store the quiz data
      } catch (error) {
        console.error("Error fetching quiz details:", error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleStart = () => {
    navigate(`/Answer/${quizId}`); // Navigate to answer questions page
  };

  const handleSelectAnotherQuiz = () => {
    navigate("/home"); // Navigate back to the home page
  };
  const toggleOptions = () => {
    setShowOptions(!showOptions); // Toggle visibility of options
  };

  // Add a check for undefined quiz or quiz.questions
  if (!quiz || !quiz.questions) {
    return <div>Loading...</div>; // Show loading until quiz data is available
  }

  return (
    <div className="quiz-overview-content">
      <i
        className="fa-solid fa-ellipsis threedot-option"
        onClick={toggleOptions}
      ></i>
      

      {showOptions && (
        <div className="options-menu">
          <button onClick={() => console.log("Modify clicked")}>Modify</button>
          <button onClick={() => console.log("Modify clicked")}>Delete</button>
        </div>
      )}

      <i className="fa-solid fa-face-smile result-icon"></i>
      <div className="quiz-title">
        <h2 className="quiz-title">{quiz.title}</h2>{" "}
        {/* Make sure title exists */}
        <span className="quiz-subtitle">{quiz.questions.length} Questions</span>
        <div className="timer">
          <i className="fa-solid fa-stopwatch timer-icon"></i>
          <span className="timer-text">00:00:29</span> {/* Timer for now */}
        </div>
      </div>
      <button className="start-button" onClick={handleStart}>
        Start now
      </button>
      <button className="start-button" onClick={handleSelectAnotherQuiz}>
        Select Another Quiz
      </button>
    </div>
  );
};

export default InfoQues;
