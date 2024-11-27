import React, { useState } from "react";
import "./AnsQues.css";

const AnswerQuestions = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([null, null, null]);

  const handleAnswerChange = (questionIndex, choiceIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = choiceIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Answers:", selectedAnswers);
    // Gửi kết quả trả lời (có thể là gửi đến API hoặc lưu vào database)
  };

  return (
    <div className="answer-questions-form">
      <h2 className="form-title">Answer the Questions</h2>
      <form onSubmit={handleSubmit} className="form-container">
        {/* Question 1 */}
        <div className="question-block">
          <h4>Question 1: What is 2 + 2?</h4>

          <div className="choices">
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-1"
                  value="0"
                  checked={selectedAnswers[0] === 0}
                  onChange={() => handleAnswerChange(0, 0)}
                />
                3
              </label>
            </div>
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-1"
                  value="1"
                  checked={selectedAnswers[0] === 1}
                  onChange={() => handleAnswerChange(0, 1)}
                />
                4
              </label>
            </div>
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-1"
                  value="2"
                  checked={selectedAnswers[0] === 2}
                  onChange={() => handleAnswerChange(0, 2)}
                />
                5
              </label>
            </div>
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-1"
                  value="3"
                  checked={selectedAnswers[0] === 3}
                  onChange={() => handleAnswerChange(0, 3)}
                />
                6
              </label>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="question-block">
          <h4>Question 2: What is 3 + 5?</h4>

          <div className="choices">
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-2"
                  value="0"
                  checked={selectedAnswers[1] === 0}
                  onChange={() => handleAnswerChange(1, 0)}
                />
                7
              </label>
            </div>
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-2"
                  value="1"
                  checked={selectedAnswers[1] === 1}
                  onChange={() => handleAnswerChange(1, 1)}
                />
                8
              </label>
            </div>
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-2"
                  value="2"
                  checked={selectedAnswers[1] === 2}
                  onChange={() => handleAnswerChange(1, 2)}
                />
                9
              </label>
            </div>
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-2"
                  value="3"
                  checked={selectedAnswers[1] === 3}
                  onChange={() => handleAnswerChange(1, 3)}
                />
                10
              </label>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="question-block">
          <h4>Question 3: What is 5 + 5?</h4>

          <div className="choices">
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-3"
                  value="0"
                  checked={selectedAnswers[2] === 0}
                  onChange={() => handleAnswerChange(2, 0)}
                />
                9
              </label>
            </div>
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-3"
                  value="1"
                  checked={selectedAnswers[2] === 1}
                  onChange={() => handleAnswerChange(2, 1)}
                />
                10
              </label>
            </div>
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-3"
                  value="2"
                  checked={selectedAnswers[2] === 2}
                  onChange={() => handleAnswerChange(2, 2)}
                />
                11
              </label>
            </div>
            <div className="choice-group">
              <label>
                <input
                  type="radio"
                  name="question-3"
                  value="3"
                  checked={selectedAnswers[2] === 3}
                  onChange={() => handleAnswerChange(2, 3)}
                />
                12
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-success mt-3">
          Submit Answers
        </button>
      </form>
    </div>
  );
};

export default AnswerQuestions;
