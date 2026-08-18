import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/job-application");
  };

  const handleExplore = () => {
    document
      .getElementById("features")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="navbar-logo">
          <span className="logo-icon">✦</span>
          <span className="logo-text">
            Career<span>AI</span>
          </span>
        </div>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>

        <button
          className="navbar-button"
          onClick={handleGetStarted}
        >
          Get Started
        </button>

      </header>


      {/* ================= HERO SECTION ================= */}

      <main>

        <section
          className="hero-section"
          id="home"
        >

          <div className="hero-content">

            <div className="hero-badge">
              <span>✦</span>
              AI-Powered Career Experience
            </div>

            <h1>
              Your next
              <span>career opportunity</span>
              starts here.
            </h1>

            <p className="hero-description">
              Discover the right opportunities, explore job roles,
              and take the next step in your career with a simple
              and intelligent application experience.
            </p>

            <div className="hero-actions">

              <button
                className="primary-button"
                onClick={handleGetStarted}
              >
                Get Started
                <span>→</span>
              </button>

              <button
                className="secondary-button"
                onClick={handleExplore}
              >
                Explore Features
              </button>

            </div>

            <div className="hero-trust">

              <div className="trust-avatars">
                <span>👨🏻</span>
                <span>👩🏻</span>
                <span>👨🏽</span>
              </div>

              <div>
                <strong>Build your future</strong>
                <p>One opportunity at a time.</p>
              </div>

            </div>

          </div>


          {/* ================= HERO VISUAL ================= */}

          <div className="hero-visual">

            <div className="visual-glow"></div>

            {/* Floating notification */}

            <div className="floating-card floating-top">

              <div className="floating-icon success">
                ✓
              </div>

              <div>
                <strong>Application Ready</strong>
                <p>Resume detected</p>
              </div>

            </div>


            {/* Main Job Card */}

            <div className="job-preview-card">

              <div className="job-card-top">

                <div className="company-logo">
                  G
                </div>

                <div className="job-company">
                  <h3>Software Engineer</h3>
                  <p>Google</p>
                </div>

                <button className="bookmark-button">
                  ♡
                </button>

              </div>


              <div className="job-meta">

                <span>📍 Bangalore</span>
                <span>💼 Full Time</span>

              </div>


              <div className="job-description-preview">

                <p>
                  Build scalable products and create
                  meaningful experiences using modern
                  technologies.
                </p>

              </div>


              <div className="skills">

                <span>React</span>
                <span>Node.js</span>
                <span>JavaScript</span>

              </div>


              <div className="job-card-footer">

                <div>
                  <small>Experience</small>
                  <strong>0–2 Years</strong>
                </div>

                <button
                  onClick={handleGetStarted}
                  className="card-apply-button"
                >
                  Apply →
                </button>

              </div>

            </div>


            {/* Floating application card */}

            <div className="floating-card floating-bottom">

              <div className="floating-icon document">
                📄
              </div>

              <div>
                <strong>Resume Upload</strong>
                <p>PDF, DOC, DOCX</p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}

        <section
          className="features-section"
          id="features"
        >

          <div className="section-header">

            <span className="section-label">
              SIMPLE & POWERFUL
            </span>

            <h2>
              Everything you need to
              <span>move forward.</span>
            </h2>

            <p>
              From discovering opportunities to submitting
              your resume, we've made the process simple.
            </p>

          </div>


          <div className="features-grid">

            {/* Feature 1 */}

            <article className="feature-card">

              <div className="feature-icon purple">
                🔎
              </div>

              <h3>
                Discover Opportunities
              </h3>

              <p>
                Explore job roles and opportunities that
                align with your career goals and interests.
              </p>

              <span className="feature-number">
                01
              </span>

            </article>


            {/* Feature 2 */}

            <article className="feature-card">

              <div className="feature-icon blue">
                📋
              </div>

              <h3>
                Understand the Role
              </h3>

              <p>
                Get clear information about the company,
                position, responsibilities, and requirements.
              </p>

              <span className="feature-number">
                02
              </span>

            </article>


            {/* Feature 3 */}

            <article className="feature-card">

              <div className="feature-icon green">
                🚀
              </div>

              <h3>
                Apply with Confidence
              </h3>

              <p>
                Upload your resume and submit your
                application through a simple workflow.
              </p>

              <span className="feature-number">
                03
              </span>

            </article>

          </div>

        </section>


        {/* ================= ABOUT / CTA ================= */}

        <section
          className="cta-section"
          id="about"
        >

          <div className="cta-content">

            <div className="cta-badge">
              READY WHEN YOU ARE
            </div>

            <h2>
              Your next opportunity
              <span>could be one click away.</span>
            </h2>

            <p>
              Take the first step toward your next career
              opportunity. Explore the role and submit your
              application today.
            </p>

            <button
              className="cta-button"
              onClick={handleGetStarted}
            >
              Start Your Application
              <span>→</span>
            </button>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">

          <span className="logo-icon">✦</span>

          Career<span>AI</span>

        </div>

        <p>
          © 2026 CareerAI. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

      </footer>

    </div>
  );
};

export default LandingPage;