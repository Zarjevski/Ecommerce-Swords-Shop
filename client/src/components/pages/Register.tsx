import React, { FormEvent, useState } from "react";
import Card from "../blocks/Card";
import Section from "../blocks/Section";
import Form from "../blocks/Form";
import UserInput from "../elements/UserInput";
import Button from "../buttons/Button";
import axios from "../../api/axios";

const handleSubmit = async (e: FormEvent) => {};
const handleChanges = (e: React.ChangeEvent) => {};

const Register = () => {
  return (
    <Section>
      <Card>
        <Form onSubmit={() => handleSubmit} heading={"REGISTER"}>
          <UserInput
            id={"name"}
            type={"text"}
            onChange={handleChanges}
            placeholder={"Full Name"}
          />
          <UserInput
            id={"email"}
            type={"email"}
            onChange={handleChanges}
            placeholder={"Email Address"}
          />
          <UserInput
            id={"password"}
            type={"password"}
            onChange={handleChanges}
            placeholder={"Password"}
          />
          <UserInput
            id={"confirm"}
            type={"password"}
            onChange={handleChanges}
            placeholder={"Confirm Password"}
          />
          <Button type={"submit"}>SIGNUP</Button>
        </Form>
      </Card>
    </Section>
  );
};

export default Register;
