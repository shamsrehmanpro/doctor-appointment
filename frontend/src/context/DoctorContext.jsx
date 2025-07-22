    import { createContext, useEffect, useState } from "react";
    import { doctors } from "../assets/assets";
    import axios from 'axios'


    export const doctorContext = createContext();

    const DoctorContextProvider = (props) => {

        const [filterDoctor, setfilterDoctor] = useState([])
        const [color, setColor] = useState("")
        const [condition, setCondition] = useState(false)
        const [doctors, setDoctors] = useState([])


        const fetchDoctor = async() => {
            const response = await axios.get('http://localhost:4000/api/doctor/list')
                setDoctors(response.data.doctors)
        }

        

        useEffect(()=>{
            fetchDoctor()
        },[])
        

        const value = {
        filterDoctor, setfilterDoctor,color, setColor, condition, setCondition, doctors, setDoctors
        }

        return (
            <doctorContext.Provider value={value}>
                {props.children}
            </doctorContext.Provider>
        )
    }

    export default DoctorContextProvider