import React from "react";

function About() {
  return (
    <div className="w-full p-10 rounded-t-2xl text-black bg-[#CDEA68]">
      <h1 className="text-[3vw] leading-[3vw] tracking-tight ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className=" border-t-[1px] pt-10 mt-20 w-full flex border-[#a1b562]">
        <div className="w-1/2">
          <h1 className=" text-5xl  ">Our Approch</h1>
          <button className=" pt-3 px-8 py-3 flex justify-center gap-4 items-center mt-6 bg-slate-700 text-white rounded-full">
            Read More
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] rounded-3xl bg-green-600"></div>
      </div>
    </div>
  );
}

export default About;
