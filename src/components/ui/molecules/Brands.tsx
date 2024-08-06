import React from "react";
import calendly from "@/public/calendly.svg";
import flutterwave from "@/public/flutterwave.svg";
import googleAnalytic from "@/public/googleAnalytic.svg";
import plaid from "@/public/plaid.svg";
import shopify from "@/public/shopify.svg";
import slack from "@/public/slack.svg";
import stripe from "@/public/stripe.svg";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="relative flex overflow-hidden items-center justify-between gap-5 w-full py-7">
      {brandList.map(({ id, img, alt }) => (
        <Image
          key={id}
          src={img}
          quality={100}
          fill={true}
          alt={alt}
          className="!relative !w-20 !h-5 md:!w-40 md:!h-10"
        />
      ))}
    </div>
  );
};

export default Brands;

const brandList = [
  {
    id: 1,
    img: calendly,
    alt: "calendlyBrand",
  },
  {
    id: 2,
    img: slack,
    alt: "slack",
  },
  {
    id: 3,
    img: plaid,
    alt: "plaid",
  },
  {
    id: 4,
    img: flutterwave,
    alt: "flutterwave",
  },
  {
    id: 5,
    img: googleAnalytic,
    alt: "googleAnalytic",
  },
  {
    id: 6,
    img: shopify,
    alt: "shopify",
  },
  {
    id: 7,
    img: stripe,
    alt: "stripe",
  },
];
