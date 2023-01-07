import React from 'react'
import tw from 'tailwind-styled-components'
import { useSelector } from "react-redux";
import { RootState } from "../../store";


interface NavigationBar {
    children: JSX.Element | JSX.Element[];
    className?:any
}

const Nav:React.FunctionComponent<NavigationBar> = (props) => {
  const { sidebarOpen } = useSelector((state:RootState) => state.shop)
  return (
    <StyledNav className={sidebarOpen?"h-full flex-col":""}>{props.children}</StyledNav>
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
    fixed
    z-10
`

export default Nav