"use client";

import { useEffect } from "react";

export default function Sportsbook({ params }) {
  useEffect(() => {
    const registerSportsbook = async () => {
      if (!customElements.get("nsftx-sports-web")) {
        const { registerSportsbookMicroFrontend } = await import(
          /* webpackIgnore: true */
          `http://localhost:8080/src/builds/micro-frontends/index.ts?t=${Date.now()}`
        );

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
