import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import tw from "tailwind-styled-components"

interface Xbutton {
  onClick: ()=>void;
  className?:string;
  $nav?: boolean
}

const Xbutton: React.FunctionComponent<Xbutton> = (props) => {
  return (
    <Wrapper
      className={props.className}
      onClick={props.onClick}
      $nav={props.$nav}
    >
      <XMarkIcon className="w-6 h-6 text-white" />
    </Wrapper>
  );
};

const Wrapper = tw.button<Xbutton>`
  ${(b) => (b.$nav ? `xl:hidden 
  lg:hidden 
  md:block 
  xs:block 
  sm:block` : "block")}
`

export default Xbutton;
