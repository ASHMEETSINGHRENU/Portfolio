import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const InternshipSection = ({ internships }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(internships[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % internships.length);
    setSelectedImage(internships[(currentIndex + 1) % internships.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + internships.length) % internships.length);
    setSelectedImage(internships[(currentIndex - 1 + internships.length) % internships.length]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <>
      <section id="internship" className="relative py-16 md:py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50" />
        
        {/* Animated Blobs */}
        <div className="absolute top-20 -left-20 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 -right-20 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 shadow-lg"
            >
              <span className="text-sm md:text-base">💼</span>
              <span className="text-xs md:text-sm font-medium">Professional Experience</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4">
              Internship Journey
            </h2>
            <div className="w-20 h-0.5 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 md:mb-6" />
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Through internships, I gained real-world exposure to front-end, back-end, RESTful APIs, and database connectivity.
              <br className="hidden sm:block" />
              These experiences not only enhanced my technical skills but also ignited my drive to excel in my career.
            </p>
          </motion.div>

          {/* Internship Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl mx-auto"
          >
            {internships.map((item, index) => (
              <motion.div
                key={item.id}
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
                      src={item.img}
                      alt={`${item.title}`}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-200 text-sm">Click to view details</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {/* View Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openModal(index)}
                        className="bg-white/90 backdrop-blur-sm text-blue-600 p-2 rounded-full shadow-md hover:bg-white transition-all duration-300"
                        title="View Image"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>

                      {/* Download Button */}
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={item.pdf}
                        download={`${item.title.replace(/\s+/g, '_')}.pdf`}
                        className="bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
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
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">Click image to view details</p>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-blue-600 text-sm font-medium cursor-pointer"
                        onClick={() => openModal(index)}
                      >
                        View Details →
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: "🚀", label: "Projects Completed", value: "10+" },
              { icon: "💡", label: "Technologies Used", value: "15+" },
              { icon: "🏆", label: "Certifications", value: "5+" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/60 backdrop-blur-md rounded-xl p-4 text-center shadow-lg border border-white/50"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal for Image Preview */}
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
              <h3 className="font-bold text-lg">{selectedImage.title}</h3>
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
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Navigation Buttons */}
              {internships.length > 1 && (
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
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">
                  Click download to save this document
                </p>
              </div>
              <a
                href={selectedImage.pdf}
                download={`${selectedImage.title.replace(/\s+/g, '_')}.pdf`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default InternshipSection;