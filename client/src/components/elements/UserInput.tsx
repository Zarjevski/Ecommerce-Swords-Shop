import React from "react";
import tw from "tailwind-styled-components";

interface UserInput {
  icon: JSX.Element;
  htmlFor: string;
  type: string;
  id: string;
  onChange: (e:any)=>void;
  placeholder: string;
}

const UserInput: React.FunctionComponent<UserInput> = (props) => {
  return (
    <Wrapper>
      <Label htmlFor={props.htmlFor}>{props.icon}</Label>
      <Input type={props.type} id={props.id} placeholder={props.placeholder} onChange={props.onChange}/>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full
  flex 
  justify-center 
  m-5
`;
const Label = tw.label`
  p-2 
  h-full 
  bg-white 
  rounded-l-sm
`;

const Input = tw.input`
  w-3/6 
  h-full 
  text-sm 
  p-2 
  rounded-r-sm 
  text-black
`;

export default UserInput;
