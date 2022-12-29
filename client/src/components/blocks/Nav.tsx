import React from 'react'
import tw from 'tailwind-styled-components'

interface NavigationBar {
    children: JSX.Element | JSX.Element[];
}

const Nav:React.FunctionComponent<NavigationBar> = (props) => {
  return (
    <StyledNav>{props.children}</StyledNav>
  )
}

const StyledNav = tw.nav`
    w-screen
    h-11
    flex
    bg-light-grey/[.05]
    backdrop-blur-xl
    shadow-sm
    shadow-black
    justify-around
    items-center
`

export default Nav