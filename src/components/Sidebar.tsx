import React from "react";
import DeskTopSideBar from "./desktop-side-bar";
import MobileBar from "./mobile-menu";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex gap-10">
      <aside className="w-full md:w-[20%] h-screen shadow-md flex items-center justify-center fixed top-0 left-0">
        <DeskTopSideBar />
        <MobileBar />
      </aside>
      <section className="ml-[20%] hidden md:block w-[80%]">{children}</section>
    </div>
  );
};

export default Sidebar;
