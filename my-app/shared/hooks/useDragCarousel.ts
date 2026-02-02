import useEmblaCarousel from 'embla-carousel-react';

export const useDragCarousel = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: 'start',
    loop: false,
  });

  return emblaRef;
};
