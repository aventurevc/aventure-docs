// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * What a caller without a paid plan gets. `PAID_PLAN`: nothing; the operation answers 402 subscription_required until the caller subscribes. `DAILY_ALLOWANCE`: a free UTC-day allowance, then 402 subscription_required until it refills.
 *
 * @openapiSchema BillingAccessType
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HelpCitationSchema
 * @contractShape billing.access-type
 * @contractRole canonical
 */
export const BillingAccessTypeSchema = z.enum(["PAID_PLAN", "DAILY_ALLOWANCE"]);
//# sourceMappingURL=access-type.js.map