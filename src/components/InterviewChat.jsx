import React from "react";

const InterviewChat = ({
  question,
  questionNumber,
}) => {
  return (
    <section className="interview-chat-card">
      <div className="ai-profile">
        <div className="ai-avatar">
          ✦
        </div>

        <div>
          <h3>AI Interviewer</h3>
          <span>Online</span>
        </div>
      </div>

      <div className="question-section">
        <span className="question-label">
          QUESTION {questionNumber}
        </span>

        <h1>{question}</h1>
      </div>

      <div className="ai-message">
        <span className="message-icon">✦</span>

        <p>
          Take a moment to think about your answer.
          When you're ready, enter your response below.
        </p>
      </div>
    </section>
  );
};

export default InterviewChat;