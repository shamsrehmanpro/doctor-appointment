    import { createContext, useEffect, useState } from "react";
    import { doctors } from "../assets/assets";
    import axios from 'axios'


    export const doctorContext = createContext();

    const DoctorContextProvider = (props) => {

        const [filterDoctor, setfilterDoctor] = useState([])
        const [color, setColor] = useState("")
        const [condition, setCondition] = useState(false)
        const [doctors, setDoctors] = useState([])
        const [token, setToken] = useState(localStorage.getItem("token") || "")
 

        const fetchDoctor = async() => {
            const response = await axios.get('http://localhost:4000/api/doctor/list')
                setDoctors(response.data.doctors)
        }

        

        useEffect(()=>{
            fetchDoctor()
        },[])

        useEffect(()=>{
            localStorage.setItem('token', token)
        },[token])
        

        const value = {
        filterDoctor, setfilterDoctor,color, setColor, condition, setCondition, doctors, setDoctors, token, setToken
        }

        return (
            <doctorContext.Provider value={value}>
                {props.children}
            </doctorContext.Provider>
        )
    }

    export default DoctorContextProvider