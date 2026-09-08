// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityResearchFactValueSchema } from "../entity/research-fact-value.js";
/**
 * Employee-count time-series point for an entity
 *
 * @openapiSchema EmployeeCount
 * @endpoint GET /v1/entities/detail/people/time-series
 * @endpoint GET /v1/people/{personId}/graph
 * @usedBySchema PageEmployeeCountSchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape employee.count
 * @contractRole canonical
 */
export const EmployeeCountSchema = z.object({
    asOfDate: z.iso.datetime({ offset: true }),
    fact: EntityResearchFactValueSchema,
    id: z.string(),
});
//# sourceMappingURL=count.js.map