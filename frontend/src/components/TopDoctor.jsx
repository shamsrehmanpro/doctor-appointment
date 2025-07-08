import React, { useContext } from "react";
import Doctor from "./DoctorSingle";
import { doctors } from "../assets/assets";
import { doctorContext } from "../context/DoctorContext";

const TopDoctor = () => {
  const { filterDoctor, condition } =
    useContext(doctorContext);

  return (
    <div className="mt-20 mb-10 flex items-center flex-col">
      <div className="flex items-center flex-col mb-10">
        <h3 className="font-bold text-[30px]">Top Doctors to Book</h3>
        <p>Simple browser through an extensive list of many doctors</p>
      </div>

      {condition == true ? (
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-5">
          {filterDoctor.map((doctor, index) => (
            <Doctor
              key={index}
              id={doctor._id}
              index={index}
              name={doctor.name}
              image={doctor.image}
              speciality={doctor.speciality}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-5">
          {doctors.map((doctor, index) => (
            <Doctor
              key={index}
              id={doctor._id}
              index={index}
              name={doctor.name}
              image={doctor.image}
              speciality={doctor.speciality}
            />
          ))}
        </div>
      )}


      <div className="mt-10">
        <button className="bg-gray-200 rounded-[20px] px-15 py-2 ">more</button>
      </div>
    </div>
  );
};

export default TopDoctor;
