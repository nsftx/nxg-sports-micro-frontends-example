import {
  createIntegratorInstance,
  loadMicroFrontendModule,
} from "@nsftx/nxg-sports-micro-frontends-example-shared/integrator";
import { IGNITE_SDK_URL } from "@nsftx/nxg-sports-micro-frontends-example-shared/constants";
import "@nsftx/nxg-sports-micro-frontends-example-shared/style";

// Load Ignite SDK
const script = document.createElement("script");
script.src = IGNITE_SDK_URL;
script.onload = () => createIntegratorInstance(navigate);
document.head.appendChild(script);

let registerSportsbookMicroFrontend;
let registerRecommendedBetslipsWidget;

const loadMicroFrontends = async () => {
  const module = await loadMicroFrontendModule();
  registerSportsbookMicroFrontend = module.registerSportsbookMicroFrontend;
  registerRecommendedBetslipsWidget = module.registerRecommendedBetslipsWidget;
};

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
        <nsftx-sports-web id="sportsbook">
          <div class="nsftx-sportsbook-footer" slot="nsftxFooter">
            <span>Copyright © 2026</span>
        	</div>
        </nsftx-sports-web>
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
  renderRoute(window.location.pathname),
);

document.addEventListener("DOMContentLoaded", async () => {
  await loadMicroFrontends();
  renderRoute(window.location.pathname);
});
