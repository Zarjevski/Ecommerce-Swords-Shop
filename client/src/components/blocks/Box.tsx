import React from 'react'
import tw from 'tailwind-styled-components'

// Centered Box Component

interface Box {
  children?: JSX.Element | JSX.Element[];
  className?: string
}

const Box: React.FunctionComponent<Box> = (props) => {
  return (
    <Div className={props.className}>{props.children}</Div>
  )
}

export default Box

const Div = tw.div`
  h-5/6
  w-4/6 
  bg-black 
  flex 
  items-center 
  justify-center
  rounded-xl
  bg-light-grey/[.1]
  backdrop-blur-3xl
  shadow-sm
  shadow-black
`