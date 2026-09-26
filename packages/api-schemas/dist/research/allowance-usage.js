// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchAllowanceSchema } from "./allowance.js";
const ResearchAllowanceUsageSchemaDefinition = z.object({
    /** Research runs on company targets, new or existing */
    company: ResearchAllowanceSchema,
    entityView: ResearchAllowanceSchema,
    /** Deprecated: replaced by company, which it mirrors. */
    newCompany: ResearchAllowanceSchema.optional(),
    /** Deprecated: replaced by person, which it mirrors. */
    newPerson: ResearchAllowanceSchema.optional(),
    /** Research runs on person-profile targets, new or existing */
    person: ResearchAllowanceSchema,
    personView: ResearchAllowanceSchema,
    /** Deprecated: replaced by company, which it mirrors. */
    update: ResearchAllowanceSchema.optional(),
    /** Deprecated: replaced by person, which it mirrors. */
    updatePerson: ResearchAllowanceSchema.optional(),
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