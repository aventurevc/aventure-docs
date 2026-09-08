// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityResearchValueTypeSchema } from "./research-value-type.js";
import { EntityValuationDataConfidenceSchema } from "./valuation-data-confidence.js";
const EntityResearchFactValueSchemaDefinition = z.object({
    asOfDate: z.iso.datetime({ offset: true }).nullish(),
    dataConfidence: EntityValuationDataConfidenceSchema.nullish(),
    dateValue: z.iso.datetime({ offset: true }).nullish(),
    numericValue: z.number().nullish(),
    referenceValue: z.string().nullish(),
    source: z.string().nullish(),
    textValue: z.string().nullish(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    valueType: EntityResearchValueTypeSchema,
});
/**
 * Canonical typed fact value nested under entity research fields
 *
 * @openapiSchema EntityResearchFactValue
 * @endpoint GET /v1/entities/detail/people/time-series
 * @endpoint GET /v1/people/{personId}/graph
 * @usedBySchema EmployeeCountSchema
 * @contractShape entity.research-fact-value
 * @contractRole canonical
 */
export const EntityResearchFactValueSchema = EntityResearchFactValueSchemaDefinition;
//# sourceMappingURL=research-fact-value.js.map