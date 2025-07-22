import React from 'react'
import { assets } from '../assets/assets'

const Dashboard = ({login}) => {
  return (
    <div>
      <div className='px-10 pt-5 flex items-center gap-5'>
        <div className=''>
          <div className='flex items-center gap-3 px-5 border border-gray-200 rounded-[10px] w-[250px] h-[120px]  py-5 shadow-2xl'>
            <img src={assets.doctor_icon} alt="" />
            <div>
              <b>14</b>
              <p className='text-gray-500'>{login ? "Earnings" : "Doctors"}</p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-3  px-5 border border-gray-200 rounded-[10px] w-[250px] h-[120px]  py-5 shadow-2xl'>
            <img src={assets.appointments_icon} alt="" />
            <div>
              <b>14</b>
              <p className='text-gray-500'>Appointments</p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-3  px-5 border border-gray-200 rounded-[10px] w-[250px] h-[120px]  py-5 shadow-2xl'>
            <img src={assets.patients_icon} alt="" />
            <div>
              <b>14</b>
              <p className='text-gray-500'>Patients</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' mt-10 border border-gray-200 mx-10 mr-50 rounded-[10px] '>
        <div className='flex px-5 items-center gap-2 py-5'>
          <img src={assets.list_icon} alt="" />
          <p className=' text-[20px]'>Latest Appointment</p>
        </div>
        <hr className='text-gray-200'/>

        <div className='py-5'>
          <div className='flex items-center gap-2 justify-between px-5  cursor-pointer'>
            
            <div className='flex items-center gap-3 cursor-pointer w-[85%] hover:bg-gray-200'>
              <img src={assets.doctor_icon} className='rounded-[100px]' alt="" />
               <div className=''>
                 <p>Dr.Richard James</p>
                 <p className='text-gray-400'>Booking on 24 july</p>
               </div>
            </div>

               <div className='flex w-[15%] items-center gap-3'>
                <img className='cursor-pointer hover:scale-[1.1] transition-transform duration-150' src={assets.cancel_icon}  alt="" />
                <img className='cursor-pointer hover:scale-[1.1] transition-transform duration-150' src={assets.tick_icon}  alt="" />
               </div>
              
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
