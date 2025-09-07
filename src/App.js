// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Certificate from "./pages/certificate";
import Project from "./pages/project";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect root (/) to home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
