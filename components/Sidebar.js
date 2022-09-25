import React from "react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { ImUsers } from "react-icons/im";
import { MdGroups, MdOutlineOndemandVideo, MdExpandMore, MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          alt="fb logo"
        />
        <p className="hidden sm:inline-flex font-medium"> Gilbert Ngeno</p>
      </div>
      <SidebarItem Icon={ImUsers} value="Friends" />
      <SidebarItem Icon={MdGroups} value="Groups" />
      <SidebarItem Icon={AiOutlineShop} value="Markeplace" />
      <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch" />
      <SidebarItem Icon={BsStopwatch} value="On this day"/>
      <SidebarItem Icon={MdOutlineExpandMore} value="See More" />
      
    </div>
  );
};

export default Sidebar;
