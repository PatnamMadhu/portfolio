import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import {
  SiReact,
  SiNodedotjs,
  SiSocketdotio,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiGithub,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiR,
  SiDatabricks,
  SiGo,
  SiMongodb,
} from "react-icons/si";

// Icon mapping
const iconMap = {
  React: <SiReact />,
  "Node.js": <SiNodedotjs />,
  "Socket.IO": <SiSocketdotio />,
  WebSockets: <SiSocketdotio />,
  "Real-Time Communication": <SiSocketdotio />,
  JavaScript: <SiJavascript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Framer Motion": <SiFramer />,
  "GitHub Pages": <SiGithub />,
  Python: <SiPython />,
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  Matplotlib: <SiDatabricks />,
  "Scikit-learn": <SiScikitlearn />,
  "Linear Regression": <SiScikitlearn />,
  "Decision Trees": <SiScikitlearn />,
  "Data Visualization": <SiDatabricks />,
  R: <SiR />,
  "R Studio": <SiR />,
  "Data Mining": <SiDatabricks />,
  "Gradient Boosting": <SiScikitlearn />,
  "Random Forest": <SiScikitlearn />,
  Go: <SiGo />,
  MongoDB: <SiMongodb />,
  "go-chi/chi": <FaCode title="go-chi/chi" />,
  "mgo.v2": <FaCode title="mgo.v2" />,
  "thedevsaddam/renderer": <AiOutlineApi title="renderer" />,
};

// Project data
const projects = [
  {
    id: 1,
    title: "VelariAI: Grok AI–Powered Interview Coach",
    description:
      "VelariAI is a real-time platform combining speech-to-text and Grok AI to simulate live interviews, offering instant feedback and analytics. Built using React, Node.js, WebSockets, and Grok AI.",
    skills: ["React", "Node.js", "Socket.IO", "WebSockets", "Real-Time Communication", "Grok AI"],
    githubLink: "https://github.com/PatnamMadhu/VelmaAi",
  },
  {
    id: 2,
    title: "golang-todo: RESTful To-Do Web Service",
    description:
      "A full-stack Go web service with RESTful endpoints, MongoDB, and go-chi routing. Features logging middleware and graceful shutdown logic.",
    skills: ["Go", "MongoDB", "go-chi/chi", "mgo.v2", "thedevsaddam/renderer"],
    githubLink: "https://github.com/AkhilSharma90/golang-todo",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio site showcasing personal projects and skills using React and Tailwind.",
    skills: ["JavaScript", "React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    githubLink: "https://github.com/PatnamMadhu/portfolio",
  },
  {
    id: 4,
    title: "Bank Loan Default Prediction",
    description:
      "Analyzed 100K borrowers with RStudio to predict defaulters. Achieved 96% accuracy comparing Random Forest and Gradient Boosting models.",
    skills: ["R", "R Studio", "Data Mining", "Gradient Boosting", "Random Forest", "Decision Trees"],
  },
];

const Projects = ({ theme }) => {
  return (
    <div
      className={`min-h-screen p-10 transition-colors ${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-gradient-to-br from-white to-gray-100 text-gray-900"
      }`}
    >
      <motion.h1
        className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-3 text-purple-300">{project.title}</h2>
            <p className="text-sm mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 bg-purple-800/20 text-purple-100 px-2 py-1 rounded text-xs shadow-inner"
                >
                  {iconMap[skill] || null} {skill}
                </span>
              ))}
            </div>

            {project.githubLink && (
              <div className="text-right">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-purple-400 hover:text-pink-400 flex items-center justify-end"
                >
                  View on GitHub <FaGithub className="ml-2 text-xl" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;