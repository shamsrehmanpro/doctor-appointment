import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from 'axios'
import { toast } from "react-toastify";

const AddDoctor = () => {
  const [address, setAddress] = useState({})
  const [image, setImage] = useState(false)

  const [doctorChange, setDoctorChange] = useState({
    name: "",
    speciality: "",
    addressOne: "",
    addressTwo: "",
    fees: "",
    email: "",
    experience: "",
    degree: "",
    date: "",
    password: "",
    about: ""
  })


  const handleUpload = async(e) => {
    const files = Array.from(e.target.files)
    const formData = new FormData()

    files.forEach((file) => {
      if (file.name.endsWith(".json")) {
        formData.append('json', file)
      }else{
        formData.append('images', file)
      }

    })

    const response = await axios.post("http://localhost:4000/api/doctor/upload-folder", formData)
    console.log(response.data)
    toast.success(response.data.message)
  }


  const handleChange = (event)=>{
    const {name, value} = event.target
    setDoctorChange(prev=>({...prev, [name]:value}))
  }

  useEffect(()=>{
    setAddress({
      line1: doctorChange.addressOne,
      line2: doctorChange.addressTwo
    })
   
  },[])

  const handleSubmit = async(e) => {

    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('name', doctorChange.name)
      formData.append('speciality', doctorChange.speciality)
      formData.append('address', JSON.stringify(address))
      formData.append('fees', doctorChange.fees)
      formData.append('experience', doctorChange.experience)
      formData.append('email', doctorChange.email)
      formData.append('degree', doctorChange.degree)
      formData.append('about', doctorChange.about)
      formData.append('password', doctorChange.password)
      formData.append('image', image)

      const response = await axios.post("http://localhost:4000/api/doctor/add-doctor", formData)
      console.log(response.data)
      if (response.data.success) {
        toast.success(response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="py-10 px-5">

      
      <b className="text-[20px]">Add Doctor</b>
      <br />

      <div className="flex items-center gap-2 mt-3">
          <input onChange={handleUpload} type="file" webkitdirectory="true" className="bg-gray-300 rounded w-[25%] py-2 cursor-pointer  px-5" />
          <p>Upload Folder</p>
      </div>
      

      <form onSubmit={handleSubmit} className="py-7 mt-6 px-5 border border-gray-400 ">
        <div className="flex  items-center cursor-pointer gap-5">
          <label htmlFor="image" className="w-[10%]">
            <img   className={`${image ? "w-[100%] rounded-[100%] ": "w-[88%]"} cursor-pointer`} src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          
          <input type="file" onChange={(e) => setImage(e.target.files[0])} id="image"  hidden/>
          <p>
            Upload Doctor <br /> Picture
          </p>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-5  mt-5">
          <div>
            <p className="mb-2">Doctor name</p>
            <input
              name="name"
              value={doctorChange.name}
              onChange={handleChange}
              type="text"
              placeholder="name"
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
            />
          </div>
          <div>
            <p className="mb-2">Speciality</p>
            <select
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
              name="speciality"
              value={doctorChange.speciality}
          
              onChange={handleChange}
            >
              <option value="General physician">General_physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>
          <div>
            <p className="mb-2">Doctor email</p>
            <input
              name="email"
              value={doctorChange.email}
              onChange={handleChange}
              type="email"
              placeholder="email"
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
            />
          </div>
          <div>
            <p className="mb-2">Education</p>
            <input
              name="degree"
              value={doctorChange.degree}
              onChange={handleChange}
              type="text"
              placeholder="education"
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
            />
          </div>
          <div>
            <p className="mb-2">Password</p>
            <input
              type="password"
              name="password"
              value={doctorChange.password}
              onChange={handleChange}
              placeholder="password"
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
            />
            <div className="mt-5">
            <p className="mb-2">Experience</p>
            <select
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
              name="experience"
              value= {doctorChange.experience}
              onChange={handleChange}
             
            >
              <option value="">Select Experience</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
             <div className="mt-5">
              <p className="mb-2">Fees</p>
              <input
                type="text"
                name="fees"
                value={doctorChange.fees}
                onChange={handleChange}
                placeholder="your fees"
                className="border border-gray-400 px-2 py-2 rounded w-[80%]"
              />
            </div>
          </div>
          <div className="">
            <p className="mb-2">Address</p>
            <input
              name="addressOne"
              value={doctorChange.addressOne}
              onChange={handleChange}
              type="text"
              placeholder="Address"
              className="border mb-5 border-gray-400 px-2 py-2 rounded w-[80%]"
            />
            <input
              type="text"
              name="addressTwo"
              value={doctorChange.addressTwo}
              onChange={handleChange}
              placeholder="Address"
              className="border border-gray-400 px-2 py-2 rounded w-[80%]"
            />
          </div>
          
           

          
        </div>

        <div className="mt-4">
        <p className="mb-2">About me</p>
        <textarea name="about" value={doctorChange.about} onChange={handleChange} className="border border-gray-400 rounded w-[90%] h-30" ></textarea>
        </div>
       
       <button type="submit" className="px-10 py-2 bg-blue-500 cursor-pointer mt-3 rounded-[50px] text-white">Add doctor</button>
      </form> 
    </div>
  );
};

export default AddDoctor;
