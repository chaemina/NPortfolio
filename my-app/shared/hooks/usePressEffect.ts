"use client";
import { useState } from "react";

export default function usePressEffect(scaleDown = 0.95, duration = 150) {
  const [isPressed, setIsPressed] = useState(false);

  const onPressStart = () => setIsPressed(true);
  const onPressEnd = () => setIsPressed(false);

  const style = {
    transform: isPressed ? `scale(${scaleDown})` : "scale(1)",
    transition: `transform ${duration}ms ease`,
  };

  return { style, onPressStart, onPressEnd };
}
