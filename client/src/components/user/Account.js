import React from "react";
import Login from "./Login";
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
    <section className="center">
      <h1>you are logged in</h1>
    </section>
  )
};

export default Account;
