import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, X, ChevronLeft, ChevronRight, Award, GraduationCap, Star, Globe } from "lucide-react";
import Navbar from '../components/navbar';
import Footer from "../components/footer";

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(null);

  // Global Certificates Data
  const globalCertificates = [
    {
      id: 1,
      title: "Advanced Software Engineering",
      img: require("../photos/walmart.png"),
      pdf: "/walmart.pdf",
      category: "global",
      date: "2026",
      issuer: "Forage Job Simulations"
    },
    {
      id: 2,
      title: "Software Engineering",
      img: require("../photos/commonwealth.png"),
      pdf: "/common_wealth.pdf",
      category: "global",
      date: "2026",
      issuer: "Forage Job Simulations"
    },
    {
      id: 3,
      title: "Frontend Software Engineering",
      img: require("../photos/sykscanner.png"),
      pdf: "/sykscanner.pdf",
      category: "global",
      date: "2026",
      issuer: "Forage Job Simulations"
    },
    {
      id: 4,
      title: "Data Analytics",
      img: require("../photos/deloitte.png"),
      pdf: "/deloitte.pdf",
      category: "global",
      date: "2026",
      issuer: "Forage Job Simulations"
    },
    {
      id: 5,
      title: "GenAI Powered Data Analytics",
      img: require("../photos/tata.png"),
      pdf: "/tata.pdf",
      category: "global",
      date: "2026",
      issuer: "Forage Job Simulations"
    }
  ];

  // Professional Certificates Data
  const professionalCertificates = [
    {
      id: 1,
      title: "Labmentix Internship Certificate",
      img: require("../photos/labmentix_Certificate.png"),
      pdf: "/labmentix.pdf",
      category: "Professional",
      date: "2024",
      issuer: "Labmentix Solutions"
    },
    {
      id: 2,
      title: "Full Stack Development",
      img: require("../photos/fullstack.png"),
      pdf: "/Apna_college.pdf",
      category: "Professional",
      date: "2024",
      issuer: "Apna College"
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      img: require("../photos/AIML.png"),
      pdf: "/AIML.pdf",
      category: "Professional",
      date: "2024",
      issuer: "AI Institute"
    },
    {
      id: 4,
      title: "Version Control with Git",
      img: require("../photos/vorsion.png"),
      pdf: "/version.pdf",
      category: "Professional",
      date: "2024",
      issuer: "Version Control Academy"
    },
    {
      id: 5,
      title: "Cloud Computing Fundamentals",
      img: require("../photos/cloud.png"),
      pdf: "/Cloud_C.pdf",
      category: "Professional",
      date: "2024",
      issuer: "Cloud Institute"
    },
  ];

  // Udemy Certificates Data
  const udemyCertificates = [
    {
      id: 1,
      title: "AI & Machine Learning Mastery",
      img: require("../photos/AI&ML.png"),
      pdf: "/AI&ML.pdf",
      category: "Udemy",
      date: "2024",
      issuer: "Udemy"
    },
    {
      id: 2,
      title: "Data Science Bootcamp",
      img: require("../photos/DS.png"),
      pdf: "/DS.pdf",
      category: "Udemy",
      date: "2024",
      issuer: "Udemy"
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      img: require("../photos/FullS.png"),
      pdf: "/fullstack.pdf",
      category: "Udemy",
      date: "2024",
      issuer: "Udemy"
    },
    {
      id: 4,
      title: "Java Programming Masterclass",
      img: require("../photos/java.png"),
      pdf: "/java.pdf",
      category: "Udemy",
      date: "2024",
      issuer: "Udemy"
    },
    {
      id: 5,
      title: "Python for Data Science",
      img: require("../photos/python.png"),
      pdf: "/python.pdf",
      category: "Udemy",
      date: "2024",
      issuer: "Udemy"
    },
    {
      id: 6,
      title: "Machine Learning A-Z",
      img: require("../photos/ML.png"),
      pdf: "/ML.pdf",
      category: "Udemy",
      date: "2024",
      issuer: "Udemy"
    }
  ];

  const openModal = (certificate, index, category) => {
    setCurrentIndex(index);
    setCurrentCategory(category);
    setSelectedImage(certificate);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    let currentCerts;
    if (currentCategory === 'Global Certifications') {
      currentCerts = globalCertificates;
    } else if (currentCategory === 'Professional Certifications') {
      currentCerts = professionalCertificates;
    } else {
      currentCerts = udemyCertificates;
    }
    const newIndex = (currentIndex + 1) % currentCerts.length;
    setCurrentIndex(newIndex);
    setSelectedImage(currentCerts[newIndex]);
  };

  const prevImage = () => {
    let currentCerts;
    if (currentCategory === 'Global Certifications') {
      currentCerts = globalCertificates;
    } else if (currentCategory === 'Professional Certifications') {
      currentCerts = professionalCertificates;
    } else {
      currentCerts = udemyCertificates;
    }
    const newIndex = (currentIndex - 1 + currentCerts.length) % currentCerts.length;
    setCurrentIndex(newIndex);
    setSelectedImage(currentCerts[newIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const CertificateGrid = ({ certificates, title, gradient, icon, badgeColor }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className={`inline-flex items-center gap-2 ${badgeColor} text-white px-4 py-2 rounded-full mb-4 shadow-lg`}
        >
          {icon}
          <span className="text-sm font-medium">{title}</span>
        </motion.div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            {/* Animated Border Gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            {/* Card Content */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/50">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-sm md:text-base">{cert.title}</h3>
                  <p className="text-gray-200 text-xs">{cert.issuer} • {cert.date}</p>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(cert, index, title)}
                    className="bg-white/90 backdrop-blur-sm text-blue-600 p-2 rounded-full shadow-md hover:bg-white transition-all duration-300"
                    title="View Certificate"
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.pdf}
                    download={`${cert.title.replace(/\s+/g, '_')}.pdf`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    title="Download PDF"
                  >
                    <Download className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">{cert.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{cert.issuer} • {cert.date}</p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-blue-600 text-xs font-medium cursor-pointer"
                    onClick={() => openModal(cert, index, title)}
                  >
                    View →
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000" />
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 md:px-6 pt-24 pb-12 relative z-10">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 px-4"
        >
          {/* Badge - Responsive positioning */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4 shadow-lg"
          >
            <Award className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">My Achievements</span>
          </motion.div>
          
          <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4">
            Certifications
          </h1>
          
          {/* Underline */}
          <div className="w-20 h-0.5 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 md:mb-6" />
          
          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            A testament to my commitment to continuous learning and professional growth.
            <br className="hidden sm:block" />
            Each certification represents practical knowledge and real-world skill development.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mx-auto mb-16"
        >
          {[
            { icon: "📜", label: "Total Certifications", value: "20+" },
            { icon: "⭐", label: "Skills Validated", value: "30+" },
            { icon: "🏆", label: "Platforms", value: "10" },
            { icon: "🎓", label: "Coding", value: "5hs" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/60 backdrop-blur-md rounded-xl p-4 text-center shadow-lg border border-white/50"
            >
              <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Certificates Grid */}
        <CertificateGrid 
          certificates={globalCertificates}
          title="Global Certifications"
          icon={<Globe className="w-4 h-4" />}
          badgeColor="bg-gradient-to-r from-emerald-500 to-teal-500"
        />

        {/* Professional Certificates Grid */}
        <CertificateGrid 
          certificates={professionalCertificates}
          title="Professional Certifications"
          icon={<GraduationCap className="w-4 h-4" />}
          badgeColor="bg-gradient-to-r from-blue-500 to-cyan-500"
        />

        {/* Udemy Certificates Grid */}
        <CertificateGrid 
          certificates={udemyCertificates}
          title="Udemy Certifications"
          icon={<Star className="w-4 h-4" />}
          badgeColor="bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>

      <Footer />

      {/* Modal for Certificate Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <div>
                  <h3 className="font-bold text-lg">{selectedImage.title}</h3>
                  <p className="text-xs opacity-90">{selectedImage.issuer} • {selectedImage.date}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1 hover:bg-white/20 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative">
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain bg-gray-100"
                />
                
                {/* Navigation Buttons */}
                {(currentCategory === 'Global Certifications' || 
                  currentCategory === 'Professional Certifications' || 
                  currentCategory === 'Udemy Certifications') && 
                  (currentCategory === 'Global Certifications' ? globalCertificates.length > 1 :
                   currentCategory === 'Professional Certifications' ? professionalCertificates.length > 1 :
                   udemyCertificates.length > 1) && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-gray-50 flex justify-between items-center flex-wrap gap-3">
                <div>
                  <p className="text-sm text-gray-600">
                    Click download to save this certificate
                  </p>
                </div>
                <a
                  href={selectedImage.pdf}
                  download={`${selectedImage.title.replace(/\s+/g, '_')}.pdf`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Certificate;