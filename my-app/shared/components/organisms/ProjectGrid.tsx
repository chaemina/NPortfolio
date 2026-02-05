import ImageCard from "../molecules/ImageCard";
import { projects } from "../../constants/project";

const ProjectGrid = () => {
  return (
    <div className="flex w-full space-x-5 mt-[16px]">
      <div className="w-1/2 space-y-5">
        {projects.column1.map((project, idx) => (
          <ImageCard
            key={idx}
            title={project.title}
            src={project.src}
            alt={project.title}
            href={project.href}
          />
        ))}
      </div>

      <div className="w-1/2 space-y-5">
        {projects.column2.map((project, idx) => (
          <ImageCard
            key={idx}
            title={project.title}
            src={project.src}
            alt={project.title}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
