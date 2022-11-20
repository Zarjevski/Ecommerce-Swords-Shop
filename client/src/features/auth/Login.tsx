import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./authSlice";
import { Navigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../store";
import axios from "../../api/axios";

const Login = () => {
  const { loggedIn } = useSelector((store: RootState) => store.auth);
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch: AppDispatch = useDispatch();
  //  handle submiting the form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", { email, password });
      dispatch(setAuth({ ...response.data }));
    } catch (err :any) {
      let error = await err.response.data.error;
      setErrorMsg(error);
      setTimeout(() => setErrorMsg(""), 2000);
    }
  };

  // jsx
  return loggedIn ? (
    <Navigate to="/profile" />
  ) : (
    <section className="flex items-center justify-center h-screen flex-col">
      <div className="flex-col flex items-center justify-center h-1/2 lg:w-1/2 xl:w-1/2 sm:w-full md:w-3/4 xs:w-full  bg-black text-white rounded-md">
        <h1>hello</h1>
        <form
          onSubmit={handleSubmit}
          className="flex-col flex items-center justify-center w-full "
        >
          <label htmlFor="username"> username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{errorMsg}</p>
          <button type="submit">login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
