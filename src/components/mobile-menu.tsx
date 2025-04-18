import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
const MobileBar = () => {
  return (
    <div className="w-full h-screen flex gap-10 md:hidden">
      <div className="w-full h-full p-4">
        <div className="w-full h-full flex flex-col justify-btween gap-1">
          <div className="w-full h-[85%] overflow-y-scroll flex flex-col gap-1 py-2 scroll-smooth">
            <Link
              href={"/home/1"}
              className="w-full flex gap-2 items-center p-2 rounded-md cursor-pointer"
            >
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
            </Link>
          </div>
          <hr />
          <div className="flex  h-[12%]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBar;
