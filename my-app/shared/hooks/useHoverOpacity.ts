import { useState, useCallback } from "react";

type Options = {
  /** 기본 opacity 값 (기본 1) */
  rest?: number;
  /** hover 또는 클릭 시 유지할 opacity 값 (기본 0) */
  hover?: number;
};

/**
 * hover 시 opacity를 변경하고, 클릭 시에는
 * opacity를 토글(고정/해제)하는 훅
 */
export default function useHoverOpacity(options: Options = {}) {
  const { rest = 1, hover = 0 } = options;
  const [opacity, setOpacity] = useState(rest);
  const [clicked, setClicked] = useState(false); // 클릭 고정 여부

  const onEnter = useCallback(() => {
    if (!clicked) setOpacity(hover);
  }, [hover, clicked]);

  const onLeave = useCallback(() => {
    if (!clicked) setOpacity(rest);
  }, [rest, clicked]);

  const onClick = useCallback(() => {
    setClicked((prev) => {
      const next = !prev;
      setOpacity(next ? hover : rest); // 토글
      return next;
    });
  }, [hover, rest]);

  return {
    opacity,
    onEnter,
    onLeave,
    onClick,
    clicked, // 필요 시 클릭 상태 확인용
  };
}
