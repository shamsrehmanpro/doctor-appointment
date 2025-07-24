import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Myprofile from "./pages/Myprofile";
import MyAppointment from "./pages/MyAppointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Appointment from "./pages/Appointment";
import { useContext } from "react";
import { doctorContext } from "./context/DoctorContext";
import { useEffect } from "react";

const App = () => {

  const {token, setToken} = useContext(doctorContext)

 

  

  return (
    <div className="mx-4 sm:mx-[10%] ">
      <Navbar token={token} setToken={setToken}/>
       <hr className='mt-1 text-gray-300' />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctor/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
         <Route path='/contact' element={<Contact />} />
          <Route path='/my-profile' element={<Myprofile />} />
           <Route path='/my-appointments' element={<Appointment />} />
            <Route path='/appointments/:docId' element={<MyAppointment token={token} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
