// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingPortalMutationSchemaDefinition = z.object({
    /** PAYMENT_METHOD_UPDATE opens straight to adding or replacing the card and returns to subscription settings when done. Omit to open the portal home. Plan changes use POST /v1/billing/plan-changes and cancellation uses PATCH /v1/billing/subscription. */
    flow: z.enum(["PAYMENT_METHOD_UPDATE"]).nullish(),
});
/**
 * Where the hosted Billing Portal session opens.
 *
 * @openapiSchema BillingPortalMutation
 * @endpoint POST /v1/billing/portal-sessions
 * @contractShape billing.portal-mutation
 * @contractRole canonical
 */
export const BillingPortalMutationSchema = BillingPortalMutationSchemaDefinition;
//# sourceMappingURL=portal-mutation.js.map