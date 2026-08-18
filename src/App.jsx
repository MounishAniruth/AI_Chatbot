import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import JobApplicationPage from "./pages/JobApplicationPage";

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

      </Routes>

    </BrowserRouter>
  );
}

export default App;