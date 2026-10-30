// client/src/pages/certificate.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Download, 
  Eye
} from "lucide-react";
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import CertificateModal from '../components/CertificateModal';
import { certificatesData } from '../data/portfolioData';

const Certificate = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);

  // Combine all categories into one master list
  const allCertificates = [
    ...certificatesData.global,
    ...certificatesData.professional,
    ...certificatesData.udemy,
  ];

  const categories = [
    { id: "all", label: "All Credentials", count: allCertificates.length },
    { id: "global", label: "Global Simulations (Forage)", count: certificatesData.global.length },
    { id: "professional", label: "Professional Certifications", count: certificatesData.professional.length },
    { id: "udemy", label: "Udemy Specializations", count: certificatesData.udemy.length },
  ];

  const displayedCertificates = activeCategory === "all"
    ? allCertificates
    : activeCategory === "global"
    ? certificatesData.global
    : activeCategory === "professional"
    ? certificatesData.professional
    : certificatesData.udemy;

  return (
    <div className="min-h-screen bg-[#FBF6EF] text-[#0D0D0C] flex flex-col relative selection:bg-[#F8DCC7] selection:text-[#0D0D0C]">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Ambient Top Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-b from-[#F8DCC7]/40 via-[#DFE9D4]/30 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0D0D0C]/10 text-xs font-medium text-[#F2772F] shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#F2772F]" />
              <span>Verified Qualifications & Simulations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#0D0D0C]">
              Credentials & <span className="apricot-text-gradient font-semibold">Certifications</span>
            </h1>

            <p className="text-[#0D0D0C]/65 text-sm md:text-base leading-relaxed">
              Showcasing specialized training in advanced software engineering, cloud computing, generative AI, machine learning, and full-stack development.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? "bg-[#0D0D0C] text-[#FBF6EF] shadow-md scale-105"
                      : "bg-white text-[#0D0D0C]/70 hover:bg-[#F4F2ED] hover:text-[#0D0D0C] border border-[#0D0D0C]/10"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    activeCategory === cat.id ? "bg-white/20 text-[#FBF6EF]" : "bg-[#0D0D0C]/08 text-[#0D0D0C]/60"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCertificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl bg-white border border-[#0D0D0C]/08 hover:border-[#F2772F]/40 overflow-hidden transition-all duration-300 shadow-card-soft hover:shadow-vela-hover flex flex-col justify-between"
              >
                <div>
                  {/* Image Viewport */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F2ED] border-b border-[#0D0D0C]/08">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C]/40 via-transparent to-transparent" />
                    
                    {/* Issuer & Date Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/95 text-[#0D0D0C] border border-[#0D0D0C]/10 backdrop-blur-md shadow-sm">
                        {cert.issuer}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-[#0D0D0C]/75 bg-white/90 border border-[#0D0D0C]/10 shadow-sm">
                        {cert.date}
                      </span>
                    </div>

                    {/* Quick Preview Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0D0D0C]/30">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="px-4 py-2 rounded-full bg-[#0D0D0C] text-[#FBF6EF] font-medium text-xs shadow-xl flex items-center gap-1.5 hover:scale-105 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Certificate</span>
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-[#F2772F] font-semibold block">
                      {cert.category}
                    </span>

                    <h2 className="text-lg font-semibold tracking-tight text-[#0D0D0C] group-hover:text-[#F2772F] transition-colors">
                      {cert.title}
                    </h2>

                    {/* Skills Learned Pill List */}
                    {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {cert.skillsLearned.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#F4F2ED] text-[#0D0D0C]/75 border border-[#0D0D0C]/08"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 border-t border-[#0D0D0C]/08 mt-4 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#F4F2ED] hover:bg-[#0D0D0C]/05 text-[#0D0D0C] text-xs font-medium border border-[#0D0D0C]/10 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#F2772F]" />
                    <span>View Full Size</span>
                  </button>

                  {cert.pdf && (
                    <a
                      href={cert.pdf}
                      download
                      className="py-2.5 px-4 rounded-xl bg-[#0D0D0C] hover:bg-[#0D0D0C]/90 text-[#FBF6EF] text-xs font-medium transition-all shadow-sm inline-flex items-center gap-1.5"
                      aria-label="Download Certificate PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Full-Screen Lightbox Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          certificatesList={displayedCertificates}
          onSelectIndex={(index) => setSelectedCert(displayedCertificates[index])}
          onClose={() => setSelectedCert(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Certificate;
