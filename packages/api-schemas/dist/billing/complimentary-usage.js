// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * What the account used since its complimentary plan started.
 *
 * @openapiSchema BillingComplimentaryUsage
 * @endpoint GET /v1/billing/subscription/next-charge
 * @usedBySchema BillingNextChargeSchema
 * @contractShape billing.complimentary-usage
 * @contractRole canonical
 */
export const BillingComplimentaryUsageSchema = z.object({
    /** Distinct company and person profiles viewed or exported */
    profileViewCount: z.int(),
    /** Research runs filed and not released for lack of a research write */
    researchRunCount: z.int(),
});
//# sourceMappingURL=complimentary-usage.js.map