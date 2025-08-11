import React from "react";
import { motion } from "framer-motion";
import {
  FaPython, FaJava, FaReact, FaGitAlt, FaDocker, FaVisualStudio, FaHtml5,
  FaCss3Alt, FaJsSquare, FaCode, FaCloud, FaTools, FaDatabase,
  FaNetworkWired, FaAngular, FaNodeJs, FaJenkins, FaBootstrap,
  FaAws
} from "react-icons/fa";
import {
  SiSpringboot,
  SiGo,
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiRedis,
  SiExpress,
  SiTerraform,
  SiKubernetes,
  SiGithubactions,
  SiPostman,
  SiApachemaven,
  SiJunit5,
  SiMongodb
} from "react-icons/si";

// 🎯 Skill Categories
const categorizedSkills = [
  {
    title: "Programming & Backend",
    skills: [
      { icon: <FaJava className="text-[#007396]" />, name: "Core Java" },
      { icon: <SiSpringboot className="text-[#6DB33F]" />, name: "Spring Boot" },
      { icon: <FaPython className="text-[#306998]" />, name: "Python" },
      { icon: <FaJsSquare className="text-[#F7DF1E]" />, name: "JavaScript" },
      { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
      { icon: <SiGo className="text-[#00ADD8]" />, name: "Go" },
      { icon: <FaNodeJs className="text-[#83CD29]" />, name: "Node.js" },
      { icon: <FaCode className="text-gray-600" />, name: "RESTful APIs" },
      { icon: <SiExpress className="text-[#000000]" />, name: "Express.js" },
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
      { icon: <FaReact className="text-[#61DAFB]" />, name: "React Native" },
      { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
      { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS3" },
      { icon: <SiTailwindcss className="text-[#38B2AC]" />, name: "Tailwind CSS" },
      { icon: <FaBootstrap className="text-[#7952B3]" />, name: "Bootstrap" },
      { icon: <FaAngular className="text-[#DD0031]" />, name: "Angular" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: <FaDatabase className="text-[#F29111]" />, name: "MySQL" },
      { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
      { icon: <SiRedis className="text-[#DC382D]" />, name: "Redis" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { icon: <FaAws className="text-[#FF9900]" />, name: "AWS" },
      { icon: <FaCloud className="text-[#0078D4]" />, name: "Azure" },
      { icon: <SiTerraform className="text-[#623CE4]" />, name: "Terraform" },
      { icon: <FaDocker className="text-[#0db7ed]" />, name: "Docker" },
      { icon: <SiKubernetes className="text-[#326CE5]" />, name: "Kubernetes" },
      { icon: <FaGitAlt className="text-[#F1502F]" />, name: "Git" },
      { icon: <SiGithubactions className="text-[#2088FF]" />, name: "GitHub Actions" },
      { icon: <FaJenkins className="text-[#D24939]" />, name: "Jenkins" },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      { icon: <SiPostman className="text-[#FF6C37]" />, name: "Postman" },
      { icon: <SiApachemaven className="text-[#C71A36]" />, name: "Maven" },
      { icon: <SiJunit5 className="text-[#25A162]" />, name: "JUnit" },
      { icon: <FaCode className="text-[#F6C915]" />, name: "Mockito" }, // No official icon
      { icon: <FaTools className="text-gray-600" />, name: "VS Code" },
      { icon: <FaTools className="text-gray-600" />, name: "IntelliJ IDEA" },
    ],
  },
];

const Skills = ({ theme }) => {
  return (
    <section
      id="skills"
      className={`py-14 px-6 flex flex-col items-center ${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : "bg-gradient-to-br from-white to-gray-100 text-gray-900"
      }`}
    >
      <motion.h1
        className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🧠 My Skills
      </motion.h1>

      {categorizedSkills.map((category, idx) => (
        <div key={idx} className="mb-12 w-full max-w-6xl">
          <h2
            className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            {category.title}
          </h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
            initial="hidden"
            animate="visible"
          >
            {category.skills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.15 },
                  },
                }}
                initial="hidden"
                animate="visible"
                className={`flex flex-col items-center justify-center p-5 rounded-2xl shadow-xl transform transition hover:scale-105 backdrop-blur-md ${
                  theme === "dark"
                    ? "bg-white/10 border border-white/20 hover:shadow-purple-500/30"
                    : "bg-white border border-gray-200 hover:shadow-purple-300/30"
                }`}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-lg font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
