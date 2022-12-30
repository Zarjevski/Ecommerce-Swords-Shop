import React from "react";
import tw from "tailwind-styled-components";

interface SmallBox {
  children: JSX.Element | JSX.Element[];
}

const SMbox: React.FunctionComponent<SmallBox> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = tw.div`
 w-2/6
 h-2/6
`;

export default SMbox;
