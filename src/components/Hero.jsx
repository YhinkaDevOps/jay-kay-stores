"use client";
import Link from "next/link";
import { MdFoodBank, MdHealthAndSafety } from "react-icons/md";
import { FaBaby, FaToilet } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { GiTeapotLeaves } from "react-icons/gi";
import { PiKnifeFill } from "react-icons/pi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex pt-[83px]">
      <div
        className={`hidden md:flex h-[500px] bg-[#1c1970] text-black p-5 pt-8 w-72`}
      >
        <div className="bg-white rounded-md">
          <Link href="/groceries">
            <div className="flex cursor-pointer border-b-[1px] border-b-[#718096]  p-4">
              <FaBasketShopping
                className={`text-2xl cursor-pointer block float-left mr-2 `}
              />
              <h1 className={`origin-left`}>Groceries</h1>
            </div>
          </Link>

          <Link href="/baby-products">
            <div className="flex cursor-pointer border-b-[1px] border-b-[#718096] p-4">
              <FaBaby
                className={`text-2xl cursor-pointer block float-left mr-2 `}
              />
              <h1 className={`origin-left`}>Baby Products</h1>
            </div>
          </Link>

          <Link href="/vegetables-and-fruits">
            <div className="flex cursor-pointer border-b-[1px] border-b-[#718096] p-4">
              <MdFoodBank
                className={`text-2xl cursor-pointer block float-left mr-2 `}
              />
              <h1 className={`origin-left`}>Fresh Food</h1>
            </div>
          </Link>

          <Link href="/groceries">
          </Link>
          <Link href="/groceries">
            <div className="flex cursor-pointer border-b-[1px] border-b-[#718096] p-4">
              <FaToilet
                className={`text-2xl cursor-pointer block float-left mr-2 `}
              />
              <h1 className={`origin-left`}>Toiletries</h1>
            </div>
          </Link>

          <Link href="/groceries">
            <div className="flex cursor-pointer border-b-[1px] border-b-[#718096] p-4">
              <GiTeapotLeaves
                className={`text-2xl cursor-pointer block float-left mr-2 `}
              />
              <h1 className={`origin-left`}>Beverages</h1>
            </div>
          </Link>

          <Link href="/meat-poultry">
            <div className="flex cursor-pointer border-b-[1px] border-b-[#718096] p-4">
              <PiKnifeFill
                className={`text-2xl cursor-pointer block float-left mr-2 `}
              />
              <h1 className={`origin-left`}>Butchery</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="homepage-bg w-full py-20 md:py-0 md:p-7 flex flex-col gap-7 justify-center items-center mx-auto text-white ">
        <div className="bg-[#440000] w-full md:max-w-[70%] text-center rounded-md">
          <h2 className="hero-header text-lg md:text-3xl p-5">
            Our commitment to providing convenience, quality, and exceptional
            value to our customers and community sets us apart as retailers of
            choice.
          </h2>
        </div>
        <Link href="/contact-us">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#fc0000] p-4 rounded-md font-semibold"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
