import React, { useRef, useState } from "react";

import "../styles/ResumeUpload.css";

const ResumeUpload = ({ resume, setResume }) => {
  const fileInputRef = useRef(null);

  const [error, setError] = useState("");

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const maxFileSize = 5 * 1024 * 1024; // 5 MB


  const handleFile = (file) => {

    if (!file) {
      return;
    }

    setError("");


    // File type validation
    if (!allowedTypes.includes(file.type)) {

      setError(
        "Please upload a PDF, DOC, or DOCX file."
      );

      return;
    }


    // File size validation
    if (file.size > maxFileSize) {

      setError(
        "File size must be less than 5 MB."
      );

      return;
    }


    setResume(file);
  };


  const handleFileChange = (event) => {

    const file = event.target.files[0];

    handleFile(file);
  };


  const handleDrop = (event) => {

    event.preventDefault();

    const file = event.dataTransfer.files[0];

    handleFile(file);
  };


  const handleDragOver = (event) => {

    event.preventDefault();
  };


  const removeResume = () => {

    setResume(null);

    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };


  const openFilePicker = () => {

    fileInputRef.current?.click();
  };


  return (
    <div className="resume-section">

      <div className="resume-label-row">

        <label>
          Resume
          <span>*</span>
        </label>

        <small>
          PDF, DOC, DOCX
        </small>

      </div>


      {!resume ? (

        <div
          className="upload-box"
          onClick={openFilePicker}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            hidden
          />


          <div className="upload-icon">
            ↑
          </div>


          <h4>
            Upload your resume
          </h4>


          <p>
            Drag and drop your file here or{" "}
            <span>
              browse
            </span>
          </p>


          <small>
            Maximum file size: 5 MB
          </small>

        </div>

      ) : (

        <div className="selected-file">

          <div className="file-icon">
            📄
          </div>


          <div className="file-information">

            <strong>
              {resume.name}
            </strong>

            <span>
              {(resume.size / 1024 / 1024).toFixed(2)} MB
            </span>

          </div>


          <button
            type="button"
            className="remove-file-button"
            onClick={removeResume}
            aria-label="Remove resume"
          >
            ×
          </button>

        </div>

      )}


      {error && (
        <p className="upload-error">
          {error}
        </p>
      )}

    </div>
  );
};

export default ResumeUpload;