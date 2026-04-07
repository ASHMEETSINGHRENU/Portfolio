import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  FileText,
  Award,
  FolderGit2,
  Menu,
  X,
  Code2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

// 👉 If using React Router, uncomment this:
// import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/home");

  // 👉 If using React Router:
  // const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/home", icon: <Home className="w-4 h-4" /> },
    { name: "Resume", path: "/resume", icon: <FileText className="w-4 h-4" /> },
    { name: "Certificates", path: "/certificates", icon: <Award className="w-4 h-4" /> },
    { name: "Projects", path: "/projects", icon: <FolderGit2 className="w-4 h-4" /> },
  ];

  useEffect(() => {
    // ✅ FIX: safe window usage
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);

      // Set active path
      setActiveLink(window.location.pathname);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // 👉 If using React Router, use this instead:
  /*
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  */

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-2xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <a href="/home" className="relative group">
              <div className="relative flex items-center gap-2">
                <Code2 className="w-7 h-7 md:w-8 md:h-8 text-blue-500" />
                <Sparkles className="w-3 h-3 text-yellow-500" />
                <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </div>
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeLink === link.path
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-500"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.icon}
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black px-4 py-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="block py-2 text-white"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;