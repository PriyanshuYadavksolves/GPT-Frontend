import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ResponseRenderer from "../components/ResponseRenderer";
import DeleteIcon from "../components/DeleteIcon";
import Aside from "../components/Aside";

const OneChat = () => {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const token = Cookies.get("jwtToken");
  const { chatId } = useParams();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const res = await axios.get(
          process.env.BACKEND_URL + "api/user/getOneChat/" + chatId,
          {
            withCredentials: true,
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        // console.log("oneChat = ",res.data);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChat();
  }, [chatId]);

  const updateChat = async (e) => {
    e.preventDefault();
    const query = {
      role: "user",
      content: msg,
    };

    setMsg("");
    setData([...data, query]);

    try {
      const res = await axios.post(
        process.env.BACKEND_URL + "api/user/updateChat",
        { chatId, msg },
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res.data);
      setData((prev) => [...prev, res.data.response]);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      if (error.response.data.message === "Session Expires") {
        handleLogout();
      }
    }
  };
  const textareaRef = useRef(null);

  // useEffect(() => {
  //   const fetchChats = async () => {
  //     try {
  //       const res = await axios.post(
  //         process.env.BACKEND_URL + "api/user/getAllChat",
  //         { username: "priyanshu" },
  //         {
  //           withCredentials: true,
  //           headers: {
  //             Authorization: "Bearer " + token,
  //           },
  //         }
  //       );
  //       setChats(res.data.reverse());

  //       // console.log("chat = ", res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchChats();
  // }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "46px";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 221) + "px";
      textareaRef.current.style.overflowY =
        textareaRef.current.scrollHeight >= 221 ? "visible" : "hidden";
    }
  }, [msg]);

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

  const handleDelete = async (chatid) => {
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
      if(chatId === chatid){
        navigate('/home')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    console.log("hello");
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  const onEnterKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter" && !e.shiftKey) {
      updateChat(e);
    }
  };

  return (
    // <div className="h-screen flex relative ">
    //   {/* <aside className="hidden md:flex  w-[260px] h-screen pb-5">
    //     <div className="w-full px-3  overflow-y-auto bg-gray-100 flex flex-col justify-between gap-3 ">
    //       <button>New Chat</button>

    //       <ul className="space-y-2 w-full h-full font-medium py-4 overflow-y-auto ">
    //         {chats.map((ch) => (
    //           <li
    //             key={ch._id}
    //             className=" cursor-pointer "
    //           >
    //             <NavLink
    //               to={"/home/chat/" + ch._id}
    //               className="flex justify-between aria-[current=page]:text-red-600 aria-[current=page]:bg-gray-200 
    //               aria-[current=page]:hover:bg-gray-300     rounded-lg items-center p-2 hover:bg-gray-200 text-gray-900"
    //             >
    //               <span className="ms-3">{ch.title}</span>
    //             <button
    //               className="text-black hover:text-red-400 px-2 py-1 rounded-l-md"
    //               onClick={() => handleDelete(ch._id)}
    //             >
    //               <DeleteIcon />
    //             </button>
    //             </NavLink>
    //           </li>
    //         ))}
    //       </ul>
    //       <button
    //         onClick={handleLogout}
    //         className="flex w-full self-end h-[40px] rounded-md text-[18px] font-[600] leading-[24px] justify-center items-center bg-[#3086F8] text-white"
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   </aside> */}
    //   {/* <Aside/> */}



    // </div>
    <div className="h-screen relative flex w-full flex-col justify-between pb-5 gap-2">
    <div className="relative text-center border-b-2">
      <a className=" flex items-center justify-center gap-1">
        <div className="text-xl sm:text-2xl text-[#000000] font-bold pt-0.5">
          KsolveGPT
        </div>
      </a>
    </div>
    <div className="relative h-full w-full flex flex-col overflow-y-auto items-center ">
      {data.map((d, index) => (
        <div
          key={index}
          className="prose w-full p-4 md:max-w-xl lg:max-w-[40rem] xl:max-w-[48rem]"
        >
          <span>{d.role === "user" ? "You : " : "Ksolves GPT : "}</span>
          {d.role === "user" ? (
            <>
              <div>
                <span>{d.content}</span>
              </div>
            </>
          ) : (
            <>
              <ResponseRenderer response={d.content} />
            </>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
    <form
      className="stretch mx-2 flex flex-row gap-3 justify-center "
      onSubmit={updateChat}
    >
      <div className="relative flex flex-1 flex-col md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]  ">
        <div className="overflow-hidden flex flex-col w-full flex-grow relative  ">
          <textarea
            onKeyDown={onEnterKeyDown}
            ref={textareaRef}
            value={msg}
            required
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Enter Your Queries..."
            className=" w-full pt-2 pb-3 pr-10 max-h-52 pl-4  border-black border-2 rounded-2xl"
          ></textarea>
          <button
            disabled=""
            className="absolute bottom-2 right-2 rounded-lg borde p-0.5  transition-colors enabled:bg-black disabled:text-gray-400 disabled:opacity-10 "
          >
            <span className="text-white" data-state="closed">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 11L12 6L17 11M12 18V7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
  );
};

export default OneChat;
