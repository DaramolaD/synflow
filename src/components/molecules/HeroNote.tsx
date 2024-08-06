import React from "react";

const HeroNote = () => {
  return (
    <div className="flex items-center gap-2 rounded-full p-[1px] bg-button-gradient-2">
      <div className="flex items-center gap-2 bg-primary-100 rounded-full py-[2px] pl-[2px] pr-[15px]">
        <div className="flex bg-title-gradient rounded-3xl">
          <p className="text-base font-medium text-white px-[10px] py-1">New</p>
        </div>
        <p className="bg-button-gradient bg-clip-text text-transparent text-base font-semibold">
          AI-Enhanced Solutions
        </p>
      </div>
    </div>
  );
};

export default HeroNote;
