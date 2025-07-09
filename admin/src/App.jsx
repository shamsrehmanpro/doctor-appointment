import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddDoctor from "./pages/AddDoctor";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-[1.6fr_5fr]">
        <Sidebar />
        <Routes>
          <Route path="/add-doctor" element={<AddDoctor />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
