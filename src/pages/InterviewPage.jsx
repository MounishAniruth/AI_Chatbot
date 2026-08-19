import React, { useState } from "react";

import InterviewHeader from "../components/InterviewHeader";
import InterviewChat from "../components/InterviewChat";
import InterviewInput from "../components/InterviewInput";

import "../styles/InterviewPage.css";
import "../styles/InterviewHeader.css";
import "../styles/InterviewChat.css";
import "../styles/InterviewInput.css";
const interviewQuestions = [
  "Tell me about yourself and your professional background.",

  "Why are you interested in this position?",

  "Can you describe a challenging project you have worked on?",

  "What are your strongest technical skills?",

  "How do you handle tight deadlines and pressure?",

  "How do you approach debugging a problem in your code?",

  "Tell me about a time you worked successfully as part of a team.",

  "Where do you see yourself professionally in the next three years?",
];

const InterviewPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmitAnswer = () => {
    if (!currentAnswer.trim()) {
      return;
    }

    const newAnswers = [
      ...answers,
      {
        question: interviewQuestions[currentQuestion],
        answer: currentAnswer,
      },
    ];

    setAnswers(newAnswers);

    if (currentQuestion === interviewQuestions.length - 1) {
      setIsCompleted(true);
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    setCurrentAnswer("");
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion - 1);

    const previousAnswer = answers[currentQuestion - 1];

    if (previousAnswer) {
      setCurrentAnswer(previousAnswer.answer);
    }
  };

  const progress =
    ((currentQuestion + 1) / interviewQuestions.length) * 100;

  if (isCompleted) {
    return (
      <div className="interview-page">
        <InterviewHeader
          currentQuestion={interviewQuestions.length}
          totalQuestions={interviewQuestions.length}
        />

        <main className="interview-completed">
          <div className="completion-icon">✓</div>

          <p className="completion-label">
            INTERVIEW COMPLETED
          </p>

          <h1>Thank you for completing your interview!</h1>

          <p className="completion-description">
            Your responses have been recorded successfully.
            Our team will review your interview and get back
            to you soon.
          </p>

          <div className="completion-summary">
            <div>
              <strong>{answers.length}</strong>
              <span>Questions Answered</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Interview Completed</span>
            </div>
          </div>

          <button
            className="finish-button"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Back to Home
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="interview-page">
      <InterviewHeader
        currentQuestion={currentQuestion + 1}
        totalQuestions={interviewQuestions.length}
      />

      <main className="interview-container">
        {/* Progress */}
        <div className="interview-progress-section">
          <div className="progress-info">
            <span>Interview Progress</span>

            <span>
              {currentQuestion + 1} of{" "}
              {interviewQuestions.length}
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Interview Chat */}
        <InterviewChat
          question={interviewQuestions[currentQuestion]}
          questionNumber={currentQuestion + 1}
        />

        {/* Answer Input */}
        <InterviewInput
          value={currentAnswer}
          onChange={setCurrentAnswer}
          onSubmit={handleSubmitAnswer}
          onPrevious={handlePreviousQuestion}
          isFirstQuestion={currentQuestion === 0}
        />

        <p className="interview-note">
          Take your time and answer the question as clearly
          as possible.
        </p>
      </main>
    </div>
  );
};

export default InterviewPage;