import React from 'react'
import tw from 'tailwind-styled-components'

const CenteredBox = ({childern}) => {
  return (
    <Div>{childern}</Div>
  )
}

export default CenteredBox

const Div = tw.div`
  h-4/6
  w-4/6 
  bg-black 
  flex 
  flex-col
  items-center 
  justify-center
`