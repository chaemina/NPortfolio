"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageTransitionReset() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove("page-fade-out");
  }, [pathname]);

  return null;
}
