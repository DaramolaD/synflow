import React from "react";
import Heading2 from "../atom/Heading2";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="sectionContainer w-full flex flex-col gap-10 pb-12 px-5 md:px-10">
      <Heading2 title="CaseStudies" />
      <div className="borderStatus padding grid gap-2 rounded-bl-lg border border-dark-200 md:px-10 px-4">
        <div className="grid gap-2">
          <div className="grid gap-2">
            <h3 className="text-base underline">
              Transforming Financial Operations for GreenTech Solutions
            </h3>
            <p>Client: GreenTech Solutions</p>
            <p>Industry: Renewable Energy</p>
          </div>
        </div>
        <div className="grid">
          <p className="pb-1">
            GreenTech Solutions, a leader in renewable energy, faced challenges
            with disjointed payment systems, manual payroll processes,
            compliance issues, and a lack of financial visibility. Implementing
            SynFlow streamlined their operations, resulting in increased
            efficiency, improved cash flow, enhanced compliance, and better
            financial insights
          </p>
          <Button variant="outline" className="!w-fit rounded-full pt-1">
            Read More <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
