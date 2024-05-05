import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "../components/DeleteIcon";


const Aside = ({setChats,chats}) => {
    // const [chats, setChats] = useState([]);
    const token = Cookies.get("jwtToken");
    const {chatId} = useParams()
    console.log(chatId)
    const navigate = useNavigate()

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.post(
          process.env.BACKEND_URL + "api/user/getAllChat",
          { username: "priyanshu" },
          {
            withCredentials: true,
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setChats(res.data.reverse());

      } catch (error) {
        console.log(error);
      }
    };
    fetchChats();
  }, []);

  const handleDelete = async (chatid) => {
    console.log(chatid)
    try {
      const res = await axios.delete(
        process.env.BACKEND_URL + "api/user/deleteChat/" + chatid,
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res.data);
      setChats(chats.filter((chat) => chat._id !== chatId));
      if (chatId === chatid) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get(process.env.BACKEND_URL + "api/auth/logout", {
        withCredentials: true,
      });
      console.log(res.data);
      toast.success("Logout suceess");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className="hidden md:flex  w-[260px] h-screen pb-5">
      <div className="w-full px-3  overflow-y-auto bg-gray-100 flex flex-col justify-between gap-3 ">
        <div className="">
            <NavLink to={'/home'}> New Chat</NavLink>
        </div>
        {/* <button></button> */}

        <ul className="space-y-2 w-full h-full font-medium py-4 overflow-y-auto ">
          {chats.map((ch) => (
            <li key={ch._id} className=" cursor-pointer ">
              <NavLink
                to={"/home/chat/" + ch._id}
                className="flex justify-between aria-[current=page]:text-red-600 aria-[current=page]:bg-gray-200 
                  aria-[current=page]:hover:bg-gray-300     rounded-lg items-center p-2 hover:bg-gray-200 text-gray-900"
              >
                <span className="ms-3 whitespace-nowrap overflow-hidden">{ch.title}</span>
                <button
                  className="text-black hover:text-red-400 px-2 py-1 rounded-l-md"
                  onClick={() => handleDelete(ch._id)}
                >
                  <DeleteIcon />
                </button>
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={handleLogout}
          className="flex w-full self-end h-[40px] rounded-md text-[18px] font-[600] leading-[24px] justify-center items-center bg-[#3086F8] text-white"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Aside;
