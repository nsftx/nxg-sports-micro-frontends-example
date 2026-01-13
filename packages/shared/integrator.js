import {
  TENANT_ID,
  ENVIRONMENT,
  SPORTSBOOK_FRAME_ID,
  RECOMMENDED_BETSLIPS_FRAME_ID,
  MICRO_FRONTENDS_PRIMARY_CDN,
  MICRO_FRONTENDS_MICRO_FRONTENDS_SECONDARY_CDN,
} from "./constants.js";

let integrator = null;
let microFrontendModulePromise = null;

/**
 * Loads micro-frontend module with CDN fallback support.
 * The module is cached after the first successful load.
 * @returns {Promise<{ registerSportsbookMicroFrontend: Function, registerRecommendedBetslipsWidget: Function }>}
 */
export const loadMicroFrontendModule = async () => {
  if (microFrontendModulePromise) return microFrontendModulePromise;

  microFrontendModulePromise = (async () => {
    try {
      // webpackIgnore is required for Next.js to load external URLs at runtime
      return await import(
        /* webpackIgnore: true */ MICRO_FRONTENDS_PRIMARY_CDN
      );
    } catch (error) {
      console.warn(
        `[NXG Sports MicroFrontend Loader] Primary CDN failed (${MICRO_FRONTENDS_PRIMARY_CDN}), attempting secondary CDN.`,
        error
      );
    }

    try {
      // webpackIgnore is required for Next.js to load external URLs at runtime
      return await import(
        /* webpackIgnore: true */ MICRO_FRONTENDS_SECONDARY_CDN
      );
    } catch (error) {
      console.error(
        `[NXG Sports MicroFrontend Loader] Both CDNs failed to load. Primary: ${MICRO_FRONTENDS_PRIMARY_CDN}, Secondary: ${MICRO_FRONTENDS_SECONDARY_CDN}`,
        error
      );
      microFrontendModulePromise = null;
      throw error;
    }
  })();

  return microFrontendModulePromise;
};

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
