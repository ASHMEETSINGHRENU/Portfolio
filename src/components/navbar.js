// client/src/components/navbar.js
import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  FolderGit2, 
  Award, 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight, 
  Mail
} from "lucide-react";
import ScrollProgress from "./ScrollProgress";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/home", icon: Home },
    { name: "Projects", path: "/projects", icon: FolderGit2 },
    { name: "Certificates", path: "/certificates", icon: Award },
    { name: "Resume", path: "/resume", icon: FileText },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <ScrollProgress />

      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 font-interTight ${
          scrolled
            ? "py-3 bg-[#FBF6EF]/85 backdrop-blur-2xl border-b border-[#0D0D0C]/10 shadow-[0_4px_25px_rgba(13,13,12,0.05)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-[#0D0D0C] p-[1.5px] shadow-sm transition-all group-hover:scale-105">
                <div className="w-full h-full bg-[#0D0D0C] rounded-[10px] flex items-center justify-center">
                  <span className="font-interTight text-base font-bold text-[#FBF6EF]">
                    AS
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-interTight font-bold text-base md:text-lg tracking-tight text-[#0D0D0C]">
                    Ashmeet Singh
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2772F]" />
                </div>
                <span className="text-[10.5px] tracking-widest uppercase font-semibold text-[#0D0D0C]/56 -mt-0.5">
                  Software Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Pill */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F4F2ED] border border-[#0D0D0C]/10 backdrop-blur-xl shadow-sm">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? "text-[#FBF6EF] font-semibold"
                        : "text-[#0D0D0C]/60 hover:text-[#0D0D0C] hover:bg-black/[0.03]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-[#0D0D0C] shadow-sm"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Icon className="w-4 h-4" />
                      {link.name}
                    </span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="mailto:ashmeetsingh022@gmail.com"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#FBF6EF] bg-[#0D0D0C] hover:bg-[#252523] border border-[#0D0D0C] transition-all shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#3FB874] animate-pulse" />
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FBF6EF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-[#F4F2ED] border border-[#0D0D0C]/10 text-[#0D0D0C]"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[70px] z-40 md:hidden bg-[#FBF6EF]/95 backdrop-blur-2xl border-b border-[#0D0D0C]/10 p-6 shadow-xl font-interTight"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#0D0D0C] text-[#FBF6EF] font-bold"
                        : "text-[#0D0D0C]/70 hover:bg-black/[0.04] hover:text-[#0D0D0C]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </NavLink>
                );
              })}

              <div className="pt-4 border-t border-[#0D0D0C]/10">
                <a
                  href="mailto:ashmeetsingh022@gmail.com"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#F4F2ED] text-[#0D0D0C] font-medium border border-[#0D0D0C]/10"
                >
                  <Mail className="w-4 h-4 text-[#F2772F]" />
                  <span>ashmeetsingh022@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
