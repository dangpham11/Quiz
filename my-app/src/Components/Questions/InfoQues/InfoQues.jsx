import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getQuizbyId, deleteQuiz,updateQuiz } from "../../../Services/UseService"; // Assuming this is the correct API function
import "./InfoQues.css";

const InfoQues = () => {
  const { quizId } = useParams(); // Get quiz ID from URL
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null); // Store quiz data
  const [showOptions, setShowOptions] = useState(false); // An, hien option

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
  const handleDeleteQuiz = async () => {
    try {
      await deleteQuiz(quizId); // Call the deleteQuiz function
      navigate("/home"); // Redirect to home page after successful deletion
    } catch (error) {
      console.error("Error deleting quiz:", error);
      alert("Failed to delete quiz"); // Show error message if deletion fails
    }
  };
  const handleModifyQuiz = () => {
    navigate(`/modify/${quizId}`); // Điều hướng đến trang ModifyQuiz
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
          <button onClick={handleModifyQuiz}>Modify</button>
          <button onClick={handleDeleteQuiz}>Delete</button>
        </div>
      )}

      <i className="fa-solid fa-face-smile result-icon"></i>
      <div className="quiz-title">
        <h2 className="quiz-title">{quiz.title}</h2>{" "}
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
