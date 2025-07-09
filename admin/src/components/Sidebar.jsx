import React, { useState } from 'react'
import { assets } from '../../../admin/src/assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const [color, setColor] = useState("")
    const navigate = useNavigate()

    const handleClick  = (name)=>{
        setColor(name)
        navigate('/add-doctor')
    }
  return (
    <div className=' py-10 border-gray-400 border-r-1 flex flex-col gap-1 min-h-screen '>
      <div onClick={()=>handleClick("Dashboard")} className={`flex pl-10 hover:bg-blue-50 ${color === "Dashboard" && "border-r-4 border-blue-500 bg-blue-50"} cursor-pointer py-3 items-center gap-4`}>
        <img className='rounded-[100px]' src={assets.add_icon} alt="" />
        <p>Dashboard</p>
      </div>
      <div onClick={()=>handleClick("Appointments")} className={`flex pl-10 hover:bg-blue-50 ${color === "Appointments" && "border-r-4 border-blue-500 bg-blue-50"} cursor-pointer py-3 items-center gap-4`}>
        <img className='rounded-[100px]' src={assets.appointment_icon} alt="" />
        <p>Appointments</p>
      </div>
      <div onClick={()=>handleClick("Add Doctor")} className={`flex pl-10 hover:bg-blue-50 ${color === "Add Doctor" && "border-r-4 border-blue-500 bg-blue-50"} cursor-pointer py-3 items-center gap-4`}>
        <img className='rounded-[100px] w-7' src={assets.doctor_icon} alt="" />
        <p>Add Doctor</p>
      </div>
      <div onClick={()=>handleClick("Doctor List")} className={`flex pl-10 hover:bg-blue-50 ${color === "Doctor List" && "border-r-4 border-blue-500 bg-blue-50"} cursor-pointer py-3 items-center gap-4`}>
        <img className='rounded-[100px]' src={assets.list_icon} alt="" />
        <p>Doctor List</p>
      </div>
      <div onClick={()=>handleClick("Patients")} className={`flex pl-10 hover:bg-blue-50 ${color === "Patients" && "border-r-4 border-blue-500 bg-blue-50"} cursor-pointer py-3 items-center gap-4`}>
        <img className='rounded-[100px] w-7' src={assets.patients_icon} alt="" />
        <p>Patients</p>
      </div>
    </div>
  )
}

export default Sidebar
