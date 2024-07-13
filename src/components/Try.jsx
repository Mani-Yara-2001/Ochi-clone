import React, { useEffect, useState } from "react";

function Try() {
  const [circle, setCircle] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - innerWidth / 2;
      let deltaY = mouseY - innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setCircle(angle - 180);
    });
  });

  return (
    <div>
      <div className=" w-full pt-10  pb-20  bg-blue-950 ">
        {["READY", "TO START", "THE PROJECT"].map((item, index) => {
          return (
            <h1 className="   uppercase text-[6vw]  justify-center flex items-center text-slate-400 font-bold leading-[7vw] tracking-tight  ">
              {item}
            </h1>
          );
        })}
        <div className=" flex justify-center  mt-4 items-center gap-5">
          <div className=" w-[35vh] h-[35vh]  flex justify-center items-center rounded-full  bg-zinc-100">
            <div className="w-2/3  h-2/3 rounded-full relative bg-black">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${circle}deg)`,
                }}
                className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-10 "
              >
                <div className="w-8 h-8 rounded-full bg-slate-100"></div>
              </div>
            </div>
          </div>

          <div className=" w-[35vh] h-[35vh] rounded-full flex justify-center items-center  bg-zinc-100">
            <div className="w-2/3  h-2/3 relative rounded-full bg-black">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${circle}deg)`,
                }}
                className="line  absolute top-1/2 left-1/2 translate-x-[50%] -translate-y-[50%] w-full  h-10 "
              >
                <div className="w-8 h-8 rounded-full bg-slate-100"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  pt-20">
          <button className=" w-60  h-14 font-semibold  border-2 rounded-3xl  text-black   bg-slate-300 border-gray-50">
            START THE PROJECT
          </button>
        </div>
      </div>
    </div>
    // <div className=" w-full pt-10  pb-20  bg-blue-950 ">
    //   {["READY", "TO START", "THE PROJECT"].map((item, index) => {
    //     return (
    //       <h1 className="   uppercase text-[6vw]  justify-center flex items-center text-slate-400 font-bold leading-[7vw] tracking-tight  ">
    //         {item}
    //       </h1>
    //     );
    //   })}
    //   <div className=" flex justify-center  mt-4 items-center gap-5">
    //     <div className=" w-[35vh] h-[35vh]  flex justify-center items-center rounded-full  bg-zinc-100">
    //       <div className="w-2/3  h-2/3 rounded-full relative bg-black">
    //         <div
    //           style={{
    //             transform: `translate(-50%,-50%) rotate(${circle}deg)`,
    //           }}
    //           className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-10 "
    //         >
    //           <div className="w-8 h-8 rounded-full bg-slate-100"></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className=" w-[35vh] h-[35vh] rounded-full flex justify-center items-center  bg-zinc-100">
    //       <div className="w-2/3  h-2/3 relative rounded-full bg-black">
    //         <div
    //           style={{
    //             transform: `translate(-50%,-50%) rotate(${circle}deg)`,
    //           }}
    //           className="line  absolute top-1/2 left-1/2 translate-x-[50%] -translate-y-[50%] w-full  h-10 "
    //         >
    //           <div className="w-8 h-8 rounded-full bg-slate-100"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center  pt-20">
    //     <button className=" w-60  h-14 font-semibold  border-2 rounded-3xl  text-black   bg-slate-300 border-gray-50">
    //       START THE PROJECT
    //     </button>
    //   </div>
    // </div>
  );
}

export default Try;
