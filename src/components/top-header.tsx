import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopHeader = () => {
  return (
    <div className="h-[10%] shadow-md w-full">
      <div className="w-full flex gap-2   p-2 rounded-md">
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
            <span className="font-semibold text-md">Dammar</span>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-gray-400">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
