import React from "react";

import "../styles/JobDetails.css";

const JobDetails = () => {
  return (
    <section className="job-details-card">

      {/* Company */}
      <div className="company-section">

        <div className="company-logo">
          G
        </div>

        <div>
          <p className="company-label">
            COMPANY
          </p>

          <h2>
            Google
          </h2>
        </div>

      </div>


      {/* Job Title */}
      <div className="job-title-section">

        <span className="job-badge">
          Full Time
        </span>

        <h1>
          Software Engineer
        </h1>

        <div className="job-meta">

          <span>
            📍 Bangalore, India
          </span>

          <span>
            💼 Engineering
          </span>

        </div>

      </div>


      {/* Divider */}
      <div className="job-divider"></div>


      {/* Description */}
      <div className="job-info-section">

        <h3>
          Job Description
        </h3>

        <p>
          We are looking for a talented Software Engineer
          to join our engineering team. You will work on
          building scalable, reliable, and high-performance
          applications while collaborating with designers,
          product managers, and other engineers.
        </p>

        <p>
          The ideal candidate is passionate about technology,
          enjoys solving complex problems, and is comfortable
          working in a fast-paced environment.
        </p>

      </div>


      {/* Skills */}
      <div className="job-info-section">

        <h3>
          Required Skills
        </h3>

        <div className="skills-list">

          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>REST APIs</span>
          <span>Git</span>
          <span>SQL</span>

        </div>

      </div>


      {/* Additional Details */}
      <div className="job-extra-details">

        <div className="extra-item">

          <span className="extra-icon">
            📍
          </span>

          <div>
            <small>Location</small>
            <strong>Bangalore, India</strong>
          </div>

        </div>


        <div className="extra-item">

          <span className="extra-icon">
            💼
          </span>

          <div>
            <small>Employment</small>
            <strong>Full Time</strong>
          </div>

        </div>


        <div className="extra-item">

          <span className="extra-icon">
            ⭐
          </span>

          <div>
            <small>Experience</small>
            <strong>1 - 3 Years</strong>
          </div>

        </div>

      </div>

    </section>
  );
};

export default JobDetails;