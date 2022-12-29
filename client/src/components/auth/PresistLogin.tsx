import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../../hooks/useRefreshToken";
import {  useToken } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import Spinner from "../utility/Spinner";
import Section from "../blocks/Section";

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
        console.error(error);
      }
    };

    !token ? verifyRefresh() : setIsLoading(false);
  }, []);

  return isLoading ? <Section><Spinner/></Section> : <Outlet />;
};

export default PresistLogin;
