import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex gap-10">
      <aside className="w-full md:w-[20%] h-screen shadow-md flex items-center justify-center fixed top-0 left-0">
        <div className="w-full h-full p-4">
          <div className="w-full h-full flex flex-col justify-btween gap-1">
            <div className="w-full h-[85%] overflow-y-scroll flex flex-col gap-1 py-2 scroll-smooth">
              <div className="w-full flex gap-2 items-center  p-2 rounded-md">
                <Avatar>
                  <AvatarImage
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                    width={20}
                    height={20}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Dammar</span>
              </div>
              <div className="w-full flex gap-2 items-center  p-2 rounded-md">
                <Avatar>
                  <AvatarImage
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                    width={20}
                    height={20}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Dammar</span>
              </div>
              <div className="w-full flex gap-2 items-center  p-2 rounded-md">
                <Avatar>
                  <AvatarImage
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                    width={20}
                    height={20}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Dammar</span>
              </div>
              <div className="w-full flex gap-2 items-center  p-2 rounded-md">
                <Avatar>
                  <AvatarImage
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                    width={20}
                    height={20}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Dammar</span>
              </div>
              <div className="w-full flex gap-2 items-center  p-2 rounded-md">
                <Avatar>
                  <AvatarImage
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                    width={20}
                    height={20}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Dammar</span>
              </div>
              <div className="w-full flex gap-2 items-center  p-2 rounded-md">
                <Avatar>
                  <AvatarImage
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                    width={20}
                    height={20}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Dammar</span>
              </div>
              <div className="w-full flex gap-2 items-center  p-2 rounded-md">
                <Avatar>
                  <AvatarImage
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                    width={20}
                    height={20}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Dammar</span>
              </div>
              <div className="w-full flex gap-2 items-center  p-2 rounded-md">
                <Avatar>
                  <AvatarImage
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                    width={20}
                    height={20}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Dammar</span>
              </div>
              <hr />
            </div>
            <div className="flex flex-col gap-3 items-center h-[12%]">
              <Link href={""} className="w-full flex gap-2 items-center">
                <Avatar className="w-10 h-10 rounded-full">
                  <AvatarImage
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Dammar</span>
              </Link>
              <Button className="w-full cursor-pointer">Logout</Button>
            </div>
          </div>
        </div>
      </aside>
      <section className="ml-[20%] hidden md:block">{children}</section>
    </div>
  );
};

export default Sidebar;
