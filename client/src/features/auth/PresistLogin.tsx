import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../../hooks/useRefreshToken";
import { useToken } from "./authSlice";
import { useSelector } from "react-redux";

const PresistLogin = () => {
  const token = useSelector(useToken);
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  console.log(token);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      }
    };

    !token ? verifyRefreshToken() : console.log("sorry there is an error");
  });

  return <>{isLoading ? <h1>loading</h1> : <Outlet />}</>;
};

export default PresistLogin;
