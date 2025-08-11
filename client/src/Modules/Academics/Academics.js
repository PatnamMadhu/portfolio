import React, { useReducer } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import * as Academics_Hook from "./Academics_Hook";
import * as Academics_BusinessLogic from "./Academics_BusinessLogic";

const Academics = ({ theme }) => {
  const [state, dispatch] = useReducer(
    Academics_Hook.academicsReducer,
    Academics_Hook.initialState
  );
  const reduxDispatch = useDispatch();

  const objContext = {
    state,
    dispatch,
    reduxDispatch,
    Academics_BusinessLogic: new Academics_BusinessLogic.Academics_BusinessLogic(),
  };

  Academics_Hook.useFetchAcademics(objContext);

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
        className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🎓 Academic Background
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
      >
        {state.academics.map((academic, index) => (
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
            <h2 className="text-lg font-semibold mb-2 text-purple-400 text-center">
              {academic.school}
            </h2>

            <div className="text-sm space-y-1 text-center font-medium">
              <p>
                🎓 <span className="font-semibold">Level:</span> {academic.level}
              </p>
              <p>
                📊 <span className="font-semibold">Percentage/Grade:</span>{" "}
                {academic.percentage +
                  "/" +
                  (academic.level === "Graduate"
                    ? "4"
                    : academic.level === "Undergraduate"
                    ? "10"
                    : "100")}
              </p>
              <p>
                📍 <span className="font-semibold">Location:</span> {academic.location}
              </p>
              <p>
                📅 <span className="font-semibold">Duration:</span>{" "}
                {academic.fromDate} – {academic.toDate}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Academics;