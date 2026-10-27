// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingAdditionalUsageTypeSchemaKnownMembers = z.enum([
    "COMPANY",
    "PERSON",
    "ENTITY_VIEW",
    "ENTITY_BRAND",
    "PERSON_VIEW",
    "WEB_SEARCH",
    "EXPORT",
    "AI_CREDIT",
]);
/**
 * One metered allowance a paid subscriber may use past its included cap.
 *
 * @openapiSchema BillingAdditionalUsageType
 * @endpoint GET /v1/billing/plans
 * @endpoint GET /v1/billing/subscription
 * @endpoint PATCH /v1/billing/additional-usage
 * @usedBySchema BillingAdditionalUsageMeterSchema
 * @usedBySchema BillingCatalogAdditionalUsageSchema
 * @contractShape billing.additional-usage-type
 * @contractRole canonical
 */
export const BillingAdditionalUsageTypeSchema = Object.assign(z.union([BillingAdditionalUsageTypeSchemaKnownMembers, z.string()]), { enum: BillingAdditionalUsageTypeSchemaKnownMembers.enum });
//# sourceMappingURL=additional-usage-type.js.map