// client/src/pages/edu.js
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';

const EducationSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#FBF6EF] text-[#0D0D0C] overflow-hidden border-t border-[#0D0D0C]/08">
      {/* Background ambience in Vela pastels */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#F8DCC7]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#DFE9D4]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0D0D0C]/10 text-xs font-medium text-[#F2772F] mb-4 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-[#F2772F]" />
            <span>Academic Milestones</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0D0D0C] mb-4">
            Educational <span className="apricot-text-gradient font-semibold">Pedigree</span>
          </h2>

          <p className="text-[#0D0D0C]/65 text-sm md:text-base leading-relaxed">
            A solid computer science foundation enriched by rigorous master's coursework and global international exchange.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#0D0D0C]/12 ml-4 md:ml-32 space-y-12">
          {educationHistory.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#F2772F] group-hover:scale-125 group-hover:bg-[#F2772F] group-hover:shadow-[0_0_12px_rgba(242,119,47,0.4)] transition-all duration-300" />

              {/* Date Tag on Desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28 text-xs font-mono font-medium text-[#0D0D0C]/55">
                {edu.period}
              </div>

              {/* Education Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#0D0D0C]/08 hover:border-[#F2772F]/40 transition-all duration-300 shadow-card-soft hover:shadow-vela-hover">
                {/* Mobile Period Tag */}
                <div className="flex md:hidden items-center gap-1.5 text-xs font-mono text-[#F2772F] mb-2 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#F8DCC7]/50 text-[#F2772F] border border-[#F2772F]/20 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    {edu.badge}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs text-[#0D0D0C]/55">
                    <MapPin className="w-3.5 h-3.5 text-[#F2772F]" />
                    {edu.location}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0D0D0C] mb-1 group-hover:text-[#F2772F] transition-colors">
                  {edu.title}
                </h3>

                <p className="text-sm md:text-base font-normal text-[#0D0D0C]/70 mb-5">
                  {edu.institution}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-4 border-t border-[#0D0D0C]/08">
                  {edu.highlights.map((point, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#0D0D0C]/65">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
