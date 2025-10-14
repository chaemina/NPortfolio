"use client";

import { useState } from "react";
import Experience from "../organisms/Experience";
import Projects from "../organisms/Projects";

export default function ArchiveTemplate() {
  const [activeTab, setActiveTab] = useState<"experience" | "projects">("experience");

  return (
    <main className="min-h-screen w-full px-4 md:px-8 py-10">
      <header className="flex mb-8 gap-2">
        <h1
          className={`text-2xl md:text-3xl font-bold cursor-pointer transition-opacity duration-300 ${
            activeTab === "experience" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </h1>

        <h1 className="text-2xl md:text-3xl opacity-50">/</h1>

        <h1
          className={`text-2xl md:text-3xl font-bold cursor-pointer transition-opacity duration-300 ${
            activeTab === "projects" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </h1>
      </header>

      <div>
        {activeTab === "experience" && <Experience />}
        {activeTab === "projects" && <Projects />}
      </div>
    </main>
  );
}
