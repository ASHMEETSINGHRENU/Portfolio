// client/src/pages/project.js
import React from "react";
import Navbar from '../components/navbar';
import Footer from "../components/footer";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "WorkWagon - Freelancer Website",
      img: require("../photos/freelance.png"), 
      description:
        "WorkWagon is a freelancing platform that connects clients with skilled freelancers. Clients can hire experts for services like web development, logo design, and SEO, while freelancers can showcase their profiles, offer services, and earn by completing projects. The platform ensures a smooth, user-friendly, and reliable collaboration experience.",
      tech: "Front-end: React.js and Tailwind CSS / Back-end: Node.js with APIs / DB: MongoDB",
      link: "https://frontend-workwagon.vercel.app/",
    },
    {
      id: 2,
      name: "Glam Cosmetics",
      img: require("../photos/glam.png"),
      description:
        "Developed a responsive e-commerce website for cosmetic products, enabling users to browse, like, and add products to their wishlist. The platform enhances the shopping experience through personalized user interactions and intuitive design.",
      tech: "HTML, CSS, JavaScript, Bootstrap, PHP, XAMPP, MySQL",
      link: "https://github.com/ASHMEETSINGHRENU/glam2.0",
    },
    {
      id: 3,
      name: "AAOKHAAO - Food Delivery",
      img: require("../photos/aaokhaao.png"),
      description:
        "Built a responsive food delivery website with user and admin panels. Implemented secure login, dynamic menu, order management, and real-time updates using PHP and MySQL. Designed an intuitive UI with Bootstrap and handled database operations using XAMPP.",
      tech: "HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, XAMPP",
      link: "https://github.com/ASHMEETSINGHRENU/AAOKHAAO-food-delivery",
    },
    {
      id: 4,
      name: "Bank Management System",
      img: require("../photos/BMS.png"), 
      description:
        "Developed a secure banking application using Java that enables users to efficiently manage accounts, perform deposits and withdrawals, update PIN, and access transaction history. Implemented a user-centric interface combined with strong backend functionality to ensure reliable and seamless performance.",
      tech: "Core Java, MySQL, XAMPP Server",
      link: "https://github.com/ASHMEETSINGHRENU/BANK-MANAGEMENT-SYSTEM",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      
      {/* Main content container */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Heading */}
<h1
  className="relative inline-block font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-16
  after:content-[''] after:block after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-600 
  after:transition-all after:duration-700 hover:after:w-full"
>
  Projects
</h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-12">
          From concept to code, here are the projects that define my expertise.{" "}
          <br />
          Built with passion, precision, and a problem-solving mindset.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02]"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.name}
                </h2>
                <p className="text-gray-700 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <p className="text-gray-800 text-sm mb-6">
                  <span className="font-semibold">Tech Stack:</span> {project.tech}
                </p>

                {/* GitHub Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-center"
                >
                  View on Github / Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Project;