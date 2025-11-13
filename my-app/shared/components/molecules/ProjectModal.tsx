"use client";

import { useState, useEffect } from "react";
import { ProjectType } from "../../constants/projects";
import ProjectButtons from "../atoms/ProjectButtons";
import useFadeScaleAnimation from "../../hooks/useFadeScaleAnimation";

interface Props {
  project: ProjectType;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [isMounted, setIsMounted] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const { style, className } = useFadeScaleAnimation({
    duration: 5,
    initialScale: 0.99,
  });

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMounted(false);
      onClose();
    }, 5);
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 bg-gray-50/75 transition-opacity duration-[3000ms] ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          ...style,
          opacity: isClosing ? 0 : style.opacity,
          transform: isClosing ? "scale(0.95)" : (style.transform as string),
          transition: "opacity 3s ease, transform 3s ease",
        }}
        className={`flex flex-col md:flex-row bg-white dark:bg-gray-800 w-full md:w-11/12 md:max-w-6xl h-screen md:h-5/6 overflow-hidden shadow-xl relative rounded-lg ${className}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-xl font-bold hover:text-black dark:hover:text-white transition"
        >
          ×
        </button>

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

        <div className="w-full md:w-1/3 h-2/3 md:h-full p-6 overflow-y-auto">
          <h2 className="text-lg mb-4">{project.title}</h2>
          {project.achievements && project.achievements.length > 0 && (
  <div className="mb-4">
    <div className="flex flex-wrap gap-2">
      {project.achievements.map((item, idx) => (
        <span
          key={idx}
          className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 text-xs px-2 py-1 rounded-full font-medium"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
)}
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
          <hr className="border-gray-300 mb-4 dark:border-gray-700" />
        {project.techStack && project.techStack.length > 0 && (
    <div className="mb-4">
      <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Tech Stacks</h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
        {project.techStack.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
    </div>
  )}
          <hr className="border-gray-300 mb-4 dark:border-gray-700" />
          <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
            {project.roles?.map((role, idx) => (
              <li key={idx} className="text-sm font-medium whitespace-pre-line">
                {role}
              </li>
            ))}
          </ul>
          <ProjectButtons
            github={project.github}
            figma={project.figma}
            application={project.application}
            medium={project.medium}
          />
        </div>
      </div>
    </div>
  );
}
