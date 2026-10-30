// client/src/components/footer.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ChevronUp, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MapPin 
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Resume", path: "/resume" }
  ];

  const socialLinks = [
    { name: "GitHub", url: personalInfo.socials.github, icon: Github },
    { name: "LinkedIn", url: personalInfo.socials.linkedin, icon: Linkedin },
    { name: "Instagram", url: personalInfo.socials.instagram, icon: Instagram },
    { name: "Email", url: personalInfo.socials.email, icon: Mail }
  ];

  return (
    <footer className="relative bg-[#F4F2ED] border-t border-[#0D0D0C]/10 pt-20 pb-12 overflow-hidden text-[#0D0D0C] font-interTight">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-t from-[#F8DCC7]/30 via-[#F4EBC6]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Executive Call to Action Banner */}
        <div className="relative mb-20 p-8 md:p-12 rounded-3xl bg-white border border-[#0D0D0C]/10 overflow-hidden shadow-vela">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F8DCC7]/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFE9D4] text-[#0D0D0C] border border-[#3FB874]/30 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#3FB874] animate-pulse" />
                <span>Available for Full-Time Roles & High-Impact Contracts</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D0D0C]">
                Let's architect something extraordinary together.
              </h2>
              <p className="text-[#0D0D0C]/65 text-sm md:text-base leading-relaxed">
                Whether you need a full-stack engineer for a production platform, a MERN developer, or technical leadership, I am eager to contribute.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0D0D0C] text-[#FBF6EF] font-bold text-sm hover:bg-[#252523] transition-all hover:scale-[1.02] shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FBF6EF] hover:bg-[#F2ECDF] text-[#0D0D0C] border border-[#0D0D0C]/15 text-sm font-medium transition-all"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#3FB874]" />
                    <span className="text-[#3FB874] font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#F2772F]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-[#0D0D0C]/10">
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D0D0C] p-[1.5px] shadow-sm flex items-center justify-center">
                <span className="font-bold text-[#FBF6EF] text-base">
                  AS
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#0D0D0C]">Ashmeet Singh</h3>
                <p className="text-xs text-[#0D0D0C]/56 font-mono tracking-wider">FULL-STACK SOFTWARE ENGINEER</p>
              </div>
            </div>

            <p className="text-[#0D0D0C]/65 text-sm max-w-md leading-relaxed">
              MERN Stack specialist passionate about crafting high-performance, elegant, and secure digital products. Based in India, open to global opportunities.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#0D0D0C]/56 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#F2772F]" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#0D0D0C]/65 hover:text-[#0D0D0C] transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0C]">Connect</h4>
            <ul className="space-y-2.5 text-sm">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#0D0D0C]/65 hover:text-[#0D0D0C] transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-[#0D0D0C]/60 group-hover:text-[#0D0D0C] transition-colors" />
                      <span>{social.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#0D0D0C]/30 group-hover:text-[#0D0D0C] transition-colors" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0D0D0C]/50">
          <p>
            © {new Date().getFullYear()} Ashmeet Singh. Designed & Engineered with standard aesthetic integrity.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#F2ECDF] text-[#0D0D0C] border border-[#0D0D0C]/10 transition-all shadow-sm"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4 text-[#F2772F] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
