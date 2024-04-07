"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import beverages from "../../../public/assets/beverages.png";

const page = () => {
  return (
    <div className="min-h-svh pt-[80px]">
      <div className="groceries-bg text-white py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">Groceries</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Groceries</span>
        </span>
      </div>
      <div className="bg-[#f8f8f8] py-10 px-4 ">
        <p className="mx-auto md:max-w-[800px] text-justify md:text-center font-semibold ">
          From pantry staples to gourmet delights, our shelves are stocked with
          a wide variety of fresh produce, dry goods, beverages, snacks, and
          more. Whether you're planning a family dinner, stocking up for the
          week, or simply grabbing a few essentials, our grocery section has
          everything you need to create delicious meals and keep your kitchen
          well-stocked. With a focus on freshness and variety, we source our
          products from trusted suppliers to ensure that every item meets our
          high standards of quality.
        </p>
      </div>

      <div className="px-4 md:px-0 mx-auto max-w-[1100px] md:py-10 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:gap-10 mb-10">
          <div className="flex flex-col py-16 gap-4">
            <h2 className="text-xl font-bold">
              Quality Groceries for Every Need
            </h2>
            <p>
              Plus, with our friendly and knowledgeable staff on hand to assist
              you, shopping for groceries at Jay & Kay Stores is always a
              pleasant and convenient experience. Explore our grocery aisles
              today and discover the endless possibilities that await you."
            </p>
          </div>
          <Image
            src={beverages}
            width={450}
            height={50}
            alt="mission"
            className="image-cgs rounded-lg py-0 md:py-7"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
