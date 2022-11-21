import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./authSlice";
import { Navigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../store";
import {
  UserIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
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
    } catch (err:any) {
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
      <div className="flex-col flex items-center justify-center h-3/4 lg:w-1/4 xl:w-1/4 sm:w-full md:w-3/4 xs:w-3/4  bg-black text-white rounded-md">
        <h1 className="text-5xl m-4">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex-col flex items-center justify-center  w-full h-3/5 "
        >
          <div className="user w-full flex justify-center m-5">
            <label
              htmlFor="username"
              className="p-2 h-full bg-white rounded-l-sm"
            >
              <UserIcon className="h-6 w-6 text-black bg-white" />
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/6 h-full text-sm p-2 rounded-r-sm"
              placeholder="Email Address"
            />
          </div>
          <div className="pass w-full flex justify-center m-2">
            <label
              htmlFor="password"
              className="p-2 h-full bg-white rounded-l-sm"
            >
              <KeyIcon className="h-6 w-6 text-black bg-white" />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-3/6 h-full text-sm p-2 rounded-r-sm"
              placeholder="Password"
            />
          </div>
          {errorMsg ? (
            <p className="w-2/4 h-10 bg-red-300 flex items-center">
              <ExclamationCircleIcon className="h-5 w-5 m-4" />
              {errorMsg}
            </p>
          ) : (
            <p></p>
          )}
          <button
            type="submit"
            className="rounded-md bg-red-600 p-2 m-20 text-md w-3/6"
          >
            login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
