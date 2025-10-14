"use client";

import Banner from "../atoms/Banner";
import useHoverOpacity from "../../hooks/useHoverOpacity";
import { aboutme } from "../../constants/aboutme";
import { useRouter } from "next/navigation";

export default function MainTemplate() {
  const router = useRouter();
  const { opacity, onEnter, onLeave, onClick } = useHoverOpacity({
    rest: 0,
    hover: 1,
  });

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

          <div className="duration-300" style={{ opacity }}>
            <img src="/images/Profile.jpg" width={200} className="2xl:w-90" />
          </div>
        </div>


        <div className="grid relative">
          <div className="relative w-3/4 h-[200px] hidden md:block">
            <div
              className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 md:text-base lg:text-xl"
              style={{ opacity }}
            >
              {aboutme}
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <a href="mailto:chaemina82@naver.com">Email</a>
            <a onClick={() => router.push("/archive")}>Project Archive</a>
            <a onClick={() => router.push("/bio")}>Biography</a>
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

      <Banner />

      <div className="md:hidden transition-opacity duration-300" style={{ opacity }}>
        {aboutme}
      </div>
    </main>
  );
}
