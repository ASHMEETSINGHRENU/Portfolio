import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
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
  ChevronRight
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/home", icon: <Home className="w-4 h-4" /> },
    { name: "Resume", path: "/resume", icon: <FileText className="w-4 h-4" /> },
    { name: "Certificates", path: "/certificates", icon: <Award className="w-4 h-4" /> },
    { name: "Projects", path: "/projects", icon: <FolderGit2 className="w-4 h-4" /> },
  ];

  // Handle scroll with passive listener for better performance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo with Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link to="/" className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500" />
                <div className="relative flex items-center gap-2">
                  <div className="relative">
                    <Code2 className="w-7 h-7 md:w-8 md:h-8 text-blue-500" />
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
                  <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/home"}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          transition={{ type: "spring", duration: 0.5 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-50" />
                        </motion.div>
                      )}
                      
                      {/* Link Content */}
                      <span className="relative z-10 flex items-center gap-2">
                        {link.icon}
                        {link.name}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}

              {/* Resume Button CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/resume"
                  className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-black/90 backdrop-blur-xl border-t border-white/10 px-4 py-6">
                <div className="space-y-3">
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === "/home"}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                            : "hover:bg-white/5"
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${
                              isActive
                                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                                : "bg-white/10"
                            }`}>
                              {link.icon}
                            </div>
                            <span className={`font-medium ${
                              isActive ? "text-white" : "text-gray-300"
                            }`}>
                              {link.name}
                            </span>
                          </div>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <ChevronRight className="w-4 h-4 text-blue-400" />
                            </motion.div>
                          )}
                        </>
                      )}
                    </NavLink>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/resume"
                      className="block mt-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hire Me
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;