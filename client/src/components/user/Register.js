import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const backToLogin = () => {
    navigate("/account");
  };
  // onChange
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };
  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newUser.name && newUser.email && newUser.password) {
        const newRegister = await axios.post("http://localhost:80/register", newUser);
        console.log(newRegister)
        setNewUser({name:"",email:"",password:""})
        setTimeout(()=>backToLogin(), 3000)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="center">
      <div className="register center">
        <h1>become a ninja!</h1>
        <form
          className="register-form center"
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <div className="input-container">
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">sign up</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
