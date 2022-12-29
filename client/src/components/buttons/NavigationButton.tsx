import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

interface navigationBtn {
  to: string | any;
  text: string;
}

const NavigationButton: React.FunctionComponent<navigationBtn> = (props) => {
  const navigate = useNavigate()
  return <Button onClick={()=>navigate(props.to)}>{props.text}</Button>
};

export default NavigationButton;

const Button = tw.button`
 text-white
 bg-gradient-to-br 
 from-red-600 
 to-orange-500 
 hover:bg-gradient-to-bl 
 focus:ring-4 
 focus:outline-none 
 focus:ring-orange-200 
 font-medium 
 rounded-lg 
 text-sm 
 px-5 
 py-2.5 
 text-center 
 mr-2 
 mb-2 
 mt-4
 hover:shadow-red-500
 shadow-sm
 transition
 duration-500
 ease-in-out
 hover:scale-110
`;
