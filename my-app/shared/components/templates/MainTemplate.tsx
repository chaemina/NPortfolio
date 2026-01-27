"use client";

import useHoverOpacity from "../../hooks/useHoverOpacity";
import { aboutme } from "../../constants/aboutme";
import { useRouter } from "next/navigation";
import mainImage from "../../../public/mainImage.json"
import Lottie from "lottie-react";
import Title from "../atoms/Title";

export default function MainTemplate() {
  const router = useRouter();
  const { opacity, onEnter, onLeave, onClick } = useHoverOpacity({
    rest: 0,
    hover: 1,
  });

  return (
    <main className="h-full w-full flex flex-col justify-between">
     <div className="flex-1 grid text-xl p-2 gap-4 grid-cols-1 sm:grid-cols-2 auto-rows-auto">

        <div className="grid">
          <div className="flex flex-col">
            <Title>CHAEMINA</Title>
            <Title>채민아</Title>
            <Title>Frontend Developer</Title>
            <Title>Web/Application</Title>
          </div>

          {/* <div className="fixed duration-300" style={{ opacity }}>
            <img src="/images/Profile.jpg" width="20%" />
          </div> */}
        </div>

        <div className="grid relative">
          <div className="relative w-3/4 h-[200px] hidden lg:block">
            <div
              className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 text-base xl:text-lg 2xl:text-2xl"
              style={{ opacity }}
            >
              {aboutme}
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <a href="mailto:chaemina82@naver.com"><Title>Email</Title></a>
            <a onClick={() => router.push("/archive")}><Title>Project Archive</Title></a>
            <a onClick={() => router.push("/bio")}><Title>Biography</Title></a>
            <a href="https://github.com/chaemina"><Title>Github</Title></a>
            <a
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              onClick={onClick}
              className="cursor-pointer"
            >
              <Title>About me</Title>
            </a>
          </div>
        </div>
      </div>
      
    <div className="flex-1 ">
      <Lottie
        animationData={mainImage}
        style={{ width: "50%" }}
        />
    </div>
{/* 

      <div className="lg:hidden transition-opacity duration-300" style={{ opacity }}>
        {aboutme}
      </div> */}
    </main>
  );
}
