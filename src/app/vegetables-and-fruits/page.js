"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import fruits from "../../../public/assets/fruits.jpg";

const page = () => {
  return (
    <div className="min-h-svh pt-[80px]">
      <div className="vegetable-bg text-white py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">Fruits & Vegetables</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Fruits & Vegetables</span>
        </span>
      </div>
      <div className="bg-[#f8f8f8] py-10 ">
        <p className="mx-auto max-w-[800px] text-center font-semibold">
          We are committed to delivering the freshest and finest fruits and
          vegetables to our valued customers. Our produce is carefully selected
          from local farms and markets, undergoing rigorous inspection to
          guarantee it meets our stringent quality criteria before reaching your
          table.
        </p>
      </div>

      <div className="px-4 md:px-0 mx-auto max-w-[1100px] md:py-10 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className="flex flex-col py-10 md:py-16 gap-4">
            <h2 className="text-xl font-bold">
              We provide an extensive selection of fresh seasonal fruits and
              vegetables, including:
            </h2>
            <ul className={"list-disc list-inside"}>
              <li>Citrus fruits like oranges, lemons, and grapefruits</li>
              <li>Root vegetables including carrots, potatoes, and onions</li>
              <li>Leafy greens such as spinach, kale, and lettuce</li>
            </ul>
          </div>
          <Image
            src={fruits}
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
