import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setLoggedIn } from "../../features/auth/authSlice";
import axios from "../../api/axios";

const Login = () => {
  // constants
  const dispatch = useDispatch();
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  console.log();
  //   effects
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  //   form submiting
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      }, { withCredentials: true });
      dispatch(setToken(response.data.accessToken));
      dispatch(setLoggedIn());
    } catch (error) {
      console.log(error);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="login center">
      <h1>welcome</h1>
      <form className="login-form center" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            required
            type="email"
            name="email"
            ref={emailRef}
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            required
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/register" className="register-link">
        don't have an account?
      </Link>
    </div>
  );
};

export default Login;
