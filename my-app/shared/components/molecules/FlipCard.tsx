'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Text from '../atoms/Text';
import Caption from '../atoms/Caption';

interface FlipCardProps {
  image: string;
  title: string;
  year: string;
  content: string;
  href?: string;
}

const FlipCard = ({ image, title, year, content, href }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const router = useRouter();

  return (
    <div
      className="relative w-full aspect-square cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`
          relative w-full h-full
          transition-transform duration-500
          [transform-style:preserve-3d]
          ${flipped ? '[transform:rotateY(180deg)]' : ''}
        `}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Back */}
        <div
          className="
            absolute inset-0
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            bg-black/80 text-white
            p-4 flex flex-col justify-between
          "
        >
          <Caption className="font-light whitespace-pre-line">
            <Caption className="font-semibold text-sm">{title}</Caption>
            <Caption className="opacity-70 mb-2">{year}</Caption>
            {content}
          </Caption>

          {href && (
            <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(href);
            }}
            className="border border-white py-1 text-xs hover:bg-white hover:text-black transition"
          >
            바로가기
          </button>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
