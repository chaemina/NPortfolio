"use client";

import Bio from "../organisms/Bio";
import {
  career,
  experiences,
  awards,
  qualifications,
  education,
} from "../../constants/timeline";
import useFadeScaleAnimation from "../../hooks/useFadeScaleAnimation";

export default function BioTemplate() {
  const blocks = [
    { title: "Career", items: career },
    { title: "Experience Overview", items: experiences },
    { title: "Awards", items: awards },
    { title: "Qualifications", items: qualifications },
    { title: "Education", items: education },
  ];

  return (
    <main className="min-h-screen w-full px-4 md:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Bio</h1>
        <p className="text-gray-600 mt-1">
          Career · Experience · Awards · Qualifications · Education
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {blocks.map((block, i) => {
          // ⬇️ 각 섹션별로 fade+scale (3초짜리 천천히 등장)
          const { style, className } = useFadeScaleAnimation({
            duration: 3000,  // 등장 속도
            delay: i * 300,  // 순차 등장
            initialScale: 0.97,
          });

          return (
            <section key={block.title} style={style} className={className}>
              <Bio title={block.title} items={block.items} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
