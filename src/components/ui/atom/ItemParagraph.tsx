// atoms/Paragraph.tsx

import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const ItemParagraph: React.FC<ParagraphProps> = ({ children, className = "" }) => {
  return (
    <p
      className={`text-sm md:text-base w-fit border text-center font-medium px-4 py-2 rounded-full ${className}`}
    >
      {children}
    </p>
  );
};

export default ItemParagraph;
