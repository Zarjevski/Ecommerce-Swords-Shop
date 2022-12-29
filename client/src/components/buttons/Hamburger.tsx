import React from "react";
import tw from "tailwind-styled-components";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface Hamburger {
  onClick: any;
}

const Hamburger: React.FunctionComponent<Hamburger> = (props) => {
  return (
    <HamburgerButton className="" onClick={props.onClick}>
      <Bars3Icon className="w-6 h-6 text-white" />
    </HamburgerButton>
  );
};

const HamburgerButton = tw.button`
    xl:hidden
    lg:hidden 
    md:block 
    xs:block 
    sm:block
`;

export default Hamburger;
