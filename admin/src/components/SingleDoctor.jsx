import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'


const DoctorSingle = ({index, name, speciality, image, id}) => {
  return (
    <NavLink to={``} className='flex flex-col justify-between border-gray-200 hover:scale-[1.1] transition-transform duration-300 cursor-pointer border rounded-[15px]'>
      <div className='bg-gray-200 rounded-t-[15px]'>
        <img src={image} alt="" />
      </div>

      <div className='pl-2 font-bold'>
        <p>{name}</p>
      </div>

      <div className='pl-2 text-gray-500 '>
        <p>{speciality}</p>
      </div>
    </NavLink>
  )
}

export default DoctorSingle
