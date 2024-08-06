import Image from "next/image";
import React from "react";
import Row from "@/assets/staff.svg";
import ItemParagraph from "@/components/atom/ItemParagraph";

type FeatureItemProps = {
  featureState: string;
  titleState: string;
};

const features = [
  { text: "Automate Invoicing", className: "border-primary-200 bg-primary-50" },
  { text: "Fraud Detection", className: "text-red_color-text bg-red_color-bg border-red_color-border" },
  { text: "Multi-Gateway Integration", className: "text-moody_blue-800 bg-moody_blue-50 border-moody_blue-200" },
  { text: "Real-Time Payment Tracking", className: "text-dark-800 bg-dark-100 border-moody_blue-200" },
  { text: "Automatic Currency Conversion", className: "text-purple-800 bg-purple-100 border-purple-200" },
];

const FeatureItem: React.FC<FeatureItemProps> = ({ featureState, titleState }) => {
  return (
    <div className="flex flex-col flex-1 pt-2">
      <p className="text-lg py-4 tablet:text-xl md:py-7 px-4 md:px-10">
        {titleState}
      </p>
      <div className="flex flex-col w-full h-full items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-3">
          {features.map((feature, index) => (
            // <p
            //   key={index}
            //   className={`text-sm md:text-base w-fit border text-center font-medium px-4 py-2 rounded-full ${feature.className}`}
            // >
            //   {feature.text}
            // </p>
            <ItemParagraph key={index} className={feature.className}>
               {feature.text}
            </ItemParagraph>
          ))}
        </div>
        <div className="flex relative w-full h-full ">
          <div className="relative flex w-full h-full min-h-44 rounded bg-[#fafafa]">
            <Image
              w-full
              h-full
              alt="bg"
              src={Row}
              className="min-h-44 h-full object-cover object-left top-[5%] right-[50%] hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
