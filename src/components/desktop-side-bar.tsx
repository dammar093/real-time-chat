import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";

const DeskTopSideBar = () => {
  return (
    <div className="w-full h-screen gap-10 hidden md:flex">
      <div className="w-full h-full p-4">
        <div className="w-full h-full flex flex-col justify-btween gap-1">
          <div className="w-full h-[85%] overflow-y-scroll flex flex-col gap-1 py-2 scroll-smooth">
            <div className="w-full flex gap-2   p-2 rounded-md cursor-pointer">
              <Avatar>
                <AvatarImage
                  className="w-full h-full object-cover"
                  src="https://github.com/shadcn.png"
                  width={20}
                  height={20}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="w-full">
                <div>
                  <span className="font-semibold">Dammar</span>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-400">Hello</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-3 items-center h-[15%]">
            <Link href={""} className="w-full flex gap-2 items-center">
              <Avatar className="w-10 h-10 rounded-full">
                <AvatarImage
                  className="w-full h-full object-cover"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="font-semibold">Dammar</span>
            </Link>
            <Button className="w-full cursor-pointer">Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskTopSideBar;
