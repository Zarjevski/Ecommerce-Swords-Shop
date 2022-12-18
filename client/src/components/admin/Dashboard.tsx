import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logOut } from "../../features/auth/authSlice";
import ProductTable from "./products/ProductTable";

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="h-5/6 w-4/6 bg-black flex flex-col items-center justify-center">
        <ProductTable />
        <div>
          <button className="mt-4 bg-red-500" onClick={() => dispatch(logOut())}>logout</button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
