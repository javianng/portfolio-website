"use client";

import { usePathname } from "next/navigation";

function useCurrentRoute() {
  const pathname = usePathname();
  return pathname;
}

export default useCurrentRoute;
