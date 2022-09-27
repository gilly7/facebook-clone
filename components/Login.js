import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1280px-Facebook_New_Logo_%282015%29.svg.png"
        width={240}
        height={240}
        alt="fb logo"
      />
      <a onClick={signIn} className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white">Login</a>
    </div>
  );
};

export default Login;
