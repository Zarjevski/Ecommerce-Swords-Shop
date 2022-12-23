import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {
  ArrowLeftOnRectangleIcon,
  ShoppingBagIcon,
  PlusCircleIcon,
  UsersIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { logOut } from "../../features/auth/authSlice";

const Sidebar = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <aside className="w-1/6 bg-black p-10" aria-label="Sidebar">
      <ul className="flex flex-col">
        <li>
          <Link
            to={"/dashboard"}
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <HomeIcon className="h-6 w-6" />
            <span className="ml-3">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/dashboard/products"}
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ShoppingBagIcon className="h-6 w-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/dashboard/create"}
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <PlusCircleIcon className="h-6 w-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">
              Create
            </span>
          </Link>
        </li>
        <li>
          <Link
            to={"dashboard/users"}
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <UsersIcon className="h-6 w-6" />
            <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
          </Link>
        </li>
        <Link
          to={"/login"}
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => dispatch(logOut())}
        >
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <span className="flex-1 ml-3 whitespace-nowrap">logout</span>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
