"use client";

import { useActiveSectionContext } from "@/app/context/routeContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveRoute } = useActiveSectionContext();

  useEffect(() => {
    setActiveRoute(sectionName);
  }, [inView, setActiveRoute, sectionName]);

  return {
    ref,
  };
}
