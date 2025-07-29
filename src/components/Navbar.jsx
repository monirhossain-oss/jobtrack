import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import "./Navbar.css"
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../ContextProviders/ContextProviders";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
    const {logoutUser, user} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    // console.log(user)  
    const navLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Companies",
            path: "/companies",
        },
        {
          title: "About",
          path: "/about"
        }
    ]
    const handleLogout = () =>{
        logoutUser();
    }
  return (
    <nav className="bg-slate-300 shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to={"/"} className="text-3xl font-bold text-gray-800">JobTrack</Link>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          {
            navLinks.map((link) => 
                <NavLink key={link.path} className=" hover:bg-blue-300 text-black px-[15px] py-[5px] rounded-md" to={link.path}>{link.title}</NavLink>
            )
          }
          {
            user 
            ? 
            <div className="flex items-center gap-7">
                <Link to={"/profile"}>
                    <img src={user?.photoURL} alt="Profile" className="h-9 w-9 cursor-pointer rounded-full border-2 border-blue-400"/>
                </Link> 
                <button onClick={handleLogout} className="flex  items-center gap-2  px-3 py-1  rounded-md cursor-pointer bg-blue-400 btn-sm text-white text-[15px] group font-semibold hover:scale-[101%] transition-all duration-300">
                    Logout
                    <CiLogin></CiLogin>
                </button>
            </div>
          : <Link to={'/login'}>
            <button className="flex  items-center gap-2  px-3 py-1  rounded-md cursor-pointer bg-blue-400 btn-sm text-white text-[15px] group font-semibold">
                Login
                <FaArrowRight className="group-hover:translate-x-2 transition-all duration-300"></FaArrowRight>
            </button>
             </Link>
          }
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <HiOutlineMenuAlt1 size={20}/>
          </button>
        </div>
      </div>

      {/* responsive */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pt-2 pb-4 space-y-2">
          {
            navLinks.map((link) => 
                <NavLink key={link.path} className="hover:bg-gray-300 px-[15px] py-[5px] rounded-xl" to={link.path}>{link.title}</NavLink>
            )
          }
          {
            user 
            ? 
            <div className="flex items-center gap-2">
                <Link to={"/profile"}>
                    <img src={user?.photoURL} alt="Profile" className="h-9 w-9 cursor-pointer rounded-full border-2 border-blue-400"/>
                </Link> 
                <button onClick={handleLogout} className="flex  items-center gap-2  px-3 py-1  rounded-md cursor-pointer bg-blue-400 btn-sm text-white text-[15px] group font-semibold hover:scale-[101%] transition-all duration-300">
                    Logout
                    <CiLogin></CiLogin>
                </button>
            </div>
          : <Link to={'/login'}>
            <button className="flex  items-center gap-2  px-3 py-1  rounded-md cursor-pointer bg-blue-400 btn-sm text-white text-[15px] group font-semibold">
                Login
                <FaArrowRight className="group-hover:translate-x-2 transition-all duration-300"></FaArrowRight>
            </button>
             </Link>
          }
        </div>
      )}
    </nav>
  );
};

export default Navbar;
