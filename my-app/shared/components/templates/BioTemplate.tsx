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
import Container from "../atoms/Container";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

export default function BioTemplate() {
  const blocks = [
    { title: "Career", items: career },
    { title: "Experience Overview", items: experiences },
    { title: "Awards", items: awards },
    { title: "Qualifications", items: qualifications },
    { title: "Education", items: education },
  ];

  return (
    <main className="min-h-screen w-full bg-[#f8f8f8]">
     <Container>
      <header className="mb-8 mt-10">
        <Title>Bio</Title>
        <Text className="text-gray-600 mt-1">
          Career · Experience · Awards · Qualifications · Education
        </Text>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        {blocks.map((block, i) => {
          const { style, className } = useFadeScaleAnimation({
            duration: 3000,  
            delay: i * 300, 
            initialScale: 0.97,
          });

          return (
            <section key={block.title} style={style} className={className}>
              <Bio title={block.title} items={block.items} />
            </section>
          );
        })}
      </div>
      </Container>
    </main>
  );
}
