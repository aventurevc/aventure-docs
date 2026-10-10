// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingSubscriptionMutationSchemaDefinition = z.object({
    /** true ends the subscription at the current period end and drops a scheduled plan change; false resumes it and restores the plan change scheduled before the cancellation. Omit to change nothing. */
    cancelAtPeriodEnd: z.boolean().nullish(),
});
/**
 * Merge patch of a continuing AI Plus or AI Pro subscription: cancel it at the period end or resume it.
 *
 * @openapiSchema BillingSubscriptionMutation
 * @endpoint PATCH /v1/billing/subscription
 * @contractShape billing.subscription-mutation
 * @contractRole canonical
 */
export const BillingSubscriptionMutationSchema = BillingSubscriptionMutationSchemaDefinition;
//# sourceMappingURL=subscription-mutation.js.map