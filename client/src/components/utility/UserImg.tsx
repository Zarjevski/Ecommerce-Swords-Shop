import React from "react";
import H1 from "../elements/H1";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const UserImg = () => {
  const { userName } = useSelector((state: RootState) => state.auth);
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <div className="rounded-full h-24 w-24 mt-12 bg-light-grey flex items-center justify-center">
        <H1>{userName ? userName[0].toUpperCase() : null}</H1>
      </div>
      <h6 className="mt-2">{userName}</h6>
    </div>
  );
};

export default UserImg;
