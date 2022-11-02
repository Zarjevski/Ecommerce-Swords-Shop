import React from "react";
import Login from "../auth/Login";
import Dashboard from "../admin/Dashboard";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Account = () => {
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const { role } = useSelector((state: RootState) => state.user);
  if (role.includes("Admin")) {
    return <Dashboard />;
    console.log("user is admin");
  } else if (loggedIn) {
    console.log("member");
    return <Profile />;
  }
  return <Login />;
};

export default Account;
