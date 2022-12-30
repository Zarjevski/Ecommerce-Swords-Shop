import React from "react";
import Section from "../blocks/Section";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  
  return (
    <Section>
      <Sidebar/>
      <Outlet/>
    </Section>
  );
};

export default Dashboard;
