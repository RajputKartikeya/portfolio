import {
  // Framework Icons
  SiReact,
  SiNextdotjs,
  SiSpring,
  SiNodedotjs,
  SiFlutter,

  // Language Icons
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiHtml5,
  SiCss3,

  // Database Icons
  SiMongodb,
  SiMysql,
  SiFirebase,

  // Tool Icons
  SiGit,
  SiKubernetes,
  SiBitbucket,
  SiJira,

  // Styling & Other
  SiTailwindcss,
} from "react-icons/si";

import { Code2, Database, Network, Server, Globe } from "lucide-react";

export const techIcons = {
  // Languages
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "HTML/CSS": SiHtml5,

  // Frontend Frameworks
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Flutter: SiFlutter,

  // Backend Technologies
  "Spring Boot": SiSpring,
  "Node.js": SiNodedotjs,
  "RESTful APIs": Code2,
  Microservices: Network,

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
};

// Category color mapping for consistent theming
export const categoryColors = {
  frontend: "text-primary-blue",
  backend: "text-primary-purple",
  database: "text-primary-cyan",
  mobile: "text-green-400",
  tools: "text-yellow-400",
} as const;

export type TechName = keyof typeof techIcons;
export type CategoryType = keyof typeof categoryColors;
