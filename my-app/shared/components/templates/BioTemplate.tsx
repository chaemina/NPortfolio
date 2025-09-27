"use client";

import Bio from "../organisms/Bio";
import {
  career,
  experiences,
  awards,
  qualifications,
  education,
} from "../../constants/timeline";

export default function BioTemplate() {
  return (
    <main className="min-h-screen w-full px-4 md:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Bio</h1>
        <p className="text-gray-600 mt-1">
          Career · Experience · Awards · Qualifications · Education
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Bio title="Career" items={career} />
        <Bio title="Experience Overview" items={experiences} />
        <Bio title="Awards" items={awards} />
        <Bio title="Qualifications" items={qualifications} />
        <Bio title="Education" items={education} />
      </div>
    </main>
  );
}
