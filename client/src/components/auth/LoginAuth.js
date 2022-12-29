import Login from "./Login";
import { useSelector } from "react-redux";
import Section from "../blocks/Section";
import React from "react";
import { Navigate } from "react-router-dom";

const LoginAuth = () => {
  const { loggedIn, role } = useSelector((store) => store.auth);

  return loggedIn ? (
    role.includes("Admin") ? (
      <Navigate to={"/dashboard"} />
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
