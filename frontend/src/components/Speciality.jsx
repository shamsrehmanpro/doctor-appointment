import React, { useContext, useState } from 'react'
import { assets, doctors } from '../assets/assets'
import { doctorContext } from '../context/DoctorContext'

const Speciality = () => {


  
  const {filterDoctor, setfilterDoctor, color, setColor, condition, setCondition} = useContext(doctorContext)
  


  const handleClick = (speciality) => {
    const filter = doctors.filter((docter) => docter.speciality  == speciality)
    setfilterDoctor(filter)
    setColor(speciality)
    setCondition(!condition)
  }

  {console.log(filterDoctor);
  }
  return (
    <div className='mt-20 flex flex-col items-center justify-between w-full'>
      <div className='flex flex-col items-center mb-10'>
        <h2 className='font-bold text-[30px]'>Find by Speciality</h2>
        <p className='text-gray-500'>simple browser though our extentsive list of doctor</p>
        <p className='text-gray-500'>shedule your appointment here</p>
      </div>

      <div className='flex items-center justify-between gap-5 mt-5'>
        <div onClick={()=>handleClick("General physician")}  className='flex flex-col gap-3 cursor-pointer items-center hover:-translate-y-2 transition-transform duration-300'>
            <img className={`${color == "General physician" && condition == true ? "border-blue-400 border-10 rounded-[100%]" : ""}`} src={assets.General_physician} alt="" />
            <p>General Physician</p>
        </div>
        <div onClick={()=>handleClick("Gynecologist")} className='flex flex-col gap-3 cursor-pointer items-center hover:-translate-y-2 transition-transform duration-300'>
            <img className={`${color == "Gynecologist" && condition == true ? "border-blue-400 border-10 rounded-[100%]" : ""}`} src={assets.Gynecologist} alt="" />
            <p>Gynecologist</p>
        </div>
        <div onClick={()=>handleClick("Dermatologist")} className='flex flex-col gap-3 cursor-pointer items-center hover:-translate-y-2 transition-transform duration-300'>
            <img className={`${color == "Dermatologist" && condition == true ? "border-blue-400 border-10 rounded-[100%]" : ""}`} src={assets.Dermatologist} alt="" />
            <p>Dermatologist</p>
        </div>
        <div onClick={()=>handleClick("Pediatricians")} className='flex flex-col gap-3 cursor-pointer items-center hover:-translate-y-2 transition-transform duration-300'>
            <img className={`${color == "Pediatricians" && condition == true ? "border-blue-400 border-10 rounded-[100%]" : ""}`} src={assets.Pediatricians} alt="" />
            <p>Pedriaticians</p>
        </div>
        <div onClick={()=>handleClick("Neurologist")} className='flex flex-col gap-3 cursor-pointer items-center hover:-translate-y-2 transition-transform duration-300'>
            <img className={`${color == "Neurologist" && condition == true ? "border-blue-400 border-10 rounded-[100%]" : ""}`} src={assets.Neurologist} alt="" />
            <p>Neurologist</p>
        </div>
        <div onClick={()=>handleClick("Gastroenterologist")} className='flex flex-col gap-3 cursor-pointer items-center hover:-translate-y-2 transition-transform duration-300'>
            <img className={`${color == "Gastroenterologist" && condition == true ? "border-blue-400 border-10 rounded-[100%]" : ""}`} src={assets.Gastroenterologist} alt="" />
            <p>Gastrontologist</p>
        </div>
      </div>
    </div>
  )
}

export default Speciality
