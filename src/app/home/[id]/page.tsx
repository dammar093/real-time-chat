import React from "react";
import MessageContainer from "@/components/message-container";
import MessageInput from "@/components/messge-input";
import TopHeader from "@/components/top-header";

const IndividualMessage = () => {
  return (
    <div className="w-full h-screen p-2">
      <TopHeader />
      <MessageContainer />
      <MessageInput />
    </div>
  );
};

export default IndividualMessage;
