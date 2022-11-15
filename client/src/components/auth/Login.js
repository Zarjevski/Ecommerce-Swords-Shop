import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { setAuth } from "../../features/auth/authSlice";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { RootState } from "../../store";
import axios from "axios";
import { useLoginMutation } from "../../features/auth/authApiSlice";

const Login = () => {
  const userRef = useRef;
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((store) => store.auth);
  const login = useLoginMutation();
  const navigate = useNavigate();

  console.log(useLoginMutation);
  //  handle submiting the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({email,password}).unwrap()
      console.log(response);
      dispatch(setAuth({ ...response}));
      navigate("/account");
    } catch (err) {
      console.log(err);
      // let error = await err.response.data.error;
      // setErrorMsg(error);
      // setTimeout(() => setErrorMsg(""), 2000);
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
          <label htmlFor="username">
            {" "}
            username
          </label>
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
