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
      className={`justify-center flex items-center h-[48px] p-[16px] lg:h-[60px] lg:text-16px ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
