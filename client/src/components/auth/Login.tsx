import React, { useState, useRef } from "react";

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [inputs, setInputs] = useState("");

  const handleChange = (e:React.ChangeEvent) => {

  }

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log;
    }
  };

  return (
    <section className="flex items-center justify-center h-screen flex-col">
      <div className="login flex-col flex items-center justify-center h-1/2 w-1/4 bg-black">
        <h1>hello</h1>
        <form
          onSubmit={(e) => handleSubmit}
          className="flex-col flex items-center justify-center w-full "
        >
          <label htmlFor="username"> username</label>
          <input type="text" id="username" onChange={handleChange}/>
          <label htmlFor="password">password</label>
          <input type="password" id="password" onChange={handleChange}/>
          <p></p>
          <button type="submit">login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
