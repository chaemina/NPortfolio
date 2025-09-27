"use client"

import Banner from "../atoms/Banner";
import useHoverOpacity from "../../hooks/useHoverOpacity";
import { aboutme } from "../../constants/aboutme";
import { useRouter } from "next/navigation";

export default function MainTemplate() {
  const router = useRouter();
  const { opacity, onEnter, onLeave, onClick } = useHoverOpacity({ rest: 0, hover: 1 });

  return (
    <main className="h-full w-full flex flex-col justify-between">
      <div className="grid flex-1 text-xl p-2 gap-4 grid-cols-1 sm:grid-cols-2 auto-rows-auto">
        <div className="grid">
          <div className="flex flex-col">
            <span>CHAEMINA</span>
            <span>채민아</span>
            <span>Frontend Developer</span>
            <span>Web/Application</span>
          </div>
        </div>


        <div className="grid ">
          <div
            className="md:block transition-opacity duration-300"
            style={{ opacity }}
          >
            {aboutme}
          </div>

          <div className="flex flex-col lg:justify-start">
            <a href="mailto:chaemina82@naver.com">Email</a>
            <span>Project Archive</span>
            <a onClick={() => router.push("/bio")}> Biography </a>
            <a href="https://github.com/chaemina">Github</a>
            <a
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
               onClick={onClick} 
              className="cursor-pointer"
            >
              About me
            </a>
          </div>
        </div>
      </div>

      {/* section 2 - Banner */}
      <Banner />
    </main>
  );
}
