import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Download, 
  Eye, 
  FileText, 
  Award, 
  Briefcase, 
  GraduationCap,
  Code,
  Database,
  Cloud,
  Wrench,
  ChevronDown,
  Star,
  Users,
  Clock,
  CheckCircle,
  Zap,
  Sparkles,
  HardDrive,
  Server,
  Cpu
} from "lucide-react";
import Navbar from '../components/navbar';
import Footer from "../components/footer";

const Resume = () => {
  const pdfFile = "/Resume.pdf";
  const [isHovering, setIsHovering] = useState(false);
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  // Resume statistics
  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, label: "Experience", value: "2+ Years", color: "from-blue-500 to-cyan-500" },
    { icon: <Code className="w-5 h-5" />, label: "Projects", value: "25+", color: "from-green-500 to-emerald-500" },
    { icon: <Award className="w-5 h-5" />, label: "Certifications", value: "20+", color: "from-purple-500 to-pink-500" },
    { icon: <Users className="w-5 h-5" />, label: "Resume", value: "Download", color: "from-orange-500 to-red-500" }
  ];

  // Quick info cards
  const quickInfo = [
    { icon: <GraduationCap className="w-5 h-5" />, label: "Education", value: "MCA (Pursuing)", detail: "D Y Patil University" },
    { icon: <Code className="w-5 h-5" />, label: "Tech Stack", value: "30+ Technologies", detail: "Full-Stack Developer" },
    { icon: <Clock className="w-5 h-5" />, label: "Availability", value: "Immediate", detail: "Open to Opportunities" },
    { icon: <Zap className="w-5 h-5" />, label: "GitHub", value: "50+ Repos", detail: "Active Contributor" }
  ];

  // Skills summary
  const skillCategories = [
    { name: "Frontend", level: 90, icon: <Code className="w-4 h-4" />, color: "blue" },
    { name: "Backend", level: 85, icon: <Server className="w-4 h-4" />, color: "green" },
    { name: "Database", level: 82, icon: <Database className="w-4 h-4" />, color: "purple" },
    { name: "Cloud", level: 78, icon: <Cloud className="w-4 h-4" />, color: "orange" }
  ];


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Simple dot pattern */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '30px 30px'
             }} 
        />
        
        {/* Animated Blobs */}
        <motion.div
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, 50, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="flex-grow relative z-10 pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12"
          >
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full mb-6 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Interactive Resume</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
            />
            
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Explore my professional journey, skills, and achievements through this interactive experience
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Resume Display */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Left Sidebar - Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* Quick Info Cards */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-400" />
                    Quick Overview
                  </h3>
                  <div className="space-y-4">
                    {quickInfo.map((info, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                      >
                        <div className="text-purple-400 mt-1">{info.icon}</div>
                        <div>
                          <div className="text-xs text-gray-400">{info.label}</div>
                          <div className="text-white font-semibold">{info.value}</div>
                          <div className="text-xs text-gray-400">{info.detail}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills Progress */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-green-400" />
                    Core Skills
                  </h3>
                  <div className="space-y-4">
                    {skillCategories.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-gray-300 text-sm">
                            {skill.icon}
                            {skill.name}
                          </div>
                          <span className="text-white text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Download Options */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Actions</h3>
                  <div className="space-y-3">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={pdfFile}
                      download="My_Resume.pdf"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <Download className="w-5 h-5" />
                      Download Resume
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <Eye className="w-5 h-5" />
                      View Online
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Resume Viewer */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="lg:col-span-2"
            >
              <div 
                className="relative group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* 3D Shadow Effect */}
                <motion.div
                  animate={{ 
                    rotateX: isHovering ? 5 : 0,
                    rotateY: isHovering ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glowing Border Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-50'}`} />
                  
                  {/* Resume Card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
                    <div className="relative overflow-hidden rounded-xl">
                      {/* Floating Ribbon */}
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      >
                        Featured
                      </motion.div>

                      <img
                        src={require("../photos/resume.png")}
                        alt="Resume"
                        className="w-full h-auto rounded-lg cursor-pointer transition-all duration-500 hover:scale-[1.02]"
                      />
                      
                      {/* Interactive Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovering ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-6"
                      >
                        <div className="text-center">
                          <p className="text-white font-medium mb-2">Click to view full resume</p>
                          <ChevronDown className="w-6 h-6 text-white mx-auto animate-bounce" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Achievement Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 flex flex-wrap justify-center gap-3"
              >
                {[
                  { text: "Full-Stack Developer", icon: <Code className="w-3 h-3" /> },
                  { text: "Cloud Enthusiast", icon: <Cloud className="w-3 h-3" /> },
                  { text: "Problem Solver", icon: <CheckCircle className="w-3 h-3" /> },
                  { text: "Team Player", icon: <Users className="w-3 h-3" /> }
                ].map((badge, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-gray-300 border border-white/20"
                  >
                    {badge.icon}
                    {badge.text}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>Ready to collaborate? Let's create something amazing together</span>
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
    );
};

export default Resume;