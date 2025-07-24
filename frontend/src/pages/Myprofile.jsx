import React from 'react'
import { assets } from '../assets/assets'

const Myprofile = () => {
  return (
    <div className='mt-10'>
      <img className='w-40 mb-2' src={assets.profile_pic} alt="" />
      <b className='text-[30px]'>Full Name</b>
      <hr className='text-gray w-[50%] text-gray-500 mb-5'  />
      <p className='underline mb-3'>CONTACT INFORMATION</p>
      <div>
        <form action="" className='grid grid-cols-[1fr_1fr] gap-5 w-[35%]'>
          
          <p>Email id:</p>
          <input  className='border text-blue-500' type="email" />
          <p>Phone:</p>
          <input className='border' type="number" />
          <p>Address</p>
          <div className='flex flex-col gap-3'>
          <input className='border' type="text" />
          <input className='border' type="text" />
          </div>
         
          <p className='underline text-[17px]'>BASIC INFORMATION</p>
          <br />
          <p>Gender</p>
          <div>
            <select className='w-[100px] border border-gray-400 py-1 px-2 cursor-pointer' name="" id="">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <p>Birthday</p>
          <input className='border px-2 py-1 cursor-pointer' type="date" />
          <button className='border py-2 px-2 rounded-[50px]'>Edit</button>
        </form>
      </div>
    </div>
  )
}

export default Myprofile
