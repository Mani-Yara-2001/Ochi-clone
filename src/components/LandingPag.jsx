import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

function LandingPag() {
  motion;
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-white pt-1"
    >
      <div className="textstrcture mt-16 px-20">
        {["WE CREATE", "EYE OPENING", "PRESENTATION"].map((item, index) => {
          return (
            <div className="masker  ">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.5, 1, 0.89, 1], duration: 1 }}
                    className="mr-[1] h-[5.2vw] w-[8vw] rounded-md  -bottom-[3.1vw] relative bg-green-400"
                  ></motion.div>
                )}
                <h1 className=" pt-[5vw]  uppercase text-[6vw]  h-full items-center flex font-bold leading-[.75vw] tracking-tight  ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-10">
        {["For public and private companies", "From the first pich to ipo"].map(
          (item, index) => (
            <p className=" text-md tracking-tighter  font-semibold">{item}</p>
          )
        )}
        <div className="start">
          <div className="px-5 py-2 text-md gap-3 flex  justify-between items-center border-[2px]  uppercase bg-zinc-500 font-semibold  rounded-full">
            {" "}
            start the project
            <div
              className="w-6 h-6 flex justify-center items-center border-[1px] rounded-full
        bg-slate-500"
            >
              <span className=" rotate-[45deg]">
                <FaArrowUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPag;
