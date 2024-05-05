import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "react-toastify";

function ResponseRenderer({ response }) {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={coldarkDark}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {response}
    </ReactMarkdown>
  );
}

const Logo = () => {
  return (
    <img
      src="https://www.ksolves.com/wp-content/uploads/2020/09/Ksolves-Logo.png"
      alt=""
      height="32px"
      width="32px"
    />
  );
};

const Home = ({setChats,chats}) => {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const token = Cookies.get("jwtToken");
  // const [chats, setChats] = useState([]);
  console.log(chats)

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = {
      role: "user",
      content: msg,
    };
    setMsg("");
    setData([...data, query]);

    try {
      const res = await axios.post(
        process.env.BACKEND_URL + "api/user/query",
        { username: "priyanshu", msg, data },
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res.data);
      setData((prev) => [...prev, res.data.response]);
      setChats((prev) => [...prev, res.data.chat]);
      navigate('/home/chat/'+res.data.chat._id)
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      // if (error.response.data.message === "Session Expires") {
      //   handleLogout();
      // }
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

  //       console.log("chat = ", res.data);
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

  // const handleLogout = async () => {
  //   try {
  //     const res = await axios.get(process.env.BACKEND_URL + "api/auth/logout", {
  //       withCredentials: true,
  //     });
  //     console.log(res.data);
  //     toast.success("Logout suceess");
  //     navigate("/login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };



  return (
    // <div className="h-screen flex relative ">
    //   {/* <aside className="hidden md:flex w-[260px] h-screen pb-5">
    //     <div className="w-full px-3 overflow-y-auto bg-gray-50 flex flex-col justify-between gap-3 ">
    //       <button>New Chat</button>

    //       <ul className="space-y-2 h-full font-medium py-4 ">
    //         {chats.map((ch) => (
    //           <li
    //             key={ch._id}
    //             className=" bg-gray-300 rounded-lg"
    //             onClick={() => handleOneChat(ch._id)}
    //           >
    //             <NavLink to={'/home/chat/'+ch._id} className="flex items-center p-2 text-gray-900  hover:bg-gray-100">
    //               <span className="ms-3">{ch.title}</span>
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
      {data.length === 0 && (
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <Logo />
          <span className="text-2xl font-medium">
            How can I help you today?
          </span>
        </div>
      )}

      {data.map((d, index) => (
        <div
          key={index}
          className="prose w-full p-4 md:max-w-xl lg:max-w-[40rem] xl:max-w-[48rem]"
        >
          <span>{d.role === "user" ? "You : " : "Ksolves GPT : "}</span>
          {d.role === "user" ? (
            <>
              <div>{d.content}</div>
            </>
          ) : (
            <>
              <ResponseRenderer response={d.content} />
            </>
          )}
        </div>
      ))}
    </div>
    <form
      className="stretch mx-2 flex flex-row gap-3 justify-center "
      onSubmit={handleSearch}
    >
      <div className="relative flex flex-1 flex-col md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]  ">
        <div className="overflow-hidden flex flex-col w-full flex-grow relative  ">
          <textarea
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

export default Home;
