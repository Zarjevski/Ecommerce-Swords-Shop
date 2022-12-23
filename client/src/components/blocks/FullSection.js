import tw from "tailwind-styled-components";
import React from 'react'

const FullSection = ({children,additional}) => {
  return (
    <Section className={`${additional}`}>{children}</Section>
  )
}

export default FullSection

const Section = tw.section`
    h-screen 
    w-screen 
    flex 
    justify-center 
    items-center
`