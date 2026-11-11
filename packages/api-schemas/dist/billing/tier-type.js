// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingTierTypeSchemaKnownMembers = z.enum(["ESSENTIAL", "PLUS", "PRO", "UNLIMITED"]);
/**
 * Subscription tier that sets an account's monthly caps and included features.
 *
 * @openapiSchema BillingTierType
 * @endpoint GET /v1/billing/plans
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingCatalogPlanSchema
 * @usedBySchema BillingCatalogTierSchema
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.tier-type
 * @contractRole canonical
 */
export const BillingTierTypeSchema = Object.assign(z.union([BillingTierTypeSchemaKnownMembers, z.string()]), { enum: BillingTierTypeSchemaKnownMembers.enum });
//# sourceMappingURL=tier-type.js.map