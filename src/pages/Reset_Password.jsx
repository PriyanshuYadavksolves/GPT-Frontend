import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Reset_Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const onSubmit = (values) => console.log(values);

  return (
    <div className="flex h-screen bg-[#F9FCFF]">
<div className="flex-1 flex items-center  flex-col gap-[20px] relative">
        <div className="box-content relative top-[70px]  max-w-[317px] rounded-[8px]  py-[8px] px-[16px] flex flex-col sm:flex-row sm:items-center gap-[8px]">
          <span className="text-[#1E77EB] font-[600] text-2xl leading-[21.78px] ">
            Ksolves GPT
          </span>
        </div>

        <div className="  sm:w-full sm:max-w-[480px] relative top-[70px] rounded-[16px] flex flex-col p-[40px] gap-[30px]  shadow-lg bg-white">
          <p className="text-[24px] leading-[14px]">Change Password</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[24px] w-full "
          >
            <div className=" h-[70px] flex flex-col gap-[8px]">
              <label
                htmlFor="otp"
                className="text-[12px] leading-[14px] font-[400] text-[#4B5564]"
              >
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="otp"
                placeholder="Enter Your OTP"
                autoComplete="otp"
                className="w-full h-[40px] rounded-[8px] border-[1px] border-[#afb5be] p-[12px] "
                {...register("otp", {
                  required: "OTP is required",
                  minLength: {
                    value: 6,
                    message: "at-least 6 characters required",
                  },
                })}
              />
              {errors.otp && (
                <p className="text-red-500 text-xs">{errors.otp.message}</p>
              )}
            </div>

            <div className=" h-[70px] flex flex-col gap-[8px]">
              <label
                htmlFor="Password"
                className="text-[12px] leading-[14px] font-[400] text-[#4B5564]"
              >
                Password
              </label>
              <div className="relative ">
                <input
                  className="w-full h-[40px] rounded-[8px] border-[1px] border-[#afb5be] p-[12px] "
                  type={showPassword ? "text" : "password"} //here i used showPassword state to hide and show password
                  name="Password"
                  id="Password"
                  autoComplete="current-password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
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
            </div>

            <button
              type="submit"
              className="flex w-full h-[46px] rounded-[8px] text-[18px] font-[600] leading-[24px] justify-center items-center bg-[#3086F8] text-white
              disabled:cursor-not-allowed"
            >
              Reset Password
            </button>
            <div className=" flex flex-col gap-[8px] items-center">
              <p>Already have an account? <NavLink to={'/login'} className="text-blue-700 font-semibold cursor-pointerĪ">Login</NavLink></p>
          
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex-1 bg-white lg:flex items-center justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          data-name="Layer 1"
          width="624"
          height="481"
          viewBox="0 0 948.74001 656.18799"
        >
          <path
            d="M893.48313,435.69519,916.85039,488.328l-5.62311,65.09312a11.01965,11.01965,0,1,0,13.175-.80264l.91567-.16116,9.15532-65.04758-15.0999-65.613Z"
            transform="translate(-125.62999 -121.906)"
            fill="#ffb8b8"
          />
          <ellipse
            id="b78bcc7b-dc51-41b0-8da1-d9ae2dc50050"
            data-name="Ellipse 432"
            cx="701.12502"
            cy="651.84399"
            rx="41.704"
            ry="4.344"
            fill="#e6e6e6"
          />
          <ellipse
            id="e61ab66d-6414-4e65-834d-738041a766d7"
            data-name="Ellipse 433"
            cx="824.49801"
            cy="651.84399"
            rx="41.704"
            ry="4.344"
            fill="#e6e6e6"
          />
          <ellipse
            id="b14e1fdf-dcce-4a60-9ebe-71ac2d975d4d"
            data-name="Ellipse 434"
            cx="920.06901"
            cy="653.20099"
            rx="28.671"
            ry="2.987"
            fill="#e6e6e6"
          />
          <path
            id="b155b0ed-0d8b-4bf4-9d1d-fec88f99f221-288"
            data-name="Path 2215"
            d="M1053.9,752.469a79.3006,79.3006,0,0,1-3.69995,21.921c-.052.165-.106.327-.16.492h-13.824c.015-.147.03-.312.04395-.492.922-10.6,6.236-75.092-.118-86.121C1036.7,689.163,1054.976,718.798,1053.9,752.469Z"
            transform="translate(-125.62999 -121.906)"
            fill="#e6e6e6"
          />
          <path
            id="be40ba6a-ff22-46fc-b19c-3116db10fbe1-289"
            data-name="Path 2216"
            d="M1052.867,774.39q-.17394.24747-.359.492h-10.371c.079-.14.17-.3.275-.492,1.713-3.092,6.784-12.337,11.49194-21.921,5.059-10.3,9.7-20.99,9.309-24.859C1063.334,728.483,1066.834,755.084,1052.867,774.39Z"
            transform="translate(-125.62999 -121.906)"
            fill="#e6e6e6"
          />
          <path
            id="eeaf384e-0545-4292-b8fb-facd94914478-290"
            data-name="Path 2217"
            d="M763.112,537.816h-629.9a7.591,7.591,0,0,1-7.582-7.582V129.488a7.59,7.59,0,0,1,7.582-7.582h629.9a7.59,7.59,0,0,1,7.582,7.582V530.234A7.591,7.591,0,0,1,763.112,537.816Zm-629.9-412.91a4.587,4.587,0,0,0-4.582,4.582V530.234a4.587,4.587,0,0,0,4.582,4.582h629.9a4.587,4.587,0,0,0,4.582-4.582V129.488a4.587,4.587,0,0,0-4.582-4.582Z"
            transform="translate(-125.62999 -121.906)"
            fill="#e6e6e6"
          />
          <path
            id="fa4958e0-769a-4069-95d8-47331dde78e6-291"
            data-name="Path 2218"
            d="M599.955,180.987H266.213a6.189,6.189,0,0,0-6.182,6.182V472.552a6.189,6.189,0,0,0,6.182,6.182H599.955a6.189,6.189,0,0,0,6.182-6.182V187.169A6.189,6.189,0,0,0,599.955,180.987Zm3.7,291.566a3.718,3.718,0,0,1-3.7,3.716H266.213a3.711,3.711,0,0,1-3.7-3.716V187.169a3.711,3.711,0,0,1,3.7-3.716H599.955a3.718,3.718,0,0,1,3.7,3.716Z"
            transform="translate(-125.62999 -121.906)"
            fill="#3f3d56"
          />
          <path
            id="b96bbff1-710e-4cf9-8f0a-207f6a2454c7-292"
            data-name="Path 2219"
            d="M343.249,427.991c0,.44-.012.88-.035,1.308a25.175,25.175,0,0,1-50.281,0c-.023-.428-.035-.868-.035-1.308a25.175,25.175,0,0,1,50.35,0Z"
            transform="translate(-125.62999 -121.906)"
            fill="#6c63ff"
          />
          <path
            id="a99625a5-8e94-4aa2-927a-7cc58a47d0f9-293"
            data-name="Path 2220"
            d="M574.021,411.204H376.21a4.2,4.2,0,0,0,0,8.394H574.021a4.2,4.2,0,0,0,.31707-8.394Q574.17962,411.198,574.021,411.204Z"
            transform="translate(-125.62999 -121.906)"
            fill="#6c63ff"
          />
          <path
            id="f2e8dd5a-2c6f-4c4a-9a4a-91faa08ec764-294"
            data-name="Path 2221"
            d="M461.327,436.384H376.21a4.191,4.191,0,0,0,0,8.382h85.117a4.191,4.191,0,0,0,.014-8.382Z"
            transform="translate(-125.62999 -121.906)"
            fill="#e6e6e6"
          />
          <path
            id="b0d633b1-50f0-455b-880b-69d0ec30b218-295"
            data-name="Path 2222"
            d="M679.244,380.069H345.5a7.057,7.057,0,0,1-7.049-7.049V226.554a7.057,7.057,0,0,1,7.049-7.049H679.24a7.057,7.057,0,0,1,7.049,7.049V373.016A7.057,7.057,0,0,1,679.244,380.069Z"
            transform="translate(-125.62999 -121.906)"
            fill="#6c63ff"
          />
          <path
            id="a4d76c33-4002-4242-b64e-8bf1a807cbd3-296"
            data-name="Path 2223"
            d="M413.471,271.424a4.2,4.2,0,0,0-.36655,8.392q.18319.008.36655,0H611.278a4.2,4.2,0,0,0,0-8.392Z"
            transform="translate(-125.62999 -121.906)"
            fill="#fff"
          />
          <path
            id="a4bd9330-30bf-4fe3-97b2-bd8f02deaa7a-297"
            data-name="Path 2224"
            d="M413.471,295.737a4.2,4.2,0,0,0-.36655,8.392q.18319.008.36655,0H611.278a4.2,4.2,0,0,0,0-8.392Z"
            transform="translate(-125.62999 -121.906)"
            fill="#fff"
          />
          <path
            id="f4033984-e442-4bd8-ab2d-9d91ebc99eb7-298"
            data-name="Path 2225"
            d="M413.471,319.754a4.2,4.2,0,0,0,0,8.392h85.117a4.2,4.2,0,1,0,.36655-8.392q-.1832-.008-.36655,0Z"
            transform="translate(-125.62999 -121.906)"
            fill="#fff"
          />
          <circle
            id="f8f82ae4-70bd-49d3-8148-f9c9501b42d9"
            data-name="Ellipse 435"
            cx="26.91303"
            cy="21.33699"
            r="5.213"
            fill="#6c63ff"
          />
          <circle
            id="fa464750-9ca1-4e8d-97b4-cb58e01582d0"
            data-name="Ellipse 436"
            cx="45.15802"
            cy="21.33699"
            r="5.213"
            fill="#6c63ff"
          />
          <circle
            id="a6e2f59b-2266-45a7-a68c-25353aee0074"
            data-name="Ellipse 437"
            cx="63.40302"
            cy="21.33699"
            r="5.213"
            fill="#6c63ff"
          />
          <circle
            id="f535a5d2-8502-4b05-b17c-60a180e2caaa"
            data-name="Ellipse 438"
            cx="759.87603"
            cy="225.15999"
            r="23.221"
            fill="#ffb8b8"
          />
          <path
            id="a6ce20f5-c5fa-405c-86dd-46bb39d2c055-299"
            data-name="Path 2228"
            d="M839.57705,470.903l60.987,11.346c20.561-37.668,31.9-71.681,12.765-93.608l-36.167-2.128c-23.109,24.712-42.654,48.694-29.374,65.954Z"
            transform="translate(-125.62999 -121.906)"
            fill="#6c63ff"
          />
          <path
            id="af3567e9-adb8-4eb6-a03d-f215f48a4fbf-300"
            data-name="Path 2229"
            d="M893.886,441.326c13.957,5.34,26.911.7,38.8-14.521l-17.622-34-22.455,4.45Z"
            transform="translate(-125.62999 -121.906)"
            fill="#6c63ff"
          />
          <path
            id="bace76f9-9256-4201-a271-96ace1a4e0ec-301"
            data-name="Path 2230"
            d="M833.9,753.146l24.111-1.24,15.6-163.283,79.425,162.4,24.82-.709L930.348,607.769c-1.875-47.556-3.835-94.988-24.111-115.592l-7.091-14.892-56.732-12.056-7.8,14.892C816.527,522.354,827.146,643.024,833.9,753.146Z"
            transform="translate(-125.62999 -121.906)"
            fill="#2f2e41"
          />
          <path
            d="M862.97588,426.228l-19.856,53.9L807.115,531.36512a11.01965,11.01965,0,1,0,11.06153,7.202l.83154.41589,46.09521-46.8,26.94776-61.7Z"
            transform="translate(-125.62999 -121.906)"
            fill="#ffb8b8"
          />
          <path
            id="a8f9c73a-9317-4677-96f1-9f40fb1bc65c-302"
            data-name="Path 2233"
            d="M858.015,426.227c9.934,11.164,23.57,13,41.131,4.964V392.897l-21.984-6.382Z"
            transform="translate(-125.62999 -121.906)"
            fill="#6c63ff"
          />
          <path
            d="M958.33282,411.728c-3.53077-4.417-8.459-7.453-13.23682-10.475-4.77783-3.022-9.63086-6.233-12.87793-10.863-5.18115-7.388-5.42822-17.105-4.65527-26.095s2.355-18.173.16406-26.927c-2.898-11.58-12.49268-20.95605-23.82861-24.695-11.33643-3.739-24.08643-2.143-34.75,3.221l2.93066-2.767a11.66388,11.66388,0,0,0-3.27881,21.637c4.811,2.653,11.36475,1.893,15.23,5.793,3.80518,3.845,3.00781,10.156,1.63379,15.388-3.55469,13.544-9.19287,26.582-11.146,40.444-1.95263,13.862.51612,29.394,10.8003,38.894,7.561,6.983,18.30273,9.677,28.59179,9.471,10.28907-.206,20.32911-3.02106,30.229-5.821,6.94482-1.962,14.78027-4.684,17.5-11.372C963.76885,422.328,961.86407,416.145,958.33282,411.728Z"
            transform="translate(-125.62999 -121.906)"
            fill="#2f2e41"
          />
          <path
            d="M858.61952,771.83553l-51.76913-.00192v-.65479a20.15106,20.15106,0,0,1,20.15-20.14967h.00128l31.61882.00128Z"
            transform="translate(-125.62999 -121.906)"
            fill="#2f2e41"
          />
          <path
            d="M978.61952,769.83553l-51.76913-.00192v-.65479a20.15106,20.15106,0,0,1,20.15-20.14967h.00128l31.61882.00128Z"
            transform="translate(-125.62999 -121.906)"
            fill="#2f2e41"
          />
        </svg>
      </div>
    </div>
  );
};

export default Reset_Password;