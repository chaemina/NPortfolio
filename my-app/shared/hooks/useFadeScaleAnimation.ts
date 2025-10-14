"use client";
import { useState, useEffect, useMemo } from "react";

interface FadeScaleOptions {
  duration?: number;
  delay?: number;
  initialScale?: number;
}

export default function useFadeScaleAnimation({
  duration = 400,
  delay = 0,
  initialScale = 0.96,
}: FadeScaleOptions = {}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const style = useMemo<React.CSSProperties>(() => {
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "scale(1)" : `scale(${initialScale})`,
      transitionProperty: "opacity, transform",
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      transitionDelay: `${delay}ms`,
      willChange: "opacity, transform",
    };
  }, [visible, duration, delay, initialScale]);

  const className = "transform";

  return { style, className };
}
