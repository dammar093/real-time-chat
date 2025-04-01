import React from "react";

const MessageContainer = () => {
  return (
    <div className="w-full h-[80%] overflow-y-scroll scroll-smooth  p-2">
      <div className="w-full h-full flex flex-col">
        <div className={`my-2 w-fit max-w-[75%] leading-4 self-start`}>
          <div
            className={`px-4 py-2 text-justify w-full leading-5 text-white rounded-r-lg rounded-bl-lg bg-slate-500`}
          >
            hello
          </div>
          <div className="text-[12px] text-slate-500">12:00</div>
        </div>
        <div className={`my-2 w-fit max-w-[75%] leading-4 self-end`}>
          <div
            className={`px-4 py-2 text-justify w-full leading-5 text-white rounded-l-lg rounded-br-lg bg-teal-500`}
          >
            hello
          </div>
          <div className="text-[12px] text-slate-500">12:00</div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
