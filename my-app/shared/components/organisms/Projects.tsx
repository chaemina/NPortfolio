"use client";
import { useState } from "react";
import { projects } from "../../constants/projects";
import ProjectCard from "../molecules/ProjectCard";
import ProjectModal from "../molecules/ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
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
  );
}
