import React, { FormEvent, useState } from "react";
import Card from "../blocks/Card";
import Section from "../blocks/Section";
import Form from "../blocks/Form";
import UserInput from "../elements/UserInput";
import Button from "../buttons/Button";
import ErrorMsg from "../blocks/ErrorMsg";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [matchingPwd, setMatchingPwd] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [isMatching, setIsMatching] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const passwordRegex = / /;
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    checkIfPwdValid();
    checkIfPwdMatching();
    if (
      isMatching &&
      validPassword &&
      user.email &&
      user.firstName &&
      user.lastName
    ) {
      try {
        await axios.post("/auth/register", { ...user });
        navigate("/login", { replace: true });
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleChanges = (e: React.ChangeEvent<any>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
    const checkIfPwdMatching = () => {
      if (matchingPwd == user.password) {
        setIsMatching(true);
      } else {
        setErrorMsg("passwords dont match");
      }
    };
    const checkIfPwdValid = () => {
      if (passwordRegex.test(user.password)){
        setValidPassword(true)
      } else {
        setErrorMsg("password is not valid")
      }
    }
  return (
    <Section>
      <Card className="flex-col">
      {errorMsg? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>}
        <Form onSubmit={handleSubmit} heading={"REGISTER"}>
          <UserInput
            id={"firstName"}
            name={"firstName"}
            type={"text"}
            onChange={handleChanges}
            placeholder={"First Name"}
          />
          <UserInput
            id={"lastName"}
            name={"lastName"}
            type={"text"}
            onChange={handleChanges}
            placeholder={"Last Name"}
          />
          <UserInput
            id={"email"}
            type={"email"}
            name={"email"}
            onChange={handleChanges}
            placeholder={"Email Address"}
          />
          <UserInput
            id={"password"}
            type={"password"}
            name={"password"}
            onChange={handleChanges}
            placeholder={"Password"}
          />
          <UserInput
            onChange={(e) => setMatchingPwd(e.target.value)}
            id={"confirm"}
            type={"password"}
            placeholder={"Confirm Password"}
          />
          <Button type={"submit"}>SIGNUP</Button>
        </Form>
      </Card>
    </Section>
  );
};

export default Register;
