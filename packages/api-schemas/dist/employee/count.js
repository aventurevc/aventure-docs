// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityResearchFactValueSchema } from "../entity/research-fact-value.js";
/**
 * Employee-count time-series point for an entity
 *
 * @openapiSchema EmployeeCount
 * @endpoint GET /v1/entities/{entityId}/employee-counts
 * @endpoint GET /v1/people/{personId}/graph
 * @usedBySchema PageEmployeeCountSchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape employee.count
 * @contractRole canonical
 */
export const EmployeeCountSchema = z.object({
    /** Date the employee count applies to, preserving the available calendar or timestamp precision. */
    asOfDate: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    fact: EntityResearchFactValueSchema,
    id: z.string(),
});
//# sourceMappingURL=count.js.map