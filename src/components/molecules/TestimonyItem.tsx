import Image, { StaticImageData } from "next/image";
import React from "react";

type TestimonyProps = {
  testimony: {
    id: number;
    img: StaticImageData;
    name: string;
    startup: string;
    msg: string;
  };
};

const TestimonyItem: React.FC<TestimonyProps> = ({ testimony }) => {
  return (
    <div className="min-w-[300px] max-w-[400px] border flex flex-col p-5 my-4 rounded-2xl shadow-lg bg-white">
      <div className="flex gap-5 items-start">
        <Image
          alt="avatar"
          src={testimony.img}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1 md:gap-2">
          <p className="font-semibold">{testimony.name}</p>
          <p className="text-sm text-gray-600 line-clamp-2 min-h-[2.5rem] md:min-h-[2.75rem] overflow-hidden text-ellipsis">{testimony.startup}</p>
        </div>
      </div>
      <p className="text-sm md:text-base mt-4 text-gray-700 line-clamp-3">{testimony.msg}</p>
    </div>
  );
};

export default TestimonyItem;
