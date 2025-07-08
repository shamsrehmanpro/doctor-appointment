import React, { useContext } from "react";
import DoctorSingle from "../components/DoctorSingle";
import { doctors } from "../assets/assets";
import { doctorContext } from "../context/DoctorContext";

const Doctor = () => {

  const {filterDoctor, setfilterDoctor, condition, setCondition, color, setColor} = useContext(doctorContext)

  const handleClick = (speciality)=>{
    const filter = doctors.filter(doctor => doctor.speciality == speciality)
    setfilterDoctor(filter)
    setCondition(true)
    setColor(speciality)
  }

  return (
    <div className="mt-10 mb-60">
      
      <p>Browse through the doctors specialist.</p>
      <div className="mt-5">
        <div className="grid grid-cols-[2fr_5fr] gap-10">
          <div className="flex flex-col gap-3">
            <p onClick={()=>handleClick("General physician")} className={`border ${color === "General physician" ? "bg-blue-200" : ""} border-gray-400 rounded-[5px] py-3 px-2 hover:bg-blue-200 cursor-pointer`}>General physician</p>
            <p onClick={()=>handleClick("Gynecologist")} className={`border  ${color === "Gynecologist" ? "bg-blue-200" : ""} border-gray-400 rounded-[5px] py-3 px-2 hover:bg-blue-200 cursor-pointer`}>Gynecologist</p>
            <p onClick={()=>handleClick("Dermatologist")} className={`border  ${color === "Dermatologist" ? "bg-blue-200" : ""} border-gray-400 rounded-[5px] py-3 px-2 hover:bg-blue-200 cursor-pointer`}>Dermatologist</p>
            <p onClick={()=>handleClick("Pediatricians")} className={`border  ${color === "Pediatricians" ? "bg-blue-200" : ""} border-gray-400 rounded-[5px] py-3 px-2 hover:bg-blue-200 cursor-pointer`}>Pediatricians</p>
            <p onClick={()=>handleClick("Neurologist")} className={`border  ${color === "Neurologist" ? "bg-blue-200" : ""} border-gray-400 rounded-[5px] py-3 px-2 hover:bg-blue-200 cursor-pointer`}>Neurologist</p>
            <p onClick={()=>handleClick("Gastroenterologist")} className={`border  ${color === "Gastroenterologist" ? "bg-blue-200" : ""} border-gray-400 rounded-[5px] py-3 px-2 hover:bg-blue-200 cursor-pointer`}>Gastroenterologist</p>
          </div>

          <div>
              {condition == true ? 
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-5">
                  {filterDoctor.map((doctor, index) => (
                    <DoctorSingle key={index} id={doctor._id} index={index} name={doctor.name} speciality={doctor.speciality} image={doctor.image}/>
                  ))}
                </div>
                
                :

                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-5">
                  {doctors.map((doctor, index) => (
                    <DoctorSingle key={index} id={doctor._id} index={index} name={doctor.name} speciality={doctor.speciality} image={doctor.image}/>
                  ))}
                </div>
              }
          </div>
      </div>
          
        </div>
      </div>
   
  );
};

export default Doctor;
