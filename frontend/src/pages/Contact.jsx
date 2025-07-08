import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <p className="font-bold text-gray-400 text-center  mt-10 text-[20px]">
        CONTACT <span className="text-black">US</span></p>
        <div className="flex mt-20 text-gray-500 justify-around px-15 mb-60">
          <div>
            <img className="w-[400px]" src={assets.contact_image} alt="" />
          </div>
          <div className=" flex flex-col items-start">
            <b className="text-gray-600 text-[18px]">OUR OFFICE</b><br />
            <p className="text-[15px]">54709 Willms Station </p> <p className="text-[15px]">Suite 350, Washington, USA</p>
            <br />
        
            <p className="text-[15px]">Tel: (415) 555‑0132 </p>
            <p className="text-[15px]">Email: greatstackdev@gmail.com</p><br />
            <b className="text-gray-600 text-[18px]" >Careers at PRESCRIPTO</b>
            <br />
            <p className="text-[15px]">Learn more about our teams and job openings.</p>
            <br />
            <br />
            <button className="px-10 text-black cursor-pointer hover:bg-blue-200 py-3 border">Explore Jobs</button>
          </div>
        </div>
      
    </div>
  );
};

export default Contact;
