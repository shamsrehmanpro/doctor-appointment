    import { createContext, useState } from "react";
    import { doctors } from "../assets/assets";


    export const doctorContext = createContext();

    const DoctorContextProvider = (props) => {

        const [filterDoctor, setfilterDoctor] = useState([])
        const [color, setColor] = useState("")
        const [condition, setCondition] = useState(false)


        
        

        const value = {
        filterDoctor, setfilterDoctor,color, setColor, condition, setCondition
        }

        return (
            <doctorContext.Provider value={value}>
                {props.children}
            </doctorContext.Provider>
        )
    }

    export default DoctorContextProvider