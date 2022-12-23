import React from 'react'
import tw from 'tailwind-styled-components'

const H1 = ({children}) => {
  return (
    <BigTitle>{children}</BigTitle>
  )
}

export default H1

const BigTitle = tw.h1`
    text-4xl
`