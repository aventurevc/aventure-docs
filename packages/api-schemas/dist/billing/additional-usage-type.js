// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * One metered allowance a paid subscriber may use past its monthly cap.
 *
 * @openapiSchema BillingAdditionalUsageType
 * @endpoint GET /v1/billing/plans
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingAdditionalUsageMeterSchema
 * @usedBySchema BillingCatalogAdditionalUsageSchema
 * @contractShape billing.additional-usage-type
 * @contractRole canonical
 */
export const BillingAdditionalUsageTypeSchema = z.enum([
    "NEW_COMPANY",
    "UPDATE",
    "NEW_PERSON",
    "UPDATE_PERSON",
    "ENTITY_VIEW",
    "PERSON_VIEW",
    "AI_CREDIT",
]);
//# sourceMappingURL=additional-usage-type.js.map