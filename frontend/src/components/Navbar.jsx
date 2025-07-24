import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate, Link } from "react-router-dom";

const Navbar = ({ token, setToken }) => {
  const navigate = useNavigate()
  return (
    <div className="flex mt-3 items-center justify-between">
      <div>
        <img className="cursor-pointer h-15" onClick={() => navigate('/')} src={assets.logo} alt="" />
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

      <div className="   py-2 w-[200px]">
        {token ?

          <div className=" relative group inline-block">

            <div className="flex items-center gap-2 cursor-pointer ml-30">
              <img  className="w-12 rounded-[100%]" src={assets.profile_pic} alt="" />
              <img  src={assets.dropdown_icon} alt="" />
            </div>


            <div className="absolute  rounded hidden group-hover:block  w-[200px] ">
              <ul className="py-2 bg-gray-100 mt-[20px] rounded">
                <Link to={'/my-profile'}><li className=" px-2 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 hover:text-black">My Profile</li></Link> 
                <Link><li className=" px-2 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 hover:text-black">My Appointment</li></Link> 
                <Link onClick={() => setToken('')} to={'/login'} ><li className=" px-2 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 hover:text-black">Logout</li></Link> 
              </ul>
            </div>
          </div>

          :
          <button onClick={() => navigate('/login')} className="text-white px-5 py-2 ml-13 bg-blue-600 rounded-[50px] cursor-pointer">Create account</button>
        }

      </div>

    </div>
  );
};

export default Navbar;
