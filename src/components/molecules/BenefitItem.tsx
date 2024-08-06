import React from "react";
import ItemParagraph from "../atom/ItemParagraph";
import Image from "next/image";
import simplifyBenefit from "@/assets/simplifyBenefit.svg";
import decisionBenefit from "@/assets/decisionBenefit.svg";
import gainBenefit from "@/assets/gainBenefit.svg";
import enhanceBenefit from "@/assets/enhanceBenefit.svg";
import stableBenefit from "@/assets/stableBenefit.svg";
import bootBenefit from "@/assets/bootBenefit.svg";

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
            className="w-full border border-dark-60 hover:bg-gray-b_g-60"
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
