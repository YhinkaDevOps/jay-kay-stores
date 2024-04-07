import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="about-bg about-font bg-[#7da500] py-16 text-[#ffffff]">
      <h4 className="service-header text-center text-3xl">ABOUT US</h4>
      <p className="px-4 md:px-0 text-center max-w-[1000px] mx-auto mt-7 font-sans">
        Established in August 2018, Jay & Kay Stores began its journey with a
        vision to evolve into a world-class supermarket. In January 2019, we
        took a significant step forward by registering with the Corporate
        Affairs Commission (CAC). Today, we proudly announce our relocation to a
        more conducive location, further enhancing our commitment to excellence.
        At Jay & Kay Stores, we are dedicated to leading the way in food and
        grocery distribution throughout our community.
      </p>

      <div className="flex flex-col md:flex-row gap-7 md:gap-4 mx-auto mt-6 items-center justify-center p-2 md:p-0">
        <div className="rounded-l-[50px] rounded-r-[50px] py-2 px-10 border-[5px] hover:border-red-700 border-lime-400 bg-white text-black ">
          <div className="flex">
            <span></span>
            <div className="flex flex-col">
              <p>WORKING HOURS</p>
              <p className="text-sm font-sans">Mon - Sat: 9AM - 6PM</p>
            </div>
          </div>
        </div>

        <button className="rounded-l-[50px] rounded-r-[50px] py-2 px-10 border-[5px] hover:border-red-700 border-lime-400 bg-white text-black ">
          <div className="flex">
            <span></span>
            <Link href="/contact-us">
              <div className="flex flex-col">
                <p>GET IN TOUCH NOW</p>
                <p className="text-sm font-sans">Offer Friendly Service</p>
              </div>
            </Link>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
