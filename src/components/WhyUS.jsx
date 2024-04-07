import React from "react";
import Link from "next/link";

const WhyUS = () => {
  return (
    <div className="py-16 bg-[#666666] ">
      <div className="max-w-[800px] mx-auto gap-10 flex flex-col md:flex-row">
        <div className="flex flex-col gap-4 text-white">
          <h3 className="text-2xl font-semibold text-center">
            Find Your Closest Store
          </h3>
          <p className="text-center">
            Save time with convenient access to your nearest store.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="rounded-l-[50px] rounded-r-[50px] py-2 px-10 border-[5px] hover:border-red-500 bg-white text-black ">
            <div className="">
              <Link href="/contact-us">
                <div className="flex flex-col ">
                  <p>SHOP WITH US</p>
                </div>
              </Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
