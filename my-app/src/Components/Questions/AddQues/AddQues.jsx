import React, { useState } from "react";
import "./AddQues.css";

const AddQues = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      questionType: "single",
      choices: [""],
      correctAnswers: [],
    },
  ]);

  // Thêm một câu hỏi mới
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "",
        questionType: "single",
        choices: [""],
        correctAnswers: [],
      },
    ]);
  };

  // Xóa câu hỏi
  const handleRemoveQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  // Cập nhật nội dung câu hỏi
  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = questions.map((q, i) =>
      i === index ? { ...q, [field]: value } : q
    );
    setQuestions(updatedQuestions);
  };

  // Thêm lựa chọn
  const handleAddChoice = (questionIndex) => {
    const updatedQuestions = questions.map((q, i) =>
      i === questionIndex ? { ...q, choices: [...q.choices, ""] } : q
    );
    setQuestions(updatedQuestions);
  };

  // Xóa lựa chọn
  const handleRemoveChoice = (questionIndex, choiceIndex) => {
    const updatedQuestions = questions.map((q, i) =>
      i === questionIndex
        ? {
            ...q,
            choices: q.choices.filter((_, j) => j !== choiceIndex),
            correctAnswers: q.correctAnswers.filter(
              (answer) => answer !== choiceIndex
            ), // Xóa đáp án đúng tương ứng
          }
        : q
    );
    setQuestions(updatedQuestions);
  };

  // Cập nhật nội dung lựa chọn
  const handleChoiceChange = (questionIndex, choiceIndex, value) => {
    const updatedQuestions = questions.map((q, i) =>
      i === questionIndex
        ? {
            ...q,
            choices: q.choices.map((choice, j) =>
              j === choiceIndex ? value : choice
            ),
          }
        : q
    );
    setQuestions(updatedQuestions);
  };

  // Cập nhật đáp án đúng
  const handleCorrectAnswerChange = (questionIndex, choiceIndex) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i !== questionIndex) return q;

      // Nếu là câu hỏi loại "single", chỉ có 1 đáp án đúng
      if (q.questionType === "single") {
        return { ...q, correctAnswers: [choiceIndex] };
      }

      // Nếu là câu hỏi loại "multiple", bật/tắt đáp án đúng
      const isSelected = q.correctAnswers.includes(choiceIndex);
      const newCorrectAnswers = isSelected
        ? q.correctAnswers.filter((ans) => ans !== choiceIndex) // Bỏ nếu đã chọn
        : [...q.correctAnswers, choiceIndex]; // Thêm nếu chưa chọn

      return { ...q, correctAnswers: newCorrectAnswers };
    });

    setQuestions(updatedQuestions);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Questions:", questions);
  };

  return (
    <div className="add-questions-form">
      <h2 className="form-title">Add Multiple Questions</h2>
      <form onSubmit={handleSubmit} className="form-container">
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-block">
            <h4>Question {questionIndex + 1}</h4>
            <div className="form-group">
              <label
                htmlFor={`question-text-${questionIndex}`}
                className="form-label"
              >
                Question Text
              </label>
              <textarea
                id={`question-text-${questionIndex}`}
                className="form-input"
                rows="2"
                value={question.questionText}
                onChange={(e) =>
                  handleQuestionChange(
                    questionIndex,
                    "questionText",
                    e.target.value
                  )
                }
              />
            </div>

            {/* Question Type */}
            <div className="form-group">
              <label
                htmlFor={`question-type-${questionIndex}`}
                className="form-label"
              >
                Question Type
              </label>
              <select
                id={`question-type-${questionIndex}`}
                className="form-input"
                value={question.questionType}
                onChange={(e) =>
                  handleQuestionChange(
                    questionIndex,
                    "questionType",
                    e.target.value
                  )
                }
              >
                <option value="single">Single Answer</option>
                <option value="multiple">Multiple Answers</option>
              </select>
            </div>

            {/* Choices */}
            <div className="form-group">
              <label className="form-label">Choices</label>
              {question.choices.map((choice, choiceIndex) => (
                <div key={choiceIndex} className="choice-group">
                  <input
                    type="text"
                    className="form-input choice-input"
                    placeholder={`Choice ${choiceIndex + 1}`}
                    value={choice}
                    onChange={(e) =>
                      handleChoiceChange(
                        questionIndex,
                        choiceIndex,
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="checkbox"
                    checked={question.correctAnswers.includes(choiceIndex)}
                    onChange={() =>
                      handleCorrectAnswerChange(questionIndex, choiceIndex)
                    }
                  />
                  <label>Correct</label>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() =>
                      handleRemoveChoice(questionIndex, choiceIndex)
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleAddChoice(questionIndex)}
              >
                Add Choice
              </button>
            </div>

            <button
              type="button"
              className="btn btn-danger mt-3"
              onClick={() => handleRemoveQuestion(questionIndex)}
            >
              Remove Question
            </button>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={handleAddQuestion}
        >
          Add New Question
        </button>
        <button type="submit" className="btn btn-success mt-3">
          Save All Questions
        </button>
      </form>
    </div>
  );
};

export default AddQues;
