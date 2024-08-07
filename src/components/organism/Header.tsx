"use client";
import React, { useState } from "react";
import Logo from "@/components/atom/Logo";
import { NavigationMenuDemo } from "../molecules/NavLink";
import Cta from "@/components/molecules/Cta";
import { Menu, X } from "lucide-react";
import MobileNav from "@/components/molecules/MobileNav";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="flex z-50 top-0 right-0 left-0 sectionContainer fixed bg-headerColor/100 rounded-b-3xl">
      <div className="w-full z-50 flex justify-between items-center px-5 md:px-10 py-4">
        <Logo width={120} height={40} className="w-32 tablet:w-28 lg:w-40" />
        <div className="hidden tablet:flex">
          <NavigationMenuDemo />
        </div>
        <Cta
          className="hidden tablet:flex gap-5"
          primaryCta="Book a demo"
          secondaryCta="Login"
          secondaryStyle="border-transparent border hover:!border-primary-400 hover:text-primary-950 hover:bg-white bg-transparent"
        />
        {!menuToggle ? (
          <Menu
            className="flex tablet:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        ) : (
          <X
            className="flex tablet:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        )}
      </div>
      {menuToggle && (
        <div className="bg-white grid tablet:hidden w-full absolute px-5 md:px-8 pb-14 pt-[90px] top-0 left-0 bg-headerColor/100">
          <MobileNav />
          <Cta
            className="px-5 gap-5 pt-5 items-start flex-col-reverse"
            secondaryStyle="border border-primary-400 bg-transparent"
            primaryCta="Book a demo"
            secondaryCta="Login"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
