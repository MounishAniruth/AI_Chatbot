import React from "react";

const InterviewInput = ({
  value,
  onChange,
  onSubmit,
  onPrevious,
  isFirstQuestion,
}) => {
  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      event.ctrlKey
    ) {
      onSubmit();
    }
  };

  return (
    <section className="interview-input-card">
      <div className="answer-header">
        <label htmlFor="candidate-answer">
          Your Answer
        </label>

        <span>
          {value.length} characters
        </span>
      </div>

      <textarea
        id="candidate-answer"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder="Type your answer here..."
        rows="6"
      />

      <div className="input-footer">
        <span className="keyboard-hint">
          Press Ctrl + Enter to submit
        </span>

        <div className="input-actions">
          {!isFirstQuestion && (
            <button
              type="button"
              className="previous-button"
              onClick={onPrevious}
            >
              ← Previous
            </button>
          )}

          <button
            type="button"
            className="submit-answer-button"
            onClick={onSubmit}
            disabled={!value.trim()}
          >
            Submit Answer
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InterviewInput;