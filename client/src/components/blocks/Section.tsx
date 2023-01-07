import React from 'react'
import tw from "tailwind-styled-components";

interface SectionProps {
    className?: string | never;
    children?: JSX.Element | JSX.Element[]
    ref?: any
}

const Section: React.FunctionComponent<SectionProps> = (props) => {
   return <Wrapper ref={props.ref} className={props.className}>{props.children}</Wrapper>
}

export default Section

const Wrapper = tw.section`
    flex
    h-screen
    w-screen
    justify-center
    items-center

`


