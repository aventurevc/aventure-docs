// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const DecimalRangeSchemaDefinition = z.object({
    /** Inclusive maximum decimal number, such as 220000 or 123456.78. */
    max: z.number().nullish(),
    /** Inclusive minimum decimal number, such as 220000 or 123456.78. */
    min: z.number().nullish(),
});
/**
 * Decimal range for monetary and numeric filter criteria
 *
 * @openapiSchema DecimalRange
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/people
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @usedBySchema EntityFundraiseFilterCriteriaSchema
 * @usedBySchema InvestorActivityFilterSchema
 * @usedBySchema PersonListArrayFilterSchema
 * @contractShape decimal.range
 * @contractRole canonical
 */
export const DecimalRangeSchema = DecimalRangeSchemaDefinition;
//# sourceMappingURL=range.js.map