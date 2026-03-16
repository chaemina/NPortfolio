"use client";

import { useRouter, usePathname } from "next/navigation";
import { isInternalLink } from "../utils/isInternalLink";

export const usePageTransition = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (href: string) => {
    if (pathname === href) return;

    if (!isInternalLink(href)) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    document.body.classList.add("page-fade-out");

    setTimeout(() => {
      router.push(href);
    }, 400);
  };

  return { navigate };
};
