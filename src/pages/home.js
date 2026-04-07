import React from 'react';
import { motion, useScroll, useTransform} from 'framer-motion';
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
  FaGithub as FaGitHub,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaChartLine
} from 'react-icons/fa';

import { ArrowRight} from "lucide-react"; 
import Navber from '../components/navbar';
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">


      <Navber />


      <main className="flex-grow mt-16">
        {/* Hero Section hello pages  */}

        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
  <div className="container mx-auto px-4 py-20 md:py-0">
    <div className="flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Left Side - Added more left margin/padding */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="md:w-1/2 text-center md:text-left md:pl-8 lg:pl-16 xl:pl-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6"
        >
          <span className="text-blue-600 font-semibold text-sm">Welcome to my portfolio</span>
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ashmeet Singh Renu
          </span>
        </h1>

        <div className="h-16 mb-6">
          <h2 className="text-xl md:text-3xl text-gray-600">
            I'm &nbsp;
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-black-600 font-semibold">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "Full-Stack Developer",
                    "Frontend & Backend Enthusiast",
                    "AI & Machine Learning Learner",
                    "Problem Solver & Innovator",
                    "Web Application Developer",
                    "RESTful API Specialist",
                    "Database & Connectivity Expert"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  pauseFor: 2500,
                  cursor: "|",
                  cursorClassName: "Typewriter__cursor",
                }}
              />
            </span>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-sm xs:text-base sm:text-lg text-gray-600 mb-5 sm:mb-6 md:mb-8 px-3 sm:px-4 md:px-0 max-w-xl lg:max-w-2xl mx-auto md:mx-0 leading-relaxed sm:leading-relaxed md:leading-loose"
        >
          MERN Stack Developer and Master of Computer Applications candidate at DY Patil University.
          Selected for an academic exchange at INTI International University, Malaysia.
          Driven by analytical thinking and a results-oriented approach to developing efficient digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <a
            href="/resume"
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">ATS Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          <a
            href="/projects"
            className="group px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all hover:scale-105"
          >
            View Projects
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-6 justify-center md:justify-start mt-8"
        >
          {[
            { icon: FaGithub, href: "https://github.com/ASHMEETSINGHRENU", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/ashmeet-singh-renu-9a2a36275/", label: "LinkedIn" },
            { icon: FaInstagram, href: "https://www.instagram.com/ashmeetsingh022/", label: "Instagram" },
            { icon: FaEnvelope, href: "mailto:ashmeetsingh022@example.com", label: "Email" }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              className="text-gray-600 hover:text-blue-600 transition-all hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={24} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="md:w-1/2 flex justify-center md:justify-end md:pr-8 lg:pr-16 xl:pr-24"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src={require("../photos/profile.png")}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"
          />
        </div>
      </motion.div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
  >
  </motion.div>
</section>


      {/* About Section */}
  
<IntroSection />


      {/* Skills Section */}

    <section id="skills" className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Modern tech stack for building scalable, high-performance applications
          </p>
        </motion.div>

        {/* Skills Grid */}
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
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Animated Border Gradient */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
              
              {/* Card Content */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 h-full">
                {/* Header */}
                <div className={`bg-gradient-to-r ${category.gradient} p-5 text-white relative overflow-hidden`}>
                  <motion.div 
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                </div>

                {/* Skills List */}
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

                {/* Progress Bar Animation */}
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

        {/* Leadership & Communication Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg relative overflow-hidden group">
            {/* Animated Background Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-2xl"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            />
            
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
                    <div className="text-yellow-600 text-lg">
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Summary Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['Full-Stack Developer', 'Cloud Enthusiast', 'Agile Practitioner', 'AI Explorer'].map((badge, idx) => (
            <motion.span
              key={badge}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-sm rounded-full shadow-md cursor-default"
            >
              🚀 {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>

      {/* Education Section */}

     <EducationSection />

{/* Internship Section */}

 <InternshipSection internships={internships} />


      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
