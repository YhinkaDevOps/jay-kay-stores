"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import wine from "../../../public/assets/wine-bg.jpg";

const page = () => {
  return (
    <div className="min-h-svh pt-[80px]">
      <div className="wine-bg text-white py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">Wine & Liquor</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Wine & Liquor</span>
        </span>
      </div>
      <div className="bg-[#f8f8f8] py-8 md:py-10 px-4">
        <p className="mx-auto max-w-[800px] text-center font-semibold">
          Indulge in the finer things in life with our exquisite selection of
          wine and liquor at Jay & Kay Stores. Elevate your dining experience
          and toast to special occasions with our curated collection of premium
          wines sourced from renowned vineyards around the world.
        </p>
      </div>

      <div className="px-4 md:px-0 mx-auto md:max-w-[1100px] py-5 md:py-10 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
          <div className="flex flex-col py-58 md:py-16 gap-2 md:gap-4">
            <h2 className="text-lg font-bold">
              Fine Wines & Spirits: Elevate Your Experience
            </h2>
            <ul>
              Jay & Kay Stores is your destination for exceptional quality and
              unparalleled variety in wine and liquor. Visit us today and
              discover the perfect libation to complement any occasion.
            </ul>
          </div>

          <Image
            src={wine}
            width={450}
            height={50}
            alt="mission"
            className="image-cgs rounded-lg md:py-7"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
