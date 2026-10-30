// client/src/components/ProjectModal.js
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Layers, Calendar, Sparkles } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0D0D0C]/70 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FBF6EF] border border-[#0D0D0C]/15 rounded-3xl shadow-2xl z-10 text-[#0D0D0C] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F4F2ED]/95 backdrop-blur-xl border-b border-[#0D0D0C]/10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#F8DCC7]/50 text-[#F2772F] border border-[#F2772F]/20 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {project.category}
              </span>
              <span className="text-xs text-[#0D0D0C]/55 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#0D0D0C]/60 hover:text-[#0D0D0C] hover:bg-[#0D0D0C]/05 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Project Image */}
            <div className="relative rounded-2xl overflow-hidden border border-[#0D0D0C]/10 bg-[#F4F2ED] aspect-video max-h-[380px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C]/20 via-transparent to-transparent opacity-60" />
            </div>

            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0D0D0C] mb-2">
                {project.title}
              </h2>
              <p className="text-[#F2772F] font-medium text-sm md:text-base">
                {project.tagline}
              </p>

              {/* Industry & Client Metadata Strip */}
              {(project.industry || project.client) && (
                <div className="flex flex-wrap gap-2 pt-3">
                  {project.industry && (
                    <span className="px-3 py-1 text-xs font-medium rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-500/20 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Industry: {project.industry}
                    </span>
                  )}
                  {project.client && (
                    <span className="px-3 py-1 text-xs font-medium rounded-lg bg-[#F4F2ED] text-[#0D0D0C]/75 border border-[#0D0D0C]/10">
                      Client: {project.client}
                    </span>
                  )}
                  {project.projectType && (
                    <span className="px-3 py-1 text-xs font-medium rounded-lg bg-[#F8DCC7]/50 text-[#F2772F] border border-[#F2772F]/20">
                      {project.projectType}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* In-depth Description */}
            <div className="bg-white border border-[#0D0D0C]/08 rounded-2xl p-5 md:p-6 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]/50 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#F2772F]" /> System Architecture & Overview
              </h3>
              <p className="text-[#0D0D0C]/70 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && (
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]/50">
                  Key Capabilities & Deliverables
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#0D0D0C]/08 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-xs md:text-sm text-[#0D0D0C]/70">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]/50">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#F4F2ED] text-[#0D0D0C]/80 border border-[#0D0D0C]/08 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-[#0D0D0C]/10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0D0D0C] hover:bg-[#0D0D0C]/90 text-[#FBF6EF] font-medium shadow-md transition-all text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#0D0D0C]/05 text-[#0D0D0C] font-medium border border-[#0D0D0C]/15 transition-all text-sm"
                >
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
