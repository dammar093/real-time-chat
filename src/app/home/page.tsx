import React from "react";
import MessageContainer from "@/components/message-container";
import MessageInput from "@/components/messge-input";
import Sidebar from "@/components/side-bar";
import TopHeader from "@/components/top-header";

const Home = () => {
  return (
    <Sidebar>
      <div className="w-full h-screen p-2">
        <TopHeader />
        <MessageContainer />
        <MessageInput />
      </div>
    </Sidebar>
  );
};

export default Home;
