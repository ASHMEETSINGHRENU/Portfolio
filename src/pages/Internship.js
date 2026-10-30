// client/src/pages/Internship.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Eye, Download, X, Calendar, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { experienceHistory } from '../data/portfolioData';

const InternshipSection = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const exp = experienceHistory[0];

  return (
    <section id="internship" className="relative py-24 md:py-32 px-4 bg-[#FBF6EF] text-[#0D0D0C] overflow-hidden border-t border-[#0D0D0C]/08">
      {/* Background radial glow in Vela sage */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#DFE9D4]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0D0D0C]/10 text-xs font-medium text-[#F2772F] mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#F2772F]" />
            <span>Industry Immersion</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0D0D0C] mb-4">
            Professional <span className="apricot-text-gradient font-semibold">Experience</span>
          </h2>

          <p className="text-[#0D0D0C]/65 text-sm md:text-base leading-relaxed">
            Real-world software development experience building production-grade web systems, RESTful microservices, and database schemas.
          </p>
        </motion.div>

        {/* Experience Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-3xl bg-white border border-[#0D0D0C]/08 shadow-card-soft space-y-8"
        >
          {/* Top Banner: Role & Company */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#0D0D0C]/08">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#DFE9D4] text-[#2E8B57] border border-[#2E8B57]/20 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  {exp.type}
                </span>
                <span className="text-xs text-[#0D0D0C]/55">{exp.location}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0D0D0C]">
                {exp.role}
              </h3>
              <p className="text-base text-[#F2772F] font-medium mt-1">
                {exp.company}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#0D0D0C]/80 bg-[#F4F2ED] px-4 py-2 rounded-xl border border-[#0D0D0C]/08">
              <Calendar className="w-4 h-4 text-[#F2772F]" />
              <span>{exp.period}</span>
            </div>
          </div>

          {/* Description & Key Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]/50 mb-3">
                Overview & Responsibilities
              </h4>
              <p className="text-[#0D0D0C]/70 text-sm md:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]/50 mb-3">
                Key Accomplishments
              </h4>
              <div className="space-y-3">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#0D0D0C]/70">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Verification Cards (Offer Letter & Certificate) */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]/50 mb-3">
                Verified Credentials & Artifacts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exp.documents.map((doc, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-4 rounded-2xl bg-[#F4F2ED] border border-[#0D0D0C]/08 hover:border-[#F2772F]/40 transition-all group flex flex-col justify-between"
                  >
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-3 bg-white border border-[#0D0D0C]/08">
                      <img
                        src={doc.image}
                        alt={doc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#0D0D0C]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedDoc(doc)}
                          className="p-2 rounded-full bg-[#0D0D0C] text-[#FBF6EF] hover:bg-[#F2772F] hover:text-white transition-colors shadow-lg"
                          aria-label="Preview document"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <a
                          href={doc.pdf}
                          download
                          className="p-2 rounded-full bg-[#0D0D0C] text-[#FBF6EF] hover:bg-[#F2772F] hover:text-white transition-colors shadow-lg"
                          aria-label="Download PDF"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-xs font-semibold text-[#0D0D0C] leading-tight">
                        {doc.title}
                      </h5>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedDoc(doc)}
                          className="flex-1 py-1.5 px-3 rounded-lg bg-white hover:bg-[#0D0D0C]/05 text-[11px] font-medium text-[#0D0D0C] border border-[#0D0D0C]/10 flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#F2772F]" />
                          View
                        </button>
                        <a
                          href={doc.pdf}
                          download
                          className="py-1.5 px-3 rounded-lg bg-[#0D0D0C] hover:bg-[#0D0D0C]/90 text-[11px] font-medium text-[#FBF6EF] flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          PDF
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Document Lightbox Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoc(null)}
              className="absolute inset-0 bg-[#0D0D0C]/70 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-[#FBF6EF] border border-[#0D0D0C]/15 rounded-3xl p-6 shadow-2xl z-10 flex flex-col text-[#0D0D0C]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#0D0D0C]/10 mb-4">
                <h3 className="font-semibold text-lg tracking-tight text-[#0D0D0C]">{selectedDoc.title}</h3>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-1.5 rounded-full hover:bg-[#0D0D0C]/05 text-[#0D0D0C]/60 hover:text-[#0D0D0C]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-auto rounded-xl bg-[#F4F2ED] border border-[#0D0D0C]/08 flex items-center justify-center p-2 mb-4">
                <img
                  src={selectedDoc.image}
                  alt={selectedDoc.title}
                  className="max-h-[65vh] object-contain rounded-lg"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <a
                  href={selectedDoc.pdf}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D0D0C] text-[#FBF6EF] font-medium text-xs shadow-md hover:bg-[#0D0D0C]/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Document
                </a>
                <a
                  href={selectedDoc.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#0D0D0C]/05 text-[#0D0D0C] border border-[#0D0D0C]/15 font-medium text-xs transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InternshipSection;
