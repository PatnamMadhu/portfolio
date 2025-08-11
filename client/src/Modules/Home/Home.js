import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const titles = [
  "🚀 AI/ML Enthusiast",
  "🌐 Full-Stack Developer",
  "🎨 Frontend Specialist",
  "🧠 Software Architect",
];

const Home = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % titles.length);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  const containerBg =
    theme === "dark"
      ? "bg-gradient-to-br from-gray-950 to-gray-800 text-white"
      : "bg-gradient-to-br from-white to-gray-100 text-gray-900";

  return (
    <section
      id="home"
      className={`${containerBg} min-h-screen flex items-center justify-center px-6`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Intro & Contact */}
        <motion.div
          className="space-y-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            Madhu Patnam
          </h1>

          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-400">
            Senior Software Engineer with 5 years of experience building and deploying scalable mobile, backend, and full-stack applications across fintech, telecom, and enterprise domains. Skilled in React Native (iOS & Android), Java, and Python for developing RESTful APIs, asynchronous services, and cloud-native solutions. Experienced in backend development with AWS Lambda, DynamoDB, Cognito, API Gateway, and S3, along with microservices using Spring Boot. Proficient in debugging, performance optimization, and Git-based workflows with CI/CD pipelines (AWS CodePipeline, GitHub Actions, Azure DevOps). Adept at independently driving product goals, delivering high-quality releases, and collaborating cross-functionally to accelerate development cycles.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="mailto:patnammadhu1999@gmail.com"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition shadow-md"
            >
              <FaEnvelope /> <span>Email Me</span>
            </a>
            <a
              href="tel:+16674420364"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition shadow-md"
            >
              <FaPhone /> <span>Call Me</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Titles & Social */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Rotating Titles */}
          <div className="relative h-12 mb-8 flex items-center justify-center">
            <div className="absolute inset-0 animate-pulse rounded-full border-2 border-purple-500" />
            <AnimatePresence mode="wait">
              <motion.h2
                key={titles[currentIndex]}
                className="text-3xl font-semibold text-center z-10 bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                {titles[currentIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 text-3xl text-gray-500 dark:text-gray-300">
            <a
              href="https://linkedin.com/in/patnam-madhu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/patnammadhu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/patnammadhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <SiLeetcode />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;