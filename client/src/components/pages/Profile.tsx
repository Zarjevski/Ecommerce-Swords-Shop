import React from "react";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/auth/authSlice";

const Profile = () => {
  const {userName} = useSelector((state:RootState)=> state.auth)
  const dispatch:AppDispatch= useDispatch()
  return (
    <section className="h-screen m-0 flex justify-center items-center">
      <div className="container w-2/6 h-4/6 bg-black rounded-md">
        <header className="flex justify-center p-4">
          <h4>hello {userName}</h4>
        </header>
        <div className="buttons w-full flex justify-around p-4">
          <button>billing</button>
          <button>history</button>
          <button>settings</button>
        </div>
        <div className="content h-5/6"></div>
        <footer className="w-full"><button onClick={()=>dispatch(logOut())} className="rounded-md bg-red-600 p-2 m-4">logOut</button></footer>
      </div>
    </section>
  );
};

export default Profile;

