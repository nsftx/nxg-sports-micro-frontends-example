"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createIntegratorInstance } from "@nsftx/nxg-sports-micro-frontends-example-shared/integrator";

export default function Home() {
  const router = useRouter();

  const navigateToSportsbook = () => {
    router.push("/sportsbook/homepage");
  };

  useEffect(() => {
    createIntegratorInstance(router.push);

    const registerRecommendedBetslipsWidgetInt = async () => {
      if (!customElements.get("recommended-betslips")) {
        const { registerRecommendedBetslipsWidget } = await import(
          /* webpackIgnore: true */
          `http://localhost:8080/src/builds/micro-frontends/index.ts?t=${Date.now()}`
        );

        registerRecommendedBetslipsWidget({});
      }
    };

    registerRecommendedBetslipsWidgetInt();
  }, [router]);

  return (
    <div>
      <div className="home-container">
        <header className="header">
          <h1>Welcome to NXG Sportsbook</h1>
          <p className="subtitle">Your ultimate sports destination</p>
        </header>

        <nav className="navigation">
          <button className="nav-button" onClick={navigateToSportsbook}>
            Go to Sportsbook
          </button>
        </nav>

        <main className="content">
          <recommended-betslips id="recommended-betslips" />
        </main>
      </div>
    </div>
  );
}
