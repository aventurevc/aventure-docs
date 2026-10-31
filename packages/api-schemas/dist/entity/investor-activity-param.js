// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { InvestorPortfolioOutcomeSchema } from "../investor/portfolio-outcome.js";
export const ENTITY_INVESTOR_ACTIVITY_ENDPOINT = "/v1/entities/{entityId}/investor-activity";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/investor-activity`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @contractShape entity.investor-activity-param
 * @contractRole canonical
 */
export const EntityInvestorActivityParamSchema = z.object({
    /** Zero-based page index (0..N) */
    page: z.int().min(0).optional(),
    /** Select a current public recipient-status cohort, adding complete coverage counts and independent sector/recipient pages. Omit for the legacy stored aggregate. Neither acquired/public status nor recorded capital raised proves investor returns. */
    portfolioOutcome: InvestorPortfolioOutcomeSchema.optional(),
    /** The size of the page to be returned */
    size: z.int().min(1).optional(),
});
//# sourceMappingURL=investor-activity-param.js.map