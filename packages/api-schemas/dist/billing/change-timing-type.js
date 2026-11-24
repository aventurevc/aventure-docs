// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * When a plan change takes effect: IMMEDIATE applies now with proration, PERIOD_END schedules the switch for the next renewal.
 *
 * @openapiSchema BillingChangeTimingType
 * @endpoint POST /v1/billing/plan-change-previews
 * @endpoint POST /v1/billing/plan-changes
 * @usedBySchema BillingPlanChangeMutationSchema
 * @contractShape billing.change-timing-type
 * @contractRole canonical
 */
export const BillingChangeTimingTypeSchema = z.enum(["IMMEDIATE", "PERIOD_END"]);
//# sourceMappingURL=change-timing-type.js.map