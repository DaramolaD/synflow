import React from "react";
import Logo from "@/components/atom/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SocialMedia from "../molecules/SociaMedia";

const Footer = () => {
  return (
    <div className="sectionContainer flex flex-col gap-20 px-5 md:px-10 py-5">
      <div className="grid gap-12">
        <div className="flex flex-col gap-4">
          <Logo width={120} height={40} className="w-32 tablet:w-28 lg:w-40" />
          <p className="text-base">Don&apos;t miss our latest update</p>
          <form action="" className="flex flex-col gap-3 outline-none">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="focus:border-primary-50 focus:outline-none"
            />
            <Button className="ghost bg-button-gradient text-white hover:shadow-green-300 hover:shadow-md !font-medium w-fit flex items-center py-2 px-5 h-fit rounded-xl gap-1">
              Submit
            </Button>
          </form>
          <SocialMedia />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {linkItems.map((link) => (
            <div key={link.id} className="flex flex-col gap-3">
              <h3 className="text-lg font-medium text-primary-800">
                {link.header}
              </h3>
              <ul className="flex flex-col gap-2">
                {link.items.map((item, index) => (
                  <li
                    key={index}
                    className="hover:underline cursor-pointer text-primary-950"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center text-center justify-center border-t border-dark-70 pt-10">
        <p className="text-sm">© SynFlow Limited 2024. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

const linkItems = [
  {
    id: 1,
    header: "Product",
    items: ["Features", "Pricing", "Case studies", "Reviews"],
  },
  {
    id: 2,
    header: "Resources",
    items: [
      "Blog",
      "Features",
      "Community",
      "Pricing",
      "Term of Service",
      "Reviews",
    ],
  },
  {
    id: 3,
    header: "Company",
    items: ["About Us", "Contact us", "Careers", "Blog"],
  },
  {
    id: 4,
    header: "Support",
    items: ["Getting started", "Help center", "Report a bug", "Chat support"],
  },
  {
    id: 5,
    header: "Downloads",
    items: ["iOS", "Android", "Mac", "Windows"],
  },
];
