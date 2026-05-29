import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Rocket, 
  Target, 
  Zap,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Briefcase,
  Users,
  TrendingUp,
  Star,
  Heart
} from "lucide-react";

const IntroSection = () => {
  const [activeCard,setActiveCard] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const words = ["Solutions", "Impact", "Innovation", "Excellence"];
  
  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex]);

  const coreValues = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver First",
      description: "I solve problems before they become problems. Understanding the 'why' behind every challenge drives my approach.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Full-Stack Perspective",
      description: "From pixel-perfect interfaces to scalable server logic — I deliver complete, production-ready solutions.",
      color: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Catalyst",
      description: "International experience taught me that adaptability and communication drive team success.",
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Results Driven",
      description: "I don't just fill roles — I understand goals, own my work, and drive measurable results.",
      color: "from-orange-500 to-red-500",
      delay: 0.4
    }
  ];

  const stats = [
    { value: "10+", label: "Projects Delivered", icon: <Code2 className="w-4 h-4" />, color: "blue" },
    { value: "30+", label: "Technologies", icon: <Zap className="w-4 h-4" />, color: "purple" },
    { value: "100%", label: "Client Satisfaction", icon: <Heart className="w-4 h-4" />, color: "pink" },
    { value: "24/7", label: "Problem Solving", icon: <Star className="w-4 h-4" />, color: "orange" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/50" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 50, -100, 0],
            y: [0, -100, 50, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full mb-6 shadow-xl"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">MERN Stack Developer</span>
          </motion.div>

          {/* Main Heading with Typing Animation */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Building{" "}
              </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {typedText}
                </span>
                <span className="absolute -right-2 top-0 w-0.5 h-full bg-purple-600 animate-pulse" />
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Not just code — solutions that make a difference
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="/resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              Explore Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 text-center border border-white/50">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 text-white mb-3`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Value Proposition Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group mb-16 md:mb-20"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
          
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-6xl opacity-10">"</div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Rocket className="w-6 h-6 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">My Philosophy</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                    A MERN Stack Developer who builds
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    solutions, not just code
                  </span>
                </h2>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    I turn complex ideas into high-performance web applications through strong full-stack development expertis
                    Through my experience as a Web Development Intern at <span className="font-semibold text-blue-600"> Zidio Development </span>
                    and my work at Labmentix, I’ve contributed to real projects with real stakes, 
                    sharpening my ability to deliver clean, efficient code under pressure.
                  </p>
                  
                  <p className="text-lg">
                    What makes me different? I solve problems before they become problems. 
                    I dig into the <span className="font-semibold text-purple-600">why behind every challenge</span> — 
                    understanding the business need before writing a single line of code.
                  </p>
                  
                  <p className="text-lg">
                    An international exchange in <span className="font-semibold text-pink-600">Malaysia</span> taught me that 
                    adaptability and communication are as critical as any technical skill — 
                    and I carry that into every team I join.
                  </p>
                  
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3">
                      <Target className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-gray-800">
                        I don't just fill roles — I drive results.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual Element */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30" />
                  <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">professional excellence</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Industry-certified professional with result-driven skills
                      </p>
                      <motion.a
                        href="/certificates"
                        whileHover={{ scale: 1.02 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium shadow-lg"
                      >
                        Verify
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onHoverStart={() => setActiveCard(idx)}
              onHoverEnd={() => setActiveCard(null)}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/50 h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} text-white mb-4`}>
                  {value.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                
                {/* Animated Border Bottom */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${value.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 text-gray-500 text-sm">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span>Open for opportunities | Let's build something amazing together</span>
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default IntroSection;