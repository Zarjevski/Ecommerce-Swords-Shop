import React, { FormEventHandler } from "react";
import tw from "tailwind-styled-components";
import H1 from "../elements/H1";

interface Form {
  children: JSX.Element | JSX.Element[];
  className?: string;
  onSubmit: FormEventHandler;
  heading?: string;
}

const Form: React.FunctionComponent<Form> = (props) => {
  return (
    <Wrapper onSubmit={props.onSubmit} className={props.className}>
      <H1>{props.heading}</H1>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = tw.form`
    flex 
    flex-col 
    items-center 
    justify-center
    w-full 
    h-full
`;

export default Form;
