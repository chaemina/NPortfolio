'use client'

import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import splash_dt_gray from "../../../public/splash_dt_gray.json";

export default function MainLottie() {
  const lottieRefDt = useRef<any>(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    lottieRefDt.current?.setSpeed(0.4);
  }, []);

  return (
    <div className="flex items-center justify-center mt-[60px] md:mt-[100px] lg:mt-[180px]">
      <Lottie
        animationData={splash_dt_gray}
        lottieRef={lottieRefDt}
        loop
        onLoopComplete={() => {
          setFade(true);
          setTimeout(() => setFade(false), 800); 
        }}
        className={`
          transition-opacity duration-700 ease-out
          ${fade ? "opacity-0" : "opacity-100"}
          hidden md:block
        `}
      />
    </div>
  );
}
