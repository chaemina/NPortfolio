"use client";

import usePressEffect from "../../hooks/usePressEffect";

interface ProjectButtonsProps {
  github?: string;
  figma?: string;
  application?: string;
  medium?: string;
}

export default function ProjectButtons({ github, figma, application,medium }: ProjectButtonsProps) {
  const baseStyle =
    "border border-white text-sm bg-gray-50 p-1 flex justify-center items-center rounded-lg transition-all duration-200";

  const links = [
    { href: github, label: "Github", width: "w-24" },
    { href: figma, label: "Figma", width: "w-24" },
    { href: medium, label: "Medium", width: "w-24" },
    { href: application, label: "Application", width: "w-32" },
  ];

  return (
    <div className="mt-4 flex gap-4">
      {links
        .filter((link) => !!link.href)
        .map(({ href, label, width }) => {
          const { style, onPressStart, onPressEnd } = usePressEffect(0.88, 300);
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseStyle} ${width}`}
              style={style}
              onMouseDown={onPressStart}
              onMouseUp={onPressEnd}
              onMouseLeave={onPressEnd}
              onTouchStart={onPressStart}
              onTouchEnd={onPressEnd}
            >
              {label}
            </a>
          );
        })}
    </div>
  );
}
