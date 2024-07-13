import React from "react";
import { motion } from "framer-motion";
function Marque() {
  motion;
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full  py-10 rounded-t-md mt-8 bg-green-900 "
    >
      <div className="text border-t-2 border-b-2 whitespace-nowrap flex overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
          className="text-[12vw] leading-none  font-bold uppercase pt-8  mb-8 pr-2"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
          className="text-[12vw] leading-none  font-bold uppercase pt-8   mb-8  pr-2"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
