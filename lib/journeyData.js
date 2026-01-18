import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiNextdotjs, SiSqlite } from "react-icons/si";

export const journey = [
  {
    type: "experience",
    company: "Enablero Pvt. Ltd",
    location: "India",
    position: "Software Engineer Intern",
    duration: "Oct 2025 – Present",
    logoUrl: "/assets/journey/experience/enablero-logo.png",
    description:
      "Built and optimized frontend features for enterprise ERP systems using React.js, TypeScript, and MUI, enhancing performance and consistency. Integrated REST APIs and developed reusable components for internal libraries, improving maintainability and workflow efficiency. Participated in testing, debugging, and Agile processes to ensure reliable, high-quality user experiences.",
  },
  {
    type: "education",
    institution: "JSPM's Bhagwant Institute of Technology, Barshi",
    logoUrl: "/assets/journey/education/college.png",
    qualification: "B.Tech in Computer Science Engineering",
    duration: "2022 – 2026 (Expected)",
    description:
      "Pursuing a Bachelor’s degree in Computer Science Engineering, building a foundation in programming, data structures, algorithms, databases, and full-stack development.",
  },
  {
    type: "education",
    institution: "NxtWave Disruptive Technologies",
    logoUrl: "/assets/journey/education/nxtwave.png",
    qualification: "Industry Ready Certification in Full-Stack Development",
    duration: "May 2023 – Present",
    description:
      "Hands-on training in modern web technologies including JavaScript, React.js, Node.js, Express.js, and databases, with project-based learning to develop industry-ready applications.",
  },
  {
    type: "skills",
    name: "React.js",
    icon: <FaReact />,
    duration: "Learned in 2025",
    certificate: "/assets/journey/certificates/React js.png",
    description:
      "Proficient in React.js with expertise in hooks, state handling, and component-based structures. Delivered fast, interactive, and scalable SPAs across multiple projects.",
  },
  {
    type: "skills",
    name: "Next.js",
    icon: <SiNextdotjs />,
    duration: "Learned in 2025",
    description:
      "Proficient in Next.js for building server-side rendered and static web applications. Experienced with routing, API routes, and optimized asset handling for performance.",
  },
  {
    type: "skills",
    name: "Node.js",
    icon: <FaNodeJs />,
    duration: "Learned in 2025",
    description:
      "Familiar with Node.js, mainly for building RESTful APIs and handling simple server-side tasks. Experienced in connecting APIs to web applications.",
  },
  {
    type: "skills",
    name: "SQL",
    icon: <SiSqlite />,
    duration: "Learned in 2024",
    certificate: "/assets/journey/certificates/SQL.png",
    description:
      "Proficient in SQL for creating, managing, and querying relational databases, with experience integrating SQL into applications for efficient data handling.",
  },
  {
    type: "skills",
    name: "MongoDB",
    icon: <SiMongodb />,
    duration: "Learned in 2024",
    description:
      "Basic knowledge of MongoDB, mainly for handling data storage and retrieval. Used it in projects by integrating with APIs.",
  },
  {
    type: "skills",
    name: "JavaScript",
    icon: <FaJs />,
    duration: "Learned in 2024",
    certificate: "/assets/journey/certificates/JavaScript.png",
    description:
      "Proficient in JavaScript ES6+, leveraging async/await, events, and DOM operations. Delivered smooth user interactions and enhanced application performance.",
  },
  {
    type: "skills",
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    duration: "Learned in 2024",
    description:
      "Skilled in Tailwind CSS for creating responsive, modern, and utility-first designs. Built scalable layouts and enhanced UI consistency across projects.",
  },
  {
    type: "skills",
    name: "HTML",
    icon: <FaHtml5 />,
    duration: "Learned in 2023",
    certificate: "/assets/journey/certificates/Static.png",
    description:
      "Built responsive, SEO-friendly web pages with HTML5 semantics and forms, ensuring accessibility and best practices.",
  },
  {
    type: "skills",
    name: "CSS",
    icon: <FaCss3Alt />,
    duration: "Learned in 2023",
    certificate: "/assets/journey/certificates/Static.png",
    description:
      "Proficient in CSS3, leveraging Flexbox, Grid, and responsive design techniques. Skilled in crafting layouts that are both visually appealing and user-friendly.",
  },
  {
    type: "skills",
    name: "Python",
    icon: <FaPython />,
    duration: "Learned in 2023",
    certificate: "/assets/journey/certificates/Python.png",
    description:
      "Learned the fundamentals of Python programming, including syntax, control structures, functions, and basic problem-solving.",
  },
];
