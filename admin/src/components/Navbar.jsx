import React from 'react'
import { assets } from '../../../frontend/src/assets/assets'

const Navbar = () => {
  return (
    <div className=''>
        <div className='flex px-5 py-5 items-center gap-2 justify-between'>
      <div className='flex px-5 py-5 items-center gap-2'>
        <img src={assets.logo} alt="" />
        <button className='border rounded-[50px] px-5 mt-3 cursor-pointer hover:bg-blue-500'>Admin</button>
      </div>
      <div>
        <button className='text-white px-15 bg-blue-400 rounded-[50px] py-2'>Login</button>
      </div>
      </div>
       <hr className='mt-[-35px] text-gray-400'/>
    </div>
  )
}

export default Navbar
