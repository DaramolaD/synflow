import React from "react";
import Heading2 from "@/components/atom/Heading2";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CaseStudyItem from "../molecules/CaseStudyItem";

const CaseStudies = () => {
  return (
    <div className="sectionContainer w-full flex flex-col gap-10 pb-12 px-5 md:px-10 overflow-hidden">
      <Heading2 title="CaseStudies" />
      <div className="flex items-stretch overflow-auto gap-5 ">
        {caseStudiesData.map((caseStudy) => (
          <CaseStudyItem key={caseStudy.id} data={caseStudy} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;

const caseStudiesData = [
  {
    id: 1,
    title: "Transforming Financial Operations for GreenTech Solutions",
    client: "GreenTech Solutions",
    industry: "Renewable Energy",
    overview:
      "GreenTech Solutions, a leader in renewable energy, faced challenges with disjointed payment systems, manual payroll processes, compliance issues, and a lack of financial visibility. Implementing SynFlow streamlined their operations, resulting in increased efficiency, improved cash flow, enhanced compliance, and better financial insights.",
    style: {
      bg: "bg-dark-50",
      border: "border-dark-200",
      btn: "hover:bg-dark-300",
    },
  },
  {
    id: 2,
    title: "Stabilizing Revenue and Enhancing Customer Retention",
    client: "NexGen Media",
    industry: "Media & Entertainment",
    overview:
      "NexGen Media struggled with inconsistent revenue and high customer churn. Our subscription management features, including recurring billing and analytics, stabilized their revenue streams and provided insights that improved customer retention and loyalty.",
    style: {
      bg: "bg-primary-50",
      border: "border-primary-200",
      btn: "hover:bg-primary-300",
    },
  },
  {
    id: 3,
    title: "Optimizing Expense Tracking and Financial Management",
    client: "BlueWave Enterprises",
    industry: "Manufacturing",
    overview:
      "BlueWave Enterprises had chaotic expense tracking and lacked financial visibility. With our comprehensive expense tracking and integration with accounting software, they gained full control over their finances, reducing wastage and improving budgeting.",
    style: {
      bg: "bg-moody_blue-50",
      border: "border-moody_blue-200",
      btn: "hover:bg-moody_blue-300",
    },
  },
];
