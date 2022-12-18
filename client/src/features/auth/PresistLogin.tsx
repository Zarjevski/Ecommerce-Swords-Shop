import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useRefreshToken from "../../hooks/useRefreshToken";
import {  useToken } from "./authSlice";
import { useSelector } from "react-redux";

const PresistLogin = () => {
  const token = useSelector(useToken);
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();

  useEffect(() => {
    const verifyRefresh = async () => {
      try {
        await refresh();
        setIsLoading(false)
      } catch (error) {
        console.info(error);
      }
    };

    !token ? verifyRefresh() : setIsLoading(false);
  }, []);

  return isLoading ? <h1>loading</h1> : <Outlet />;
};

export default PresistLogin;
