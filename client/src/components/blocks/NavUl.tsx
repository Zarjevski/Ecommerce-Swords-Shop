import React from "react";
import tw from "tailwind-styled-components";

interface NavUl {
  children: JSX.Element | JSX.Element[];
}

const NavUl: React.FunctionComponent<NavUl> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
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
