import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import tw from "tailwind-styled-components"

interface Xbutton {
  onClick: ()=>void;
}

const Xbutton: React.FunctionComponent<Xbutton> = (props) => {
  return (
    <Wrapper
      className="xl:hidden lg:hidden md:block xs:block sm:block"
      onClick={props.onClick}
    >
      <XMarkIcon className="w-6 h-6 text-white" />
    </Wrapper>
  );
};

const Wrapper = tw.button`
  xl:hidden 
  lg:hidden 
  md:block 
  xs:block 
  sm:block
`

export default Xbutton;
