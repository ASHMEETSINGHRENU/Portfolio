import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  Sparkles,
  ChevronUp,
  Code2,
  Globe,
  Twitter,
  Facebook,
  Send
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { 
      name: "GitHub", 
      url: "https://github.com/ASHMEETSINGHRENU", 
      icon: <Github size={20} />, 
      color: "hover:text-white",
      bgColor: "hover:bg-gray-700"
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/ashmeet-singh-renu-9a2a36275/", 
      icon: <Linkedin size={20} />, 
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-600/20"
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/ashmeetsingh022/", 
      icon: <Instagram size={20} />, 
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-600/20"
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/", 
      icon: <Twitter size={20} />, 
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-600/20"
    },
    { 
      name: "Facebook", 
      url: "https://facebook.com/", 
      icon: <Facebook size={20} />, 
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-700/20"
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/home", icon: "🏠" },
    { name: "Resume", path: "/resume", icon: "📄" },
    { name: "Certificates", path: "/certificates", icon: "🎓" },
    { name: "Projects", path: "/projects", icon: "💻" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-300 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
               backgroundSize: '30px 30px'
             }} 
        />
        <motion.div
          animate={{ 
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 30, 0],
            y: [0, 30, -50, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        style={{ opacity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ChevronUp className="w-5 h-5 text-white" />
      </motion.button>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 w-full px-6 md:px-12 py-12"
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Code2 className="w-8 h-8 text-blue-500" />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute -top-1 -right-1"
                  >
                    <Sparkles className="w-3 h-3 text-yellow-500" />
                  </motion.div>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Portfolio
                </h2>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                A passionate full-stack developer creating amazing web experiences with modern technologies.
              </p>
              <div className="flex gap-2">
                {socialLinks.slice(0, 4).map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg bg-white/5 ${social.bgColor} transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      to={link.path} 
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span>{link.name}</span>
                      <ChevronUp className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all rotate-90" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                Contact Info
              </h3>
              <div className="space-y-3">
                <motion.a 
                  href="mailto:ashmeetsingh022@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm">ashmeetsingh022@gmail.com</span>
                </motion.a>
                
                <motion.a 
                  href="tel:+917083583127"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-green-500/20 transition-colors">
                    <Phone size={16} />
                  </div>
                  <span className="text-sm">+91 7083583127</span>
                </motion.a>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <div className="p-2 rounded-lg bg-white/5">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm">Pune, India</span>
                </motion.div>

                <motion.a 
                  href="https://frontend-workwagon.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-pink-500/20 transition-colors">
                    <Globe size={16} />
                  </div>
                  <span className="text-sm">WorkWagon Project</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Newsletter / Quote */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                Let's Connect
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  "Building digital solutions that make a difference. Let's work together on your next project!"
                </p>
                <motion.a
                  href="/resume"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send size={16} />
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Social Media Bar */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Divider with Animation */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="border-t border-white/10 my-6"></div>
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Bottom Section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-center"
          >
            <p className="text-sm text-gray-400">
              © 2025 <span className="text-white font-medium">Ashmeet Singh Renu</span>, All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#ef4444', '#ec4899', '#ef4444']
                }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={14} className="text-red-500 fill-red-500" />
              </motion.div>
              <span>using React & Tailwind CSS</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;