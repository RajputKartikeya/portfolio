import {
  // Framework Icons
  SiReact,
  SiNextdotjs,
  SiSpring,
  SiNodedotjs,
  SiFlutter,
  SiVite,

  // Language Icons
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDart,

  // Database Icons
  SiMongodb,
  SiMysql,
  SiFirebase,

  // Tool Icons
  SiGit,
  SiKubernetes,
  SiBitbucket,
  SiJira,
  SiDocker,
  SiAmazon,
  SiApache,
  SiGradle,
  SiHibernate,

  // Styling & Other
  SiTailwindcss,
} from "react-icons/si";

import {
  Code2,
  Database,
  Network,
  Server,
  Globe,
  Shield,
  Package,
} from "lucide-react";

export const techIcons = {
  // Languages
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Dart: SiDart,
  HTML: SiHtml5,
  CSS: SiCss3,
  "HTML/CSS": SiHtml5,

  // Frontend Frameworks
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Flutter: SiFlutter,
  "Vite.js": SiVite,

  // Backend Technologies
  "Spring Boot": SiSpring,
  "Spring Framework": SiSpring,
  "Spring Security": Shield,
  "Node.js": SiNodedotjs,
  "RESTful APIs": Code2,
  Microservices: Network,
  "JPA/Hibernate": SiHibernate,
  Maven: SiApache,
  Gradle: SiGradle,
  "Maven/Gradle": SiApache,

  // Databases
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  "H2 Database": Database,

  // Development Tools
  Git: SiGit,
  Jira: SiJira,
  Kubernetes: SiKubernetes,
  Bitbucket: SiBitbucket,
  Docker: SiDocker,
  AWS: SiAmazon,
};

// Category color mapping for consistent theming
export const categoryColors = {
  frontend: "text-primary-blue",
  backend: "text-primary-purple",
  database: "text-primary-cyan",
  mobile: "text-green-400",
  tools: "text-yellow-400",
  cloud: "text-orange-400",
  language: "text-indigo-400",
} as const;

export type TechName = keyof typeof techIcons;
export type CategoryType = keyof typeof categoryColors;
