"use client";
import React, { useState } from "react";
import Heading2 from "@/components/atom/Heading2";
import FeatureItem from "@/components/molecules/FeatureItem";
export type Props = {
  titleState: string;
  featureState: string;
  onPageChange: (page: number) => void;
};
const Features = () => {
  const [featureState, setFeatureState] = useState<string>("");
  const [titleState, setTitleState] = useState<string>(
    "Effortlessly manage all your transactions in one secure platform."
  );
  const [selectedFeatureId, setSelectedFeatureId] = useState<number>(1);

  const handleState = (subState: any, id: number) => {
    setFeatureState(subState);
    setTitleState(subState.subTitle);
    setSelectedFeatureId(id);
  };
  return (
    <div className="sectionContainer w-full flex flex-col items-center justify-center gap-10 md:gap-12 pb-4 px-5 md:px-10">
      <Heading2 title="Optimize Your Business with Intelligent Solutions" />
      <div className="flex flex-col md:flex-row w-full rounded-3xl overflow-hidden border border-dark-100">
        <div className="hidden md:flex flex-row md:flex-col flex-1 w-full bg-[#FAFAFA]  divide-x md:divide-y divide-[#E4E4E7]">
          {features.map(({ id, title, subState }) => (
            <p
              key={id}
              className={`flex items-center text-xl h-full tablet:text-xl lg:text-[24px] cursor-pointer px-4 py-7 md:py-7 md:px-10 text-wrap ${
                selectedFeatureId === id
                  ? "bg-subtitle-gradient text-white"
                  : "hover:text-white hover:bg-subtitle-gradient"
              }`}
              onClick={() => handleState(subState, id)}
            >
              {title}
            </p>
          ))}
        </div>
          <p
            className={`text-xl h-full md:hidden tablet:text-xl lg:text-[24px] cursor-pointer px-4 py-7 md:py-7 md:px-10 text-wrap ${"bg-subtitle-gradient text-white"}`}
          >
            Seamless Payment Processing
          </p>
        <FeatureItem featureState={featureState} titleState={titleState} />
      </div>
    </div>
  );
};

export default Features;

const features = [
  {
    id: 1,
    title: "Seamless Payment Processing",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform.",
    },
  },
  {
    id: 2,
    title: "Automated Payroll Management",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform22.",
    },
  },
  {
    id: 3,
    title: "Comprehensive Expense Tracking",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform33.",
    },
  },
  {
    id: 4,
    title: "Subscription Management",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform444.",
    },
  },
  {
    id: 5,
    title: "Customizable Invoicing",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform55.",
    },
  },
  {
    id: 6,
    title: "Financial Analytics and Reporting",
    subState: {
      state: "paymentProcessing",
      subTitle:
        "Effortlessly manage all your transactions in one secure platform6.",
    },
  },
];
// Seamless Payment Processing
// Effortlessly manage all your transactions in one secure platform.
// Automated Payroll Management
// Subscription Management
