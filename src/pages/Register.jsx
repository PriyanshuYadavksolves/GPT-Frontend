import { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import Svg from "../components/Svg";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .matches(/^[a-zA-Z_]+/, "Username must start with letter or underscores")
    .min(5, "Username must contain at least 5 characters")
    .max(22, "Username must contain at most 22 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z_][a-zA-Z0-9]*(?:[#?!$%^&*_.-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,4}$/,
      "Invalid email address"
    )
    .max(30, "Email should be at most 30 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[a-z]/, "Must contain one lowercase character")
    .matches(/[A-Z]/, "Must contain one uppercase character")
    .matches(/[0-9]/, "Must contain one number")
    .matches(/[#?!@$%^&*-]/, "Must contain one special character"),
});

export default function Register() {
  const navigate = useNavigate();
  const handleLogin = async (googleData) => {
    try {
      console.log(googleData);
      const res = await axios.post(
        process.env.BACKEND_URL + "api/auth/google",
        {
          token: googleData.credential,
        }
      );
      console.log(res.data);
      Cookies.set("token", res.data.loginToken);

      toast.success("Login Successfull");
      navigate("/home");
    } catch (error) {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const [success, setSuccess] = useState(false);
  const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const email = watch("email");
  const password = watch("password");
  const username = watch("username");

  const [focus, setFocus] = useState(false);
  const passwordTracker = {
    uppercase: atLeastOneUppercase.test(password),
    lowercase: atLeastOneLowercase.test(password),
    number: atLeastOneNumeric.test(password),
    specialChar: atLeastOneSpecialChar.test(password),
  };
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (
      username !== undefined &&
      username !== "" &&
      !/^[a-zA-Z_]/.test(username)
    ) {
      setError(
        "username",
        {
          type: "focus",
          message: "Username must start with character or underscores",
        },
        { shouldFocus: true }
      );
    } else {
      clearErrors("username");
    }
  }, [username, clearErrors, setError]);

  useEffect(() => {
    if (
      email !== undefined &&
      email !== "" &&
      !/^[a-zA-Z_][a-zA-Z0-9]*(?:[#?!$%^&*_.-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,4}$/.test(
        email
      )
    ) {
      setError(
        "email",
        {
          type: "focus",
          message: "invalid email address",
        },
        { shouldFocus: true }
      );
    } else {
      clearErrors("email");
    }
  }, [email, clearErrors, setError]);

  const onSubmit = async (data) => {
    console.log(data);
    const { username, email, password } = data;
    try {
      const res = await axios.post(
        process.env.BACKEND_URL + "api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      console.log(res.data);
      setSuccess(true);
      toast.success("Verification Email Sent");
      // res.data && navigate("/login");
    } catch (err) {
      setSuccess(false);
      console.error(err);
      if (err.response) {
        toast.error(err.response.data);
      } else {
        toast.error(err.message);
      }
    }
    reset();
    setFocus(false);
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlelogout = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/logout", {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen bg-[#F9FCFF]">
      <div className="flex-1 flex items-center  flex-col gap-[20px] relative">
        <div className="box-content relative top-[20px]  max-w-[317px] rounded-[8px]  py-[8px] px-[16px] flex flex-col sm:flex-row sm:items-center gap-[8px]">
          <span
            onClick={handleClick}
            className="text-[#1E77EB] font-[600] text-2xl leading-[21.78px] "
          >
            Ksolves GPT
          </span>
        </div>

        <div className="  sm:w-full sm:max-w-[480px] relative top-[20px] rounded-[16px] flex flex-col py-[36px] px-[40px] gap-[26px]  shadow-lg bg-white">
          <p onClick={handlelogout} className="text-[24px] leading-[14px]">
            Register
          </p>
          {success && (
            <span className=" bg-green-100 text-center text-green-800 py-2 text-sm leading-[14px]">
              {" "}
              Verification Link Sent To your Email
            </span>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[20px] sm:w-full "
          >
            <div className=" h-[70px] flex flex-col gap-[7px]">
              <label htmlFor="Username" className="text-xs text-[#4B5564]">
                Username
              </label>
              <input
                className="w-full h-[40px] rounded-[8px] 
                  border-[1px] p-[12px]  border-[#bdc3cd] flex justify-between "
                type="text"
                name="Username"
                autoComplete="username"
                id="Username"
                placeholder="Username"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-500 text-xs">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className=" h-[70px] flex flex-col gap-[7px]">
              <label
                htmlFor="Email"
                className="text-[12px] leading-[14px] font-[400] text-[#4B5564]"
              >
                Email
              </label>
              <input
                className="w-full h-[40px] rounded-[8px] 
                  border-[1px] p-[12px] border-[#bdc3cd] flex justify-between "
                type="email"
                name="Email"
                autoComplete="email"
                id="Email"
                placeholder="Email Address"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className=" flex flex-col gap-[7px]">
              <label
                htmlFor="Password"
                className="text-[12px] leading-[14px] font-[400] text-[#4B5564]"
              >
                Password
              </label>
              <div className="relative ">
                <input
                  className="w-full h-[40px] rounded-[8px] border-[1px] border-[#bdc3cd] p-[12px] "
                  type={showPassword ? "text" : "password"} //
                  name="Password"
                  id="Password"
                  onFocus={() => setFocus(true)}
                  // autoComplete="current-password"
                  placeholder="Password"
                  {...register("password")}
                />
                {password && (
                  <svg
                    onClick={() => setShowPassword(!showPassword)}
                    className=" absolute top-[50%] right-[10px] translate-y-[-50%] cursor-pointer"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.50705 9.57787C6.12371 9.1952 5.89038 8.6752 5.89038 8.09187C5.89038 6.9232 6.83171 5.9812 7.99971 5.9812C8.57771 5.9812 9.10971 6.2152 9.48638 6.59787"
                      stroke="gray"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.0698 8.46582C9.91509 9.32582 9.23775 10.0045 8.37842 10.1605"
                      stroke="gray"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.43634 11.6481C3.37834 10.8174 2.48234 9.60411 1.83301 8.09145C2.48901 6.57211 3.39101 5.35211 4.45567 4.51478C5.51367 3.67744 6.73434 3.22278 7.99967 3.22278C9.27234 3.22278 10.4923 3.68411 11.557 4.52745"
                      stroke="gray"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.965 5.99377C13.4236 6.60311 13.827 7.30644 14.1663 8.09111C12.855 11.1291 10.5376 12.9591 7.99965 12.9591C7.42431 12.9591 6.85698 12.8658 6.31165 12.6838"
                      stroke="gray"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* here i have use showPassword state to remove cross line of eye svg */}
                    {!showPassword && (
                      <path
                        d="M13.2579 2.83301L2.74194 13.349"
                        stroke="gray"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
              <div>
                {(focus || password) && (
                  <ul className="text-sm grid grid-cols-2 gap-1 sm:flex justify-between ">
                    <li
                      className={`${
                        !passwordTracker.uppercase
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      Uppercase
                    </li>
                    <li
                      className={`${
                        !passwordTracker.lowercase
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      Lowercase
                    </li>
                    <li
                      className={`${
                        !passwordTracker.specialChar
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      SpecialChar
                    </li>
                    <li
                      className={`${
                        !passwordTracker.number
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      Number
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full h-[40px] rounded-[8px] text-[18px] font-[600] leading-[24px] justify-center items-center bg-[#3086F8] text-white
                  "
            >
              Sign Up
            </button>
            <div className="flex w-full h-[40px] justify-center ">
              <GoogleLogin
                text="signup_with"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={"single_host_origin"}
                type="standard"
                cancel_on_tap_outside="true"
                shape="pill"
                theme="filled_blue"
                logo_alignment="center"
              />
            </div>

            <div className=" flex flex-col gap-[8px] items-center">
              <p>
                Already have an account?{" "}
                <NavLink
                  to={"/login"}
                  className="text-blue-700 font-semibold cursor-pointerĪ"
                >
                  Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex-1 bg-white lg:flex items-center justify-center ">

        <Svg/>
        
      </div>
    </div>
  );
}
