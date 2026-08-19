import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import JobDetails from "../components/JobDetails";
import ResumeUpload from "../components/ResumeUpload";

import "../styles/JobApplicationPage.css";

const JobApplicationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [resume, setResume] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!resume) {
      alert("Please upload your resume before submitting.");
      return;
    }

    console.log("Application Data:", {
      ...formData,
      resume,
    });

    // After successful application, go to interview page
    navigate("/interview");
  };

  return (
    <div className="application-page">
      {/* Header */}
      <header className="application-header">
        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          <span>←</span>
          Back
        </button>

        <div className="application-brand">
          Job<span>Match</span>
        </div>

        <div className="header-spacer"></div>
      </header>

      {/* Page Heading */}
      <section className="application-heading">
        <div>
          <p className="heading-label">JOB APPLICATION</p>

          <h1>Apply for this position</h1>

          <p>
            Take the next step in your career by submitting
            your application below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="application-container">
        {/* Left Side - Job Details */}
        <JobDetails />

        {/* Right Side - Application Form */}
        <section className="application-form-card">
          <div className="form-header">
            <div className="form-icon">✦</div>

            <div>
              <h2>Your Application</h2>

              <p>
                Fill in your details to apply.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span>*</span>
              </label>

              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number <span>*</span>
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Resume */}
            <ResumeUpload
              resume={resume}
              setResume={setResume}
            />

            {/* Submit */}
            <button
              type="submit"
              className="submit-application-button"
            >
              Submit Application
              <span>→</span>
            </button>

            <p className="privacy-text">
              By submitting this application, you agree to
              provide accurate information.
            </p>
          </form>
        </section>
      </main>
    </div>
  );
};

export default JobApplicationPage;