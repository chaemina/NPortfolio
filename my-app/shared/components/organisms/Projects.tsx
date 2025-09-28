"use client";
import { useState } from "react";
import { projects } from "../../constants/projects";
import ProjectCard from "../molecules/ProjectCard";
import ProjectModal from "../molecules/ProjectModal";
import { tags1, tags2 } from "../../constants/skills";

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-8">
      {/* 기술 스택 리스트 */}
      <section className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1">
          <span className="font-light mb-2">Front-End & App Tech</span>
          <hr className="border-gray-300 w-1/2 m-2"/>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {tags1.map((tag, idx) => (
              <li key={idx}>{tag.label}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <span className="font-light mb-2">Tools & Collaboration</span>
           <hr className="border-gray-300 w-1/2 m-2"/>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {tags2.map((tag, idx) => (
              <li key={idx}>{tag.label}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 프로젝트 리스트 */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} onClick={() => setSelected(idx)} />
        ))}

        {selected !== null && (
          <ProjectModal
            project={projects[selected]}
            onClose={() => setSelected(null)}
          />
        )}
      </section>
    </div>
  );
}
