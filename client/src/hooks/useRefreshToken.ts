import axios from "axios";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { setAuth } from "../features/auth/authSlice";

const useRefreshToken = () => {
  const dispatch:AppDispatch = useDispatch()
  const refresh = async () => {
    const response = await axios.get("http://localhost:80/auth/refresh", {
      withCredentials: true,
    });
    console.log(response);
    
    dispatch(setAuth({...response.data}));
    return response.data.accessToken
  };
  return refresh
};

export default useRefreshToken;
