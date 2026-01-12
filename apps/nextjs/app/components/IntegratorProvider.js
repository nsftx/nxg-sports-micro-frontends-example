"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createIntegratorInstance } from "@nsftx/nxg-sports-micro-frontends-example-shared/integrator";

export default function IntegratorProvider({ children }) {
  const router = useRouter();

  useEffect(() => {
    // SDK loaded via beforeInteractive, safe to initialize integrator
    createIntegratorInstance(router.push);
  }, [router]);

  return <>{children}</>;
}
