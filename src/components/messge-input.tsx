import React from "react";
import { Button } from "./ui/button";

const MessageInput = () => {
  return (
    <div className="w-full h-[10%] zs flex justify-between items-center border-2 rounded-md p-2">
      <div className="w-[5%]">
        <Button className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-paperclip"
          >
            <path d="M13.234 20.252 21 12.3" />
            <path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" />
          </svg>
        </Button>
      </div>
      <div className="w-[90%] h-full">
        <input
          type="text"
          className="outline-0 focus:blur-none border-0 h-full focus:border-0 focus:outline-0 w-full"
          placeholder="write here..."
        />
      </div>
      <div>
        <Button className="cursor-pointer">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-send-horizontal"
          >
            <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
            <path d="M6 12h16" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;
