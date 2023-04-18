import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/images/logo.png"
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="p-4 bg-gray-50 relative z-30 font-myriad">
      <div className="container flex justify-between h-10 md:h-16 mx-auto max-w-6xl">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <Image className="w-16 md:w-20" src={logo} alt="Logo" sizes="10vw"/>
        </a>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="btn-nav"
            >
              About BSCA
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="btn-nav"
            >
              Functional Wings
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="btn-nav"
            >
              Events
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="btn-nav"
            >
              Photo Gallery
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="btn-nav"
            >
              Partners / Donors
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="btn-nav"
            >
              Login/Register 
            </Link>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
