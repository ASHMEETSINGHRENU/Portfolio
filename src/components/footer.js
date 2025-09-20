// client/src/components/footer.js
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full px-6 md:px-12"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/home" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/resume" className="hover:text-blue-400 transition">Resume</Link></li>
              <li><Link to="/certificates" className="hover:text-blue-400 transition">Certificates</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="flex items-center gap-2">
              <Mail size={18} /> ashmeetsingh022@example.com
            </p>
            <p className="mt-2">📞 +91 7083583127</p>
            <a href="https://frontend-workwagon.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-110 transition-transform">
            <p className="mt-2"> 🌐 WorkWagon </p></a>
            <p className="mt-2">📍 Pune, India</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com/ASHMEETSINGHRENU" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-transform"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/ashmeet-singh-renu-9a2a36275/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:scale-110 transition-transform"><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/ashmeetsingh022/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-110 transition-transform"><Instagram size={24} /></a>
              <a href="mailto:ashmeetsingh022@example.com" className="hover:text-red-400 hover:scale-110 transition-transform"><Mail size={24} /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <p className="text-center text-sm text-gray-400">
          © 2025 <span className="text-white font-medium">Ashmeet Singh Renu</span>, All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
