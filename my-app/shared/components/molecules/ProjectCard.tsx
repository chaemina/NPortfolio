"use client";
import { ProjectType } from "../../constants/projects";

interface Props {
  project: ProjectType;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      className="flex flex-col justify-center items-center hover:cursor-pointer hover:bg-gray-100 "
      onClick={onClick}
    >
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
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

      {/* title만 이미지 아래 출력 */}
      <div className="p-4">
        <p className="text-xs md:text-sm text-gray-500 dark:text-white">
          {project.title}
        </p>
      </div>
    </div>
  );
}
