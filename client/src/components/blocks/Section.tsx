import React from 'react'
import tw from "tailwind-styled-components";

interface SectionProps {
    className?: string | never;
    children?: JSX.Element | JSX.Element[]
}

const Section: React.FunctionComponent<SectionProps> = (props) => {
   return <Wrapper className={props.className}>{props.children}</Wrapper>
}

export default Section

const Wrapper = tw.section`
    h-screen
    w-screen
    flex
    justify-center
    items-center
`


