import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect,useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import Aside from "./Aside";


const ProtectedRoute = () => {
  const jwtToken = Cookies.get("jwtToken");
  const [chats, setChats] = useState([]);


  const [isValid,setIsValid] = useState(null)

  useEffect(() => {
    const isValidUser = async () => {
      try {
        const res = await axios.get(
          process.env.BACKEND_URL + "api/auth/isValidUser",
          {
            withCredentials: true,
            headers: {
              Authorization: "Bearer " + jwtToken,
            },
          }
        );
        console.log(res.data)
        setIsValid(res.data)
      } catch (error) {
        console.log(error.response)
        toast.error(error.response.data.message)
        setIsValid(false)
      }
    };
    isValidUser()
  }, []);

  if (isValid === null) {
    return null;
  }

  return isValid ?<div className="flex">
    <Aside setChats={setChats} chats = {chats}/>

  <Outlet setChats={setChats} chats = {chats}/>
  </div>  : <Navigate to="/login" />;
};

export default ProtectedRoute;
