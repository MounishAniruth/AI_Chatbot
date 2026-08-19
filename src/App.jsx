import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import JobApplicationPage from "./pages/JobApplicationPage";
import InterviewPage from "./pages/InterviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/job-application"
          element={<JobApplicationPage />}
        />

        <Route
          path="/interview"
          element={<InterviewPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;