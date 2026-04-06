import React from 'react';
import { motion } from 'framer-motion';
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
import { Download, parkles, Award, GraduationCap, Briefcase, Star, ArrowRight } from "lucide-react"; 
import Navber from '../components/navbar';
import Footer from '../components/footer';

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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">


      <Navber />


      <main className="flex-grow mt-16">
        {/* Hero Section hello pages  */}
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
    I'm &nbsp;
    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-black-600 font-semibold">
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
          </motion.div>
        </section>




      {/* About Section */}
      <section id="about" className="py-10 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl my-10 mx-6 mt-0">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl font-bold text-center mb-12
            after:content-[''] after:block after:w-0 after:h-[3px] 
      after:bg-gradient-to-r after:from-pink-500 after:to-purple-600 after:mx-auto
      after:transition-all after:duration-700 hover:after:w-full"
          >
            My Journey
          </motion.h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hidden md:flex md:w-1/3 mb-8 md:mb-0 justify-center"
            >
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-indigo-500">
                <img 
                  src={require("../photos/profile.png")}
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-2/3 md:pl-12"
            >
              <p className="text-lg text-gray-700 mb-6">
                I am a passionate Full-Stack Developer currently pursuing my MCA at D.Y. Patil University, Pune, with a specialization in Artificial Intelligence and Machine Learning (AIML). Through this, I am gaining strong knowledge in Data Analytics and Machine Learning.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I have successfully completed a Full-Stack Development internship at Labmentix, where I worked extensively on front-end and back-end development, RESTful APIs, and database connectivity. This experience gave me a strong foundation in building scalable and efficient applications.
              </p>
              <p className="text-lg text-gray-700">
                Along with my technical expertise, I bring strong leadership qualities and effective communication skills, which help me collaborate seamlessly in teams and deliver impactful solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl font-bold text-center mb-16
            after:content-[''] after:block after:w-0 after:h-[3px] 
      after:bg-gradient-to-r after:from-pink-500 after:to-purple-600 after:mx-auto
      after:transition-all after:duration-700 hover:after:w-full"
          >
            Technical Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-70 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <FaCode className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold">Front-End</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'].map(skill => (
                  <span key={skill} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Backend Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-70 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <FaServer className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold">Back-End</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'PHP', 'Java', 'RESTful APIs'].map(skill => (
                  <span key={skill} className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Database Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-70 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <FaDatabase className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold">Database & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'MongoDB Compass', 'XAMPP Server', 'Figma', 'Wix', 'Git'].map(skill => (
                  <span key={skill} className="bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Leadership & Communication Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-white bg-opacity-70 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-yellow-100 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Leadership & Communication</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Strong interpersonal and leadership abilities',
                'Team collaboration and management',
                'Effective communication skills',
                'Problem-solving and analytical thinking',
                'Creative solution development',
                'User-focused project outcomes'
              ].map(skill => (
                <span key={skill} className="bg-yellow-50 text-yellow-700 text-sm px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
<section
  id="education"
  className="py-16 bg-gradient-to-br from-white/80 to-indigo-50 backdrop-blur-lg rounded-xl my-10 mx-6"
>
  <div className="container mx-auto px-6">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="font-playfair text-3xl font-bold text-center mb-4
      after:content-[''] after:block after:w-0 after:h-[3px] 
      after:bg-gradient-to-r after:from-pink-500 after:to-purple-600 after:mx-auto
      after:transition-all after:duration-700 hover:after:w-full"
    >
      Education
    </motion.h2>

    {/* Description */}
    <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
      A journey of continuous learning and growth, building a strong foundation in technology and innovation.
    </p>

    {/* Center Timeline */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500"></div>

      <div className="space-y-16">

        {/* BCA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-between w-full"
        >
          {/* Empty left */}
          <div className="w-5/12"></div>

          {/* Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white"></div>

          {/* Right side */}
          <div className="w-5/12 text-left">
            <h3 className="text-xl font-semibold">Master Mobility Program </h3>
            <p className="text-gray-700">
             INTI International University, Nilai, Malaysia (2025 – Present)
            </p>
            <p className="text-gray-500">Location: Nilai, Malaysia</p>
          </div>
        </motion.div>


        {/* MCA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-between w-full"
        >
          {/* Left side */}
          <div className="w-5/12 text-right">
            <h3 className="text-xl font-semibold">Master of Computer Application (MCA)</h3>
            <p className="text-gray-700">D Y Patil University, Pune (2024 - 2026)</p>
            <p className="text-gray-500">Location: Pune</p>
          </div>

          {/* Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white"></div>

          {/* Empty right */}
          <div className="w-5/12"></div>
        </motion.div>

        {/* BCA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-between w-full"
        >
          {/* Empty left */}
          <div className="w-5/12"></div>

          {/* Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white"></div>

          {/* Right side */}
          <div className="w-5/12 text-left">
            <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-gray-700">
              GH Raisoni College of Commerce, Science and Technology (2021 - 2024)
            </p>
            <p className="text-gray-500">Location: Nagpur | GPA: 8.0 / 10</p>
          </div>
        </motion.div>

        {/* HSC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-between w-full"
        >
          {/* Left side */}
          <div className="w-5/12 text-right">
            <h3 className="text-xl font-semibold">HSC</h3>
            <p className="text-gray-700">Dr. Madhukarrao Wasnik PWS College (2020 - 2021)</p>
            <p className="text-gray-500">Location: Nagpur | GPA: 6.7 / 10</p>
          </div>

          {/* Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white"></div>

          {/* Empty right */}
          <div className="w-5/12"></div>
        </motion.div>
      </div>
    </div>
  </div>
</section>





{/* Internship Section */}
<section id="internship" className="py-16  from-blue-50 to-purple-50">
  <h2 className="text-4xl font-bold text-center mb-6  font-playfair
      after:content-[''] after:block after:w-0 after:h-[3px] 
      after:bg-gradient-to-r after:from-pink-500 after:to-purple-600 after:mx-auto
      after:transition-all after:duration-700 hover:after:w-full">Internship</h2>
<p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 leading-relaxed text-lg">
  Through internships, I gained real-world exposure to front-end, back-end, RESTfulAPIs, and database connectivity.<br />
  These experiences not only enhanced my technical skills but also ignited my drive to excel in my career.
</p>


<div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto px-6">
  {internships.map((item) => (
    <div
      key={item.id}
      className="relative group rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]"
    >
      {/* Internship Image */}
      <img
        src={item.img}
        alt={`${item.title} ${item.id}`}
        className="w-full h-auto object-contain"
      />

      {/* Download Button */}
      <a
        href={item.pdf}
        download={`${item.title.replace(/\s+/g, '_')}.pdf`}
        className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-md opacity-80 hover:opacity-100 transition"
      >
        <Download className="w-5 h-5" />
      </a>
    </div>
  ))}
</div>






</section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
