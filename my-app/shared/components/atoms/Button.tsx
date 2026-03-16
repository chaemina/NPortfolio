"use client";

import { usePageTransition } from "../../hooks/usePageTransition";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const Button = ({ children, href, className }: Props) => {
  const { navigate } = usePageTransition();

  return (
    <button
      onClick={() => navigate(href)}
      className={`justify-center target-blank flex items-center h-[48px] lg:h-[60px] p-[16px] 2xl:p-[50px] text-lg lg:text-xl 2xl:text-4xl ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
