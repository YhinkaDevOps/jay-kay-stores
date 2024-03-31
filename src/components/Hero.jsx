"use client";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const Hero = () => {

  const [open, setOpen] = useState(true);
  return (
    <div className="flex pt-[83px]">
      <div className={`h-screen bg-[#1c1970] text-white p-5 pt-8 ${open ? "w-72 " : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className="bg-white rounded-full text-2xl text-black absolute -right-3 top-8 border border-[#1c1970] cursor-pointer" onClick={()=>setOpen(!open)}/>
      </div>
      <div className="p-7">Homepage</div>
      <div></div>
      {/* <div className="bg-text mt-28">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl md:text-[50px] md:leading-[70px]">
            Welcome to Atoba Farms Limited:{" "}
            <span className="text-2xl md:text-[50px]">
              Where Freshness Meets Flavor!
            </span>
          </h1>
          <p>
            We take pride in cultivating the finest vegetable crops and
            providing premium-quality meats from our farm to your table.
          </p>

          <div>
            <button className="px-7 py-3 rounded-md border-2 border-[#00ce1b] hover:bg-orange-600 transition duration-300 ease-in-out">
              <Link href="/about-us">Learn More</Link>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
