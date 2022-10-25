import React from "react";
import axios from "../../api/axios";
import { setLogout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Profile = async () => {
  const dispatch = useDispatch();
  return (
    <section className="profile">
      <aside className="profile-sidebar center">
        <div className="user-data">
          <img className="user-img" alt="user-img" />
          <h1>victor zarjevski</h1>
        </div>
        <div className="profile-btn-container center">
          <button>billing</button>
          <button>order history</button>
          <button>privacy</button>
        </div>
        <button
          onClick={() => {
            axios.post("/auth/logout");
            dispatch(setLogout());
          }}
        >
          log out
        </button>
      </aside>
    </section>
  );
};

export default Profile;
