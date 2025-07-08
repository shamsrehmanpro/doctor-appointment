import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
    <div className="grid gap-20 grid-cols-[3fr_1fr_1fr] mt-30 mb-10">
      <div className="">
        <img className="mb-5" src={assets.logo} alt="" />
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          natus, nam itaque ex aperiam atque aspernatur magnam iure vero
          architecto maxime. Ut, mollitia. Quae aperiam ullam perferendis
          blanditiis, aspernatur rem dolorum
        </p>
      </div>

      <div>
        <b className="">COMPANY</b>
        <p className="mb-2 mt-10 text-gray-500">Contact us</p>
        <p className="mb-2 text-gray-500">Privacy Policy</p>
      </div>

      <div>
        <b>GET IN TOUCH</b>
        <p className="mb-2 mt-10 text-gray-500   ">+92 44-333-22244</p>
        <p className="text-gray-500">shams@gmail.com</p>
      </div>

    </div>

    <hr className="mb-5 text-gray-400" />

    <div className=" w-full mb-5">
        <p className="text-center">Copyright @2025 Shams - All Right Reserved</p>
    </div>
    </div>
  );
};

export default Footer;
