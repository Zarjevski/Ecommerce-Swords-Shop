import React from 'react'
import tw from 'tailwind-styled-components'

interface heading1 {
  children?: string | undefined
  className?: string
}

const H1: React.FunctionComponent<heading1> = (props) => {
  return (
    <BigTitle className={props.className}>{props.children}</BigTitle>
  )
}

export default H1

const BigTitle = tw.h1`
    text-5xl
    m-4
`