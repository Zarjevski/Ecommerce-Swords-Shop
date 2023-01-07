import React from 'react'
import tw from 'tailwind-styled-components';
import { logOut } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

interface StyledButton{
  children:string;
  onClick?: ()=>void;
}

const LogoutButton:React.FunctionComponent<StyledButton> = (props) => {
  const dispatch: AppDispatch = useDispatch()
return (
  <StyledButton onClick={()=>dispatch(logOut())} type="button">{props.children}</StyledButton>
)
}

const StyledButton = tw.button`
delay-150
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
m-2
hover:shadow-red-500
shadow-sm
transition
duration-500
ease-in-out
hover:scale-110
`;

export default LogoutButton