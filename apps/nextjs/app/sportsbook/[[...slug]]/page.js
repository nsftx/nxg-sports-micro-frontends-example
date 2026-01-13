"use client";

import { useEffect } from "react";
import { loadMicroFrontendModule } from "@nsftx/nxg-sports-micro-frontends-example-shared/integrator";

export default function Sportsbook({ params }) {
  useEffect(() => {
    const registerSportsbook = async () => {
      if (!customElements.get("nsftx-sports-web")) {
        const { registerSportsbookMicroFrontend } =
          await loadMicroFrontendModule();

        registerSportsbookMicroFrontend({
          basePath: "/sportsbook",
          routeMappings: {},
        });
      }
    };

    registerSportsbook();
  }, []);

  return (
    <div className="sportsbook-page">
      <header>Sportsbook</header>
      <div className="sportsbook-content">
        <nsftx-sports-web id="sportsbook" />
      </div>
    </div>
  );
}
