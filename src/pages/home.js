import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaFigma,
  FaAws
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiJavascript, 
  SiMongodb, 
  SiExpress,
  SiTypescript,
  SiNextdotjs
} from 'react-icons/si';
import { Download, Sparkles, Award, GraduationCap, Briefcase, Star, ArrowRight } from "lucide-react";
import Navber from '../components/navbar';
import Footer from '../components/footer';

const Home = () => {
  const internships = [
    {
      id: 1,
      title: "Offer Letter",
      img: require("../photos/offer_letter.png"),
      pdf: "/Offer_L.pdf",
      description: "Full-Stack Development Internship"
    },
    {
      id: 2,
      title: "Internship Certificate",
      img: require("../photos/labmentix_Certificate.png"),
      pdf: "/labmentix.pdf",
      description: "Labmentix Technologies"
    }
  ];

  const skills = {
    frontend: {
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", icon: FaReact, level: 90 },
        { name: "Next.js", icon: SiNextdotjs, level: 85 },
        { name: "JavaScript", icon: SiJavascript, level: 88 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
        { name: "HTML/CSS", icon: FaCode, level: 95 }
      ]
    },
    backend: {
      icon: FaServer,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 87 },
        { name: "Express.js", icon: SiExpress, level: 85 },
        { name: "PHP", icon: FaPhp, level: 82 },
        { name: "Java", icon: FaJava, level: 78 },
        { name: "RESTful APIs", icon: FaServer, level: 90 }
      ]
    },
    database: {
      icon: FaDatabase,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 88 },
        { name: "MySQL", icon: FaDatabase, level: 85 },
        { name: "PostgreSQL", icon: FaDatabase, level: 80 },
        { name: "Firebase", icon: FaDatabase, level: 75 }
      ]
    }
  };

  const education = [
    {
      degree: "Master Mobility Program",
      institution: "INTI International University",
      location: "Nilai, Malaysia",
      year: "2025 – Present",
      description: "International exposure in advanced computing and cross-cultural collaboration"
    },
    {
      degree: "Master of Computer Application (MCA)",
      institution: "D Y Patil University",
      location: "Pune, India",
      year: "2024 - 2026",
      description: "Specialization in AI & Machine Learning, Data Analytics"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "GH Raisoni College",
      location: "Nagpur, India",
      year: "2021 - 2024",
      description: "GPA: 8.0/10 | Core Computer Science fundamentals"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dr. Madhukarrao Wasnik PWS College",
      location: "Nagpur, India",
      year: "2020 - 2021",
      description: "GPA: 6.7/10 | Science stream with Computer Science"
    }
  ];

  const stats = [
    { value: "10+", label: "Projects Completed", icon: Briefcase },
    { value: "2", label: "Internships", icon: Award },
    { value: "3.8", label: "CGPA", icon: Star },
    { value: "100%", label: "Client Satisfaction", icon: Sparkles }
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navber />

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="container mx-auto px-4 py-20 md:py-0">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12">
              {/* Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="md:w-1/2 text-center md:text-left"
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
                    I'm a&nbsp;
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                      <Typewriter
                        options={{
                          strings: [
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
                          delay: 50,
                          deleteSpeed: 30,
                          pauseFor: 2500
                        }}
                      />
                    </span>
                  </h2>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"
                >
                  Currently pursuing a semester-long Mobility Program at INTI International University, Malaysia. 
                  Passionate about creating impactful digital solutions that solve real-world problems.
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
                className="md:w-1/2 flex justify-center"
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
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-500">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-2 bg-gray-400 rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white mb-4">
                    <stat.icon size={24} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{stat.value}</h3>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:w-1/3"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={require("../photos/profile.png")}
                    alt="About"
                    className="relative rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:w-2/3"
              >
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I am a passionate Full-Stack Developer currently pursuing my MCA at D.Y. Patil University, Pune, 
                  with a specialization in Artificial Intelligence and Machine Learning (AIML). My journey in technology 
                  is driven by curiosity and a desire to create solutions that make a difference.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  During my internship at Labmentix, I gained hands-on experience in full-stack development, working with 
                  modern technologies like React.js, Node.js, and MongoDB. I developed scalable applications and RESTful APIs, 
                  honing my skills in both frontend and backend development.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Beyond coding, I bring strong leadership qualities and effective communication skills. I believe in 
                  continuous learning and am always excited to take on new challenges that push the boundaries of what's possible.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-br from-white to-blue-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Expertise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([key, value], idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${value.color} rounded-2xl text-white mb-6`}>
                      <value.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 capitalize">{key}</h3>
                    <div className="space-y-4">
                      {value.skills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <skill.icon size={16} className="text-gray-600" />
                              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                            </div>
                            <span className="text-sm text-gray-600">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className={`h-full bg-gradient-to-r ${value.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
                        <div className="flex items-center gap-3 mb-4">
                          <GraduationCap className="text-blue-600" size={24} />
                          <span className="text-sm text-blue-600 font-semibold">{edu.year}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-gray-600 mb-2">{edu.institution}</p>
                        <p className="text-gray-500 text-sm mb-3">{edu.location}</p>
                        <p className="text-gray-700">{edu.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-6"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internship Section */}
        <section id="internship" className="py-20 bg-gradient-to-br from-white to-blue-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
              <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                Real-world experience in full-stack development, working with modern technologies and best practices
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {internships.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                    <div className="relative">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <a
                        href={item.pdf}
                        download={`${item.title.replace(/\s+/g, '_')}.pdf`}
                        className="absolute top-4 right-4 bg-white text-blue-600 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                      >
                        <Download size={20} />
                      </a>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                        <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                        <p className="text-gray-200 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;