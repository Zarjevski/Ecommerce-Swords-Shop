import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const RequiredAuth = ({ allowedRole }: { allowedRole: Array<string> }) => {
  const { role, userName } = useSelector((store: RootState) => store.auth);
  const location = useLocation();
  return role.find((role: string) => allowedRole.includes(role)) ? (
    <Outlet />
  ) : userName == "Guest" ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    <Navigate to="/unauthorize" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
