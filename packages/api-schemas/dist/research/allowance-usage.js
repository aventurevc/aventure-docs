// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchAllowanceSchema } from "./allowance.js";
const ResearchAllowanceUsageSchemaDefinition = z.object({
    /** Research runs on company targets, new or existing */
    company: ResearchAllowanceSchema,
    /** Thin company brand reads (names, logos, links, tags) */
    entityBrand: ResearchAllowanceSchema,
    /** Company profile views; Essential shares included usage with personView, while paid tiers meter each separately */
    entityView: ResearchAllowanceSchema,
    /** Deprecated: replaced by company, which it mirrors. */
    newCompany: ResearchAllowanceSchema,
    /** Deprecated: replaced by person, which it mirrors. */
    newPerson: ResearchAllowanceSchema,
    /** Research runs on person-profile targets, new or existing */
    person: ResearchAllowanceSchema,
    /** Person profile views; Essential reports the same shared included usage as entityView, not an additional free allowance */
    personView: ResearchAllowanceSchema,
    /** Deprecated: replaced by company, which it mirrors. */
    update: ResearchAllowanceSchema,
    /** Deprecated: replaced by person, which it mirrors. */
    updatePerson: ResearchAllowanceSchema,
    webSearch: ResearchAllowanceSchema,
});
/**
 * @openapiSchema ResearchAllowanceUsage
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape research.allowance-usage
 * @contractRole canonical
 */
export const ResearchAllowanceUsageSchema = ResearchAllowanceUsageSchemaDefinition;
//# sourceMappingURL=allowance-usage.js.map