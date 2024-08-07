import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaProps {
  className?: string;
  primaryCta?: string;
  secondaryCta?: string;
  secondaryStyle?: string;
  primaryStyle?: string;
  secondaryIcon?: React.ReactNode;
  primaryIcon?: React.ReactNode;
}

const Cta: React.FC<CtaProps> = ({
  className = "",
  primaryCta = "Primary Action",
  secondaryCta = "Secondary Action",
  secondaryStyle = "",
  primaryStyle = "",
  secondaryIcon,
  primaryIcon,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col tablet:flex-row items-center justify-between",
        className
      )}
    >
      <Button
        className={cn(
          "ghost hover:text-primary-main !font-normal w-fit flex items-center py-4 px-5 h-fit rounded-xl gap-1",
          secondaryStyle
        )}
      >
        {secondaryIcon && <span className="mr-2">{secondaryIcon}</span>}
        {secondaryCta}
      </Button>
      <Button
        className={cn(
          "bg-gradient-to-t from-primary-main !font-normal to-primary-15 text-white flex items-center py-4 px-5 h-fit rounded-xl gap-1",
          primaryStyle
        )}
      >
        {primaryIcon && <span className="mr-2">{primaryIcon}</span>}
        {primaryCta}
      </Button>
    </div>
  );
};

export default Cta;
