import React from "react";
import { Download } from "lucide-react"; 
import Navbar from '../components/navbar';
import Footer from "../components/footer";

const Certificate = () => {
  // Certificate data (image + pdf)
  const certificates = [
    {
      id: 1,
      img: require("../photos/labmentix_Certificate.png"),
      pdf: "/labmentix.pdf",
    },
    {
      id: 2,
      img: require("../photos/fullstack.png"),
      pdf: "/Apna_college.pdf",
    },
    {
      id: 3,
      img: require("../photos/AIML.png"),
      pdf: "/AIML.pdf",
    },
    {
      id: 4,
      img: require("../photos/vorsion.png"),
      pdf: "/version.pdf",
    },
    {
      id: 5,
      img: require("../photos/cloud.png"),
      pdf: "/Cloud_C.pdf",
    },
    
  ];

  const udemyCertificates = [
    {
      id: 1,
      img: require("../photos/AI&ML.png"),
      pdf: "/AI&ML.pdf",
    },
    {
      id: 2,
      img: require("../photos/DS.png"),
      pdf: "/DS.pdf",
    },
    {
      id: 3,
      img: require("../photos/FullS.png"),
      pdf: "/fullstack.pdf",
    },
    {
      id: 4,
      img: require("../photos/java.png"),
      pdf: "/java.pdf",
    },
    {
      id: 5,
      img: require("../photos/python.png"),
      pdf: "/python.pdf",
    },
    {
      id: 6,
      img: require("../photos/ML.png"),
      pdf: "/ML.pdf",
    }
  ];



 return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-12">


        {/* Page Heading */}
        <h1 className="relative inline-block font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-8
          after:content-[''] after:block after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-600
          after:transition-all after:duration-700 hover:after:w-full">
          Certifications
        </h1>

        {/* Intro Text */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-14">
          A testament to my commitment to continuous learning and professional growth.
          Each certification represents practical knowledge and real-world skill development.
        </p>

        {/* Main Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-20">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden
              transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={cert.img}
                alt={`Certificate ${cert.id}`}
                className="w-full h-auto object-cover rounded-2xl"
              />

              <a
                href={cert.pdf}
                download={`Certificate_${cert.id}.pdf`}
                className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700
                text-white p-2 rounded-full shadow-md transition"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

        {/* Udemy Section */}
        <h2 className="relative inline-block font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-6
          after:content-[''] after:block after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-purple-500 after:to-pink-600
          after:transition-all after:duration-700 hover:after:w-full">
          Udemy Professional Certifications
        </h2>


        {/* Udemy Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
          {udemyCertificates.map((cert) => (
            <div
              key={cert.id}
              className="relative bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden
              transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={cert.img}
                alt={`Udemy Certificate ${cert.id}`}
                className="w-full h-auto object-cover rounded-2xl"
              />

              <a
                href={cert.pdf}
                download={`Udemy_Certificate_${cert.id}.pdf`}
                className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700
                text-white p-2 rounded-full shadow-md transition"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Certificate;