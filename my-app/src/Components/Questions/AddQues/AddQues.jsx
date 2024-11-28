import React, { useState } from "react";
import "./AddQues.css";

const AddQues = ({ onSubmit }) => {
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctAnswer: "" },
  ]);

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };

  const handleQuestionChange = (index, key, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][key] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (qIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options.push("");
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerClick = (qIndex, option) => {
    const updatedQuestions = [...questions]; // Sao chép danh sách câu hỏi
    updatedQuestions[qIndex].correctAnswer = option; // Ghi nhớ đáp án đúng
    setQuestions(updatedQuestions); // Cập nhật lại state questions
  };

  const handleRemoveOption = (qIndex, oIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options.splice(oIndex, 1);
    if (
      updatedQuestions[qIndex].correctAnswer ===
      updatedQuestions[qIndex].options[oIndex]
    ) {
      updatedQuestions[qIndex].correctAnswer = ""; // Reset correct answer if removed
    }
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quizName) {
      alert("Quiz name cannot be empty!");
      return;
    }
    if (
      questions.some(
        (q) =>
          !q.question || !q.correctAnswer || q.options.some((opt) => opt === "")
      )
    ) {
      return;
    }
    onSubmit({ quizName, questions });
    setQuizName("");
    setQuestions([
      { question: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };
  return (
    <div className="new-quiz-container">
      <div className="new-quiz-nav">
        <div className="new-quiz-title-container">
          <div class="icon-container">
            <i class="fa-solid fa-code quiz-icon"></i>
          </div>
          <span className="new-quiz-title">
            New <span className="new-quiz-title-highlight">Quiz</span>
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="quiz-name-frame">
          <div class="quiz-input-container">
            <div class="quiz-label">
              <div class="quiz-number">1</div>
              <span class="quiz-name-label">Quiz Name:</span>
            </div>
            <input
              className="quiz-input"
              placeholder="Enter the Name Of The Quiz ..."
              value={quizName}
              onChange={handleQuizNameChange}
            />
          </div>
        </div>
        <div class="quiz-question-container">
          <div class="quiz-question-content">
            <div class="question-label-container">
              <div class="question-number">2</div>
              <span class="question-label">Quiz Question :</span>
            </div>
            <div>
              <div>
                {questions.map((q, qIndex) => (
                  <div key={qIndex} class="question-area-frame">
                    <div className="question-area">
                      <span class="question-label">Question {qIndex + 1} </span>
                      <input
                        className="ques-input"
                        placeholder="Your Question Here ..."
                        value={q.question}
                        onChange={(e) =>
                          handleQuestionChange(
                            qIndex,
                            "question",
                            e.target.value
                          )
                        }
                      />
                      <i
                        className="fa-solid fa-xmark question-remove-icon"
                        onClick={() => handleRemoveQuestion(qIndex)}
                      ></i>
                    </div>
                    {/* Choice */}
                    <div class="choice-container">
                      <div class="choice-label">Choices</div>
                      <div className="choice-input-wrapper">
                        {q.options.map((option, oIndex) => (
                          <div key={oIndex} className="choice-input">
                            <span>{String.fromCharCode(65 + oIndex)}:</span>
                            <input
                              className="choice-input-field"
                              placeholder={`Choice ${oIndex + 1}`}
                              value={option}
                              onChange={(e) =>
                                handleOptionChange(
                                  qIndex,
                                  oIndex,
                                  e.target.value
                                )
                              }
                            />
                            <button
                              className="delete-choice-btn"
                              onClick={() => handleRemoveOption(qIndex, oIndex)}
                            >
                              <i className="fa-solid fa-xmark choice-remove-icon"></i>
                            </button>
                            <button
                              className="correct-choice-btn"
                              onClick={() =>
                                handleCorrectAnswerClick(qIndex, option)
                              }
                            >
                              <i
                                className={`fa-solid fa-check correct-choice-icon ${
                                  q.correctAnswer === option ? "selected" : ""
                                }`}
                              ></i>
                            </button>
                          </div>
                        ))}
                        <div className="button-add-choice-container">
                          <button
                            className="add-choice-button"
                            onClick={() => handleAddOption(qIndex)}
                          >
                            Add a New Choice
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="button-area-container">
                  <button
                    type="button"
                    className="add-question-button"
                    onClick={handleAddQuestion}
                  >
                    Add a New Question
                  </button>
                  <button type="submit" className="save-quiz-button">
                    Save Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddQues;
