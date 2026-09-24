// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingPortalSchemaDefinition = z.object({
    url: z.string(),
});
/**
 * Hosted Billing Portal destination without provider identifiers.
 *
 * @openapiSchema BillingPortal
 * @endpoint POST /v1/billing/portal-sessions
 * @contractShape billing.portal
 * @contractRole canonical
 */
export const BillingPortalSchema = BillingPortalSchemaDefinition;
//# sourceMappingURL=portal.js.map