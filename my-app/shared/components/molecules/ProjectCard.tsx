"use client";

import { ProjectType } from "../../constants/projects";
import usePressEffect from "../../hooks/usePressEffect";

interface Props {
  project: ProjectType;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  const { style, onPressStart, onPressEnd } = usePressEffect(0.88, 300);

  return (
    <div
      className="flex flex-col justify-center items-center hover:cursor-pointer hover:bg-gray-100 transition-all duration-200"
      onClick={onClick}
      onMouseDown={onPressStart}
      onMouseUp={onPressEnd}
      onMouseLeave={onPressEnd}
      onTouchStart={onPressStart}
      onTouchEnd={onPressEnd}
      style={style}
    >
      <div className="w-full h-48 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="object-contain h-full w-full"
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs md:text-sm text-gray-500 dark:text-white text-center">
          {project.title}
        </p>
      </div>
    </div>
  );
}
