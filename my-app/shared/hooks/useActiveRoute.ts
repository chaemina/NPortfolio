"use client";

import { usePathname } from "next/navigation";
import { isActiveRoute } from "../utils/isActiveRoute";

export const useActiveRoute = (href: string) => {
  const pathname = usePathname();
  return isActiveRoute(pathname, href);
};
