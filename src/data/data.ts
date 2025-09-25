import { IconType } from "react-icons";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaFigma,
  FaDatabase,
  FaFirefoxBrowser,
  FaChrome,
  FaGulp,
  FaGrunt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiVite,
  SiGoland,
  SiCplusplus,
  SiSass,
  SiLess,
  SiBootstrap,
  SiVuedotjs,
  SiJest,
  SiCypress,
  SiC,
  SiJson,
  SiVercel,
  SiStyledcomponents,
  SiTailwindcss,
  SiKubernetes,
} from "react-icons/si";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineViewKanban } from "react-icons/md";

export interface Project {
  id: string;
  title: string;
  image: string;
  skillsUsed: string[];
  AllSkills: string[];
  description: string[];
  github: string;
  deploy: string;
  shortDescription: string;
}

export interface Skills {
  name: string;
  icon: IconType;
  category: "frontend" | "backend" | "tools";
  color: string;
}

export const skills: Skills[] = [
  // -- Front-End --
  { name: "HTML5", category: "frontend", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", category: "frontend", icon: FaCss3Alt, color: "#1572B6" },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJs,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "#3178C6",
  },
  { name: "Sass", category: "frontend", icon: SiSass, color: "#CC6699" },
  { name: "LESS", category: "frontend", icon: SiLess, color: "#2b4d85ff" },
  {
    name: "Styled Components",
    category: "frontend",
    icon: SiStyledcomponents,
    color: "#DB7093",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "tailwindcss",
    category: "frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "React (Hooks)",
    category: "frontend",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "#000000",
  },
  { name: "Redux", category: "frontend", icon: SiRedux, color: "#764ABC" },
  { name: "Vue.js", category: "frontend", icon: SiVuedotjs, color: "#4FC08D" },
  {
    name: "SEO Técnico",
    category: "frontend",
    icon: FaMagnifyingGlass,
    color: "#6185fbff",
  },

  // -- Back-End --
  { name: "Node.js", category: "backend", icon: FaNodeJs, color: "#339933" },
  { name: "Python", category: "backend", icon: FaPython, color: "#3776AB" },
  { name: "C", category: "backend", icon: SiC, color: "#A8B9CC" },
  { name: "C++", category: "backend", icon: SiCplusplus, color: "#00599C" },
  { name: "Golang", category: "backend", icon: SiGoland, color: "#00ADD8" },
  { name: "JSON", category: "backend", icon: SiJson, color: "#000000" },
  { name: "SQL", category: "backend", icon: FaDatabase, color: "#4479A1" },

  // -- Ferramentas --
  { name: "Jest", category: "tools", icon: SiJest, color: "#C21325" },
  {
    name: "React Testing Library",
    category: "tools",
    icon: FaReact,
    color: "#61DAFB",
  },
  { name: "Cypress", category: "tools", icon: SiCypress, color: "#2f4158ff" },
  { name: "Gulp", category: "tools", icon: FaGulp, color: "#CF4647" },
  { name: "Grunt", category: "tools", icon: FaGrunt, color: "#FBA919" },
  { name: "Parcel", category: "tools", icon: BsBoxSeam, color: "#F5BE03" },
  { name: "Vite", category: "tools", icon: SiVite, color: "#646CFF" },
  { name: "Git", category: "tools", icon: FaGit, color: "#F05032" },
  { name: "Vercel", category: "tools", icon: SiVercel, color: "#000000" },
  {
    name: "Chrome DevTools",
    category: "tools",
    icon: FaChrome,
    color: "#4285F4",
  },
  {
    name: "Firefox DevTools",
    category: "tools",
    icon: FaFirefoxBrowser,
    color: "#FF9400",
  },
  { name: "Figma", category: "tools", icon: FaFigma, color: "#F24E1E" },
  { name: "GitHub", category: "tools", icon: FaGithub, color: "#000000" },
  {
    name: "Kanban",
    category: "tools",
    icon: MdOutlineViewKanban,
    color: "#0066ffff",
  },
  {
    name: "Kubernetes",
    category: "tools",
    icon: SiKubernetes,
    color: "#326CE5",
  },
];
