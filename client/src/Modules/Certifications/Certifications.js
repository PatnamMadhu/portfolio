import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Certifications = ({ theme }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCertifications([
        {
          title: "Microsoft Certified Azure Fundamentals",
          provider: "Azure",
          url: "https://drive.google.com/file/d/1WjKb7_LV-nE4MGYstiJWHWWoFZR5OIb7/view?usp=sharing",
          // logo: process.env.PUBLIC_URL + "/assets/Azure.png",
        },
        {
          title: "Cybersecurity Compliance Framework, Standards & Regulations",
          provider: "IBM",
          url: "https://coursera.org/share/6ee5e7c8d798e632372973974b9b22f3",
          // logo: process.env.PUBLIC_URL + "/assets/Hackerrank.png",
        },
        {
          title: "Data Structures and Algorithms",
          provider: "GeeksForGeeks",
          url: "https://shorturl.at/Ot1VR",
          // logo: process.env.PUBLIC_URL + "/assets/GFG.jpg",
        },
        {
          title: "All in One Python Development Suite",
          provider: "Simplilearn",
          url: "https://drive.google.com/file/d/1SbiVkdkMjdk-RicEECpsCTz3MsD8fYDb/view?usp=sharing",
          // logo: process.env.PUBLIC_URL + "/assets/Simplilearn.png",
        },
      ]);
      setIsDataLoaded(true);
    }, 500);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <div
      className={`min-h-screen py-10 px-6 flex flex-col items-center ${
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
        🏅 Certifications & Achievements
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className={`rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-105 ${
              theme === "dark"
                ? "bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-purple-500/30"
                : "bg-white border border-gray-200 hover:shadow-purple-300/30"
            }`}
          >
            {cert.logo && (
              <img
                src={cert.logo}
                alt={`${cert.provider} logo`}
                className="w-12 h-12 object-contain mb-4"
              />
            )}

            <h2 className="text-lg font-semibold mb-1 text-purple-400">
              {cert.title}
            </h2>

            <p className="text-sm mb-2 font-medium">{cert.provider}</p>

            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block text-sm font-semibold underline ${
                theme === "dark"
                  ? "text-teal-300 hover:text-pink-300"
                  : "text-indigo-600 hover:text-pink-600"
              }`}
            >
              View Certification
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;