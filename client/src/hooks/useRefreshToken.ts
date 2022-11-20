import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { setAuth } from "../features/auth/authSlice";
import axios from "../api/axios";

const useRefreshToken = () => {
  const dispatch:AppDispatch = useDispatch()
  const refresh = async () => {
    try {
      const response = await axios.get("/auth/refresh");
      dispatch(setAuth({...response.data}));
    } catch (error) {
      console.error(error);
    }
  };
  return refresh
};

export default useRefreshToken;
