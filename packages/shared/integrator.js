import {
  TENANT_ID,
  ENVIRONMENT,
  SPORTSBOOK_FRAME_ID,
  RECOMMENDED_BETSLIPS_FRAME_ID,
  RECOMMENDED_BETSLIPS_MICRO_FRONTEND_TAG,
} from "./constants.js";

let integrator = null;

export const createIntegratorInstance = (routerPush) => {
  if (typeof window !== "undefined" && window.igniteIntegrator) {
    const ig = window.igniteIntegrator;
    integrator = ig.createIntegratorParent({
      tenantId: TENANT_ID,
      env: ENVIRONMENT,
      debug: true,
      settings: {
        activeCurrency: {
          symbol: "€",
          code: "EUR",
        },
      },
      children: [
        {
          frameId: SPORTSBOOK_FRAME_ID,
          childId: "sportsbook",
        },
        {
          frameId: RECOMMENDED_BETSLIPS_FRAME_ID,
          childId: "recommended-betslips",
        },
      ],
      events: {
        onDomEvent: (e) => {
          switch (e.name) {
            case "NSFTX_RECOMMENDED_BETSLIPS_ADD_TO_BETSLIP": {
              integrator.updateGameOptions(e.value, "sportsbook");
              routerPush("/sportsbook/homepage");
              break;
            }
          }
        },
      },
    });
  }
};
