// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchAllowanceSchema } from "./allowance.js";
const ResearchAllowanceUsageSchemaDefinition = z.object({
    entityView: ResearchAllowanceSchema,
    newCompany: ResearchAllowanceSchema,
    newPerson: ResearchAllowanceSchema,
    personView: ResearchAllowanceSchema,
    update: ResearchAllowanceSchema,
    updatePerson: ResearchAllowanceSchema,
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