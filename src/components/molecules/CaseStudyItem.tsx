import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface CaseStudyItemProps {
  id: number;
  title: string;
  client: string;
  industry: string;
  overview: string;
  style: {
    bg: string;
    border: string;
    btn: string;
  };
}
const CaseStudyItem: React.FC<{ data: CaseStudyItemProps }> = ({ data }) => {
  return (
    <div
      className={`min-w-[300px] md:min-w-[470px] flex flex-col py-10 pt-12 px-4 md:px-10 gap-4 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[16px] rounded-bl-[16px] md:rounded-tl-[100px] md:rounded-br-[100px] md:rounded-tr-[32px] md:rounded-bl-[32px] border border-dark-200 ${data.style.bg} ${data.style.border}`}
    >
      <div className="grid gap-2 h-fit">
        <h3 className="text-base underline font-medium">{data.title}</h3>
        <div className="flex flex-col">
          <p>Client: {data.client}</p>
          <p>Industry: {data.industry}</p>
        </div>
      </div>
      <div className="grid h-full gap-4 content-between">
        <p className="pb-1">{data.overview}</p>
        <Button
          variant="outline"
          className={`!w-fit rounded-full items-center justify-center gap-2 ${data.style.btn} ${data.style.border}`}
        >
          Read More <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyItem;
