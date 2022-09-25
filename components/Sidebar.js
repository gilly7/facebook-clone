import React from "react";
import Image from "next/image";
import { ImUsers } from "react-icons/im";
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

      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <ImUsers className="h-8 w-8 text-blue-500" />
        <p className="hidden sm:inline-flex font-medium">Users</p>
      </div>
    </div>
  );
};

export default Sidebar;
