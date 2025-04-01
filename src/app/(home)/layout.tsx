import React from "react";
import Sidebar from "@/components/Sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default HomeLayout;
