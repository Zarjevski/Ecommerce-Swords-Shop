import Login from "./Login";
import { useSelector } from "react-redux";
import Section from "../blocks/Section";
import React from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store";

const LoginAuth = () => {
  const { loggedIn, role } = useSelector((store: RootState) => store.auth);

  return loggedIn ? (
    role.includes("Admin") ? (
      <Navigate to={"/dashboard/home"} />
    ) : (
      <Navigate to={"/profile"} />
    )
  ) : (
    <Section>
      <Login />
    </Section>
  );
};

export default LoginAuth;
