import React, { useContext } from "react";
import { doctorContext } from "../context/DoctorContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const { condition, setCondition, token, setToken } = useContext(doctorContext);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
    if (condition) {
      const response = await axios.post('http://localhost:4000/api/user/login',{email: formData.email, password: formData.password})
      setToken(response.data.token)
      navigate('/')
    }
    else{
      const response = await axios.post('http://localhost:4000/api/user/register',  {name: formData.fullName, email: formData.email, password: formData.password})
      setToken(response.data.token)
      setCondition(true)
    }   
  }



  return (
    <div className="flex justify-center-safe w-full mt-10">
      <div className="px-5 py-10 border border-gray-400 w-[50%] flex flex-col shadow rounded-[10px]">
        <b className="text-[20px]">Create Account</b>
        <p>Please {condition ? "login" : "sign up"} to book appointment</p>
        <br />

        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
          {condition ? (
            ""
          ) : (
            <>
              {" "}
              <p>Full Name</p>
              <input
                className="border border-gray py-2 rounded px-2"
                type="text"
                placeholder="enter full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </>
          )}

          <p>Email</p>
          <input
            className="border border-gray py-2 rounded px-2"
            type="email"
            placeholder="enter email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p>Password</p>
          <input
            className="border border-gray py-2 rounded px-2"
            type="password"
            placeholder="enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="bg-blue-500 py-2 rounded cursor-pointer text-white">
            {condition ? "Login" : "Create account"}
          </button>
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCondition(!condition)}
              className="text-blue-500 underline cursor-pointer"
            >
              {condition ? "Sign up here" : " Login here"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
