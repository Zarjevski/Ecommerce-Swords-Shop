import React from "react";
import Login from "./Login";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const Account = () => {
  const { loggedIn } = useSelector((store) => store.auth);
  if(!loggedIn) {
    return (
      <section className="center">
        <Login />
      </section>
    );
  }
  return (
    <Profile/>
  )
};

export default Account;
