import React from "react";
import Calender from "../components/calender/Calender";
import CreateNewProject from "../components/calender/CreateNewProject";
import { Routes, Route } from "react-router-dom";
import EditProject from "../components/calender/EditProject";
import Homepage from "../components/HomePage/Homepage";
import { Register } from "../components/register/Register";
import { Login } from "../components/login/Login";
import { Analytics } from "../components/analytics/analytics.js";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<Analytics />} />
      <Route path="/calender" element={<Calender />} />
      
      <Route path="newproject" element={<CreateNewProject />} />
      <Route path="editproject" element={<EditProject />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default MainRoute;
