import React from "react";
import Image from "next/image";
import grocery from "../../public/assets/grocery_1.png";
import meat from "../../public/assets/meat.jpg";
import fruit from "../../public/assets/fruits.png";
import softdrink from "../../public/assets/soft-drinks.jpg";
import butchery from "../../public/assets/butchery.png";
import wine from "../../public/assets/wine.jpg";
import care from "../../public/assets/care.jpg";
import always from "../../public/assets/always.png";
import fragerances from "../../public/assets/fragrances.jpeg";
import oral from "../../public/assets/oral.png";
import ariel from "../../public/assets/ariel.jpg";
import milo from "../../public/assets/milo.jpg";
import Link from "next/link";

const Products = () => {
  return (
    <div className=" min-h-screen py-20 px-4 md:px-0">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <Image src={grocery} width={450} height={100} alt="mission" />
          <Image
            src={meat}
            width={450}
            height={50}
            alt="mission"
            className="image-cg rounded-lg"
          />
        </div>

        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-left text-3xl font-semibold mb-9">Products</h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={softdrink}
                width={150}
                height={50}
                alt="mission"
                className="rounded-full"
              />
              <span className="font-semibold">Soft Drinks</span>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={butchery}
                width={150}
                height={50}
                alt="mission"
                className="rounded-full"
              />
              <span className="font-semibold text-center">
                Frozen Foods and Butchery
              </span>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={wine}
                width={150}
                height={50}
                alt="mission"
                className="rounded-full"
              />
              <span className="font-semibold text-center">Wine</span>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={care}
                width={150}
                height={50}
                alt="mission"
                className="rounded-full"
              />
              <span className="font-semibold text-center">
                Health and Beauty
              </span>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={fruit}
                width={150}
                height={50}
                alt="mission"
                className=" rounded-full"
              />
              <span className="font-semibold">Fruits & Vegetables</span>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={always}
                width={150}
                height={50}
                alt="mission"
                className="rounded-full"
              />
              <span className="font-semibold text-center">Toiletries</span>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={oral}
                width={150}
                height={50}
                alt="mission"
                className="rounded-full"
              />
              <span className="font-semibold text-center">Oral Care</span>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <Image
                src={fragerances}
                width={150}
                height={50}
                alt="mission"
                className="rounded-full"
              />
              <span className="font-semibold text-center">Fragrances</span>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <Image
                src={ariel}
                width={150}
                height={50}
                alt="mission"
                className="rounded-full"
              />
              <span className="font-semibold text-center">Cleaning</span>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <Image
                src={milo}
                width={150}
                height={50}
                alt="mission"
                className="rounded-full"
              />
              <span className="font-semibold text-center">Cofee & Tea</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
