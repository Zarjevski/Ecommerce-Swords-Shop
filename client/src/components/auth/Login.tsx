import React, { useState, FormEvent } from "react";
import axios from "../../api/axios";
import Card from "../blocks/Card";
import UserInput from "../elements/UserInput";
import Button from "../buttons/Button";
import ErrorMsg from "../blocks/ErrorMsg";
import Form from "../blocks/Form";
import CustomLink from "../elements/Link";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/authSlice";
import { AppDispatch } from "../../store";
import { UserIcon, KeyIcon } from "@heroicons/react/24/outline";

const Login = () => {
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
    } catch (err: any) {
      let error = await err.response.data.error;
      setErrorMsg(error);
      setTimeout(() => setErrorMsg(""), 2000);
    }
  };
  // jsx
  return (
    <Card className="flex-col">
      {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>}
      <Form onSubmit={handleSubmit} heading={"LOGIN"}>
        <UserInput
          label="yes"
          onChange={(e: any) => setEmail(e.target.value)}
          htmlFor="username"
          id="username"
          type="text"
          placeholder="email"
          autocomplete="username"
          icon={<UserIcon className="h-6 w-6 text-white" />}
        />
        <UserInput
          label="yes"
          onChange={(e: any) => setPassword(e.target.value)}
          htmlFor="password"
          id="password"
          type="password"
          placeholder="password"
          autocomplete="current-password"
          icon={<KeyIcon className="h-6 w-6 text-white " />}
        />
        <Button type={"submit"}>LOGIN</Button>
        <CustomLink to={"/register"}>dosen't have account?</CustomLink>
      </Form>
    </Card>
  );
};

export default Login;
