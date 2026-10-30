// client/src/pages/project.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FolderGit2, 
  Github, 
  Eye, 
  Building2, 
  ArrowUpRight
} from "lucide-react";
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import ProjectModal from '../components/ProjectModal';
import FolioBookHero from '../components/FolioBookHero';
import { projects, industryProjects } from '../data/portfolioData';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Combine both sets with metadata
  const allProjects = [
    ...industryProjects,
    ...projects
  ];

  const filterOptions = [
    { id: "all", label: "All Works", count: allProjects.length },
    { id: "commercial", label: "Commercial Client Works", count: industryProjects.length },
    { id: "Full Stack", label: "Full Stack & MERN", count: projects.filter((p) => p.category === "Full Stack").length },
    { id: "Web Application", label: "Web Applications", count: projects.filter((p) => p.category === "Web Application").length },
    { id: "Software & Systems", label: "Software & Systems", count: projects.filter((p) => p.category === "Software & Systems").length },
  ];

  const filteredProjects = activeFilter === "all"
    ? allProjects
    : activeFilter === "commercial"
    ? industryProjects
    : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#FBF6EF] text-[#0D0D0C] font-interTight flex flex-col relative selection:bg-[#F9CBA9] selection:text-[#0D0D0C]">
      <Navbar />

      {/* 3D Folio Bookshop Spring Wave Hero */}
      <section className="pt-20 sm:pt-24 border-b border-[#0D0D0C]/08">
        <FolioBookHero
          filteredProjects={filteredProjects}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filterOptions={filterOptions}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </section>

      {/* Main Content Area: Curated Projects Catalog */}
      <main id="catalog" className="flex-grow py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-b from-[#F8DCC7]/30 via-[#DFE9D4]/20 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Section Sub-header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#0D0D0C]/08">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#0D0D0C]/10 text-xs font-medium text-[#F2772F] shadow-sm mb-3">
                <FolderGit2 className="w-3.5 h-3.5 text-[#F2772F]" />
                <span>Engineered Works Catalog</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#0D0D0C]">
                {filterOptions.find(f => f.id === activeFilter)?.label || "Selected Projects"}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#0D0D0C]/60 font-medium">
              Showing <span className="text-[#0D0D0C] font-bold">{filteredProjects.length}</span> verified production systems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              const isCommercial = project.isCommercial;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`group rounded-3xl bg-white border overflow-hidden transition-all duration-300 shadow-card-soft hover:shadow-vela-hover flex flex-col justify-between ${
                    isCommercial 
                      ? "border-emerald-500/30 hover:border-emerald-500/60" 
                      : "border-[#0D0D0C]/08 hover:border-[#F2772F]/40"
                  }`}
                >
                  <div>
                    {/* Image Viewport */}
                    <div className="relative aspect-video overflow-hidden bg-[#F4F2ED]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C]/40 via-transparent to-transparent" />
                      
                      {/* Category & Status Tags */}
                      <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                        {isCommercial ? (
                          <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/95 text-emerald-800 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Commercial
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/95 text-[#0D0D0C] border border-[#0D0D0C]/10 backdrop-blur-md shadow-sm">
                            {project.category}
                          </span>
                        )}

                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-[#0D0D0C]/75 bg-white/90 border border-[#0D0D0C]/10 shadow-sm">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 md:p-7 space-y-3">
                      {isCommercial && project.industry && (
                        <div className="flex items-center gap-1.5 text-xs text-[#F2772F] font-semibold uppercase tracking-wider">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{project.industry}</span>
                        </div>
                      )}

                      <h3 className="text-xl font-semibold tracking-tight text-[#0D0D0C] group-hover:text-[#F2772F] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs font-medium text-[#F2772F]">
                        {project.tagline}
                      </p>

                      <p className="text-xs md:text-sm text-[#0D0D0C]/65 line-clamp-3 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Tech Badges */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-[11px] rounded-lg bg-[#F4F2ED] text-[#0D0D0C]/75 border border-[#0D0D0C]/08 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-6 md:p-7 pt-0 border-t border-[#0D0D0C]/08 mt-4 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#F4F2ED] hover:bg-[#0D0D0C]/05 text-[#0D0D0C] border border-[#0D0D0C]/10 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#F2772F]" />
                      <span>{isCommercial ? "Case Study" : "Details"}</span>
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`py-2.5 px-4 rounded-xl text-xs font-medium transition-all shadow-sm inline-flex items-center gap-1.5 ${
                          isCommercial 
                            ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20"
                            : "bg-[#0D0D0C] hover:bg-[#0D0D0C]/90 text-[#FBF6EF]"
                        }`}
                      >
                        <span>{isCommercial ? "Visit Site" : "Live Demo"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#F4F2ED] hover:bg-[#0D0D0C]/05 text-[#0D0D0C]/75 hover:text-[#0D0D0C] border border-[#0D0D0C]/10 transition-colors"
                        aria-label="View Source Code on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Project;
