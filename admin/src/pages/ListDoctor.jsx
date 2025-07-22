import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DoctorSingle from "../components/SingleDoctor";

const ListDoctor = () => {
  const [doctor, setDoctors] = useState([]);

  const fetchDoctorList = async () => {
    const response = await axios.get("http://localhost:4000/api/doctor/list");
    setDoctors(response.data.doctors);
  };

  useEffect(() => {
    fetchDoctorList();
  }, []);

  return (
    <div>
        <p className="px-10 py-5 text-[20px] font-bold">All Doctors</p>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] px-10 gap-5 ">
        {doctor.map((doctors, index) => (
          <DoctorSingle
            key={index}
            index={index}
            name={doctors.name}
            speciality={doctors.speciality}
            image={doctors.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ListDoctor;
