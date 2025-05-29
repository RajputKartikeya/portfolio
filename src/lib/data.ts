export const personalInfo = {
  name: "Kartikeya Rajput",
  title: "Software Engineer",
  tagline: "Building innovative solutions with modern technologies",
  description:
    "Software Engineer with hands-on experience in full-stack development using React.js, Next.js, Spring Boot, and Flutter. Proficient in building scalable web applications with RESTful APIs, database integration (MongoDB, MySQL), and cloud services (Firebase). Experienced in modern development practices including TypeScript, authentication systems, and responsive UI design.",
  email: "kartikeyarajput7@gmail.com",
  phone: "+91 9821557639",
  location: "New Delhi, India",
  linkedin: "https://www.linkedin.com/in/kartikeyarajput7",
  github: "https://github.com/Kartikeyarajput7",
};

export const experience = [
  {
    id: 1,
    company: "Siemens Ltd",
    position: "Intern",
    location: "Gurugram, Haryana",
    duration: "Feb 2025 – Apr 2025",
    description: [
      "Gained hands-on experience with SCADA architectures and RTU configuration for metro rail automation systems across 3 substations",
      "Configured and tested failover mechanisms within operational and backup control centers, ensuring seamless transition during simulated outages and minimizing data loss by 99% through robust data replication strategies",
    ],
    technologies: ["SCADA", "RTU Configuration", "Metro Rail Systems"],
    current: true,
  },
  {
    id: 2,
    company: "Bharti Airtel Pvt. Ltd",
    position: "Software Developer Intern",
    location: "Gurugram, Haryana",
    duration: "Aug 2024 – Jan 2025",
    description: [
      "Collaborated on innovative design solutions, integrating backend with frontend using Vite.js & TypeScript. Improved system efficiency by 25%",
      "Enhanced frontend functionality, improving user experience metrics by 30%. Leveraged Jira for project management",
      "Built UI and integrated backend for internal API creation tool, reducing development time by 40%",
    ],
    technologies: ["Vite.js", "TypeScript", "Frontend Development", "Jira"],
    current: false,
  },
  {
    id: 3,
    company: "Sanskrit e Solutions & Services Pvt. Ltd",
    position: "Intern",
    location: "Siri Fort, New Delhi",
    duration: "Aug 2023 – Oct 2023",
    description: [
      "Created mobile app for custom OMR sheets using OpenCV, integrated Flutter and Java",
      "Led development of React.js and Spring Boot web app for streamlined hiring with MySQL integration",
    ],
    technologies: [
      "OpenCV",
      "Flutter",
      "Java",
      "React.js",
      "Spring Boot",
      "MySQL",
    ],
    current: false,
  },
];

export const projects = [
  {
    id: 1,
    title: "Live Streaming App",
    description:
      "Full-stack video streaming application with glassmorphism UI design and drag-and-drop functionality",
    longDescription:
      "Built Spring Boot backend with H2 database and 6 RESTful API endpoints supporting MP4 video uploads up to 100MB. Engineered React 18 frontend with TypeScript, implementing glass-morphism UI design and drag-and-drop video upload functionality.",
    technologies: [
      "React.js",
      "Spring Boot",
      "TypeScript",
      "H2 Database",
      "RESTful APIs",
    ],
    githubUrl: "https://github.com/RajputKartikeya/streamingapp",
    liveUrl: "",
    image: "/projects/streaming-app.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Modern task management application with authentication and filtering capabilities",
    longDescription:
      "Architected full-stack application using Next.js 15 App Router with MongoDB and NextAuth.js JWT-based authentication system. Implemented task filtering across 3 priority levels, 3 status categories, and search functionality using shadcn/ui components.",
    technologies: ["Next.js", "MongoDB", "NextAuth.js", "shadcn/ui", "JWT"],
    githubUrl: "https://github.com/RajputKartikeya/TaskManagement",
    liveUrl: "",
    image: "/projects/task-management.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "BeachSafe India",
    description:
      "Mobile application for beach safety assessment across Indian coastlines",
    longDescription:
      "Developed Flutter application covering 20+ Indian beaches across 8 states with automatic safety assessment based on wave height. Integrated Firebase Realtime Database with Google Maps API, implementing role-based access controls and offline data persistence.",
    technologies: [
      "Flutter",
      "Firebase",
      "Google Maps API",
      "Real-time Database",
    ],
    githubUrl: "https://github.com/RajputKartikeya/beachsafteyapp",
    liveUrl: "",
    image: "/projects/beachsafe-india.jpg",
    featured: true,
  },
];

export const skills = {
  languages: [
    { name: "Java", level: 90, category: "backend" },
    { name: "JavaScript", level: 95, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
  ],
  frontend: [
    { name: "React.js", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Flutter", level: 80, category: "mobile" },
  ],
  backend: [
    { name: "Spring Boot", level: 85, category: "backend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "RESTful APIs", level: 85, category: "backend" },
    { name: "Microservices", level: 75, category: "backend" },
  ],
  database: [
    { name: "MongoDB", level: 80, category: "database" },
    { name: "MySQL", level: 85, category: "database" },
    { name: "Firebase", level: 80, category: "database" },
    { name: "H2 Database", level: 70, category: "database" },
  ],
  tools: [
    { name: "Git", level: 90, category: "tools" },
    { name: "Jira", level: 85, category: "tools" },
    { name: "Kubernetes", level: 70, category: "tools" },
    { name: "Bitbucket", level: 80, category: "tools" },
  ],
};

export const education = [
  {
    id: 1,
    institution: "Bhagwan Parshuram Institute of Technology",
    degree: "B.Tech in Information Technology",
    duration: "2021-2025",
    location: "Delhi, India",
    cgpa: "8.5 / 10.0",
    current: true,
  },
  {
    id: 2,
    institution: "Basava International School",
    degree: "XII th Standard",
    duration: "2021",
    location: "Delhi, India",
    percentage: "81.5%",
    current: false,
  },
];

export const leadership = [
  {
    id: 1,
    organization: "Google Student Development Club, BPIT",
    position: "App Dev Head",
    duration: "2023 – 2024",
    description:
      "Training & Development - Mentored 10+ students within the 2-day Flutter workshop on complex app development challenges, fostering deeper understanding and solidifying workshop concepts as noted by positive testimonials.",
  },
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
