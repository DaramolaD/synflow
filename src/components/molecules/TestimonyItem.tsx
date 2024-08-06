import Image from "next/image";
import React from "react";

type TestimonyProps = {
  testimony: {
    id: number;
    img: string;
    name: string;
    startup: string;
    msg: string;
  };
};

const TestimonyItem: React.FC<TestimonyProps> = ({ testimony }) => {
  return (
    <div className="min-w-[300px] border flex flex-col p-5 my-4 rounded-2xl shadow-lg bg-white">
      <div className="flex gap-5 items-start">
        <Image
          alt="avatar"
          src={testimony.img}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">{testimony.name}</p>
          <p className="text-sm text-gray-600">{testimony.startup}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{testimony.msg}</p>
    </div>
  );
};

export default TestimonyItem;
