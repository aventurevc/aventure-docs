// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const StageFrequencySchemaDefinition = z.object({
    count: z.int(),
    stage: z.string(),
});
/**
 * Canonical equity stage derived from a transaction calculatedRoundLabel, with deal frequency ranked by count descending.
 *
 * @openapiSchema StageFrequency
 * @endpoint GET /v1/people/detail/investor-activity
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @usedBySchema EntityFundraiseInvestorActivitySchema
 * @contractShape stage.frequency
 * @contractRole canonical
 */
export const StageFrequencySchema = StageFrequencySchemaDefinition;
//# sourceMappingURL=frequency.js.map