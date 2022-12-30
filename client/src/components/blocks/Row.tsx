import React from "react";
import tw from "tailwind-styled-components";

interface Row {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Row: React.FunctionComponent<Row> = (props) => {
  return <Wrapper className={props.className}>{props.children}</Wrapper>;
};

const Wrapper = tw.div`
    w-full
    flex
    border-y
    border-y-slate-700 border-opacity-20
    p-4
`;

export default Row;
