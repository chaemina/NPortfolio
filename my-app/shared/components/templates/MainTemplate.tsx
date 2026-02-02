"use client";

import { useRouter } from "next/navigation";
import Frame from "../organisms/Frame";
import LargeText from "../atoms/LargeText";
import About from "../organisms/About";
import MainLottie from "../organisms/MainLottie";
import Player from "../organisms/Player";
import Slider from "../organisms/Slider";
import Container from "../atoms/Container";

export default function MainTemplate() {
  const router = useRouter();

  return (
  <Frame>
    <Container>
         <main className="h-full w-full flex flex-col">
        {/* 소개 */}
         <div className="w-full lg:w-[65%] mt-[60px] md:mt-[100px] lg:mt-[180px]">
         <LargeText>
            I'm Mina Chae. I help users and clients build accessible web experiences through planning, communication, and front-end development based on user needs.
         </LargeText>
         </div>

        {/* Recent Project Grid */}

        {/* about */}
        <About/>
        {/* FrontEnd * Web * Application */}
        <MainLottie/>
      
        {/* 영상 */}
        <Player videoId="tkEe5Vno-qA"/>

        {/* experience */}
           <div className="w-full lg:w-[70%] mt-[60px] md:mt-[100px] lg:mt-[180px]">
         <LargeText>
          I got a lot of inspiration from my volunteering and team project experiences. They are the sources of my development moto as grow together.
         </LargeText>
         </div>
          
        {/* Experience Grid */}
            <Slider  />
        </main>
        </Container>
      </Frame>

  );
}
