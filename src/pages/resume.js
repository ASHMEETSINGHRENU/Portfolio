// client/src/pages/resume.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  Eye, 
  FileText, 
  Award, 
  GraduationCap, 
  Code, 
  Database, 
  Cloud, 
  Sparkles, 
  Server, 
  ExternalLink, 
  ShieldCheck, 
  Globe 
} from "lucide-react";
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import { personalInfo } from '../data/portfolioData';

const Resume = () => {
  const [isHovering, setIsHovering] = useState(false);
  const pdfFile = personalInfo.resumePdf;

  const stats = [
    { icon: Globe, label: "Commercial Platforms", value: "5+", accent: "from-emerald-400 to-teal-500" },
    { icon: Code, label: "Total Projects Delivered", value: "30+", accent: "from-amber-400 to-yellow-600" },
    { icon: Award, label: "Verified Credentials", value: "16+", accent: "from-purple-500 to-pink-500" },
    { icon: GraduationCap, label: "Academic Degree", value: "MCA (Pursuing)", accent: "from-blue-500 to-indigo-600" }
  ];

  const quickInfo = [
    { icon: GraduationCap, label: "Current Education", value: "MCA (Pursuing)", detail: "D Y Patil University, Pune" },
    { icon: Award, label: "International Exposure", value: "Mobility Program", detail: "INTI International University, Malaysia" },
    { icon: Code, label: "Core Specialization", value: "MERN & Full-Stack", detail: "React, Node, Express, MongoDB" },
    { icon: ShieldCheck, label: "Availability Status", value: "Immediate", detail: "Open to High-Impact Opportunities" }
  ];

  const skillGauges = [
    { name: "Front-End Architecture (React, Tailwind)", level: 92, icon: Code },
    { name: "Back-End & REST APIs (Node.js, Express)", level: 88, icon: Server },
    { name: "Database Engineering (MongoDB, MySQL)", level: 86, icon: Database },
    { name: "Cloud & Dev Tools (Git, AWS, Postman)", level: 82, icon: Cloud },
  ];

  return (
    <div className="min-h-screen bg-[#FBF6EF] text-[#0D0D0C] flex flex-col relative selection:bg-[#F8DCC7] selection:text-[#0D0D0C]">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Ambient Top Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-b from-[#F8DCC7]/40 via-[#DFE9D4]/30 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0D0D0C]/10 text-xs font-medium text-[#F2772F] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F2772F]" />
              <span>Curriculum Vitae</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#0D0D0C]">
              Executive <span className="apricot-text-gradient font-semibold">Resume</span> & Profile
            </h1>

            <p className="text-[#0D0D0C]/65 text-sm md:text-base leading-relaxed">
              Explore my technical background, academic milestones, and core competencies in a clean, comprehensive presentation.
            </p>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-3xl bg-white border border-[#0D0D0C]/08 hover:border-[#F2772F]/40 transition-all shadow-card-soft hover:shadow-vela-hover group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F4F2ED] border border-[#0D0D0C]/08 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[#F2772F]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0D0D0C] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#0D0D0C]/60 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Main Content Layout: Sidebar Overview + Resume Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Quick Profile Summary & Actions */}
            <div className="space-y-6">
              
              {/* Primary Action Buttons */}
              <div className="p-6 rounded-3xl bg-white border border-[#0D0D0C]/08 shadow-card-soft space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]/50 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#F2772F]" />
                  Direct Actions
                </h3>

                <a
                  href={pdfFile}
                  download="Ashmeet_Singh_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0D0D0C] text-[#FBF6EF] font-medium text-sm shadow-md hover:bg-[#0D0D0C]/90 hover:scale-[1.01] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Executive PDF</span>
                </a>

                <a
                  href={pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#F4F2ED] hover:bg-[#0D0D0C]/05 text-[#0D0D0C] font-medium text-sm border border-[#0D0D0C]/10 transition-colors"
                >
                  <Eye className="w-4 h-4 text-[#F2772F]" />
                  <span>Open in Browser</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#0D0D0C]/40" />
                </a>
              </div>

              {/* Quick Info Points */}
              <div className="p-6 rounded-3xl bg-white border border-[#0D0D0C]/08 shadow-card-soft space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]/50 mb-2">
                  Key Credentials
                </h3>

                <div className="space-y-3">
                  {quickInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#F4F2ED] border border-[#0D0D0C]/06 space-y-1"
                      >
                        <div className="flex items-center gap-2 text-xs text-[#F2772F] font-medium">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{info.label}</span>
                        </div>
                        <div className="text-sm font-semibold text-[#0D0D0C]">
                          {info.value}
                        </div>
                        <div className="text-xs text-[#0D0D0C]/60">
                          {info.detail}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Core Skill Competency Gauges */}
              <div className="p-6 rounded-3xl bg-white border border-[#0D0D0C]/08 shadow-card-soft space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]/50 mb-2">
                  Technical Proficiency
                </h3>

                <div className="space-y-4">
                  {skillGauges.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#0D0D0C]/80 font-medium flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5 text-[#F2772F]" />
                            {skill.name}
                          </span>
                          <span className="font-mono text-[#F2772F] font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#F4F2ED] rounded-full overflow-hidden border border-[#0D0D0C]/06">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className="h-full bg-gradient-to-r from-[#F2772F] to-[#E9C22E] rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: 3D Interactive Resume Preview */}
            <div className="lg:col-span-2">
              <div
                className="relative rounded-3xl p-4 sm:p-6 bg-white border border-[#0D0D0C]/08 shadow-card-soft overflow-hidden group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Subtle Vela pastel glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-[#F8DCC7] via-[#DFE9D4] to-[#F2ECDF] rounded-3xl blur-xl opacity-30 transition-opacity duration-700 ${isHovering ? 'opacity-60' : 'opacity-20'}`} />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#F8DCC7]/50 text-[#F2772F] border border-[#F2772F]/20">
                        Official Document Preview
                      </span>
                      <span className="text-xs text-[#0D0D0C]/50">PDF Version 2026</span>
                    </div>

                    <a
                      href={pdfFile}
                      download
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#F2772F] hover:text-[#0D0D0C] transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download File</span>
                    </a>
                  </div>

                  {/* High-res Image Preview */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#0D0D0C]/10 shadow-md bg-[#F4F2ED]">
                    <img
                      src={require("../photos/resume.png")}
                      alt="Ashmeet Singh Official Resume"
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />

                    {/* Interactive overlay on hover */}
                    <div className="absolute inset-0 bg-[#0D0D0C]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a
                        href={pdfFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-[#0D0D0C] text-[#FBF6EF] font-medium text-xs shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Full Document</span>
                      </a>
                      <a
                        href={pdfFile}
                        download="Ashmeet_Singh_Resume.pdf"
                        className="px-6 py-3 rounded-full bg-white text-[#0D0D0C] font-medium text-xs border border-[#0D0D0C]/20 shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
