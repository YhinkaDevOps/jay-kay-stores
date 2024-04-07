import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" min-h-[200px] bg-[#222222] text-white px-4 py-10 md:py-16 border-dashed border-b-[1px] border-b-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 ">
        <div className="flex flex-col gap-2">
          <span className="hover:opacity-70 flex items-center flex-shrink-0">
            <Image
              src="/assets/jay-kay-logo.png"
              width={100}
              height={65}
              alt="footer-logo"
            />
          </span>

          <span className="text-sm">Jay & Kay Stores</span>
        </div>

        {/* Contact us */}
        <div className="pt-2 flex flex-col gap-5">
          <Link href="/contact-us">
            <button className="hover:opacity-70 flex items-center flex-shrink-0 font-bold hover:underline">
              Contact Us
            </button>
          </Link>
          <span className="text-sm">Phone: +(234) 07062406103 - enquiry</span>
          <span className="text-sm">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+(234)
            08086871400
          </span>

          <span className="text-sm">
            <p>Email: jaykaystores.supermarket@gmail.com</p>
          </span>
          <span className="text-sm">
            Address: Amuwo Odofin, L.G.A., Lagos, Nigeria.
          </span>
        </div>

        <div className="pt-2 flex flex-col gap-5">
          <button className=" flex items-center flex-shrink-0 font-bold ">
            Explore Jay & Kay Stores
          </button>
          <span className="hover:opacity-70 hover:underline text-sm">
            <Link href="/vegetables-and-fruits">Fruits & Vegetables</Link>
          </span>
          <span className="hover:opacity-70 hover:underline text-sm">
            <Link href="/meat-poultry">Poultry & Meat</Link>
          </span>
          <span className="hover:opacity-70 hover:underline text-sm">
            <Link href="/wine-and-liquor">Wine & Liquor</Link>
          </span>
          <span className="hover:opacity-70 hover:underline text-sm">
            <Link href="/groceries">Groceries</Link>
          </span>
          <span className="hover:opacity-70 hover:underline text-sm">
            <Link href="/baby-products">Baby products</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
