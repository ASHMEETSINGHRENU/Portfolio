import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Star } from 'lucide-react';

const EducationSection = () => {
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const educationData = [
    {
      title: "Master of Computer Applications (MCA)",
      institution: "D Y Patil University",
      location: "Pune, India",
      period: "2025 – Present",
      type: "Post Graduation",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      badge: "Current",
      achievements: ["Advanced Computing", "Research Focus"]
    },
    {
      title: "Master Mobility Program",
      institution: "INTI International University",
      location: "Nilai, Malaysia",
      period: "2025",
      type: "International Exchange",
      icon: <Award className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-500",
      badge: "International",
      achievements: ["Global Exposure", "Cross-cultural Learning"]
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "GH Raisoni College of Commerce, Science and Technology",
      location: "Nagpur, India",
      period: "2021 - 2024",
      type: "Graduation",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      badge: "GPA: 8.0/10",
      achievements: ["Computer Applications", "Software Development"]
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Dr. Madhukarrao Wasnik PWS College",
      location: "Nagpur, India",
      period: "2020 - 2021",
      type: "Schooling",
      icon: <Star className="w-5 h-5" />,
      color: "from-orange-500 to-amber-500",
      badge: "GPA: 6.7/10",
      achievements: ["Science Stream", "Mathematics"]
    }
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50" />
      
      {/* Animated Blobs */}
      <div className="absolute top-20 -left-20 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 -right-20 w-48 h-48 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 shadow-lg"
          >
            <GraduationCap className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">Academic Journey</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 md:mb-4">
            Education Timeline
          </h2>
          <div className="w-20 h-0.5 md:w-24 md:h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4 md:mb-6" />
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            A journey of continuous learning and growth, building a strong foundation in technology and innovation
          </p>
        </motion.div>

        {/* Timeline Container - Desktop View */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Animated Vertical Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"
            style={{ height: lineHeight }}
          />
          
          {/* Glassmorphism Background Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-200 rounded-full opacity-30" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center justify-between mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
              >
                <div className="relative group">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`} />
                  
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/50">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className={`absolute -top-3 ${index % 2 === 0 ? 'right-6' : 'left-6'} bg-gradient-to-r ${item.color} text-white text-xs px-3 py-1 rounded-full shadow-md`}
                    >
                      {item.badge}
                    </motion.div>

                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-md mb-4 ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-indigo-600 font-semibold mb-1">{item.institution}</p>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                className="absolute left-1/2 transform -translate-x-1/2 z-10"
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} shadow-lg flex items-center justify-center`}>
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </motion.div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Vertical Timeline */}
        <div className="block md:hidden relative">
          {/* Vertical Line for Mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
          
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex mb-8 last:mb-0"
            >
              {/* Mobile Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="absolute left-0 z-10"
                style={{ left: '10px' }}
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg flex items-center justify-center`}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </motion.div>

              {/* Mobile Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ml-12 w-full"
              >
                <div className="relative group">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
                  
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-white/50">
                    {/* Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className={`absolute -top-2 right-3 bg-gradient-to-r ${item.color} text-white text-xs px-2 py-0.5 rounded-full shadow-md`}
                    >
                      {item.badge}
                    </motion.div>

                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-md`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-800">{item.title}</h3>
                        <p className="text-indigo-600 font-semibold text-sm">{item.institution}</p>
                      </div>
                    </div>
                    
                    {/* Period and Location */}
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.achievements.map((achievement, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Education Stats - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Years of Study", value: "5+", icon: "📚" },
            { label: "Institutions", value: "4", icon: "🏫" },
            { label: "Certifications", value: "10+", icon: "📜" },
            { label: "Countries", value: "2", icon: "🌍" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/60 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-4 text-center shadow-lg border border-white/50"
            >
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">{stat.icon}</div>
              <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default EducationSection;