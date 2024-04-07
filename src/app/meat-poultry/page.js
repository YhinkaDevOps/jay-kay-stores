"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import meat from "../../../public/assets/meat-poultry.jpg";

const page = () => {
  return (
    <div className="min-h-svh pt-[80px]">
      <div className="about-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">MEAT & POULTRY</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Meat & Poultry</span>
        </span>
      </div>

      <div className="px-4 md:px-0 mx-auto max-w-[1100px] py-10 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className="flex flex-col py-4 md:py-16 gap-2 md:gap-4">
            <h2 className="text-2xl font-bold">
              Quality Meats and Poultry: Butcher Services Available
            </h2>
            <p>
              Welcome to our Meat and Poultry section, where quality meets
              convenience. At Jay & Kay Stores, we take pride in offering a
              diverse selection of premium meats and poultry, sourced from
              trusted suppliers and prepared with care by our skilled butchers.
              Whether you're looking for tender cuts of beef, succulent chicken,
              or flavorful cuts of lamb, our selection is sure to satisfy even
              the most discerning palate.
            </p>
          </div>
          <Image
            src={meat}
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
