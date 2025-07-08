import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-blue-500 rounded-[10px] mt-4 px-10 pt-10'>
      <div className='w-[60%]'> 
        <h1 className='text-white text-[40px] font-bold'>Book Appointment With Trusted Doctors</h1>
        <div className='flex items-center gap-2'>
            <img src={assets.group_profiles} alt="" />
            <p className='text-white text-[14px]'>simple browser though our extentsive list of doctor. <br />shedule your appointment here</p>
        </div>
        <button className='flex items-center gap-3 mt-5 bg-white px-7 rounded-[30px] py-3 cursor-pointer'>Book Appointment <img src={assets.arrow_icon} alt="" /></button>
      </div>
      
      <div>
        <img className=' ' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
