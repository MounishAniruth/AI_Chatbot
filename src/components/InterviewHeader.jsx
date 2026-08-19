import React from "react";

const InterviewHeader = ({
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <header className="interview-header">
      <div className="interview-brand">
        Job<span>Match</span>
      </div>

      <div className="interview-title">
        <span className="live-dot"></span>
        AI Interview
      </div>

      <div className="question-counter">
        Question {currentQuestion} / {totalQuestions}
      </div>
    </header>
  );
};

export default InterviewHeader;