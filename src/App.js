// client/src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Certificate from "./pages/certificate";
import Project from "./pages/project";

// ScrollToTop component ensures navigation resets window scroll
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App min-h-screen bg-[#FBF6EF] text-[#0D0D0C] font-interTight">
        <Routes>
          {/* Redirect root (/) to home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/projects" element={<Project />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
