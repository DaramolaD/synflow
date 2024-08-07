import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <div className="sectionContainer flex flex-col gap-6 px-5 md:px-10 py-5">
      <div className="flex flex-col items-start justify-between md:flex-row md:items-center border px-5 lg:px-10 py-10 md:py-16 border-dark-70 rounded-3xl gap-9 shadow-md">
        <div className="flex flex-col gap-0 md:gap-1">
          <p className="text-2xl font-normal tablet:text-3xl">
            Ready to streamline your financial operations?
          </p>
          <p className="text-base tablet:text-xl text-gray-b_g_main-500">
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
