// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityResearchValueTypeSchema } from "../entity/research-value-type.js";
import { ResearchValueRangeSchema } from "./value-range.js";
import { ResearchValueShapeTypeSchema } from "./value-shape-type.js";
const ResearchDetailTypeSchemaDefinition = z.object({
    /** Allowed valueResearchDetail tokens for enumeratedToken shapes. */
    allowedToken: z.array(z.string()).nullish(),
    curated: z.boolean(),
    label: z.string(),
    /** Inclusive numeric bounds for numericRatio, numericScore, and numericGrowthRate. numericGrowthRate values use percentage points: 80 means 80%, not 0.8. */
    range: ResearchValueRangeSchema.nullish(),
    targetPath: z.string(),
    /** Whether rows are dated history; true means add current observations and keep believable old rows. */
    timeSeries: z.boolean(),
    typeValue: z.string(),
    /** Write-time value shape token. For numericCountOrRange details, send either discreteValue for an exact count or textValue for an employee range. */
    valueShape: ResearchValueShapeTypeSchema,
    /** Read projection category; choose write fields from valueShape. */
    valueType: EntityResearchValueTypeSchema,
});
/**
 * @openapiSchema ResearchDetailType
 * @endpoint GET /v1/entities/research/details/types
 * @contractShape research.detail-type
 * @contractRole canonical
 */
export const ResearchDetailTypeSchema = ResearchDetailTypeSchemaDefinition;
//# sourceMappingURL=detail-type.js.map