import React from "react";
import { assets } from "../assets/assets";

const AddDoctor = () => {
  return (
    <div className="py-10 px-5">
      <b className="text-[20px]">Add Doctor</b>
      <div className="py-7 mt-6 px-5 border border-gray-400 ">
        <div className="flex items-center gap-5">
          <img className="w-[8%]" src={assets.upload_area} alt="" />
          <p>
            Upload Doctor <br /> Picture
          </p>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-5  mt-5">
          <div>
            <p className="mb-2">Doctor name</p>
            <input
              type="text"
              placeholder="name"
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
            />
          </div>
          <div>
            <p className="mb-2">Speciality</p>
            <select
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
              name=""
              id=""
            >
              <option value=""></option>
            </select>
          </div>
          <div>
            <p className="mb-2">Doctor email</p>
            <input
              type="email"
              placeholder="email"
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
            />
          </div>
          <div>
            <p className="mb-2">Education</p>
            <input
              type="text"
              placeholder="education"
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
            />
          </div>
          <div>
            <p className="mb-2">Password</p>
            <input
              type="password"
              placeholder="password"
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
            />
            <div className="mt-5">
            <p className="mb-2">Experience</p>
            <select
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
              name=""
              id=""
            >
              <option value=""></option>
            </select>
            </div>
             <div className="mt-5">
              <p className="mb-2">Fees</p>
              <input
                type="text"
                placeholder="your fees"
                className="border border-gray-400 px-2 py-2 rounded w-[80%]"
              />
            </div>
          </div>
          <div className="">
            <p className="mb-2">Address</p>
            <input
              type="text"
              placeholder="Address"
              className="border mb-5 border-gray-400 px-2 py-2 rounded w-[80%]"
            />
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
            />
          </div>
          
           

          
        </div>

        <div className="mt-4">
        <p className="mb-2">About me</p>
        <textarea className="border border-gray-400 rounded w-[90%] h-30" name="" id=""></textarea>
        </div>
       
       <button className="px-10 py-2 bg-blue-500 cursor-pointer mt-3 rounded-[50px] text-white">Add doctor</button>
      </div> 
    </div>
  );
};

export default AddDoctor;
