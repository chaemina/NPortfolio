'use client'

import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import splash_dt from "../../../public/splash_dt.json";
import splash_mb from "../../../public/splash_mb.json"
import { useFadeNavigation } from "../../hooks/useFadeNavitation";

export default function SplashTemplate (){
  const lottieRefDt = useRef<any>(null);
  const lottieRefMb = useRef<any>(null);
  const { fadeOut, goNext } = useFadeNavigation(1000);

  useEffect(() => {
  lottieRefDt.current?.setSpeed(0.4);
  lottieRefMb.current?.setSpeed(0.4);
}, []);

  return (
    <div className={`transition-opacity duration-1000 
      ${fadeOut ? "opacity-0" : "opacity-100"}
      flex items-center bg-black w-screen h-screen`}>

      <Lottie
        animationData={splash_dt}
        loop={false}
        lottieRef={lottieRefDt}
        style={{ width: "100%", height: "100%" }}
        onComplete={() => goNext("/main")}
        className="hidden md:block"
      />

      <Lottie
        animationData={splash_mb}
        loop={false}
        lottieRef={lottieRefMb}
        style={{ width: "100%", height: "100%" }}
        onComplete={() => goNext("/main")}
        className="block md:hidden "
      />
    </div>
  );
}
