"use client"
import React, { useRef, useState, useEffect } from "react";
import Heading2 from "@/components/atom/Heading2";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CaseStudyItem from "../molecules/CaseStudyItem";

interface CaseStudy {
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

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Transforming Financial Operations for GreenTech Solutions",
    client: "GreenTech Solutions",
    industry: "Renewable Energy",
    overview:
      "GreenTech Solutions, a leader in renewable energy, faced challenges with disjointed payment systems, manual payroll processes, compliance issues, and a lack of financial visibility. Implementing SynFlow streamlined their operations, resulting in increased efficiency, improved cash flow, enhanced compliance, and better financial insights.",
    style: {
      bg: "bg-dark-50",
      border: "border-dark-200",
      btn: "hover:bg-dark-300",
    },
  },
  {
    id: 2,
    title: "Stabilizing Revenue and Enhancing Customer Retention",
    client: "NexGen Media",
    industry: "Media & Entertainment",
    overview:
      "NexGen Media struggled with inconsistent revenue and high customer churn. Our subscription management features, including recurring billing and analytics, stabilized their revenue streams and provided insights that improved customer retention and loyalty.",
    style: {
      bg: "bg-primary-50",
      border: "border-primary-200",
      btn: "hover:bg-primary-300",
    },
  },
  {
    id: 3,
    title: "Optimizing Expense Tracking and Financial Management",
    client: "BlueWave Enterprises",
    industry: "Manufacturing",
    overview:
      "BlueWave Enterprises had chaotic expense tracking and lacked financial visibility. With our comprehensive expense tracking and integration with accounting software, they gained full control over their finances, reducing wastage and improving budgeting.",
    style: {
      bg: "bg-moody_blue-50",
      border: "border-moody_blue-200",
      btn: "hover:bg-moody_blue-300",
    },
  },
];

const CaseStudies: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const caseStudiesRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction: "next" | "prev") => {
    if (caseStudiesRef.current) {
      const scrollAmount = caseStudiesRef.current.clientWidth;
      caseStudiesRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < caseStudiesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      handleScroll("next");
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      handleScroll("prev");
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (caseStudiesRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - caseStudiesRef.current.offsetLeft);
      setScrollLeft(caseStudiesRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !caseStudiesRef.current) return;
    e.preventDefault();
    const x = e.pageX - caseStudiesRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The multiplier controls the scroll speed
    caseStudiesRef.current.scrollLeft = scrollLeft - walk;
  };

  // Attach mouse event listeners
  useEffect(() => {
    const ref = caseStudiesRef.current;
    if (ref) {
      ref.addEventListener("mousedown", handleMouseDown);
      ref.addEventListener("mouseleave", handleMouseLeave);
      ref.addEventListener("mouseup", handleMouseUp);
      ref.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("mousedown", handleMouseDown);
        ref.removeEventListener("mouseleave", handleMouseLeave);
        ref.removeEventListener("mouseup", handleMouseUp);
        ref.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isDragging]);

  return (
    <div className="sectionContainer w-full flex flex-col gap-10 pb-12 px-5 md:px-10 overflow-hidden">
      <Heading2 title="Case Studies" />
      <div
        ref={caseStudiesRef}
        className="flex items-stretch overflow-x-auto gap-5 pb-5 scrollbar-hidden cursor-grab"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {caseStudiesData.map((caseStudy) => (
          <CaseStudyItem key={caseStudy.id} data={caseStudy} />
        ))}
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="hover:bg-primary-100 rounded-full"
        >
          <ArrowLeft className="mr-2" /> Previous
        </Button>
        <Button
          variant="outline"
          onClick={handleNext}
          disabled={currentIndex === caseStudiesData.length - 1}
          className="hover:bg-primary-100 rounded-full"
        >
          Next <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default CaseStudies;
