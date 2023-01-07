import React from "react";
import tw from "tailwind-styled-components";

interface Sidebar {
  children: JSX.Element | JSX.Element[];
  className?:string
}

const Sidebar: React.FunctionComponent<Sidebar> = (props) => {
  return <Wrapper className={props.className}>{props.children}</Wrapper>;
};

const Wrapper = tw.aside`
  w-1/6 
  h-screen 
  items-center 
  flex 
  lg:block 
  xs:hidden 
  sm:hidden 
  bg-slate-800 
  bg-light-grey/[.2]
  backdrop-blur-3xl 
`;

export default Sidebar;
