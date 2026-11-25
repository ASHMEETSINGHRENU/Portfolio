// client/src/pages/home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { 
  ArrowRight, 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Instagram, 
  Layers, 
  Cpu, 
  ChevronRight
} from "lucide-react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import EducationSection from './edu';
import InternshipSection from './Internship';
import IntroSection from './intro';
import IndustryProjects from '../components/IndustryProjects';
import ProjectModal from '../components/ProjectModal';
import { personalInfo, skillCategories, projects } from '../data/portfolioData';

const Home = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredSkillCategories = activeSkillCategory === "all"
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeSkillCategory);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FBF6EF] text-[#0D0D0C] font-interTight flex flex-col relative selection:bg-[#F9CBA9] selection:text-[#0D0D0C]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-paper-grain">
        {/* Soft Pastel Radial Glows from Vela palette */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#F8DCC7]/40 via-[#F4EBC6]/30 to-[#DFE9D4]/40 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-20 -left-20 w-80 h-80 bg-[#F4EBC6]/40 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#ECD6E2]/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Column: Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left space-y-6"
            >
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0D0D0C]/10 shadow-card-soft text-xs font-semibold text-[#0D0D0C]">
                <span className="w-2 h-2 rounded-full bg-[#3FB874] animate-pulse" />
                <span>{personalInfo.availability}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <p className="text-xs md:text-sm font-semibold tracking-widest text-[#F2772F] uppercase">
                  Full-Stack Software Engineer & MERN Specialist
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#0D0D0C]">
                  Crafting Scalable, <br />
                  <span className="apricot-text-gradient">Modern Web</span> Systems.
                </h1>
              </div>

              {/* Typewriter Subtitle */}
              <div className="text-lg sm:text-2xl font-normal text-[#0D0D0C]/80 h-10 flex items-center justify-center lg:justify-start">
                <span className="text-[#0D0D0C]/56 mr-2">I build</span>
                <span className="text-[#0D0D0C] font-semibold border-b-2 border-[#F2772F]">
                  <Typewriter
                    options={{
                      strings: [
                        'MERN Production Applications',
                        'High-Throughput REST APIs',
                        'Clean Microservice Architectures',
                        'Pixel-Perfect Responsive Systems',
                        'Secure Database Solutions'
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 45,
                      deleteSpeed: 25,
                    }}
                  />
                </span>
              </div>

              {/* Bio summary */}
              <p className="text-[#0D0D0C]/65 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {personalInfo.tagline} Currently pursuing Master of Computer Applications (MCA) at DY Patil University with international exchange background in Malaysia.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0D0D0C] text-[#FBF6EF] font-bold text-sm hover:bg-[#252523] hover:scale-[1.02] transition-all shadow-md"
                >
                  <span>Explore Selected Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#F4F2ED] text-[#0D0D0C] font-medium text-sm border border-[#0D0D0C]/15 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#F2772F]" />
                  <span>Executive Resume</span>
                </Link>
              </div>

              {/* Social Handles */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white border border-[#0D0D0C]/10 text-[#0D0D0C] hover:bg-[#0D0D0C] hover:text-[#FBF6EF] transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white border border-[#0D0D0C]/10 text-[#0D0D0C] hover:bg-[#0D0D0C] hover:text-[#FBF6EF] transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white border border-[#0D0D0C]/10 text-[#0D0D0C] hover:bg-[#0D0D0C] hover:text-[#FBF6EF] transition-all shadow-sm"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.email}
                  className="p-3 rounded-full bg-white border border-[#0D0D0C]/10 text-[#0D0D0C] hover:bg-[#0D0D0C] hover:text-[#FBF6EF] transition-all shadow-sm"
                  aria-label="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Luxury Profile Avatar Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Glowing Outer Rings */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#F9CBA9] via-[#F4EBC6] to-[#DFE9D4] rounded-full blur-2xl opacity-70 group-hover:opacity-95 transition duration-700 animate-pulse-slow" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2.5 bg-white/80 border border-[#0D0D0C]/10 backdrop-blur-3xl shadow-vela overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#FBF6EF] via-[#F4F2ED] to-[#EAE6DD] relative flex items-end justify-center">
                    <img
                      src={require("../assets/profile/profile.jpg-Photoroom.png")}
                      alt="Ashmeet Singh"
                      className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C]/15 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Status Pill */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-white border border-[#0D0D0C]/10 backdrop-blur-xl shadow-vela flex items-center gap-2 whitespace-nowrap z-20"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3FB874] animate-pulse" />
                  <span className="text-xs font-bold text-[#0D0D0C] tracking-wide">
                    MCA Scholar & MERN Developer
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy & Value Pillars */}
      <IntroSection />

      {/* Real-World Commercial & Industry Projects */}
      <IndustryProjects />

      {/* Technical Skills Matrix Section */}
      <section id="skills" className="relative py-24 md:py-32 px-4 bg-[#F4F2ED] border-t border-[#0D0D0C]/08 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0D0D0C]/10 text-xs font-semibold text-[#0D0D0C] mb-4 shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-[#F2772F]" />
              <span>Technical Capabilities</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0D0D0C] mb-4">
              Comprehensive <span className="apricot-text-gradient">Skill Stack</span>
            </h2>

            <p className="text-[#0D0D0C]/65 text-sm md:text-base leading-relaxed">
              Curated competencies across full-stack development, modern web tooling, relational/NoSQL databases, and cloud engineering.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveSkillCategory("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeSkillCategory === "all"
                    ? "bg-[#0D0D0C] text-[#FBF6EF] shadow-sm"
                    : "bg-white text-[#0D0D0C]/70 hover:text-[#0D0D0C] border border-[#0D0D0C]/10"
                }`}
              >
                All Domains
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveSkillCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeSkillCategory === cat.id
                      ? "bg-[#0D0D0C] text-[#FBF6EF] shadow-sm"
                      : "bg-white text-[#0D0D0C]/70 hover:text-[#0D0D0C] border border-[#0D0D0C]/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkillCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-8 rounded-3xl bg-white border border-[#0D0D0C]/08 hover:border-[#0D0D0C]/20 transition-all duration-300 shadow-card-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#0D0D0C]">
                      {category.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#F4F2ED] text-[#0D0D0C] border border-[#0D0D0C]/10">
                      {category.skills.length} Skills
                    </span>
                  </div>

                  <p className="text-xs text-[#0D0D0C]/65 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-[#0D0D0C]">{skill.name}</span>
                          <span className="font-mono text-[#0D0D0C]/70">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#F4F2ED] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: sIdx * 0.05 }}
                            className="h-full bg-gradient-to-r from-[#F2772F] to-[#E9C22E] rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="relative py-24 md:py-32 px-4 bg-[#FBF6EF] border-t border-[#0D0D0C]/08 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0D0D0C]/10 text-xs font-semibold text-[#0D0D0C] mb-4 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-[#F2772F]" />
                <span>Featured Engineering Works</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0D0D0C]">
                Selected <span className="apricot-text-gradient">Projects</span>
              </h2>
              <p className="text-[#0D0D0C]/65 text-sm md:text-base mt-2">
                Handpicked showcase of full-stack production platforms, web systems, and technical applications.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0C] hover:text-[#F2772F] transition-colors group"
            >
              <span>View All 6 Projects</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group rounded-3xl bg-white border border-[#0D0D0C]/10 hover:border-[#0D0D0C]/25 overflow-hidden transition-all duration-300 shadow-card-soft hover:shadow-vela-hover flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-video overflow-hidden bg-[#F4F2ED]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#0D0D0C] border border-[#0D0D0C]/10 backdrop-blur-md shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-[#0D0D0C] group-hover:text-[#F2772F] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#F2772F] font-semibold">
                      {project.tagline}
                    </p>
                    <p className="text-xs md:text-sm text-[#0D0D0C]/65 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.slice(0, 4).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-[#F4F2ED] text-[#0D0D0C] border border-[#0D0D0C]/08 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 border-t border-[#0D0D0C]/08 mt-4 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#F4F2ED] hover:bg-[#E9EBE0] text-[#0D0D0C] text-xs font-semibold transition-colors text-center"
                  >
                    View Details
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-[#0D0D0C] hover:bg-[#252523] text-[#FBF6EF] text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience & Internship */}
      <InternshipSection />

      {/* Academic Timeline Section */}
      <EducationSection />

      {/* Global Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Standardized Luxury Footer */}
      <Footer />
    </div>
  );
};

export default Home;
