import React from 'react'
import tw from 'tailwind-styled-components'
import {ExclamationCircleIcon} from '@heroicons/react/24/outline'

interface ErrorMsg {
    children: string
}

const ErrorMsg: React.FunctionComponent<ErrorMsg> = (prop) => {
  return (
    <Error><ExclamationCircleIcon className="h-5 w-5 m-4" />{prop.children}</Error>
  )
}

const Error = tw.div`
    duration-500
    ease-in-out
    rounded-md
    m-5
    w-2/4 
    h-10 
    bg-red-300 
    flex 
    items-center
    transition
    ease-in
`

export default ErrorMsg