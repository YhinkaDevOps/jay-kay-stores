import React from "react";
import Link from "next/link";

const Explore = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl:
        "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2020/1/shutterstock_321864554.jpg",
      header: "Fruits & Vegetables",
      text: "We are dedicated to delivering the freshest and finest vegetables and fruits to our customers. Our produce comes directly from local farmers and markets, and we meticulously inspect each item to guarantee its quality before…",
    },
    {
      id: 2,
      imageUrl:
        "https://www.supermarketperimeter.com/ext/resources/2019/12/MeatPoultryProducts_Lead.jpg?height=667&t=1579276511&width=1080.jpg",
      header: "Poultry & Meat",
      text: "Pork is incredibly versatile, whether enjoyed as a succulent roast with crispy crackling, as finger-licking ribs dripping with irresistible flavor, or swiftly pan-fried and incorporated into a fragrant stir-fry.",
    },
    {
      id: 3,
      imageUrl:
        "https://i2.wp.com/www.differencebetween.com/wp-content/uploads/2017/01/Difference-Between-Wine-and-Liquor-1.jpg?w=800&ssl=1.jpg",
      header: "Wine & Liquor",
      text: "At Jay & Kay Stores, we have curated an extensive selection of popular beverages, available at competitive supermarket rates. Discover an array of premium whiskies and top-tier wines, ensuring unparalleled variety and value.",
    },
    {
      id: 4,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kQ5xXaLUK3S8EwnU4-zCxg.png",
      header: "Groceries",
      text: "At Jay & Kay Stores, we've sourced the freshest groceries to meet your everyday needs. From farm-fresh produce to pantry essentials, we've got you covered with quality products at unbeatable prices.",
    },
    {
      id: 5,
      imageUrl:
        "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/2654153_Baby%20eCommerce%20Sites%202021.jpg",
      header: "Baby Products",
      text: "We're excited to introduce our latest addition: a comprehensive collection of baby products. From essential nursery items to adorable clothing and accessories, we have everything you need to welcome your little one with love and care",
    },
    {
      id: 6,
      imageUrl: "https://www.apollocorp.com/images/img-01.png",
      header: "Health & Beauty",
      text: "We've curated a stunning collection of your favorite skincare and beauty essentials, all at unbeatable prices. From luxurious skincare serums to trend-setting makeup palettes, we've got everything you need to elevate your beauty routine to the next level.",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-0 bg-[#f6f6f6] mx-auto">
      <div className="max-w-[1050px] mx-auto">
        <h1 className="text-center text-3xl font-semibold mb-9">
          EXPLORE JAY & KAY STORES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {cardsData.map((card) => (
            <div key={card.id} className="flex flex-col gap-4">
              <img
                src={card.imageUrl}
                alt={card.header}
                className="card-image"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl card-header font-semibold">
                  {card.header}
                </h3>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
