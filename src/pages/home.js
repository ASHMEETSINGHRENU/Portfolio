import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaServer, FaInstagram } from 'react-icons/fa';
import { Download } from "lucide-react"; 
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

      {/* Navbar */}
      <Navber />

      {/* Main Content */}
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="container mx-auto px-4 md:px-6 py-10 md:py-20 flex flex-col-reverse md:flex-row items-center gap-8"
        >
          {/* Left Side: Text */}
          <div className="md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-6xl font-bold font-worksans leading-tight text-center md:text-left"
            >
              Hi, I'm <span className="text-indigo-600 font-worksans">Ashmeet Singh Renu</span>
            </motion.h1>

            {/* Typewriter */}
            <div className="h-10 md:h-12 mt-3 flex justify-center md:justify-start items-center">
              <h2 className="font-worksans text-lg md:text-3xl text-gray-600 inline-flex">
                I'm a&nbsp;
                <span className="text-indigo-600 font-medium">
                  <Typewriter
                    options={{
                      strings: [
                        "Full-Stack Developer",
                        "Frontend & Backend Enthusiast",
                        "AI & Machine Learning Learner",
                        "Problem Solver & Innovator",
                        "Web Application Developer",
                        "RESTful API Specialist",
                        "Database & Connectivity Expert",
                        "Tech-Savvy Creative Thinker",
                        "Team Player & Leader",
                        "Passionate Learner in Technology"
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </span>
              </h2>
            </div>

            {/* Short Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-md text-center md:text-left mx-auto md:mx-0"
            >
            Currently pursuing a semester-long Mobility Program at INTI International University, Malaysia. This global exposure is expanding my technical expertise.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 md:mt-8 flex justify-center md:justify-start space-x-3 md:space-x-4"
            >
              <a href="/resume" className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-colors text-white text-sm md:text-base">
                ATS Resume
              </a>
              <a href="/projects" className="border border-gray-300 hover:border-indigo-600 px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base">
                View Projects
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 md:mt-8 flex justify-center md:justify-start space-x-4"
            >
              <a href="https://github.com/ASHMEETSINGHRENU" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/ashmeet-singh-renu-9a2a36275/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.instagram.com/ashmeetsingh022/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="mailto:ashmeetsingh022@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaEnvelope size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-indigo-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute inset-0 border-4 border-transparent rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 p-1">
                <div className="h-full w-full rounded-full bg-white overflow-hidden">
                  <img
                    src={require("../photos/profile.png")}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
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
            className="text-3xl font-bold text-center mb-12 font-nunito
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
            className="text-3xl font-bold text-center mb-16 font-nunito
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
      className="text-3xl font-bold text-center mb-4 font-nunito             
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
  <h2 className="text-4xl font-bold text-center mb-6  font-nunito
      after:content-[''] after:block after:w-0 after:h-[3px] 
      after:bg-gradient-to-r after:from-pink-500 after:to-purple-600 after:mx-auto
      after:transition-all after:duration-700 hover:after:w-full">Internship</h2>
  <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
    Through internships, I gained real-world exposure to front-end, back-end, RESTful APIs, and database connectivity.
    These experiences not only enhanced my technical skills but also ignited my drive to excel in my career.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto px-6">
    {internships.map((item) => (
      <div
        key={item.id}
        className="relative group bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]"
      >
        {/* Internship Image */}
        <img
          src={item.img}
          alt={`${item.title} ${item.id}`}
          className="w-full h-auto object-contain rounded-2xl"
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
