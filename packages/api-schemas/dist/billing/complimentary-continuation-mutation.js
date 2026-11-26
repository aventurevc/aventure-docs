// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPlanTypeSchema } from "./plan-type.js";
const BillingComplimentaryContinuationMutationSchemaDefinition = z.object({
    /** complimentaryContinuationOfferRevision from GET /v1/billing/subscription/next-charge; a revision the offer no longer carries answers 409. */
    complimentaryContinuationOfferRevision: z.string().regex(/^[0-9a-f]{64}$/),
    /** Plan to bill from the end of the term: the complimentary plan itself or the same tier on its other cadence. Nothing is charged now. */
    plan: BillingPlanTypeSchema,
});
/**
 * Keep an administrator's complimentary plan on paid billing when its term ends.
 *
 * @openapiSchema BillingComplimentaryContinuationMutation
 * @endpoint PUT /v1/billing/subscription/complimentary-continuation
 * @contractShape billing.complimentary-continuation-mutation
 * @contractRole canonical
 */
export const BillingComplimentaryContinuationMutationSchema = BillingComplimentaryContinuationMutationSchemaDefinition;
//# sourceMappingURL=complimentary-continuation-mutation.js.map