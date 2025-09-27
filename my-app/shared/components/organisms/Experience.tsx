"use client";

import { experiencesdetail } from "../../constants/experience";
import ExperienceItem from "../molecules/ExperienceItem";

export default function Experience() {
  return (
    <section className="space-y-8">
      {experiencesdetail.map((exp, idx) => (
        <ExperienceItem key={idx} exp={exp} />
      ))}
    </section>
  );
}
