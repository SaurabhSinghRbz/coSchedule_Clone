import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/landing/Main";
import { Login } from "../components/login/Login";
import { Register } from "../components/register/Register";

import Calender from "../components/calender/Calender";
import CreateNewProject from "../components/calender/CreateNewProject";
import EditProject from "../components/calender/EditProject";
import { FirstPage } from "../components/FirstPage/FirstPage";
import { Welcome } from "../components/WelcomePage/Welcome";
import { Analytics } from "../components/analytics/analytics";
import { Homepage } from "../components/HomePage/home";
import Account from "../components/setting/A/Account";
import MarketingCalendar from "../components/Products/MarketingCalendar/MarketingCalendar";
import MarketingSuite from "../components/Products/MarketingSuite/MarketingSuite";
export const LandingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/marketing-calendar" element={<MarketingCalendar />} />
        <Route path="/marketing-suite" element={<MarketingSuite />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/account" element={<Account />} />
        <Route path="newproject" element={<CreateNewProject />} />
        <Route path="editproject" element={<EditProject />} />
        <Route path="register-calendar" element={<FirstPage />} />
        <Route path="welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
};
