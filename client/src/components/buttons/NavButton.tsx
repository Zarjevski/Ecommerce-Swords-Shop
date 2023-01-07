import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Xbutton from "../buttons/Xbutton";
import Hamburger from "../buttons/Hamburger";
import { toggleSidebar } from "../../features/shop/shopSlice";


const NavButton = () => {
    const { sidebarOpen } = useSelector((store: RootState) => store.shop);
  const dispatch: AppDispatch = useDispatch();
  if (sidebarOpen) {
    return(<Xbutton $nav={true} onClick={()=>dispatch(toggleSidebar())}/>)
  } else {
    return (<Hamburger onClick={()=>dispatch(toggleSidebar())}/>)
  }
}

export default NavButton