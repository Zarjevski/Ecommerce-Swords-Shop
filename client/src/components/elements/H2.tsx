import React from 'react'
import tw from 'tailwind-styled-components'

interface heading2 {
  children?: string | undefined
  className?: string
}

const H2: React.FunctionComponent<heading2> = (props) => {
  return (
    <BigTitle className={props.className}>{props.children}</BigTitle>
  )
}

export default H2

const BigTitle = tw.h1`
    text-2xl
    m-4
`