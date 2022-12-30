import React from 'react'
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

interface CustomLink {
    to: string | any;
    children: string;
  }

const CustomLink: React.FunctionComponent<CustomLink> = (props) => {
  return (
    <Wrapper to={props.to}>{props.children}</Wrapper>
  )
}

const Wrapper = tw(Link)`
    hover:text-red-500
    mt-2
    flex
    items-center
    p-4
    text-base
    rounded-lg 
`

export default CustomLink