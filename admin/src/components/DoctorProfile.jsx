import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import {toast} from 'react-toastify'
import axios from 'axios'

const DoctorProfile = ({token}) => {
    const [doctorInfo, setDoctorInfo] = useState('')
    const [edit, setEdit] = useState(false)
    const [editData, setEditData] = useState({
        fees: '',
        address: {
            line1: '',
            line2: ''
        }
    })

    const [available, setAvailable] = useState(false)

  
    

    const handleChange = (e) => {
        const {name, value} = e.target

        if (edit === true) {
             if (name === 'line1' || name === 'line2') {
            setEditData(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    [name] : value
                }
            }))
        }else{
        setEditData(prev=>({...prev, [name]: value}))
        }   
        }
        

    }


   

        const fetchDoctorDetail = async() => {

            const response = await axios.get('http://localhost:4000/api/doctor/single', token)
            setDoctorInfo(response.data.doctor)
            setAvailable(response.data.doctor.available)
           
        }

        const updateDoctor = async() => {
            setEdit(true)
            

            if (edit === true) {
                console.log(available)
                console.log(editData)
                const response = await axios.put('http://localhost:4000/api/doctor/update', {fees: editData.fees, address:{line1:editData.address.line1, line2:editData.address.line2} , available}, {headers:{token}})
                 toast.success(response.data.message)
            }
            
        } 


    useEffect(()=>{
        fetchDoctorDetail()
    },[])

    useEffect(() => {
        if (doctorInfo) {
            setEditData({
                fees: doctorInfo.fees || '',
                address: {
                    line1: doctorInfo.address.line1 || '',
                    line2: doctorInfo.address.line2 || ''
        }
            })

             
        }
    }, [doctorInfo])

  return (
    <div className='px-5 py-5'>
      <img className='bg-blue-400 rounded-[10px] w-[200px] h-[200px]' src={doctorInfo.image} alt="" />

      <div className='w-[60%] px-5 py-5 mt-5 border border-gray-200 rounded-[10px] '>
        <div className=' '>
         <b className='text-[23px]'>{doctorInfo.name}</b>
         <p className='text-gray-500 '>{doctorInfo.degree} - {doctorInfo.speciality} <span className='text-[14px]'> &nbsp;&nbsp;&nbsp;&nbsp;   4 years</span></p>
        </div>
        
        <div className='mt-5'>
            <b>About:</b>
            <p>{doctorInfo.about}</p>
        </div>
        <br />
        <p>Appintment fees: <input onChange={handleChange} name='fees' className='font-bold' type="number" value={editData.fees} /> </p>
        <div className='grid mt-3 grid-cols-[1fr_6fr]'>
            <b>Address:</b>
            <input onChange={handleChange} type="text" name='line1' value={editData.address.line1} />
            <p></p>
            <input onChange={handleChange} type="text" name='line2' value={editData.address.line2} />
        </div>

        <div className='flex mt-2 items-center gap-2'>
         <input onChange={()=>setAvailable(!available)} value={available} type='checkbox' checked={available} />
        <b>Available</b>
        </div>
       
        <button className='px-5 py-1 rounded-[50px] border mt-5 cursor-pointer hover:bg-blue-100' onClick={updateDoctor}>{edit === true ? "Save" : "Edit"}</button>
      </div>
     
    </div>
  )
}

export default DoctorProfile
