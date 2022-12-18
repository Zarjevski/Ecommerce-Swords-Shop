import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { logOut } from "../../features/auth/authSlice";

const Profile = () => {
  const { userName, role } = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();
  return (
    <section className="h-screen m-0 flex justify-center items-center">
      <div className="container w-2/6 h-5/6 bg-black rounded-md">
        <header className="flex justify-center p-4">
          <h4>hello {userName}</h4>
        </header>
        <div className="buttons w-full flex justify-around p-4">
          <button>billing</button>
          <button>history</button>
          <button>settings</button>
        </div>
        <div className="content h-5/6"></div>
        <div className="w-full h-1/6">
          <button
            onClick={() => dispatch(logOut())}
            className="rounded-md bg-red-600 p-2 m-4"
          >
            logOut
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
