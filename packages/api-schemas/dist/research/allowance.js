// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ResearchAllowanceSchemaDefinition = z.object({
    /** Cap for the period; absent when the tier meters without a cap */
    limit: z.int().nullish(),
    /** Cap minus used, never negative; absent when there is no cap */
    remaining: z.int().nullish(),
    resetAt: z.iso.datetime({ offset: true }),
    used: z.int(),
});
/**
 * @openapiSchema ResearchAllowance
 * @endpoint GET /v1/billing/ai-credits
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema ResearchAllowanceUsageSchema
 * @contractShape research.allowance
 * @contractRole canonical
 */
export const ResearchAllowanceSchema = ResearchAllowanceSchemaDefinition;
//# sourceMappingURL=allowance.js.map