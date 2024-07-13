import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { Power4 } from "gsap";

function Featured() {
  // const [isHovering, setIsHovering] = useState(false);
  // const cards = [useAnimation(), useAnimation()];
  // const handelHover = (index) => {
  //   cards[index].start({ y: "0" });
  // };
  const cards = [useAnimation(), useAnimation()];
  const handelHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handelHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  motion;
  return (
    <div className=" w-full py-20">
      <div className=" w-full px-10  border-b-[1px] border-zinc-600 pb-20">
        <h1 className="text-5xl tracking-tighter font-bold ">
          Featured Projects
        </h1>
      </div>
      <div className="px-10">
        <div className=" cards w-full px-15 mt-10 flex gap-6">
          <motion.div
            onHoverStart={() => handelHover(0)}
            onHoverEnd={() => handelHoverEnd(0)}
            className=" cardcontainer relative w-1/2  h-[90vh]"
          >
            <div className="  absolute top-1/2 text-5xl font-bold  left-96  leading-none -translate-x-1/2 -translate-y-1/2">
              <h1 className="  absolute top-1/2 flex overflow-hidden text-5xl font-bold left-full  leading-none -translate-x-1/2 -translate-y-1/2">
                {"CLIKE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className=" inline-block translate-y-full"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handelHover(1)}
            onHoverEnd={() => handelHoverEnd(1)}
            className=" cardcontainer w-1/2  relative  h-[90vh]"
          >
            <h1 className="  absolute top-1/2 flex overflow-hidden text-5xl font-bold right-96 text-white leading-none tracking-tight translate-x-1/2 -translate-y-1/2 ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  className=" inline-block translate-y-full"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img
                className=" w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
