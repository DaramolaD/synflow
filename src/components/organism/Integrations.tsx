import React from "react";
import IntegrationNote from "@/components/atom/IntegrationNote";
import Image from "next/image";
import integration from "@/assets/integration.svg";

const Integrations = () => {
  return (
    <div className="sectionContainer flex flex-col gap-6 px-5 md:px-10 py-5">
      <div className="flex flex-col gap-6 lg:flex-row items-center">
        <div className="flex flex-col gap-2">
          <IntegrationNote />
          <h1 className="text-2xl md:text-4xl">
            Integrate with your{" "}
            <span className="text-primary-400">Existing</span> tech Stack and
            workflows
          </h1>
          <p className="text-muted-10 text-sm md:text-lg">
            Connect your tools effortlessly, optimize your workflow, and
            streamline your data flow and enhance functionality
          </p>
        </div>
        <div className="relative flex w-full max-w-full min-h-40 md:min-h-96 h-auto items-center justify-center">
          <Image
            fill
            alt="integration"
            src={integration}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
