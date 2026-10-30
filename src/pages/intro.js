// client/src/pages/intro.js
import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Layers, 
  Globe2, 
  Cpu, 
  Sparkles, 
  Award,
  Briefcase,
  GitBranch,
  ShieldCheck
} from "lucide-react";
import { coreValues } from "../data/portfolioData";

const IntroSection = () => {
  const icons = [
    <Target className="w-5 h-5 text-[#F2772F]" />,
    <Layers className="w-5 h-5 text-[#3FB874]" />,
    <Globe2 className="w-5 h-5 text-[#C564C4]" />,
    <Cpu className="w-5 h-5 text-[#E9C22E]" />
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#FBF6EF] overflow-hidden font-interTight">
      {/* Background pastel atmosphere */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DFE9D4]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F8DCC7]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0D0D0C]/10 text-xs font-semibold text-[#0D0D0C] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F2772F]" />
            <span>Executive Engineering Philosophy</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0D0D0C] mb-6">
            Engineered for <span className="apricot-text-gradient">precision</span>, built for{" "}
            <span className="sage-text-gradient">impact</span>.
          </h2>

          <p className="text-[#0D0D0C]/65 text-base md:text-lg leading-relaxed">
            I combine rigorous software architectural principles with refined aesthetic taste. Every application is designed to be intuitive, secure, and resilient under real-world operational demands.
          </p>
        </motion.div>

        {/* Core Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-6 rounded-3xl bg-white border border-[#0D0D0C]/08 hover:border-[#0D0D0C]/20 transition-all duration-300 group shadow-card-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4F2ED] border border-[#0D0D0C]/08 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#F4F2ED] text-[#0D0D0C]/70 border border-[#0D0D0C]/08">
                    {val.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0D0D0C] mb-1 group-hover:text-[#F2772F] transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs font-semibold text-[#F2772F] mb-3 uppercase tracking-wider">
                  {val.subtitle}
                </p>

                <p className="text-[#0D0D0C]/65 text-xs md:text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0D0D0C]/08 flex items-center gap-2 text-[11px] text-[#0D0D0C]/50">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3FB874]" />
                <span>Production Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Metrics Strip in Vela Cream Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-10 rounded-3xl bg-white border border-[#0D0D0C]/10 shadow-vela"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#0D0D0C]/10">
            <div className="p-2">
              <div className="text-3xl md:text-5xl font-extrabold text-[#0D0D0C] mb-2 tracking-tight">
                5+
              </div>
              <div className="text-xs md:text-sm font-medium text-[#0D0D0C]/65 flex items-center justify-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#3FB874]" /> Commercial Deployments
              </div>
            </div>

            <div className="p-2 pt-6 lg:pt-2">
              <div className="text-3xl md:text-5xl font-extrabold text-[#0D0D0C] mb-2 tracking-tight">
                30+
              </div>
              <div className="text-xs md:text-sm font-medium text-[#0D0D0C]/65 flex items-center justify-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#F2772F]" /> Total Projects Delivered
              </div>
            </div>

            <div className="p-2 pt-6 lg:pt-2">
              <div className="text-3xl md:text-5xl font-extrabold text-[#0D0D0C] mb-2 tracking-tight">
                16+
              </div>
              <div className="text-xs md:text-sm font-medium text-[#0D0D0C]/65 flex items-center justify-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#E9C22E]" /> Verified Credentials
              </div>
            </div>

            <div className="p-2 pt-6 lg:pt-2">
              <div className="text-3xl md:text-5xl font-extrabold text-[#0D0D0C] mb-2 tracking-tight">
                50+
              </div>
              <div className="text-xs md:text-sm font-medium text-[#0D0D0C]/65 flex items-center justify-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-[#C564C4]" /> Repositories on GitHub
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
