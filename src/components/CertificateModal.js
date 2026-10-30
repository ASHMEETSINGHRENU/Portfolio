// client/src/components/CertificateModal.js
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, ChevronLeft, ChevronRight, Award, Calendar, CheckCircle } from "lucide-react";

const CertificateModal = ({ certificate, certificatesList = [], onSelectIndex, onClose }) => {
  const currentIndex = certificatesList.findIndex((c) => c.id === certificate?.id);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        onSelectIndex(currentIndex - 1);
      }
      if (e.key === "ArrowRight" && currentIndex < certificatesList.length - 1) {
        onSelectIndex(currentIndex + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [currentIndex, certificatesList, onSelectIndex, onClose]);

  if (!certificate) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) onSelectIndex(currentIndex - 1);
    else onSelectIndex(certificatesList.length - 1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex < certificatesList.length - 1) onSelectIndex(currentIndex + 1);
    else onSelectIndex(0);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0D0D0C]/75 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden bg-[#FBF6EF] border border-[#0D0D0C]/15 rounded-3xl shadow-2xl z-10 flex flex-col text-[#0D0D0C]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#F4F2ED]/95 backdrop-blur-xl border-b border-[#0D0D0C]/10 shrink-0">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#F8DCC7]/50 text-[#F2772F] border border-[#F2772F]/20 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                {certificate.issuer}
              </span>
              <span className="text-xs text-[#0D0D0C]/55 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {certificate.date}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {certificatesList.length > 1 && (
                <span className="text-xs text-[#0D0D0C]/55 mr-2">
                  {currentIndex + 1} of {certificatesList.length}
                </span>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#0D0D0C]/60 hover:text-[#0D0D0C] hover:bg-[#0D0D0C]/05 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image & Navigation area */}
          <div className="relative flex-1 bg-[#F4F2ED]/50 overflow-y-auto p-4 md:p-6 flex items-center justify-center">
            {certificatesList.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white text-[#0D0D0C] border border-[#0D0D0C]/15 hover:bg-[#0D0D0C] hover:text-[#FBF6EF] transition-all shadow-md"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white text-[#0D0D0C] border border-[#0D0D0C]/15 hover:bg-[#0D0D0C] hover:text-[#FBF6EF] transition-all shadow-md"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="relative max-w-full max-h-[60vh] rounded-xl overflow-hidden border border-[#0D0D0C]/10 shadow-lg bg-white">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto max-h-[55vh] object-contain"
              />
            </div>
          </div>

          {/* Footer Details & Actions */}
          <div className="px-6 py-5 bg-[#F4F2ED] border-t border-[#0D0D0C]/10 shrink-0 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#0D0D0C]">
                  {certificate.title}
                </h3>
                <p className="text-xs md:text-sm text-[#0D0D0C]/60 mt-0.5">
                  Verified credential issued by <span className="text-[#F2772F] font-medium">{certificate.issuer}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {certificate.pdf && (
                  <a
                    href={certificate.pdf}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D0D0C] hover:bg-[#0D0D0C]/90 text-[#FBF6EF] font-medium text-xs md:text-sm shadow-md transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                )}
                {certificate.pdf && (
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#0D0D0C]/05 text-[#0D0D0C] border border-[#0D0D0C]/15 text-xs md:text-sm font-medium transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Online
                  </a>
                )}
              </div>
            </div>

            {certificate.skillsLearned && certificate.skillsLearned.length > 0 && (
              <div className="pt-2 border-t border-[#0D0D0C]/08 flex flex-wrap items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-[#0D0D0C]/50">Validated Skills:</span>
                {certificate.skillsLearned.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-white text-[#0D0D0C]/75 border border-[#0D0D0C]/08"
                  >
                    <CheckCircle className="w-3 h-3 text-[#F2772F]" />
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
