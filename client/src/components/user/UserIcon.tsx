import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const UserIcon = () => {
  const { userName } = useSelector((store: RootState) => store.auth);
  const letter = userName[0].toUpperCase()  
  return (
    <div className="h-6 w-6 rounded-full flex items-center justify-center border-white bg-slate-500">
      <h1>{letter}</h1>
    </div>
  );
};

export default UserIcon;
