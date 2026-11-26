// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPlanTypeSchema } from "./plan-type.js";
/**
 * The account chose to keep its complimentary plan on paid billing: plan bills from continuesAt, when the complimentary term ends.
 *
 * @openapiSchema BillingComplimentaryContinuation
 * @endpoint GET /v1/billing/subscription/next-charge
 * @endpoint PUT /v1/billing/subscription/complimentary-continuation
 * @usedBySchema BillingNextChargeSchema
 * @contractShape billing.complimentary-continuation
 * @contractRole canonical
 */
export const BillingComplimentaryContinuationSchema = z.object({
    /** When the complimentary term ends and plan starts billing */
    continuesAt: z.iso.datetime({ offset: true }),
    /** Plan that bills once the complimentary term ends */
    plan: BillingPlanTypeSchema,
    /** Send as If-Match on DELETE /v1/billing/subscription/complimentary-continuation, so an Undo withdraws only this choice and never a later one */
    revision: z.string(),
    /** Whether DELETE /v1/billing/subscription/complimentary-continuation can still undo the choice: false while the subscription is being moved to the paid plan and after it moved, when the plan ends like any paid plan */
    undoable: z.boolean(),
});
//# sourceMappingURL=complimentary-continuation.js.map