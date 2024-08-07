import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <div className="sectionContainer flex flex-col gap-6 px-5 md:px-10 py-5">
      <div className="flex flex-col items-start justify-between md:flex-row md:items-center border px-4 py-8 border-dark-70 rounded-3xl gap-9 shadow-md">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-medium">
            Ready to streamline your financial operations?
          </p>
          <p className="text-base">
            Begin your free trial today and take the first step towards
            optimized workflows
          </p>
        </div>
        <Button className="ghost bg-button-gradient text-white hover:shadow-green-300 hover:shadow-md !font-medium w-fit flex items-center py-4 px-5 h-fit rounded-xl gap-1">
          Start Free Trial <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CTA;
