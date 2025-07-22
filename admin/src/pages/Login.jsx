import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const Login = ({setToken, setLogin, login}) => {
    
    const [formData, setFormData] = useState({
      email: "",
      password: ""
    })


    {console.log(login)}



    const handleChange = async(e) => {
      const {name, value} = e.target
      setFormData(prev=>({...prev, [name]:value}))
    }

    const handleSubmit = async(e) => {
      e.preventDefault()

      if (!login) {
        const response = await axios.post('http://localhost:4000/api/user/admin', { email: formData.email, password:formData.password} )
        setToken(response.data.token)
        console.log(response.data)
       
      }
      else{
        const response = await axios.post('http://localhost:4000/api/user/doctorlogin', { email: formData.email, password:formData.password} )
        setToken(response.data.token)
        
      }
      
      
    }


    const handleClick = () => {
        setLogin(prev => {
          const newLogin = !prev 
          localStorage.setItem('login', newLogin)
          return newLogin
        })

    }


  return (
    <div className="flex items-center w-full  justify-center-safe ">
      <div className="flex  justify-center-safe flex-col mt-25 px-3 py-5 shadow-2xl">
        <p className="font-bold text-[20px] text-center mb-5">
          <span className="text-blue-500">{login ? "Doctor" :  "Admin"}</span> Login
        </p>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
          <p>Email</p>
          <input onChange={handleChange} name="email" value={formData.email} type="email" className="border border-gray-300 px-2 rounded py-2 w-100" />
          <p>Password</p>
          <input onChange={handleChange} name="password" value={formData.password} type="password" className="border border-gray-300 px-2 rounded py-2 w-100" />
          <div className="w-full mt-2">
            <button type="submit" className="bg-blue-500 rounded py-2 cursor-pointer w-full">Login</button>
          </div>
        </form>
        <p className="mt-2">
          {login ? "Admin" : "Doctor"} Login &nbsp;&nbsp;
          <span className="underline text-blue-500 cursor-pointer" onClick={handleClick}> Click here</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
