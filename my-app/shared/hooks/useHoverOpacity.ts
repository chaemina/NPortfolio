import { useState, useCallback } from "react";

type Options = {
  rest?: number;
  hover?: number;
};

export default function useHoverOpacity(options: Options = {}) {
  const { rest = 1, hover = 0 } = options;
  const [opacity, setOpacity] = useState(rest);
  const [clicked, setClicked] = useState(false); 
  const onEnter = useCallback(() => {
    if (!clicked) setOpacity(hover);
  }, [hover, clicked]);

  const onLeave = useCallback(() => {
    if (!clicked) setOpacity(rest);
  }, [rest, clicked]);

  const onClick = useCallback(() => {
    setClicked((prev) => {
      const next = !prev;
      setOpacity(next ? hover : rest); 
      return next;
    });
  }, [hover, rest]);

  return {
    opacity,
    onEnter,
    onLeave,
    onClick,
    clicked, 
  };
}
