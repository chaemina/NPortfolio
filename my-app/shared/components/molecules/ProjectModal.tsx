"use client";
import { ProjectType } from "../../constants/projects";

interface Props {
  project: ProjectType;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div
      className="fixed inset-0  flex justify-center items-center z-50"
      onClick={onClose} // 배경 클릭 시 닫기
    >
      <div
        className="bg-white dark:bg-gray-800 w-11/12 max-w-6xl h-5/6 flex rounded-xl overflow-hidden shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // 모달 안 클릭 시 닫히지 않음
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-xl font-bold hover:text-black dark:hover:text-white transition"
        >
          x
        </button>

        {/* 왼쪽 이미지 */}
        <div className="w-1/2 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          {project.image ? (
            <img src={project.image} alt={project.title} className="object-contain h-full w-full" />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}
        </div>

        {/* 오른쪽 role 설명 */}
        <div className="w-1/2 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {project.roles?.map((role, idx) => (
              <li key={idx} className="text-sm md:text-base">
                {role}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Github
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 underline"
              >
                Figma
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
