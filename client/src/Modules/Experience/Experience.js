import React, { useReducer } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import * as Experience_Hook from "./Experience_Hook";
import * as Experience_BusinessLogic from "./Experience_BusinessLogic";
import { FaCircle } from "react-icons/fa";

const Experience = ({ theme }) => {
  const [state, dispatch] = useReducer(
    Experience_Hook.experienceReducer,
    Experience_Hook.initialState
  );
  const reduxDispatch = useDispatch();
  const objContext = {
    state,
    dispatch,
    reduxDispatch,
    Experience_BusinessLogic: new Experience_BusinessLogic.Experience_BusinessLogic(),
  };
  Experience_Hook.useFetchExperiences(objContext);

  return (
    <section
      className={`py-16 px-6 flex flex-col items-center ${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : "bg-gradient-to-tr from-white to-gray-100 text-gray-900"
      }`}
    >
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        💼 My Experience
      </motion.h2>

      <div className="relative max-w-6xl w-full">
        {/* Central timeline line */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
            theme === "dark"
              ? "bg-gradient-to-b from-purple-500 to-blue-400"
              : "bg-gradient-to-b from-indigo-300 to-pink-400"
          }`}
        />

        {state.experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div key={exp.id} className="relative mb-16 flex w-full">
              <motion.div
                className={`w-full md:w-1/2 p-6 rounded-2xl shadow-xl backdrop-blur-md ${
                  theme === "dark"
                    ? "bg-white/10 border border-white/20 hover:shadow-purple-600/30"
                    : "bg-white border border-gray-300 hover:shadow-pink-300/30"
                } ${isLeft ? "md:mr-auto" : "md:ml-auto"} transform transition hover:scale-[1.02]`}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-10 w-10 object-contain rounded shadow-md"
                  />
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-purple-300">{exp.jobTitle}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company}</p>
                    <p className="text-xs font-medium">{exp.fromDate} – {exp.toDate}</p>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-sm">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-200">{r}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Timeline Dot */}
              <div className="hidden md:flex absolute top-8 left-1/2 transform -translate-x-1/2 items-center z-10">
                <FaCircle
                  className={`text-lg animate-pulse ${
                    theme === "dark" ? "text-purple-400" : "text-indigo-500"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;