// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * @openapiSchema ResearchValueRange
 * @endpoint GET /v1/entities/research/details/types
 * @usedBySchema ResearchDetailTypeSchema
 * @contractShape research.value-range
 * @contractRole canonical
 */
export const ResearchValueRangeSchema = z.object({
    max: z.number(),
    min: z.number(),
});
//# sourceMappingURL=value-range.js.map