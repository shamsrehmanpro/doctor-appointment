import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, doctors } from "../assets/assets";
import DoctorSingle from "../components/DoctorSingle";

const MyAppointment = () => {
  const params = useParams();
  const docId = params.docId;
  const [singleDoctor, setSingleDoctor] = useState({});
  const [relatedDoctor, setRelatedDoctor] = useState([])

  const fetchDoctor = () => {
    const filterDoctor = doctors.find((doctor) => doctor._id == docId);
    setSingleDoctor(filterDoctor);
  };

  const fetchRelatedDoctor = ()=>{
    const filter = doctors.filter(doctor => doctor.speciality == singleDoctor.speciality)
    setRelatedDoctor(filter)
  }

  useEffect(() => {
    fetchDoctor();
    fetchRelatedDoctor()
  }, [singleDoctor, docId]);


  return (
    <div>
      <div className="mt-10 flex gap-5">
        <div>
          <img
            className="bg-blue-500 h-full rounded-[10px] "
            src={singleDoctor.image}
            alt=""
          />
        </div>
        <div className="border rounded-[10px] text-gray-600  w-full px-5 py-10">
          <b className="text-black text-[25px] flex items-center gap-2">
            {singleDoctor.name}{" "}
            <span>
              <img className="w-5" src={assets.verified_icon} alt="" />
            </span>
          </b>
          <p className="mt-2">
            {singleDoctor.degree} - {singleDoctor.speciality}{" "}
            <span className="border rounded-[20px] py-1 px-2">
              {singleDoctor.experience}
            </span>{" "}
          </p>
          <b className="flex items-center gap-2 mt-2 text-black">
            About{" "}
            <span>
              <img src={assets.info_icon} alt="" />
            </span>
          </b>
          <p>
            Dr. Davis has a strong commitment to delivering comprehensive
            medical care, focusing on preventive medicine, early diagnosis, and
            effective treatment strategies. Dr. Davis has a strong commitment to
            delivering comprehensive medical care, focusing on preventive
            medicine, early diagnosis, and effective treatment strategies.
          </p>
          <br />
          <p>
            Appointment fee: <b className="text-black">${singleDoctor.fees}</b>{" "}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[2fr_5fr] mt-10 ">
        <div></div>
        <div className="mb-3 text-[20px] text-gray-600">
          <b>Booking slots</b>

          <div className="flex items-center gap-3 mt-5">
            <div className="flex text-[15px] hover:text-white w-[55px] flex-col items-center justify-center-safe hover:bg-blue-500 cursor-pointer border rounded-[100px] px-2 h-[100px] py-2">
              <p>MON</p>
              <p>10</p>
            </div>
            <div className="flex text-[15px] hover:text-white w-[55px] flex-col items-center justify-center-safe hover:bg-blue-500 cursor-pointer border rounded-[100px] px-2 h-[100px] py-2">
              <p>TUE</p>
              <p>10</p>
            </div>
            <div className="flex text-[15px] hover:text-white w-[55px] flex-col items-center justify-center-safe hover:bg-blue-500 cursor-pointer border rounded-[100px] px-2 h-[100px] py-2">
              <p>WED</p>
              <p>10</p>
            </div>
            <div className="flex text-[15px] hover:text-white w-[55px] flex-col items-center justify-center-safe hover:bg-blue-500 cursor-pointer border rounded-[100px] px-2 h-[100px] py-2">
              <p>THUR</p>
              <p>10</p>
            </div>
            <div className="flex text-[15px] hover:text-white w-[55px] flex-col items-center justify-center-safe hover:bg-blue-500 cursor-pointer border rounded-[100px] px-2 h-[100px] py-2">
              <p>FRI</p>
              <p>10</p>
            </div>
            <div className="flex text-[15px] hover:text-white w-[55px] flex-col items-center justify-center-safe hover:bg-blue-500 cursor-pointer border rounded-[100px] px-2 h-[100px] py-2">
              <p>SAT</p>
              <p>10</p>
            </div>
            <div className="flex text-[15px] hover:text-white w-[55px] flex-col items-center justify-center-safe hover:bg-blue-500 cursor-pointer border rounded-[100px] px-2 h-[100px] py-2">
              <p>SUN</p>
              <p>10</p>
            </div>
          </div>

          <div className="flex gap-3 items-center mt-5">
            <p className="border  text-[15px] px-3 cursor-pointer py-1 hover:bg-blue-500 hover:text-white rounded-[70px] ">
              8.00 am
            </p>
            <p className="border  text-[15px] px-3 cursor-pointer py-1 hover:bg-blue-500 hover:text-white rounded-[70px] ">
              8.30 am
            </p>
            <p className="border  text-[15px] px-3 cursor-pointer py-1 hover:bg-blue-500 hover:text-white rounded-[70px] ">
              9.00 am
            </p>
            <p className="border  text-[15px] px-3 cursor-pointer py-1 hover:bg-blue-500 hover:text-white rounded-[70px] ">
              9.30 am
            </p>
            <p className="border  text-[15px] px-3 cursor-pointer py-1 hover:bg-blue-500 hover:text-white rounded-[70px] ">
              10.00 am
            </p>
            <p className="border  text-[15px] px-3 cursor-pointer py-1 hover:bg-blue-500 hover:text-white rounded-[70px] ">
              10.30 am
            </p>
            <p className="border text-[15px]  px-3 cursor-pointer py-1 hover:bg-blue-500 hover:text-white rounded-[70px] ">
              11.00 am
            </p>
            <p className="border text-[15px]  px-3 cursor-pointer py-1 hover:bg-blue-500 hover:text-white rounded-[70px] ">
              11.30 am
            </p>
          </div>
          <button className="mt-10 px-8 py-2 bg-blue-500 text-white cursor-pointer rounded-[50px]">Book an appointment</button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-20">
        <b className="text-[25px] ">Related Doctors</b>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-5 mt-10">
          {relatedDoctor.map((doctor, index) => (
            <DoctorSingle key={index} id={doctor._id} index={index} name={doctor.name} speciality = {doctor.speciality} image={doctor.image}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
