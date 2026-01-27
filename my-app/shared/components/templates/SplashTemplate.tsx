'use client'

import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import splash from "../../../public/splash_dt.json";
import { useFadeNavigation } from "../../hooks/useFadeNavitation";

export default function SplashTemplate (){
  const lottieRef = useRef<any>(null);
  const { fadeOut, goNext } = useFadeNavigation(1000);

  useEffect(() => {
    lottieRef.current?.setSpeed(0.4);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 
      ${fadeOut ? "opacity-0" : "opacity-100"}
      flex items-center bg-black w-screen h-screen`}>

      <Lottie
        animationData={splash}
        loop={false}
        lottieRef={lottieRef}
        style={{ width: "100%", height: "100%" }}
        onComplete={() => goNext("/")}
      />
    </div>
  );
}
