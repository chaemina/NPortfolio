"use client";
import { ProjectType } from "../../constants/projects";

interface Props {
  project: ProjectType;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-gray-50/75 flex justify-center items-center z-50"
      onClick={onClose} // 배경 클릭 시 닫기
    >
      <div
        className="flex flex-col md:flex-row bg-white dark:bg-gray-800 w-full md:w-11/12 md:max-w-6xl h-screen md:h-5/6 overflow-hidden shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-xl font-bold hover:text-black dark:hover:text-white transition"
        >
          x
        </button>

        {/* 이미지 영역 */}
        <div className="w-full md:w-2/3 h-1/3 md:h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
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

        {/* 텍스트 영역 */}
        <div className="w-full md:w-1/3 h-2/3 md:h-full p-6 overflow-y-auto">
          <h2 className="text-lg mb-4">{project.title}</h2>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
          <hr className="border-gray-300 mb-4 dark:border-gray-700" />
          <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
            {project.roles?.map((role, idx) => (
              <li key={idx} className="text-sm font-medium">
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
                className="border border-white text-sm bg-gray-50 p-1 w-20 flex justify-center items-center rounded-lg hover:border-gray-300"
              >
                Github
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-sm bg-gray-50 p-1 w-20 flex justify-center items-center rounded-lg hover:border-gray-300"
              >
                Figma
              </a>
            )}
            {project.application && (
              <a
                href={project.application}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-sm bg-gray-50 p-1 w-30 flex justify-center items-center rounded-lg hover:border-gray-300"
              >
                Application
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
