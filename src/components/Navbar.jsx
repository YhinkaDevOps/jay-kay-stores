"use client";
// import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const handleClick = () => setisClick(!isClick);

  return (
    <nav className="navbar w-full fixed z-50 bg-white md:px-[20px] lg:px-[50px] xl:px-[120px]">
      <div className="mx-auto py-4 px-2  md:pt-2">
        <div className="flex justify-between items-end">
          <Link href="/">
            <button className="hidden md:flex hover:opacity-70  items-center flex-shrink-0">
              <Image
                src="/assets/jay-kay-logo.png"
                width={80}
                height={65}
                alt="header-logo"
              />
            </button>
            <button className=" md:hidden hover:opacity-70  items-center flex-shrink-0">
              <Image
                src="/assets/jay-kay-logo.png"
                width={70}
                height={65}
                alt="header-logo"
              />
            </button>
          </Link>

          <div className="hidden md:block">
            <ul className="nav-list flex gap-x-9 items-center text-base py-4">
              <li className=" text-black font-medium text-sm hover:text-[#900C3F]">
                <Link className="capitalize" href="/">
                  HOME
                </Link>
              </li>
              <li className="text-black font-medium text-sm hover:text-[#900C3F]">
                <Link href="/about-us">ABOUT US</Link>
              </li>
              <li className="text-black font-medium text-sm hover:text-[#900C3F]">
                <Link href="/products">OUR PRODUCTS</Link>
              </li>
              <li className="text-black font-medium text-sm hover:text-[#900C3F]">
                <Link href="/contact-us">CONTACT US</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center p-2 rounded-md focus:outline-none md:hidden border-2 border-[#7CFC00]">
            <button onClick={handleClick}>
              {isClick ? (
                <FaTimes color="#222222" size={30} />
              ) : (
                <FaBars color="#222222" size={30} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div>
        {isClick && (
          <div className="bg-[#222222] md:hidden">
            <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
              <ul className="list-none space-y-2">
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/">HOME</Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/about-us">ABOUT US</Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/products">OUR PRODUCTS</Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/contact-us">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
