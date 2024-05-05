import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const bottomDivRef = useRef(null);
    const navigate = useNavigate()

    const scrollToBottom = () => {
      bottomDivRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  const Button = ({ icon, label, buttonStyle }) => {
    return (
      <button onClick={()=>navigate('/register')}
        className={`
inline-flex items-center justify-center gap-2 bg-[#20B2AA] text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded-xl px-3 py-2 hover:bg-[#168b86] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonStyle}`}
      >
        {label}
        {icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </button>
    );
  };
  return (
    <div>
      <div className="fixed z-30 w-full max-w-screen-md bg-white/80 shadow backdrop-blur-lg inset-x-0 top-0 mx-auto border border-gray-100 py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a className=" flex items-center gap-1">
                <Logo />
                <div className="text-xl sm:text-2xl text-[#000000] font-bold pt-0.5">
                  KsolveGPT
                </div>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5"></div>
            <div className="flex items-center justify-end sm:gap-3">
              <span onClick={scrollToBottom} className="cursor-pointer hidden sm:inline-block text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-gray-100 hover:text-gray-900">
                How it works
              </span>

              <Button icon={false} label={"Sign up"}  />
            </div>
          </div>
        </div>
      </div>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-6 pt-28 sm:pt-40 ">
        <div className="relative isolate z-10">
          <div className="absolute -z-10 flex -translate-y-1/2 justify-center overflow-hidden inset-x-0 top-1/2 [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width="200"
                  height="200"
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth="0"
                ></path>
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 ">
              Ksolve<span className="text-[#20B2AA]">GPT</span> <br />
              for providing better user experiences
            </h1>
            <h2 className="text-lg leading-8 text-gray-600 mt-6">
              Instantly respond to queries from visitors using a chatbot that
              has been trained on a vast repository of information.
            </h2>
            <div className="flex items-center justify-center gap-x-6 mt-10">
              <Button icon={true} buttonStyle="px-4 py-3" label={"Try Now"} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 md:py-20" ref={bottomDivRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-3">
          <div className="max-w-2xl mx-auto lg:text-center">
            <p className="text-base font-semibold leading-7 text-[#20B2AA]">
              Ksolves AI Chatbot
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-2 sm:text-4xl" >
              The Future of Conversational AI
            </h2>
            <p className="text-lg leading-8 text-gray-600 mt-6">
              KsolveGPT is a cutting-edge solution designed to elevate user
              experiences through intelligent chatbot interactions.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-10 lg:max-w-none lg:pt-24" >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <h3 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg
                    className="h-5 w-5 flex-none text-[#20B2AA]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Real-Time Interaction{" "}
                </h3>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600 mt-4">
                  <h4 className="flex-auto">
                    Visitors can engage with the chatbot seamlessly, receiving
                    instant responses to their questions without delays..{" "}
                  </h4>
                </dd>
              </div>
              <div className="flex flex-col">
                <h3 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg
                    className="h-5 w-5 flex-none text-[#20B2AA]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Continuous Learning
                </h3>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600 mt-4">
                  <h4 className="flex-auto">
                    The chatbot continuously learns from user interactions,
                    allowing it to adapt and improve its responses over time.
                  </h4>
                </dd>
              </div>
              <div className="flex flex-col">
                <h3 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg
                    className="h-5 w-5 flex-none text-[#20B2AA]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Personalized Recommendations{" "}
                </h3>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600 mt-4">
                  <h4 className="flex-auto">
                    KsolveGPT can offer personalized recommendations based on
                    user preferences and historical interactions, enhancing the
                    overall user experience.
                  </h4>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-6 py-10 md:py-24 text-center sm:shadow-sm sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16">
            <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-gray-900 mx-auto sm:text-4xl">
              Ready to elevate your learning, performance and impact
              <br /> to new heights?
            </h2>
            <h3 className="max-w-xl text-lg leading-8 text-gray-500 mx-auto mt-6">
              With KsolveGPT's AI-driven chatbot, unlock personalized
              interactions that elevate user experience. Seamlessly engage
              visitors, automate tasks, and achieve unprecedented efficiency.
              Harness the power of KsolveGPT to delight customers and propel
              your online presence to new heights.
            </h3>
            <div className="flex items-center justify-center gap-x-6 mt-8">
              <Button icon={true} buttonStyle="px-4 py-3" label={"Try Now"} />
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute -z-10 h-[64rem] w-[64rem] -translate-x-1/2 left-1/2 top-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              ></circle>
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#3b82f6"></stop>
                  <stop offset="1" stopColor="#1d4ed8"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
      <footer className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <a className="isomorphic-link flex items-center justify-center gap-1">
            <Logo />
            <div className="text-2xl text-[#000000] font-bold">KsolveGPT</div>
            <p className="sr-only">SiteGPT</p>
          </a>
          <nav
            className=" sm:columns-2 -mb-6 mt-8 flex flex-wrap sm:flex-nowrap gap-3 sm:gap-0 justify-center sm:space-x-8"
            aria-label="Footer"
          >
            <div className="pb-6">
              <span className="cursor-pointer text-sm font-medium leading-6 text-gray-600 transition-all duration-150 hover:text-[#20B2AA hover:underline">
               <a href="mailto:contact@ksolves.com"> Contact us</a>
              </span>
            </div>
            <div className="pb-6">
              <span className="cursor-pointer text-sm font-medium leading-6 text-gray-600 transition-all duration-150 hover:text-[#20B2AA hover:underline">
                Terms &amp; Conditions
              </span>
            </div>
          </nav>
          <div className="flex justify-center mt-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/_ksolves"
              className="isomorphic-link isomorphic-link--external inline-flex items-center justify-center gap-1.5 bg-white text-sm font-medium text-gray-500 transition-all duration-150 rounded-xl border border-gray-200 px-3 py-2 hover:bg-blue-50 hover:text-[#20B2AA] hover:border-[#20B2AA]"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              <span className="text-sm font-medium">Follow us on Twitter</span>
            </a>
          </div>
          <p className="text-sm leading-5 text-gray-500 mt-8 text-center">
            contact@ksolves.com
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Landing;
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
