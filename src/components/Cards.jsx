import React from "react";

function Cards() {
  return (
    <div className=" w-full h-[60vh] px-10 pb-2 flex items-center gap-5">
      <div className="w-1/2 h-full relative rounded-2xl  flex items-center justify-center bg-teal-800 ">
        <img
          className="w-30 "
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <button className=" w-28 absolute  left-10 bottom-10 border-2  rounded-full border-slate-100 ">
          Click here
        </button>
      </div>
      <div className=" w-1/2 flex gap-5 items-center h-full">
        <div className=" w-1/2 h-full flex justify-center relative items-center bg-slate-400 rounded-2xl ">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className=" w-28 absolute  left-10 bottom-10 border-2  rounded-full border-slate-600 ">
            For More
          </button>
        </div>
        <div className=" w-1/2 relative h-full flex justify-center items-center bg-slate-400 rounded-2xl ">
          <img
            className="w-20 h-20 rounded-full "
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className=" w-28 absolute  left-10 bottom-10 border-2  rounded-full border-slate-600  ">
            Open
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
