import React from "react";
import tw from "tailwind-styled-components";

interface Half {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Half: React.FunctionComponent<Half> = (props) => {
  return <Wrapper className={props.className}>{props.children}</Wrapper>;
};

const Wrapper = tw.div`
    flex
    flex-col
    items-center
    w-1/2
    h-full
    p-5
`;

export default Half;
