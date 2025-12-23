"use client";

import { useState, useRef, useEffect } from "react";
import { PlanCard } from "./planCard";
import { cn } from "@/lib/utils";

type Plan = {
  id: string;
  price: number;
  appointments: number;
  isRecommended: boolean;
  title: string;
  description: string;
  benefits: string[];
};

type PlanCarouselProps = {
  plans: Plan[];
};

export function PlanCarousel({ plans }: PlanCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const recommendedIndex = plans.findIndex((p) => p.isRecommended);
    return recommendedIndex >= 0 ? recommendedIndex : 0;
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex, "instant");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToIndex = (
    index: number,
    behavior: ScrollBehavior = "smooth"
  ) => {
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      if (children[index]) {
        children[index].scrollIntoView({
          behavior,
          block: "nearest",
          inline: "center",
        });
      }
      setCurrentIndex(index);
    }
  };

  const onScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;

      const containerCenter = scrollLeft + containerWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(scrollRef.current.children).forEach((child, index) => {
        const div = child as HTMLElement;
        const childCenter = div.offsetLeft + div.offsetWidth / 2;
        const distance = Math.abs(childCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== currentIndex) {
        setCurrentIndex(closestIndex);
      }
    }
  };

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className={cn(
          "flex gap-4 overflow-x-auto snap-x snap-mandatory pt-0 pb-12 px-8 items-center overflow-y-hidden",
          "lg:justify-center lg:overflow-visible lg:px-0 lg:py-0 lg:gap-6",
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        )}
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="min-w-full snap-center flex justify-center lg:min-w-0 lg:w-auto"
          >
            <div className="w-full md:max-w-md lg:max-w-none lg:w-auto">
              <PlanCard {...plan} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-1 lg:hidden">
        {plans.map((plan, index) => (
          <button
            key={plan.id}
            onClick={() => scrollToIndex(index)}
            className="focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={cn("h-2 rounded-full transition-all duration-300", {
                "w-34 bg-primary-600": index === currentIndex,
                "w-8 bg-gray-300": index !== currentIndex,
              })}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
