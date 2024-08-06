import React from "react";
import ItemParagraph from "../atom/ItemParagraph";
import Image from "next/image";
import simplifyBenefit from "@/public/simplifyBenefit.svg";
import decisionBenefit from "@/public/decisionBenefit.svg";
import gainBenefit from "@/public/gainBenefit.svg";
import enhanceBenefit from "@/public/enhanceBenefit.svg";
import stableBenefit from "@/public/stableBenefit.svg";
import bootBenefit from "@/public/bootBenefit.svg";

type BenefitProps = {
  title: string;
  items: [];
};

const BenefitItem = () => {
  return (
    <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center w-full">
      {benefitData.map((data, index) => (
        <div
          className="relative flex w-full max-w-full overflow-hidden rounded-xl transition duration-300 ease-in hover:shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.1)]"
          key={index}
        >
          <Image
            alt={data.text}
            src={data.img}
            className="w-full hover:bg-gray-b_g-60"
          />
        </div>
      ))}
    </div>
  );
};

export default BenefitItem;

const benefitData = [
  {
    text: "simplifyBenefit",
    img: simplifyBenefit,
  },
  {
    text: "decisionBenefit",
    img: enhanceBenefit,
  },
  {
    text: "decisionBenefit",
    img: gainBenefit,
  },
  {
    text: "decisionBenefit",
    img: stableBenefit,
  },
  {
    text: "decisionBenefit",
    img: bootBenefit,
  },
  {
    text: "decisionBenefit",
    img: decisionBenefit,
  },
];
