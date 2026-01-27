import { useState } from "react";
import { useRouter } from "next/navigation";

export const useFadeNavigation = (delay = 1000) => {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  const goNext = (path: string) => {
    setFadeOut(true);
    setTimeout(() => {
      router.push(path);
    }, delay);
  };

  return { fadeOut, goNext };
};