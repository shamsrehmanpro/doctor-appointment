import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <p className="font-bold text-gray-400 text-center mt-10 text-[20px]">
        ABOUT <span className="text-black">US</span>
      </p>

      <div className="flex mt-20 items-center gap-20">
        <div>
          <img className="w-[1200px]" src={assets.about_image} alt="" />
        </div>

        <div className="text-gray-500">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto , we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <br />
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <br />
          <b className="text-gray-600">Our Vision</b>
          <br />
          <br />
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className="text-gray-400 font-bold text-[20px]">
        Why <span className="text-black"> Choose Us</span>
      </p>

      <div className="flex mt-10 mb-100">
        <div className="border border-gray-400 px-10 py-10">
          <b>EFFICIENCY:</b>
          <br />
          <br />
          <p className="text-gray-500">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border border-gray-400 px-10 py-10">
          <b>Convenience:</b>
          <br />
          <br />
          <p className="text-gray-500">
           Access to a network of trusted healthcare professionals in your area.
          </p>
        </div>
        <div className="border border-gray-400 px-10 py-10">
          <b>Personalization:</b>
          <br />
          <br />
          <p className="text-gray-500">
            Tailored recommendations and reminders to help you stay on top of your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
