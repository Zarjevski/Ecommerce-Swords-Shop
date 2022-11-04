import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setToken, setLoggedIn, setRole } from "../../features/auth/authSlice";
import axios from "axios";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:80/auth/login", {
        email,
        password,
      }, {withCredentials:true});
      dispatch(setRole(response.data.userRole))
      dispatch(setToken(response.data.accessToken));
      dispatch(setLoggedIn());
      console.log(response);
    } catch (err:any) {
      let error = await err.response.data.error;
      setErrorMsg(error)
      setTimeout(() => setErrorMsg(""), 2000);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen flex-col">
      <div className="login flex-col flex items-center justify-center h-1/2 w-1/4 bg-black text-white">
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
