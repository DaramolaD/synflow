"use client"
import Image from "next/image";
import React from "react";
import Linkedin from "@/assets/In.svg"
import Mail from "@/assets/Mail.svg"
import Twitter from "@/assets/Tw.svg"
import Link from "next/link";

const SocialMedia = () => {
  const socialMedia = [
    { id: 1, Icon: Linkedin, url: "" },
    { id: 2, Icon: Twitter, url: "" },
    { id: 3, Icon: Mail, url: "" },
  ];
  return (
    <div className="flex gap-3 items-center">
      {socialMedia.map(({ id, Icon, url }) => (
        <Link href={url} key={id} className="flex bg-gray-b_g_main-200 rounded-full w-10 h-10 p-[10px]">
          <Image alt="socialMedia" src={Icon} className="w-full h-full" />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
