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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      
      {/* Main content container */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Heading */}
      <h1
  className="relative inline-block font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-10 mt-16
  after:content-[''] after:block after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-600 
  after:transition-all after:duration-700 hover:after:w-full"
>
  Certificates
</h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-12">
          A testament to my commitment to skill development and career growth.{" "}
          <br />
          Every certificate represents knowledge gained and challenges conquered
        </p>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative group bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]"
            >
              {/* Certificate Image */}
              <img
                src={cert.img}
                alt={`Certificate ${cert.id}`}
                className="w-full h-auto object-cover rounded-2xl"
              />

              {/* Download Button */}
              <a
                href={cert.pdf}
                download={`Certificate_${cert.id}.pdf`}
                className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-md opacity-80 hover:opacity-100 transition"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Certificate;