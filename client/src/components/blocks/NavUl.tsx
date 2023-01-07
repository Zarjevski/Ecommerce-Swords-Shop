import React from "react";
import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface NavUl {
  children: JSX.Element | JSX.Element[];
  className?:any
}

const NavUl: React.FunctionComponent<NavUl> = (props) => {
  const { sidebarOpen } = useSelector((state:RootState) => state.shop)
  return <Wrapper className={sidebarOpen? "xs:flex sm:flex xs:flex-col sm:flex-col items-center":""}>{props.children}</Wrapper>;
};

const Wrapper = tw.ul`
    justify-between
    w-52
    xs:hidden
    sm:hidden
    md:flex
    lg:flex
    xl:flex
`;

export default NavUl;
