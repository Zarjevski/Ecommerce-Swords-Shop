import React from "react";
import adminLinks from "./adminLinks.json"
import Sidebar from "../blocks/Sidebar";
import CustomLink from "../elements/Link";
import LogoutButton from "../buttons/LogoutButton";

const SSidebar = () => {
  return (
    <Sidebar>
      <ul className="flex flex-col">
        {adminLinks.map((link)=>{
          return(
            <CustomLink to={link.to}>{link.text}</CustomLink>
          )
        })}          
      </ul>
      <LogoutButton type={"button"}>LOGOUT</LogoutButton>
    </Sidebar>
  );
};

export default SSidebar;
