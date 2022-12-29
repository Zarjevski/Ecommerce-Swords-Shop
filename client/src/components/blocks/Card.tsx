import React from 'react'
import tw from 'tailwind-styled-components'

interface Card {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

const Card: React.FunctionComponent<Card> = (props) => {
  return (
    <Div className={props.className}>{props.children}</Div>
  )
}

const Div = tw.div`
    flex 
    items-center 
    justify-center 
    h-3/4 
    lg:w-2/4 
    xl:w-1/4 
    sm:w-full 
    md:w-3/4 
    xs:w-3/4  
    bg-light-grey/[.08]
    backdrop-blur-3xl
    text-white 
    rounded-xl
    shadow-sm
    shadow-black
`

export default Card