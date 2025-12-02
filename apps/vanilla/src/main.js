import {
  registerSportsbookMicroFrontend,
  registerRecommendedBetslipsWidget,
} from "http://localhost:8080/src/builds/micro-frontends/index.ts";
import { createIntegratorInstance } from "@nsftx/nxg-sports-micro-frontends-example-shared/integrator";
import "@nsftx/nxg-sports-micro-frontends-example-shared/style";

function navigate(path) {
  window.history.pushState({}, "", path);
  renderRoute(path);
}

const renderHome = () => {
  document.getElementById("app").innerHTML = `
    <div class="home-container">
      <header class="header">
        <h1>Welcome to NXG Sportsbook - HOME</h1>
        <p class="subtitle">Your ultimate sports destination</p>
      </header>
      <nav class="navigation">
        <button class="nav-button" id="go-sportsbook">Go to Sportsbook</button>
      </nav>
      <main class="content">
        <recommended-betslips id="recommended-betslips"></recommended-betslips>
      </main>
    </div>
  `;

  document.getElementById("go-sportsbook").onclick = () =>
    navigate("/sportsbook");

  if (!customElements.get("recommended-betslips"))
    registerRecommendedBetslipsWidget({});
};

const renderSportsbook = () => {
  document.getElementById("app").innerHTML = `
    <div class="sportsbook-page">
      <header>Sportsbook</header>
      <div class="sportsbook-content">
        <nsftx-sports-web id="sportsbook"></nsftx-sports-web>
      </div>
    </div>
  `;

  if (!customElements.get("nsftx-sports-web"))
    registerSportsbookMicroFrontend({
      basePath: "/sportsbook",
      routeMappings: {},
    });
};

const routes = {
  "/home": renderHome,
  "/sportsbook": renderSportsbook,
};

const renderRoute = (path) => {
  const route = Object.keys(routes).find((r) => path.startsWith(r));

  if (route) {
    routes[route](path);
  } else {
    renderHome();
  }
};

window.addEventListener("popstate", () =>
  renderRoute(window.location.pathname)
);
document.addEventListener("DOMContentLoaded", () => {
  createIntegratorInstance(renderRoute);
  renderRoute(window.location.pathname);
});
