import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/image/logo.jpg";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";

const links = [
  {
    name: "Products",
    path: "/",
  },
  {
    name: "Distributor",
    path: "distributor",
  },
  {
    name: "Videos",
    path: "videos",
  },
  {
    name: "Knowledge",
    path: "knowledge",
  },

  {
    name: "Contact us",
    path: "contact",
  },
];
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="xl:w-[100%]   sticky z-50 top-0 left-0 bg-white xl:h-24 xl:p-2 lg:h-24 lg:p-2">
      <div
        className={`w-[95%]   mx-auto flex justify-between p-3 ${
          isOpen ? "z-0" : "z-10"
        }`}
      >
        <div
          onClick={() => setIsOpen(true)}
          className={`flex flex-col xl:hidden  lg:hidden justify-center items-center cursor-pointer ${
            isOpen && "opacity-0"
          }`}
        >
          <AiOutlineMenu className="text-xl" />
          <h2>Menu</h2>
        </div>
        <div
          className={`flex flex-col xl:hidden lg:hidden justify-center items-center cursor-pointer ${
            isOpen && "opacity-0"
          }`}
        >
          <IoSearch className="text-xl" />
          <h2>Search</h2>
        </div>
        <div className="flex flex-col xl:hidden lg:hidden   justify-center items-center cursor-pointer">
          <FaFacebookSquare className="text-xl" />
          <h2>Login</h2>
        </div>
        <div className="flex flex-col  xl:hidden lg:hidden  justify-center items-center cursor-pointer">
          <FaFlag className="text-xl" />
          <h2>Khmer</h2>
        </div>
      </div>
      <div
        className={`w-full h-full  xl:ml-24 flex  absolute ${
          isOpen && "z-40 top-0 "
        }`}
      >
        <div
          className={`w-[50%]  xl:w-[80%] transition-all ease-in-out duration-300   lg:w-[90%] bg-slate-700 text-white lg:bg-white lg:text-black xl:gap-2 mx-auto xl:ml-0 xl:flex  xl:h-0 xl:p-3 lg:ml-0 lg:flex lg:gap-5  lg:h-0 lg:p-3 justify-between items-center  h-[100vh]  p-4 ${
            isOpen ? "ml-0 " : "-ml-[500px]"
          }`}
        >
          <img
            src={logo}
            alt="logo"
            className="w-32 flex justify-center items-center xl:w-36 md:ml-32 lg:w-32  xl:ml-16 ml-4 lg:ml-3 mt-7 xl:mt-4 "
          />
          <div>
            <MdCancel
              className={`absolute  xl:hidden  top-3 text-3xl cursor-pointer  ${
                isOpen ? "right-[52%]" : "-right-96"
              }`}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <ul className="xl:flex lg:flex gap-10 ">
            {links.map((p) => {
              return (
                <li
                  className="py-2 font-bold text-lg text-md xl:text-lg    "
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    to={p.path}
                    key={p.name}
                    className="xl:text-[23px] lg:text-xl text-[16px] hover:text-gray-400 transition-all ease-in-out duration-300"
                  >
                    {p.name}
                  </Link>
                  <hr className="mt-3 xl:hidden lg:hidden  bg-gray-400 text-black " />
                </li>
              );
            })}
          </ul>
        </div>
        <div
          onClick={() => setIsOpen(false)}
          className={`w-[50%] bg-slate-300 h-[100vh] lg:w-0 transition-all ease-in-out duration-300   ${
            isOpen ? "opacity-50" : "opacity-0"
          }`}
        >
          <h2 className="opacity-0">r</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
