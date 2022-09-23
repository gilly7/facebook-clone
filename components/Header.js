import React from "react";
import Image from "next/image";
import { HiOutlineHome, HiOutlineSearch } from "react-icons/hi";
import { RiFlag2Line} from "react-icons/ri"
import {MdOutlineOndemandVideo} from "react-icons/md"
import {AiOutlineShop} from "react-icons/ai"
import {IoGameControllerOutline} from "react-icons/io5"

const Header = () => {
  return (
    <div className="bg-white flex  items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/*left*/}

      <div className="flex min-w-fit">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png"
          width={40}
          height={40}
          alt="fb logo"
        />
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <HiOutlineSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none"
            type="text"
            placeholder="search facebook"
          ></input>
        </div>
      </div>
      {/*center*/}

      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
          <HiOutlineHome className="mx-autO" size={25}/>
        </div>
        <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
          <RiFlag2Line className="mx-autO" size={25}/>
        </div>
        <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
          <MdOutlineOndemandVideo className="mx-autO" size={25}/>
        </div>
        <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
          <AiOutlineShop className="mx-autO" size={25}/>
        </div>
        <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
          <IoGameControllerOutline className="mx-autO" size={25}/>
        </div>
    
      </div>
      {/*right*/}

      <div className="flex items-center justify-end min-w-fit space-x-2">
      <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png"
          width={40}
          height={40}
          alt="fb logo"
        />
        <p className="hidden xl:inline-flex font-semibold texr-sm whitespace-nowrap p-3 max-w-xs">
            Ngeno
        </p>
      </div>
    </div>
  );
};

export default Header;
