import React from "react";
import NavigationButton from "./buttons/NavigationButton";
import FullSection from "./blocks/FullSection";
import CenteredBox from "./blocks/CenteredBox";

const GoToLogin = () => {
    const Asset = ()=>{
      return(
        <>
        <h1>please log in</h1>
        <NavigationButton text={"login"} to={"/login"}/>
        </>
      )
    }
  return (
    <FullSection children={<CenteredBox childern={<Asset/>} />}/>);
};

export default GoToLogin;
