import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  
  return (
    <section className="w-full h-screen flex">
      <Sidebar/>
      <Outlet/>
    </section>
  );
};

export default Dashboard;
