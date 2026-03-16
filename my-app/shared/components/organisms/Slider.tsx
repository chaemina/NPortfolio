"use client";

import { useDragCarousel } from "../../hooks/useDragCarousel";
import FlipCard from "../molecules/FlipCard";
import Image from "next/image";

interface SliderItem {
  image: string;
  title?: string;
  year?: string;
  content?: string;
  href?: string;
}

interface Props {
  items: SliderItem[];
}

const Slider = ({ items }: Props) => {
  const emblaRef = useDragCarousel();

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden mt-[16px] md:mt-[80px]"
    >
      <div className="flex gap-4">
        {items.map((item, index) => {
          const isCard = item.title && item.content;

          return (
            <div
              key={index}
              className={
                isCard
                  ? "w-[300px] lg:w-[400px] shrink-0"
                  : "w-[80%] md:w-[60%] lg:w-[50%] shrink-0"
              }
            >
              {item.title && item.content ? (
                <FlipCard
                  image={item.image}
                  title={item.title}
                  year={item.year}
                  content={item.content}
                  href={item.href}
                />
              ) : (
                <div className="relative w-full aspect-[16/9] rounded-lg mb-[20px]">
                  <Image
                    src={item.image}
                    alt={`slider image ${index}`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;