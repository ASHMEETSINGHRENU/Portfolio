import React from "react";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaInstagram,
  FaCloud,
  FaTools,
  FaRobot,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaChartLine,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaAws,
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, 
  SiMysql, SiPostman, SiVercel, SiNetlify, SiScrumalliance,
  SiTensorflow, SiJwt, SiFigma, SiWix
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { Download, ArrowRight } from "lucide-react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import EducationSection from './edu';
import InternshipSection from './Internship';
import IntroSection from './intro';

const Home = () => {
  const internships = [
    {
      id: 1,
      title: "Offer Letter",
      img: require("../photos/offer_letter.png"),
      pdf: "/Offer_L.pdf",
    },
    {
      id: 2,
      title: "Internship Certificate",
      img: require("../photos/labmentix_Certificate.png"),
      pdf: "/labmentix.pdf",
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    }
  };

  const skillCategories = [
    {
      name: "Front-End",
      icon: <FaCode className="text-2xl" />,
      gradient: "from-blue-500 to-cyan-400",
      bgLight: "bg-blue-50",
      textColor: "text-blue-700",
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      name: "Back-End",
      icon: <FaServer className="text-2xl" />,
      gradient: "from-green-500 to-emerald-400",
      bgLight: "bg-green-50",
      textColor: "text-green-700",
      skills: ['Node.js', 'Express.js', 'PHP', 'Java', 'REST APIs', 'API Integration', 'JWT Authentication']
    },
    {
      name: "Databases",
      icon: <FaDatabase className="text-2xl" />,
      gradient: "from-purple-500 to-pink-400",
      bgLight: "bg-purple-50",
      textColor: "text-purple-700",
      skills: ['MySQL', 'MongoDB', 'MongoDB Compass', 'SQL']
    },
    {
      name: "Cloud & Infrastructure",
      icon: <FaCloud className="text-2xl" />,
      gradient: "from-orange-500 to-red-400",
      bgLight: "bg-orange-50",
      textColor: "text-orange-700",
      skills: ['AWS', 'Cloud Computing', 'Big Data', 'Vercel', 'Netlify']
    },
    {
      name: "Tools & Methodology",
      icon: <FaTools className="text-2xl" />,
      gradient: "from-slate-500 to-gray-500",
      bgLight: "bg-slate-50",
      textColor: "text-slate-700",
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'XAMPP', 'Agile/Scrum', 'Figma', 'Wix']
    },
    {
      name: "Emerging Tech",
      icon: <FaRobot className="text-2xl" />,
      gradient: "from-indigo-500 to-violet-400",
      bgLight: "bg-indigo-50",
      textColor: "text-indigo-700",
      skills: ['Machine Learning (Basic)', 'Artificial Intelligence']
    }
  ];

  const leadershipSkills = [
    { name: 'Team Collaboration & Management', icon: <FaUsers /> },
    { name: 'Effective Communication', icon: <FaComments /> },
    { name: 'Problem-Solving & Analytics', icon: <FaLightbulb /> },
    { name: 'Strategic Planning', icon: <FaChartLine /> },
    { name: 'Creative Solution Development', icon: <FaLightbulb /> },
    { name: 'User-Focused Project Outcomes', icon: <FaUsers /> }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50" />
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full mb-6 shadow-lg"
              >
                <span className="text-sm font-medium">Welcome to my portfolio</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ashmeet Singh
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-600 mb-6 h-16">
                <Typewriter
                  options={{
                    strings: [
                      'MERN Stack Developer',
                      'Full-Stack Developer',
                      'Problem Solver',
                      'Tech Enthusiast'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                I build scalable web applications with modern technologies. 
                Passionate about creating elegant solutions to complex problems.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.a
                  href="/resume"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  View Resume
                </motion.a>
                <motion.a
                  href="#skills"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-gray-700 font-medium rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
                >
                  Explore Skills
                </motion.a>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start mt-8">
                <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/ASHMEETSINGHRENU" target="_blank" className="text-gray-600 hover:text-gray-900">
                  <FaGithub size={24} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/ashmeet-singh-renu-9a2a36275/" target="_blank" className="text-gray-600 hover:text-blue-600">
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="mailto:ashmeetsingh022@gmail.com" className="text-gray-600 hover:text-red-600">
                  <FaEnvelope size={24} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://www.instagram.com/ashmeetsingh022/" target="_blank" className="text-gray-600 hover:text-pink-600">
                  <FaInstagram size={24} />
                </motion.a>
              </div>
            </motion.div>
            
            {/* Right Content - Profile Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src={require("../photos/profile.png")}
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <IntroSection />

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full mb-4 shadow-lg"
            >
              <FaCode className="w-4 h-4" />
              <span className="text-sm font-medium">Technical Expertise</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Modern tech stack for building scalable, high-performance applications
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 h-full">
                  <div className={`bg-gradient-to-r ${category.gradient} p-5 text-white relative overflow-hidden`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + skillIdx * 0.03 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className={`${category.bgLight} ${category.textColor} text-sm px-3 py-1.5 rounded-full shadow-sm transition-all duration-300 cursor-default`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Leadership Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl mr-4 shadow-md">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent">
                    Leadership & Communication
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {leadershipSkills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="text-yellow-600 text-lg">{skill.icon}</div>
                      <span className="text-gray-700 text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <EducationSection />

      {/* Internship Section */}
      <InternshipSection internships={internships} />

      {/* Footer */}
      <Footer />

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
      `}</style>
    </>
  );
};

export default Home;