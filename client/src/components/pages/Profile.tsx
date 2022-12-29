import React from "react";
import Section from "../blocks/Section";
import Box from "../blocks/Box";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { logOut } from "../../features/auth/authSlice";

const Profile = () => {
  const { userName } = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();
  return (
    <Section>
      <Box>
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
      </Box>
    </Section>
  );
};

export default Profile;
