import React from 'react'
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

interface CustomLink {
    to: string | any;
    children: string;
    sidebar?: string; 
  }

const CustomLink: React.FunctionComponent<CustomLink> = (props) => {
  return (
    <Wrapper sidebar={props.sidebar} to={props.to}>{props.children}</Wrapper>
  )
}

const Wrapper = tw(Link)<CustomLink>`
    ${(p)=>(p.sidebar ? "hover:bg-light-grey": "")}
    hover:text-red-500
    mt-2
    flex
    items-center
    justify-center
    p-4
    text-base
    w-full
`

export default CustomLink