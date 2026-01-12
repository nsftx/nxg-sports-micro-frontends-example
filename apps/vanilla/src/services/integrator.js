import { TENANT_ID, ENVIRONMENT } from "../../../shared/constants";

export const createIntegratorInstance = (routerPush) => {
  return igniteIntegrator.createIntegratorParent({
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
        frameId: "sportsbook",
        childId: "sportsbook",
      },
      {
        frameId: "recommended-betslips",
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
};
