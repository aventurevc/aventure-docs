// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingPortalMutationSchemaDefinition = z.object({
    /** PAYMENT_METHOD_UPDATE opens straight to adding or replacing the card and returns to returnUrl when done, or subscription settings when returnUrl is omitted. Omit flow to open the portal home. Plan changes use POST /v1/billing/plan-changes and cancellation uses PATCH /v1/billing/subscription. */
    flow: z.enum(["PAYMENT_METHOD_UPDATE"]).nullish(),
    /** Root-relative public-site return path, including query and fragment, for leaving the portal or completing a card update. Resolved only against the configured public-site origin. Absolute URLs, authority references, and malformed URI syntax are refused. Omit or pass null to return to /settings/subscription. */
    returnUrl: z.string().nullish(),
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