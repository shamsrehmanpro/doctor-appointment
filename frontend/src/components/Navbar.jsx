import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex mt-3 items-center justify-between">
      <div>
        <img className="cursor-pointer h-15" onClick={()=>navigate('/')} src={assets.logo} alt="" />
      </div>

      <ul className="flex gap-4">
        
          <NavLink className="flex flex-col items-center" to="/">
            <p>HOME</p>
            <hr className="w-[70%] text-blue-500 hidden h-[2px]" />
          </NavLink>

         <NavLink className="flex flex-col items-center" to="/doctors">
            <p>ALL DOCTORS</p>
           <hr className="w-[70%] text-blue-500 hidden h-[2px]" />
          </NavLink>

           <NavLink className="flex flex-col items-center" to="/about">
            <p>ABOUT</p>
           <hr className="w-[70%] text-blue-500 hidden h-[2px]" />
          </NavLink>

           <NavLink className="flex flex-col items-center" to="/contact">
            <p>CONTACT</p>
           <hr className="w-[70%] text-blue-500 hidden h-[2px]" />
          </NavLink>
        
        </ul>

        <div className="px-5 bg-blue-600 rounded-[50px] py-2 ">
          <button onClick={()=>navigate('/login')} className="text-white cursor-pointer">Create account</button>
        </div>
        
    </div>
  );
};

export default Navbar;
