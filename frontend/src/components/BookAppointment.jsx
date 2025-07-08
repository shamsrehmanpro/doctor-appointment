import React from 'react'
import { assets } from '../assets/assets'

const BookAppointment = () => {
  return (
    <div className='bg-blue-500 mb-10 mt-30 rounded-[10px] px-15  flex items-center justify-around'>
      <div>
        <h1 className='text-white font-bold text-[40px]'>Book Appointment <br /> With 100+ Trusted Doctors</h1>
        <button className='px-7 py-3 bg-white rounded-[30px] cursor-pointer mt-5'>Create account</button>
      </div>

      <div >
        <img className='h-[390px] mt-[-50px]' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default BookAppointment
