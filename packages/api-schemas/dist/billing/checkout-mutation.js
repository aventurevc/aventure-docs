// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BillingCheckoutUiModeSchema } from "./checkout-ui-mode.js";
import { BillingPlanTypeSchema } from "./plan-type.js";
const BillingCheckoutMutationSchemaDefinition = z.object({
    /** AI Plus or AI Pro plan to start through Checkout */
    plan: BillingPlanTypeSchema,
    /** How the caller presents Checkout; HOSTED_PAGE when omitted */
    uiMode: BillingCheckoutUiModeSchema.optional(),
});
/**
 * Caller-selected plan and Checkout presentation for server-owned Checkout creation.
 *
 * @openapiSchema BillingCheckoutMutation
 * @endpoint POST /v1/billing/checkout-sessions
 * @contractShape billing.checkout-mutation
 * @contractRole canonical
 */
export const BillingCheckoutMutationSchema = BillingCheckoutMutationSchemaDefinition;
//# sourceMappingURL=checkout-mutation.js.map