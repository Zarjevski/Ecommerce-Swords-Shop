import React, { useEffect, useRef,useState,useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import AuthContext from "../../context/AuthContex";


const Login = () => {
  // constants
  const emailRef = useRef();
  const {setAuth} = useContext(AuthContext)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
      });
      console.log(response);
      setEmail("");
      setPassword("");
      setAuth({accessToken: response.data.accessToken})
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
