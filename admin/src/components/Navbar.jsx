import React from 'react'
import { assets } from '../../../frontend/src/assets/assets'

const Navbar = ({setToken, token, login, setLogin}) => {

  const handleClick = ()=>{
    setToken('')
    setLogin(localStorage.removeItem('login'))
    
  }
  return (
    <div className=''>
        <div className='flex px-5 py-5 items-center gap-2 justify-between'>
      <div className='flex px-5 py-5 items-center gap-2'>
        <img src={assets.logo} alt="" />
        <button className='border rounded-[50px] px-5 mt-3 cursor-pointer hover:bg-blue-500'>{!login ? "Admin" : "Doctor"}</button>
      </div>
      <div>
        <button onClick={handleClick} className='text-white px-15 bg-blue-400 rounded-[50px] py-2 cursor-pointer'>{token ? "Logout" : "Login"}</button>
      </div>
      </div>
       <hr className='mt-[-35px] text-gray-400'/>
    </div>
  )
}

export default Navbar
