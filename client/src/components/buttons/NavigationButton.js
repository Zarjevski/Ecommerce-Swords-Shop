import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

const NavigationButton = ({text,to}) => {
  const navigate = useNavigate()
  return <Button onClick={()=>navigate(to)}>{text}</Button>
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
 focus:ring-pink-200 
 dark:focus:ring-pink-800 
 font-medium 
 rounded-lg 
 text-sm 
 px-5 
 py-2.5 
 text-center 
 mr-2 
 mb-2 
 mt-4
`;
