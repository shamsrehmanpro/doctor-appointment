import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddDoctor from "./pages/AddDoctor";
import { ToastContainer, toast } from 'react-toastify';
import ListDoctor from "./pages/ListDoctor";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import DoctorProfile from "./components/DoctorProfile";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'): '')
  const [login, setLogin] =useState(localStorage.getItem('login')?localStorage.getItem('login'): false)
  

  useEffect(()=>{
    
       localStorage.setItem('token', token)
      
  },[token])


  return (
    <>
    {token  ? (<div>
      <ToastContainer />
      <Navbar setToken={setToken} token={token} />

      <div className="grid grid-cols-[1.6fr_5fr]">
        <Sidebar login={login} />
        <Routes>
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<ListDoctor />} /> 
          {
            localStorage.getItem('login') === "true" 
            ?
            <Route path="/doctor-dashboard" element={<Dashboard login={login}  />} />
            :
            <Route path="/admin-dashboard" element={<Dashboard login={login} />} />
          }

          <Route path="/doctor-profile" element={<DoctorProfile token = {token} />} /> 
        </Routes>
      </div>
    </div>) : <Login setToken={setToken} setLogin={setLogin} login={login} />}
    </>
    

    
  );
};

export default App;
