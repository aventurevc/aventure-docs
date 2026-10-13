// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityResearchValueTypeSchema } from "./research-value-type.js";
import { EntityValuationDataConfidenceSchema } from "./valuation-data-confidence.js";
const EntityResearchFactValueSchemaDefinition = z.object({
    /** Date the research fact applies to, preserving the source's calendar or timestamp precision. */
    asOfDate: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
    /** Current-fact eligibility projected from the canonical research detail row. */
    currentEligible: z.boolean().nullish(),
    dataConfidence: EntityValuationDataConfidenceSchema.nullish(),
    /** Date-valued research fact, preserving the source's year, month, day, or timestamp precision. */
    dateValue: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .nullish(),
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
 * @endpoint GET /v1/entities/{entityId}/employee-counts
 * @endpoint GET /v1/people/{personId}/graph
 * @usedBySchema EmployeeCountSchema
 * @contractShape entity.research-fact-value
 * @contractRole canonical
 */
export const EntityResearchFactValueSchema = EntityResearchFactValueSchemaDefinition;
//# sourceMappingURL=research-fact-value.js.map