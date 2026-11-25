// client/src/data/portfolioData.js

export const personalInfo = {
  name: "Ashmeet Singh",
  title: "Full-Stack Software Engineer & MERN Specialist",
  tagline: "Architecting scalable web applications with high-performance code and luxury design aesthetics.",
  bio: "Passionate Full-Stack Developer with hands-on experience building modern, responsive, and secure web applications. Specializing in the MERN stack, cloud technologies, RESTful architectures, and intuitive UI/UX design. Driven by problem-solving and delivering measurable business impact.",
  email: "ashmeetsingh022@gmail.com",
  location: "Pune / Nagpur, India",
  availability: "Open to High-Impact Opportunities",
  socials: {
    github: "https://github.com/ASHMEETSINGHRENU",
    linkedin: "https://www.linkedin.com/in/ashmeet-singh-renu-9a2a36275/",
    instagram: "https://www.instagram.com/ashmeetsingh022/",
    email: "mailto:ashmeetsingh022@gmail.com"
  },
  resumePdf: "/Resume.pdf",
  stats: [
    { label: "Commercial Client Deployments", value: "5+", icon: "Globe" },
    { label: "Production & Academic Projects", value: "30+", icon: "Briefcase" },
    { label: "Verified Certifications", value: "16+", icon: "Award" },
    { label: "Technologies & Frameworks", value: "30+", icon: "Cpu" }
  ]
};

export const coreValues = [
  {
    title: "Problem Solver First",
    subtitle: "Root-Cause Engineering",
    description: "I approach every technical challenge from first principles, designing elegant architectures before writing a single line of code.",
    accent: "from-amber-400 to-amber-600",
    badge: "Strategy"
  },
  {
    title: "Full-Stack Mastery",
    subtitle: "End-to-End Delivery",
    description: "From pixel-perfect, accessible user interfaces to resilient database schemas and high-throughput REST APIs.",
    accent: "from-blue-400 to-indigo-600",
    badge: "Architecture"
  },
  {
    title: "Global Perspective",
    subtitle: "International Mindset",
    description: "Enriched through international academic mobility in Malaysia and global engineering simulations with Fortune 500 leaders.",
    accent: "from-emerald-400 to-teal-600",
    badge: "Leadership"
  },
  {
    title: "Performance & Scale",
    subtitle: "Production Ready",
    description: "Committed to clean code, responsive layouts, fast Core Web Vitals, and secure authentication workflows.",
    accent: "from-purple-400 to-pink-600",
    badge: "Standard"
  }
];

export const skillCategories = [
  {
    id: "frontend",
    name: "Front-End Engineering",
    description: "Crafting fluid, accessible, and performant user interfaces with modern reactive paradigms.",
    color: "from-blue-500 to-cyan-400",
    borderColor: "border-blue-500/30",
    skills: [
      { name: "React.js", level: 92, tag: "Core" },
      { name: "JavaScript (ES6+)", level: 90, tag: "Core" },
      { name: "Tailwind CSS", level: 95, tag: "Design" },
      { name: "HTML5 / Semantic DOM", level: 95, tag: "Standard" },
      { name: "CSS3 / Animations", level: 90, tag: "Styling" },
      { name: "Framer Motion", level: 85, tag: "Motion" },
      { name: "Bootstrap", level: 88, tag: "UI" }
    ]
  },
  {
    id: "backend",
    name: "Back-End & Microservices",
    description: "Developing scalable servers, secure endpoints, and business logic pipelines.",
    color: "from-emerald-500 to-teal-400",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "Node.js", level: 88, tag: "Runtime" },
      { name: "Express.js", level: 88, tag: "Framework" },
      { name: "RESTful API Design", level: 92, tag: "Architecture" },
      { name: "PHP", level: 80, tag: "Backend" },
      { name: "Core Java", level: 82, tag: "OOP" },
      { name: "JWT & Auth Security", level: 85, tag: "Security" },
      { name: "API Integration", level: 90, tag: "Services" }
    ]
  },
  {
    id: "database",
    name: "Databases & Architecture",
    description: "Structuring high-integrity relational and document-oriented databases.",
    color: "from-amber-500 to-yellow-400",
    borderColor: "border-amber-500/30",
    skills: [
      { name: "MongoDB & Compass", level: 88, tag: "NoSQL" },
      { name: "MySQL / Relational DB", level: 85, tag: "SQL" },
      { name: "Data Modeling", level: 84, tag: "Design" },
      { name: "Database Optimization", level: 80, tag: "Query" }
    ]
  },
  {
    id: "cloud-devops",
    name: "Cloud, Tools & Methodology",
    description: "Deploying production builds, continuous deployment, and testing workflows.",
    color: "from-purple-500 to-indigo-400",
    borderColor: "border-purple-500/30",
    skills: [
      { name: "Git & GitHub", level: 92, tag: "VCS" },
      { name: "Vercel & Netlify", level: 90, tag: "Deploy" },
      { name: "AWS Cloud Basics", level: 78, tag: "Cloud" },
      { name: "Postman API Testing", level: 88, tag: "Testing" },
      { name: "VS Code & XAMPP", level: 92, tag: "Tooling" },
      { name: "Agile / Scrum Methodologies", level: 85, tag: "Workflow" }
    ]
  },
  {
    id: "ai-emerging",
    name: "Emerging Tech & AI",
    description: "Leveraging artificial intelligence and data science tools to augment software development.",
    color: "from-pink-500 to-rose-400",
    borderColor: "border-pink-500/30",
    skills: [
      { name: "GenAI Powered Analytics", level: 82, tag: "AI" },
      { name: "Machine Learning Fundamentals", level: 75, tag: "ML" },
      { name: "Python for Data Science", level: 80, tag: "Python" }
    ]
  }
];

// Real-World Commercial Client Projects
export const industryProjects = [
  {
    id: "ind-1",
    title: "Pohewala — Food & Franchise Website",
    tagline: "Authentic Maharashtrian Culinary Brand & Multi-Outlet Franchise Suite",
    client: "Pohewala Foods",
    industry: "Food & Beverage (F&B)",
    projectType: "Website Design & Development",
    image: require("../assets/real world project/pohewala.png"),
    summary: "Designed and developed a modern, engaging website for Pohewala, a food brand celebrating the authentic taste of Maharashtra through its traditional poha varieties. The website highlights the brand’s menu, food offerings, outlet locations, customer testimonials, and franchise opportunities through a vibrant, user-friendly interface.",
    description: "Pohewala is a full-scale digital brand and franchise portal designed and engineered to support the rapid retail and culinary expansion of Maharashtra's authentic traditional poha varieties. The website highlights the brand's expansive regional culinary menu, outlet discovery, bulk catering inquiries, and prospective franchise partnership pipelines with a high-conversion, mobile-responsive layout.",
    features: [
      "Responsive multi-device layout & mobile-first UI",
      "Interactive digital food menu & regional varieties showcase",
      "Multi-location outlet locator with geographic map navigation",
      "Franchise partnership & investor lead capture pipeline",
      "Customer testimonials, reviews & social proof highlights",
      "Food delivery information & bulk order inquiry pathways",
      "Instagram social feed integration & culinary blog journal"
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "REST APIs", "Analytics"],
    liveUrl: "https://www.pohewala.com/",
    category: "Commercial Client Work",
    badge: "Live Industry Brand",
    isCommercial: true,
    year: "2025 - 2026"
  },
  {
    id: "ind-2",
    title: "Shutter and Stripes — Wildlife Safari & Travel",
    tagline: "Immersive Wildlife Expeditions & Nature Tourism Portal",
    client: "Shutter and Stripes Safaris",
    industry: "Wildlife Tourism & Travel",
    projectType: "Website Design & Development",
    image: require("../assets/real world project/ShutterAndStripes.png"),
    summary: "Designed and developed a premium wildlife safari website for Shutter and Stripes, offering immersive, locally guided wildlife experiences across the tiger reserves of Maharashtra and Madhya Pradesh. The website showcases safari destinations, upcoming tours, wildlife photography, and ethical tourism practices through a nature-inspired, adventure-focused design.",
    description: "Shutter and Stripes is an experiential eco-tourism and safari booking platform engineered for nature photographers, conservationists, and wildlife enthusiasts exploring central India's premier tiger reserves (Tadoba, Pench, Kanha, Bandhavgarh). The website seamlessly pairs high-resolution wildlife imagery with logistical booking assistance, seasonal expedition itineraries, and ethical tourism charters.",
    features: [
      "Wildlife reserve directory across Maharashtra and Madhya Pradesh",
      "Interactive safari map & seasonal tour itinerary showcases",
      "Customized safari expedition planning & direct booking assistance",
      "Real-time booking inquiry tracking & guest support assistance",
      "High-resolution wildlife photography gallery & showcase",
      "Travel journal & ethical forest tourism highlights"
    ],
    tech: ["React.js", "Tailwind CSS", "Interactive Maps", "Responsive Design", "Travel Booking UI"],
    liveUrl: "https://www.shutterandstripessafaris.com/",
    category: "Commercial Client Work",
    badge: "Live Industry Brand",
    isCommercial: true,
    year: "2025 - 2026"
  },
  {
    id: "ind-3",
    title: "Sumam’s Boutique — Luxury Saree E-Commerce",
    tagline: "Traditional Bengali Handloom & Handcrafted Textile Storefront",
    client: "Sumam’s Boutique",
    industry: "Fashion & Ethnic Wear",
    projectType: "E-Commerce Website Design & Development",
    image: require("../assets/real world project/Sumams.png"),
    summary: "Designed and developed an elegant e-commerce website for Sumam’s Boutique, showcasing traditional Bengali handloom sarees and handcrafted Indian textiles. The website combines cultural heritage with a modern shopping experience, highlighting premium silk sarees, Tant, Jamdani, Tussar, and other traditional weaves.",
    description: "Sumam’s Boutique is a bespoke luxury e-commerce platform celebrating indigenous Indian textile heritage. Designed with refined editorial aesthetics, it provides a seamless shopping journey for authentic handloom sarees. Features include rich product collection showcases, fabric filter navigation (Tant, Jamdani, Tussar, Pure Silk), persistent shopping cart, verified buyer reviews, and Razorpay secure payment checkout.",
    features: [
      "Curated artisanal collections with fabric & weave category browsing",
      "Dynamic product catalog, transparent pricing & detail views",
      "Interactive shopping bag & persistent customer cart checkout",
      "Secure payment gateway integration powered by Razorpay",
      "Customer reviews & verified buyer ratings curation",
      "Brand heritage storytelling & newsletter subscription engine",
      "Instagram social feed integration & community lookbook"
    ],
    tech: ["React.js", "E-Commerce Architecture", "Razorpay Payment Gateway", "Tailwind CSS", "Cart State Management"],
    liveUrl: "https://www.sumamsboutique.com/",
    category: "Commercial Client Work",
    badge: "Live E-Commerce",
    isCommercial: true,
    year: "2025 - 2026"
  },
  {
    id: "ind-4",
    title: "La Jhinga Seafood & Cafe — Coastal Dining",
    tagline: "Palolem Beach Coastal Cuisine & Live Acoustic Ambience Platform",
    client: "La Jhinga Seafood & Cafe",
    industry: "Hospitality & Food Services",
    projectType: "Website Design & Development",
    image: require("../assets/real world project/lajhinga.png"),
    summary: "Designed and developed a premium, modern website for La Jhinga Seafood & Cafe, located near Palolem Beach, South Goa. The website highlights fresh seafood, authentic Goan cuisine, multi-cuisine dining, open-air ambience, and live acoustic music through an elegant, coastal-inspired design.",
    description: "La Jhinga Seafood & Cafe required an inviting digital storefront to reflect its beachfront coastal dining vibe near South Goa's renowned Palolem Beach. The website presents guests with an interactive fresh catch menu, traditional Goan spice profiles, seating ambiance gallery, live acoustic music event schedules, and a streamlined online table reservation engine.",
    features: [
      "Coastal-inspired responsive design capturing the Palolem beachfront atmosphere",
      "Interactive food & beverage menu with fresh catch seafood specials",
      "Multi-cuisine categorization (Authentic Goan, Continental, Tandoor, Grills)",
      "Online table reservation system & seating preference selection",
      "Live acoustic music event schedule & artist performance lineup",
      "High-res visual image gallery & dining guest reviews",
      "Google Maps location routing & verified diner testimonials"
    ],
    tech: ["React.js", "Tailwind CSS", "Responsive Web Design", "Table Booking Pipeline", "Google Maps API"],
    liveUrl: "https://www.lajhinga.com/",
    category: "Commercial Client Work",
    badge: "Live Industry Brand",
    isCommercial: true,
    year: "2025 - 2026"
  },
  {
    id: "ind-5",
    title: "9PM Bar & Cafe — Luxury Nightlife Website",
    tagline: "South Goa Nightlife Experience, Live DJ Sets & Craft Cocktails",
    client: "9PM Bar & Cafe",
    industry: "Hospitality & Nightlife",
    projectType: "Website Design & Development",
    image: require("../assets/real world project/9pm.png"),
    summary: "Designed and developed a premium, modern website for 9PM Bar & Cafe, located in Palolem, South Goa. The website showcases the venue’s nightlife experience, live DJ events, signature cocktails, food menu, guest reviews, and gallery through an immersive, visually engaging interface.",
    description: "9PM Bar & Cafe is South Goa's premier hotspot for late-night energy, high-profile DJ sets, and bespoke craft cocktails. The website was engineered with an immersive dark aesthetic, high-contrast neon luminescence, and fluid motion to capture the late-night energy. It features interactive cocktail menus, weekend DJ event lineups, VIP table reservation inquiries, and venue photo galleries.",
    features: [
      "High-energy dark-mode nightlife aesthetic with neon visual identity",
      "Signature cocktail & mixology showcase with ingredient profiles",
      "Live DJ schedules, event calendars & guest artist announcements",
      "Online VIP table reservation & private party booking forms",
      "Venue atmosphere photo & video gallery",
      "Customer reviews, location integration & late-night dining guide"
    ],
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Nightlife UI Experience", "Event Scheduling"],
    liveUrl: "https://www.9pmbarandcafe.com/",
    category: "Commercial Client Work",
    badge: "Live Nightlife Brand",
    isCommercial: true,
    year: "2025 - 2026"
  }
];

export const projects = [
  {
    id: 1,
    title: "SlideNova – Presentation Platform",
    tagline: "Professional Pitch Deck & PPT Design MERN Suite",
    category: "Full Stack",
    image: require("../photos/slidenova.png"),
    summary: "SlideNova is a high-performance MERN web application delivering tailored presentation design services for enterprises, startups, and academic leaders.",
    description: "SlideNova is a comprehensive full-stack presentation services platform engineered with React, Node.js, Express, and MongoDB. It streamlines the lifecycle of pitch decks, corporate presentations, and visual storytelling. Features include interactive service discovery, client consultation booking, requirement upload pipeline, dynamic showcase portfolio, and automated service management.",
    features: [
      "Dynamic interactive service catalog & showcase",
      "Integrated client requirement submission with validation",
      "Full MERN stack architecture with MongoDB data persistence",
      "Responsive glassmorphism UI built with Tailwind CSS"
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    liveUrl: "https://front-slidenova.vercel.app/home",
    githubUrl: "https://github.com/ASHMEETSINGHRENU",
    featured: true,
    year: "2025"
  },
  {
    id: 2,
    title: "InterviewReady – Technical Preparation Hub",
    tagline: "Adaptive Interview Preparation & Coding Platform",
    category: "Full Stack",
    image: require("../photos/interviewready.png"),
    summary: "A purpose-built technical prep engine empowering job candidates with curated DSA challenges, conceptual guides, and real-world mock scenarios.",
    description: "InterviewReady addresses the fragmentation in technical interview prep by consolidating structured coding challenges, core computer science conceptual primers, and interview scenarios into a unified, high-speed web application. Built with modern React workflows and scalable API endpoints.",
    features: [
      "Structured categorized problem repositories",
      "Interactive code concept walkthroughs and solutions",
      "Progressive learning journey with clean UI navigation",
      "RESTful backend data fetching and fast caching"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://interview-r-frontend.vercel.app/",
    githubUrl: "https://github.com/ASHMEETSINGHRENU",
    featured: true,
    year: "2025"
  },
  {
    id: 3,
    title: "WorkWagon – Freelance Marketplace",
    tagline: "Decentralized Service & Talent Connection Portal",
    category: "Full Stack",
    image: require("../photos/freelance.png"),
    summary: "A modern freelancer ecosystem connecting businesses with vetted developers, digital marketers, and creative technologists.",
    description: "WorkWagon simplifies remote service procurement with a streamlined marketplace UI. Clients can explore specialized services, assess freelancer portfolios, and initiate engagements while freelancers can market their capabilities with rich profile cards.",
    features: [
      "Service listing directory with multi-tag filtering",
      "Dynamic freelancer profile cards and review highlights",
      "Intuitive client inquiry and lead capture pipeline",
      "High-speed SPA routing with responsive layouts"
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://frontend-workwagon.vercel.app/",
    githubUrl: "https://github.com/ASHMEETSINGHRENU",
    featured: true,
    year: "2024"
  },
  {
    id: 4,
    title: "Glam Cosmetics E-Commerce",
    tagline: "Luxury Beauty & Personal Care Commerce Platform",
    category: "Web Application",
    image: require("../photos/glam.png"),
    summary: "Responsive cosmetics storefront featuring dynamic product catalogs, wishlist curation, and interactive shopping interactions.",
    description: "Designed and built an end-to-end e-commerce experience for cosmetic and skincare brands. Engineered with a PHP/MySQL backend architecture for catalog management, shopping cart operations, and personalized user wishlists.",
    features: [
      "Dynamic product catalog with category filtering",
      "Wishlist curation and user preference persistence",
      "Relational MySQL schema for products, categories, and orders",
      "Interactive responsive UI designed with Bootstrap and custom CSS"
    ],
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap", "XAMPP"],
    liveUrl: "https://github.com/ASHMEETSINGHRENU/glam2.0",
    githubUrl: "https://github.com/ASHMEETSINGHRENU/glam2.0",
    featured: false,
    year: "2024"
  },
  {
    id: 5,
    title: "AAOKHAAO Food Delivery Portal",
    tagline: "Dynamic Food Ordering & Order Management System",
    category: "Web Application",
    image: require("../photos/aaokhaao.png"),
    summary: "Full-cycle food delivery portal equipped with dual consumer ordering and administrative menu/order control panels.",
    description: "Engineered a responsive food delivery solution featuring customer authentication, live dynamic food menu, custom order submission, and a dedicated administrator dashboard for inventory management and status tracking.",
    features: [
      "Role-based authentication for customers and administrators",
      "Dynamic menu rendering with pricing and availability flags",
      "Order processing pipeline with database state management",
      "Secure SQL database queries and session handling"
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5", "CSS3", "XAMPP"],
    liveUrl: "https://github.com/ASHMEETSINGHRENU/AAOKHAAO-food-delivery",
    githubUrl: "https://github.com/ASHMEETSINGHRENU/AAOKHAAO-food-delivery",
    featured: false,
    year: "2023"
  },
  {
    id: 6,
    title: "Bank Management Enterprise System",
    tagline: "Secure Core Banking & Transaction Engine",
    category: "Software & Systems",
    image: require("../photos/BMS.png"),
    summary: "Robust object-oriented banking application handling accounts, deposits, withdrawals, PIN protection, and audit logs.",
    description: "A secure desktop and server banking suite implemented in Core Java with MySQL database persistence. Demonstrates object-oriented software engineering principles, transactional integrity, input sanitization, and audit ledger tracking.",
    features: [
      "Account lifecycle: opening, validation, PIN modification",
      "Atomic deposit and withdrawal transaction handling",
      "Historical statement generation with database query audit",
      "Clean UI paired with secure JDBC database bridge"
    ],
    tech: ["Core Java", "JDBC", "MySQL", "OOP Architecture", "XAMPP"],
    liveUrl: "https://github.com/ASHMEETSINGHRENU/BANK-MANAGEMENT-SYSTEM",
    githubUrl: "https://github.com/ASHMEETSINGHRENU/BANK-MANAGEMENT-SYSTEM",
    featured: false,
    year: "2023"
  }
];

export const educationHistory = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "D Y Patil University",
    location: "Pune, India",
    period: "2025 – Present",
    status: "In Progress",
    badge: "Current Master's",
    accent: "from-purple-500 to-indigo-500",
    highlights: [
      "Focusing on Advanced Software Engineering, Cloud Architecture, and Distributed Systems",
      "Building production-grade full-stack systems and exploring cutting-edge AI integrations",
      "Collaborative research and development in scalable computing environments"
    ]
  },
  {
    title: "Master Mobility Exchange Program",
    institution: "INTI International University",
    location: "Nilai, Malaysia",
    period: "2025",
    status: "Completed",
    badge: "International Exchange",
    accent: "from-emerald-500 to-teal-500",
    highlights: [
      "Selected for prestigious global academic mobility program",
      "Cross-cultural collaboration on international computing frameworks and software standards",
      "Broadened global perspectives on technology ecosystems and modern product engineering"
    ]
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "GH Raisoni College of Commerce, Science & Technology",
    location: "Nagpur, India",
    period: "2021 – 2024",
    status: "Graduated with Distinction",
    badge: "GPA: 8.0 / 10.0",
    accent: "from-blue-500 to-cyan-500",
    highlights: [
      "Deep foundation in Data Structures, Algorithms, DBMS, Java, and Web Technologies",
      "Led multiple academic capstone software projects and team coding hackathons",
      "Awarded top academic standing across core computing subjects"
    ]
  },
  {
    title: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Dr. Madhukarrao Wasnik PWS College",
    location: "Nagpur, India",
    period: "2020 – 2021",
    status: "Completed",
    badge: "GPA: 6.7 / 10.0",
    accent: "from-amber-500 to-orange-500",
    highlights: [
      "Specialized in Science Stream with Mathematics, Physics, and Computer Science",
      "Formed strong analytical problem-solving and algorithmic foundation"
    ]
  }
];

export const experienceHistory = [
  {
    role: "Full-Stack Web Developer Intern",
    company: "Labmentix Solutions",
    location: "Remote / Hybrid",
    period: "2024",
    type: "Professional Internship",
    description: "Developed real-world full-stack web applications, architecting responsive frontend interfaces, writing robust REST APIs in Node.js, and integrating MongoDB databases.",
    documents: [
      {
        title: "Official Offer Letter",
        image: require("../photos/offer_letter.png"),
        pdf: "/Offer_L.pdf"
      },
      {
        title: "Internship Certificate of Completion",
        image: require("../photos/labmentix_Certificate.png"),
        pdf: "/labmentix.pdf"
      }
    ],
    achievements: [
      "Architected clean, responsive UI components using React and Tailwind CSS",
      "Integrated secure authentication tokens and custom RESTful API endpoints",
      "Gained hands-on expertise in agile sprints, team code reviews, and Git version control workflows"
    ]
  }
];

export const certificatesData = {
  global: [
    {
      id: "g1",
      title: "Advanced Software Engineering Simulation",
      issuer: "Walmart Global Tech (via Forage)",
      date: "2026",
      category: "Global Simulation",
      image: require("../photos/walmart.png"),
      pdf: "/walmart.pdf",
      skillsLearned: ["Advanced Data Structures", "Relational Database Design", "Processor Architecture", "Software Optimization"],
      featured: true
    },
    {
      id: "g2",
      title: "Software Engineering Simulation",
      issuer: "Commonwealth Bank (via Forage)",
      date: "2026",
      category: "Global Simulation",
      image: require("../photos/commonwealth.png"),
      pdf: "/common_wealth.pdf",
      skillsLearned: ["Microservices", "API Security", "Enterprise Architecture", "DevOps Principles"],
      featured: true
    },
    {
      id: "g3",
      title: "Front-End Software Engineering Simulation",
      issuer: "Skyscanner (via Forage)",
      date: "2026",
      category: "Global Simulation",
      image: require("../photos/sykscanner.png"),
      pdf: "/sykscanner.pdf",
      skillsLearned: ["React Architecture", "Accessibility (a11y)", "Responsive Design", "Client-Side Testing"],
      featured: true
    },
    {
      id: "g4",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (via Forage)",
      date: "2026",
      category: "Global Simulation",
      image: require("../photos/deloitte.png"),
      pdf: "/deloitte.pdf",
      skillsLearned: ["Data Quality Assessment", "Insight Visualization", "Executive Storytelling", "Statistical Analysis"],
      featured: true
    },
    {
      id: "g5",
      title: "GenAI Powered Data Analytics",
      issuer: "Tata Group (via Forage)",
      date: "2026",
      category: "Global Simulation",
      image: require("../photos/tata.png"),
      pdf: "/tata.pdf",
      skillsLearned: ["Generative AI Tools", "Predictive Analytics", "Business Intelligence", "Prompt Engineering"],
      featured: true
    }
  ],
  professional: [
    {
      id: "p1",
      title: "Software Development Internship Certificate",
      issuer: "Labmentix Solutions",
      date: "2024",
      category: "Professional Experience",
      image: require("../photos/labmentix_Certificate.png"),
      pdf: "/labmentix.pdf",
      skillsLearned: ["Full Stack Development", "MERN Stack", "REST APIs", "Production Code Quality"],
      featured: true
    },
    {
      id: "p2",
      title: "Full Stack Web Development",
      issuer: "Apna College",
      date: "2024",
      category: "Professional Certification",
      image: require("../photos/fullstack.png"),
      pdf: "/Apna_college.pdf",
      skillsLearned: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful Architecture"],
      featured: true
    },
    {
      id: "p3",
      title: "AI & Machine Learning Foundations",
      issuer: "AI Specialized Academy",
      date: "2024",
      category: "Professional Certification",
      image: require("../photos/AIML.png"),
      pdf: "/AIML.pdf",
      skillsLearned: ["Supervised Learning", "Model Training", "Neural Networks", "Data Preprocessing"],
      featured: true
    },
    {
      id: "p4",
      title: "Version Control with Git & GitHub",
      issuer: "Open Academy",
      date: "2024",
      category: "Professional Certification",
      image: require("../photos/vorsion.png"),
      pdf: "/version.pdf",
      skillsLearned: ["Branching Workflows", "Pull Requests", "Merge Conflict Resolution", "CI/CD Actions"],
      featured: false
    },
    {
      id: "p5",
      title: "Cloud Computing Fundamentals",
      issuer: "Cloud Institute",
      date: "2024",
      category: "Professional Certification",
      image: require("../photos/cloud.png"),
      pdf: "/Cloud_C.pdf",
      skillsLearned: ["Cloud Storage", "Serverless Infrastructure", "Virtual Machines", "Scalability"],
      featured: false
    }
  ],
  udemy: [
    {
      id: "u1",
      title: "AI & Machine Learning Mastery",
      issuer: "Udemy",
      date: "2024",
      category: "Udemy Specialization",
      image: require("../photos/AI&ML.png"),
      pdf: "/AI&ML.pdf",
      skillsLearned: ["Deep Learning", "NLP Basics", "TensorFlow", "Computer Vision"],
      featured: true
    },
    {
      id: "u2",
      title: "Data Science Complete Bootcamp",
      issuer: "Udemy",
      date: "2024",
      category: "Udemy Specialization",
      image: require("../photos/DS.png"),
      pdf: "/DS.pdf",
      skillsLearned: ["Pandas", "NumPy", "Matplotlib", "Exploratory Data Analysis"],
      featured: true
    },
    {
      id: "u3",
      title: "Full Stack Web Development Masterclass",
      issuer: "Udemy",
      date: "2024",
      category: "Udemy Specialization",
      image: require("../photos/FullS.png"),
      pdf: "/fullstack.pdf",
      skillsLearned: ["Modern JavaScript", "React State Management", "Node Security", "API Design"],
      featured: false
    },
    {
      id: "u4",
      title: "Java Programming Masterclass",
      issuer: "Udemy",
      date: "2024",
      category: "Udemy Specialization",
      image: require("../photos/java.png"),
      pdf: "/java.pdf",
      skillsLearned: ["OOP Concepts", "Multithreading", "Collections Framework", "JDBC & MySQL"],
      featured: false
    },
    {
      id: "u5",
      title: "Python for Data Science & ML",
      issuer: "Udemy",
      date: "2024",
      category: "Udemy Specialization",
      image: require("../photos/python.png"),
      pdf: "/python.pdf",
      skillsLearned: ["Python Data Structures", "Statistical Analysis", "Scikit-Learn", "Jupyter"],
      featured: false
    },
    {
      id: "u6",
      title: "Machine Learning A-Z",
      issuer: "Udemy",
      date: "2024",
      category: "Udemy Specialization",
      image: require("../photos/ML.png"),
      pdf: "/ML.pdf",
      skillsLearned: ["Regression", "Classification", "Clustering", "Model Evaluation"],
      featured: false
    }
  ]
};
