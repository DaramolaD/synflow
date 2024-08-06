import Image from 'next/image';
import React from 'react';
import logo from "@/public/Logo.svg"

const Logo = ({ width = 162, height = 44, className = '', ...props }) => {
  return (
    <Image
      src={logo}
      width={width}
      height={height}
      className={className}
      alt="Logo"
      {...props}
    />
  );
};

export default Logo;
