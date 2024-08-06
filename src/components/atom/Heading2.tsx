import React from "react";

interface Title {
  title: string;
}

const Heading2 = ({ title }: Title) => {
  return (
    <h2 className="bg-title-gradient bg-clip-text text-transparent font-semibold text-2xl md:text-center sm:text-3xl md:text-4xl">
      {title}
    </h2>
  );
};

export default Heading2;
