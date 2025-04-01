import MessageContainer from "@/components/message-container";
import TopHeader from "@/components/top-header";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen p-2">
      <TopHeader />
      <MessageContainer />
    </div>
  );
};

export default Home;
