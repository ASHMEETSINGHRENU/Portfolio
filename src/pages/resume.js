// client/src/pages/resume.js
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Navbar from '../components/navbar';
import Footer from "../components/footer";

const Resume = () => {
  const pdfFile = "/Resume.pdf"; 

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      
      {/* Main content container */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Heading */}
       <h1
  className="relative inline-block font-nunito text-4xl md:text-5xl font-bold text-gray-800 mb-8 mt-16 animate-fadeIn
  after:content-[''] after:block after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-600 
  after:transition-all after:duration-700 hover:after:w-full">  Resume  </h1>

        {/* Resume Container */}
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-6 flex justify-center animate-fadeInSlow">
          <Zoom>
            <img
              src={require("../photos/resume.png")}
              alt="Resume"
              className="w-full h-auto rounded-lg cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
            />
          </Zoom>
        </div>

        {/* Buttons Section */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeInSlow">
          {/* Download PDF */}
          <a
            href={pdfFile}
            download="My_Resume.pdf"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:bg-blue-700 transition w-full sm:w-auto text-center"
          >
            Download PDF
          </a>

          {/* View PDF Online */}
          <a
            href={pdfFile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-xl shadow-lg hover:bg-purple-700 transition w-full sm:w-auto text-center"
          >
            View PDF Online
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />


    </div>
  );
};

export default Resume;