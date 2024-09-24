import React, { useEffect, useState, ReactNode } from "react";
import { StaticImageData } from "next/image";

export const InfiniteMovingTestimonials = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  renderItem,
}: {
  items: any[]; // Make it general for any type of item
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  renderItem: (item: any) => ReactNode; // Pass in a function to render each item
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "40s";
          break;
        case "normal":
          duration = "60s";
          break;
        case "slow":
          duration = "80s";
          break;
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start && "animate-scroll"
        } ${pauseOnHover && "hover:paused"}`}
      >
        {items.map((item, index) => (
          <li key={index} className="flex-shrink-0">
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};
