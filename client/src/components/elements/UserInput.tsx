import React from "react";
import tw from "tailwind-styled-components";

interface UserInput {
  icon?: JSX.Element;
  htmlFor?: string;
  type: string;
  id: string;
  onChange?: (e: any) => void;
  placeholder: string;
  name?: string;
  autocomplete?: string
  label?: string
}

const UserInput: React.FunctionComponent<UserInput> = (props) => {
  return (
    <Wrapper label={props.label}>
     { props.label ? <Label htmlFor={props.htmlFor}>{props.icon}</Label> : <></> }
      <Input
        name={props.name}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoComplete={props.autocomplete}
      />
    </Wrapper>
  );
};

const Wrapper = tw.div<any>`
  w-full
  flex 
  justify-center 
  m-5
`;
const Label = tw.label`
  p-2 
  h-full 
  rounded-l-sm
  bg-light-grey/[.1]
  backdrop-blur-xl
`;

const Input = tw.input`
  w-3/6 
  h-full 
  text-sm 
  p-2 
  rounded-r-sm 
  bg-light-grey/[.05]
  backdrop-blur-xl
  focus:border-sky-500
  focus:outline-none
  focus:ring-sky-500
  border
`;

export default UserInput;
