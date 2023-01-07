import React from "react";
import Section from "../blocks/Section";
import { Outlet } from "react-router-dom";
import { adminLinks } from "../../assets/links";
import UserImg from "../utility/UserImg";
import Sidebar from "../blocks/Sidebar";
import CustomLink from "../elements/Link";
import LogoutButton from "../buttons/LogoutButton";

const Dashboard = () => {
  return (
    <Section>
      <Sidebar className="!justify-between">
        <UserImg/>
        <ul className="mt-12 w-full">
          {adminLinks.map((link, index) => {
            return (
              <CustomLink sidebar={"true"} key={index} to={link.to}>
                {link.text}
              </CustomLink>
            );
          })}
        </ul>
          <LogoutButton>LOGOUT</LogoutButton>
      </Sidebar>
      <Outlet />
    </Section>
  );
};

export default Dashboard;
