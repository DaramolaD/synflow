import React from "react";
import IntegrationNote from "@/components/atom/IntegrationNote";
import Image from "next/image";
import integration from "@/assets/integration.svg";

const Integrations = () => {
  return (
    <div className="flex flex-col gap-6 px-5 md:px-10 py-5">
      <IntegrationNote />
      <div className="grid gap-6">
        <div className="grid gap-2">
          <h1 className="text-2xl">
            Integrate with your{" "}
            <span className="text-primary-400">Existing</span> tech Stack and
            workflows
          </h1>
          <p className="text-muted-10 text-sm">
            Connect your tools effortlessly, optimize your workflow, and
            streamline your data flow and enhance functionality
          </p>
        </div>
        <div className="relative flex w-full items-center justify-center">
          <Image full alt="integration" src={integration} />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
