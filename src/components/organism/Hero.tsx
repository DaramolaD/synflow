import React from "react";
import HeroNote from "@/components/molecules/HeroNote";
import Cta from "@/components/molecules/Cta";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroDashboard from "@/assets/heroDashboard.svg";
import heroDashboardMobile from "@/assets/heroDashboardMobile.svg";
import Brands from "@/components/molecules/Brands";

const Hero = () => {
  return (
    <div className="bg-hero-gradient w-full h-fit">
      <div className="sectionContainer flex flex-col py-32 pb-10 lg:py-40 lg:pb-20 items-center gap-20 md:gap-24 px-5 md:px-10">
        <div className="flex flex-col gap-6 text-center items-start md:items-center justify-center">
          <HeroNote />
          <h1 className="text-black text-3xl md:text-5xl font-medium max-w-[833px] text-left md:text-center">
            Effortlessly Manage All Your Startup&apos;s Finances in One Place
          </h1>
          <p className="text-black text-lg md:text-2xl max-w-[702px] text-left md:text-center">
            SynFlow helps you streamline payments, automate payroll, and access
            real-time financial insights, so you can focus on growth.
          </p>
          <Cta
            primaryCta="Get Started for Free"
            primaryIcon={<ArrowRight />}
            primaryStyle="hover:shadow-green-300 hover:shadow-md flex-row-reverse items-center text-base font-semibold hover:border-orange-500"
            secondaryCta="Book a demo"
            secondaryStyle="text-primary-950 border border-primary-950 bg-transparent hover:text-white hover:bg-button-gradient hover:border-primary-400"
            className="flex-col-reverse md:!flex-row-reverse gap-5 flex-wrap items-start md:items-center"
          />
        </div>
        <div className="w-full flex flex-col relative items-start justify-center">
          <Image
            src={heroDashboard}
            quality={100}
            fill={true}
            alt="synflowDashboard"
            className="hidden md:flex w-full !h-fit !relative tablet:rounded-3xl rounded-2xl"
          />
          <Image
            src={heroDashboardMobile}
            quality={100}
            fill={true}
            alt="synflowDashboard"
            className="w-full !h-fit md:hidden !relative"
          />
          <Brands />
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <h1 className="bg-gradient-to-t from-red-600 to-indigo-600 bg-clip-text text-transparent text-5xl font-bold">
        Effortlessly Manage All Your Startup&npos;s Finances in One Place
      </h1>
      <p className=" text-moody_blue-700 text-backgroundImage-title-gradient text-2xl">
        SynFlow helps you streamline payments, automate payroll, and access
        real-time financial insights, so you can focus on growth.
      </p> */
}
