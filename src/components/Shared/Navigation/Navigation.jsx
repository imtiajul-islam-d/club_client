// import Image from "next/image";
// import React from "react";
// import logo from "../../../../public/assets/images/logo.png"
// import Link from "next/link";

// const Navigation = () => {
//   return (
//     <header className="p-4 bg-gray-50 relative z-30 font-roboto">
//       <div className="container flex justify-between h-10 md:h-16 2xl:h-20 mx-auto max-w-6xl 2xl:max-w-7xl">
//         <a
//           rel="noopener noreferrer"
//           href="#"
//           aria-label="Back to homepage"
//           className="flex items-center p-2"
//         >
//           <Image className="w-20 2xl:w-24" src={logo} alt="Logo" sizes="10vw"/>
//         </a>
//         <ul className="items-stretch hidden space-x-1 md:flex">
//           <li className="btn-li">
//             <Link
//               rel="noopener noreferrer"
//               href="#"
//               className="btn-nav"
//             >
//               About BSCA
//             </Link>
//           </li>
//           <li className="btn-li">
//             <Link
//               rel="noopener noreferrer"
//               href="#"
//               className="btn-nav"
//             >
//               Functional Wings
//             </Link>
//           </li>
//           <li className="btn-li">
//             <Link
//               rel="noopener noreferrer"
//               href="#"
//               className="btn-nav"
//             >
//               Events
//             </Link>
//           </li>
//           <li className="btn-li">
//             <Link
//               rel="noopener noreferrer"
//               href="#"
//               className="btn-nav"
//             >
//               Photo Gallery
//             </Link>
//           </li>
//           <li className="btn-li">
//             <Link
//               rel="noopener noreferrer"
//               href="#"
//               className="btn-nav"
//             >
//               Partners / Donors
//             </Link>
//           </li>
//           <li className="btn-li">
//             <Link
//               rel="noopener noreferrer"
//               href="#"
//               className="btn-nav border px-4 py-3 2xl:px-5 2xl:py-4 hover:border-red-500 hover:text-white hover:bg-red-500 rounded-sm"
//             >
//               Login
//             </Link>
//           </li>
//         </ul>
//         <button className="flex justify-end p-4 md:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navigation;

import { Button, Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineMenu, AiTwotoneHome } from "react-icons/ai";
import logo from "../../../../public/assets/images/logo.png";

const Navigation = () => {
  // for mobile drawer start
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <section className="p-4 bg-gray-50 relative z-30 font-roboto">
      {/* this section will be hide when full screen and will be visible when mobile size screen comes in */}
      <div className="h-10 md:h-16 2xl:h-20 flex items-center justify-between container mx-auto px-3 lg:px-9 max-w-6xl 2xl:max-w-7xl">
        {/* menu left side start */}
        <div>
          <Image className="w-20 2xl:w-24" src={logo} alt="Logo" sizes="10vw" />
        </div>
        {/* menu left side end */}
        {/* menu right side start */}

        <div className="">
          {/* visible for only mobile */}
          <div className="lg:hidden">
            <span className="text-black" type="primary" onClick={showDrawer}>
              <AiOutlineMenu></AiOutlineMenu>
            </span>
          </div>
          {/* visible for only mobile end */}
          {/* visible for large device only start */}
          <div className="h-24 2xl:h-28 lg:flex items-center lg:items-center hidden">
            <ul className="h-full flex items-center space-x-2 md:space-x-4 ">
              <li className="btn-li group">
                <Link
                  href=""
                  className={
                    currentRoute === "/about" ? "pointer underline btn-nav" : "pointer btn-nav"
                  }
                >
                  About BSCA
                </Link>
                <div className="hover-menu group-hover:transform group-hover:opacity-100 group-hover:visible group-hover:transition-y-0 left-50 z-50">
                  <div className="relative top-0 p-6 bg-white shadow-xl text-red-600">
                    <div className="flex justify-center -z-10">
                      <div className="bg-red-500 rotate-45 w-16 h-16 -mt-5"></div>
                    </div>
                    <ul className="bg-gray-50 border-2 border-t-white shadow-xl absolute left-0 top-0 z-10 cursor-default space-y-2 container mx-auto p-10">
                      <Link href="/about#mission">
                        <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                          Mission
                        </li>
                      </Link>
                      <Link href="/about#vision">
                        <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                          Vision
                        </li>
                      </Link>
                      <Link href="/about#coreValues">
                        <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                          Core Values
                        </li>
                      </Link>
                      <Link href="/about#team">
                        <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                          Our Team
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              {/*  */}
              <li className="btn-li group">
                <Link
                  href=""
                  className={
                    currentRoute === "/service"
                      ? "pointer underline btn-nav"
                      : "pointer btn-nav"
                  }
                >
                  Functional Wings
                </Link>
                <div
                  className="hover-menu group-hover:transform group-hover:opacity-100 group-hover:visible group-hover:transition-y-0 left-50 z-50"
                >
                  <div className="relative top-0 p-6 bg-white shadow-xl text-red-600">
                    <div className="flex justify-center -z-10">
                      <div className="bg-red-500 rotate-45 w-16 h-16 -mt-5"></div>
                    </div>
                    <ul className="bg-gray-50 shadow-xl absolute left-0 top-0 z-10 cursor-default space-y-2 container mx-auto p-10">
                      <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                        <Link href="/service#marketExpansion">
                          Market Expansion Services
                        </Link>
                      </li>
                      <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                        <Link href="/service#marketConsultancy">
                          Market Expansion Consultancy
                        </Link>
                      </li>
                      <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                        <Link href="/service#gsc">
                          GTM Strategy Consultancy
                        </Link>
                      </li>
                      <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                        <Link href="/service#mcpde">
                          Marketing Communication planning, design and execution
                        </Link>
                      </li>
                      <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                        <Link href="/service#rcdc">
                          Retail Chain Development consultancy
                        </Link>
                      </li>
                      <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                        <Link href="/service#ecbsoc">
                          E-commerce Business strategy and operational
                          consultancy
                        </Link>
                      </li>
                      <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                        <Link href="/service#bcscfi">
                          Business Consultancy for SME companies in FMCG
                          industry
                        </Link>
                      </li>
                      <li className="text-center p-1 hover:bg-gray-100 hover:text-red-500 mb-2">
                        <Link href="/service#pc">Panel of Consultants</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/*  */}
              <li className="btn-li group">
                <Link
                  href=""
                  className={
                    currentRoute === "/brands" ? "pointer underline btn-nav" : "pointer btn-nav"
                  }
                >
                  Events
                </Link>
                <div className="hover-menu group-hover:transform group-hover:opacity-100 group-hover:visible group-hover:transition-y-0 left-50 z-50">
                  <div className="relative top-0 p-6 bg-white shadow-xl text-red-500">
                    <div className="flex justify-center -z-10">
                      <div className="bg-red-500 rotate-45 w-16 h-16 -mt-5"></div>
                    </div>
                    <ul className="bg-gray-50 shadow-xl absolute left-0 top-0 z-10 cursor-default space-y-2 container mx-auto p-10">
                      <li className="border p-1 hover:bg-red-700 hover:text-white my-2 text-center">
                        <Link href="/brands">FMCG</Link>
                      </li>
                      <li className="border p-1 hover:bg-red-700 hover:text-white my-2 text-center">
                        <Link href="/brands">Food</Link>
                      </li>
                      <li className="border p-1 hover:bg-red-700 hover:text-white my-2 text-center">
                        <Link href="/brands">Consumer healthcare</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/*  */}
              <li className="btn-li group">
                <Link
                  href=""
                  className={
                    currentRoute === "/career" ? "pointer underline btn-nav" : "pointer btn-nav"
                  }
                >
                  Photo Gallery
                </Link>
              </li>
              {/*  */}
              <li className="btn-li group">
                <Link
                  href=""
                  className={
                    currentRoute === "/#contact"
                      ? "pointer underline btn-nav"
                      : "pointer btn-nav"
                  }
                >
                  Partners / Donors
                </Link>
              </li>
              <li className="btn-li relative group py3 cursor-pointer border px-4 py-3 2xl:px-5 2xl:py-4 hover:border-red-500 hover:text-white hover:bg-red-500 rounded-sm">
                <Link
                  href=""
                  className={
                    currentRoute === "/#contact"
                      ? "pointer underline btn-nav"
                      : "pointer btn-nav"
                  }
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          {/* visible for large device only end */}
        </div>
        {/* menu right side end */}
      </div>
      {/* this is drawer component */}
      <div>
        <section>
          <Drawer
            width={"90%"}
            title=""
            placement="right"
            onClose={onClose}
            open={open}
          >
            <div className="md:p-8 lg:flex-row divide-gray-400 h-full">
              <div className="min-h-[90%] flex justify-center mb-3">
                <div className="w-full flex flex-col items-center justify-between">
                  <Link
                    className="shadow-sm hover:bg-red-700 hover:text-white w-full py-2 text-center"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="shadow-sm hover:bg-red-700 hover:text-white w-full py-2 text-center"
                    href="/about"
                  >
                    About Roadmap
                  </Link>
                  <Link
                    className="shadow-sm hover:bg-red-700 hover:text-white w-full py-2 text-center"
                    href="/service"
                  >
                    Services
                  </Link>
                  <Link
                    className="shadow-sm hover:bg-red-700 hover:text-white w-full py-2 text-center"
                    href="/brands"
                  >
                    Brands
                  </Link>
                  <Link
                    className="shadow-sm hover:bg-red-700 hover:text-white w-full py-2 text-center"
                    href="/career"
                  >
                    Career{" "}
                  </Link>
                  <Link
                    className="shadow-sm hover:bg-red-700 hover:text-white w-full py-2 text-center"
                    href="/#contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center pt-6 lg:pt-0">
                <div className="flex justify-center space-x-4">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="Instagram"
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="Pinterest"
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      className="w-4 h-4"
                    >
                      <path d="M16.021 0c-8.828 0-15.984 7.156-15.984 15.984 0 6.771 4.214 12.552 10.161 14.88-0.141-1.266-0.266-3.203 0.052-4.583 0.292-1.25 1.875-7.943 1.875-7.943s-0.479-0.964-0.479-2.375c0-2.219 1.292-3.88 2.891-3.88 1.365 0 2.026 1.021 2.026 2.25 0 1.37-0.87 3.422-1.323 5.323-0.38 1.589 0.797 2.885 2.365 2.885 2.839 0 5.026-2.995 5.026-7.318 0-3.813-2.75-6.49-6.677-6.49-4.547 0-7.214 3.417-7.214 6.932 0 1.375 0.526 2.854 1.188 3.651 0.13 0.161 0.146 0.302 0.109 0.464-0.12 0.5-0.391 1.599-0.443 1.818-0.073 0.297-0.229 0.359-0.536 0.219-1.99-0.922-3.245-3.839-3.245-6.193 0-5.036 3.667-9.672 10.563-9.672 5.542 0 9.854 3.958 9.854 9.229 0 5.516-3.474 9.953-8.307 9.953-1.62 0-3.141-0.839-3.677-1.839l-1 3.797c-0.359 1.391-1.339 3.135-2 4.193 1.5 0.458 3.078 0.714 4.734 0.714 8.813 0 15.979-7.151 15.979-15.984 0-8.828-7.167-15.979-15.979-15.979z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="Twitter"
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      className="w-4 h-4"
                    >
                      <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="Facebook"
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      className="w-4 h-4"
                    >
                      <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    title="Gmail"
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      className="w-4 h-4"
                    >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Drawer>
        </section>
      </div>
    </section>
  );
};

export default Navigation;
