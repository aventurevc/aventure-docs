// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingPlanTypeSchema } from "./plan-type.js";
const BillingCheckoutMutationSchemaDefinition = z.object({
    /** AI Plus or AI Pro plan to start through hosted Checkout */
    plan: BillingPlanTypeSchema,
});
/**
 * Caller-selected plan for server-owned hosted Checkout creation.
 *
 * @openapiSchema BillingCheckoutMutation
 * @endpoint POST /v1/billing/checkout-sessions
 * @contractShape billing.checkout-mutation
 * @contractRole canonical
 */
export const BillingCheckoutMutationSchema = BillingCheckoutMutationSchemaDefinition;
//# sourceMappingURL=checkout-mutation.js.map