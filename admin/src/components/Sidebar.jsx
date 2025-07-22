import React, { useState } from "react";
import { assets } from "../../../admin/src/assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ login }) => {
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const handleClick = (name) => {
    setColor(name);
  };
  return (
    <div className=" py-10 border-gray-400 border-r-1 flex flex-col gap-1 min-h-screen ">
      <NavLink
        to={(localStorage.getItem('login') === "true") ? '/doctor-dashboard' : '/admin-dashboard'}
        onClick={() => handleClick("Dashboard")}
        className={`flex pl-10 hover:bg-blue-50 ${
          color === "Dashboard" && "border-r-4 border-blue-500 bg-blue-50"
        } cursor-pointer py-3 items-center gap-4`}
      >
        <img className="rounded-[100px]" src={assets.add_icon} alt="" />
        <p>Dashboard</p>
      </NavLink>
      <NavLink
        onClick={() => handleClick("Appointments")}
        className={`flex pl-10 hover:bg-blue-50 ${
          color === "Appointments" && "border-r-4 border-blue-500 bg-blue-50"
        } cursor-pointer py-3 items-center gap-4`}
      >
        <img className="rounded-[100px]" src={assets.appointment_icon} alt="" />
        <p>Appointments</p>
      </NavLink>

      {/* //for doctor */}

      {(localStorage.getItem('login') === "true") ? (
        <NavLink
          to="/doctor-profile"
          onClick={() => handleClick("Add Doctor")}
          className={`flex pl-10 hover:bg-blue-50 ${
            color === "Add Doctor" && "border-r-4 border-blue-500 bg-blue-50"
          } cursor-pointer py-3 items-center gap-4`}
        >
          <img
            className="rounded-[100px] w-7"
            src={assets.doctor_icon}
            alt=""
          />
          <p>Profile</p>
        </NavLink>
      ) : (
        <NavLink
          to="/add-doctor"
          onClick={() => handleClick("Add Doctor")}
          className={`flex pl-10 hover:bg-blue-50 ${
            color === "Add Doctor" && "border-r-4 border-blue-500 bg-blue-50"
          } cursor-pointer py-3 items-center gap-4`}
        >
          <img
            className="rounded-[100px] w-7"
            src={assets.doctor_icon}
            alt=""
          />
          <p>Add Doctor</p>
        </NavLink>
      )}

      {/* ----------------------------------------- */}

      {((localStorage.getItem('login') === "true")) ? (
        ""
      ) : (
        <>
          <NavLink
            to="/doctor-list"
            onClick={() => handleClick("Doctor List")}
            className={`flex pl-10 hover:bg-blue-50 ${
              color === "Doctor List" && "border-r-4 border-blue-500 bg-blue-50"
            } cursor-pointer py-3 items-center gap-4`}
          >
            <img className="rounded-[100px]" src={assets.list_icon} alt="" />
            <p>Doctor List</p>
          </NavLink>
       
        </>
      )}
    </div>
  );
};

export default Sidebar;
