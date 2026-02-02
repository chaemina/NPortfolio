import { experienceImages } from '../../constants/images';
import { experienceContentList } from "../../constants/experiences"
import FlipCard from '../molecules/FlipCard';
import { useDragCarousel } from '../../hooks/useDragCarousel';

const Slider = () => {
   const emblaRef = useDragCarousel();

  return (
     <div
      ref={emblaRef}
      className="overflow-hidden mt-[16px] md:mt-[80px]"
    >
    <div className="flex gap-4">
      {experienceImages.map((image, index) => {
        const experience = experienceContentList[index];
        if (!experience) return null;

        return (
          <div key={index} className="w-[300px] lg:w-[400px] shrink-0">
            <FlipCard
              image={image}
              title={experience.title}
              year={experience.year}
              content={experience.content}
              href={experience.href}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Slider;
