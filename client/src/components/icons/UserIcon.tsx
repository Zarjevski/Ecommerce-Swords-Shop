import React from "react";
import { NavLink } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface NavLink {
  to: string;
}

const UserFirstLetter: React.FunctionComponent<NavLink> = (props) => {
  const { userName } = useSelector((state: RootState) => state.auth);
  return (
    <Wrapper to={props.to}>
      <h2>{userName ? userName[0].toUpperCase() : null}</h2>
    </Wrapper>
  );
};

const UserIcon: React.FunctionComponent<NavLink> = (props) => {
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const active: object = { color: "#EC4E1F" };
  if (loggedIn) {
    return <UserFirstLetter to={props.to} />;
  }
  return (
    <NavLink
      to={props.to}
      style={({ isActive }) => (isActive ? active : undefined)}
      className="m-2"
    >
      <UserCircleIcon className="h-6 w-6" />
    </NavLink>
  );
};

const Wrapper = tw(NavLink)`
  rounded-full 
  h-6 
  w-6
  m-2
  bg-light-grey
  flex
  items-center 
  justify-center
  `;

export default UserIcon;
