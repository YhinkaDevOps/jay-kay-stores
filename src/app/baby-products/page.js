"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import baby from "../../../public/assets/baby-bg.jpg";

const page = () => {
  return (
    <div className="min-h-svh pt-[80px]">
      <div className="baby-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">Baby Products</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Baby Products</span>
        </span>
      </div>

      <div className="px-4 md:px-0 mx-auto max-w-[1100px] py-10 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className="flex flex-col py-4 md:py-16 gap-4">
            <h2 className="text-2xl font-bold">
              Discover Our Baby Products Collection
            </h2>
            <p>
              Our Baby Products section is designed with the needs of parents
              and their precious bundles of joy in mind. From gentle skincare
              essentials to cozy clothing and soothing accessories, we offer a
              comprehensive range of products to support every stage of your
              baby's development.
            </p>
          </div>
          <Image
            src={baby}
            width={450}
            height={50}
            alt="mission"
            className="image-cgs rounded-lg py-7"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
