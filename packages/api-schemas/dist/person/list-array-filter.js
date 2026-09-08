// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DecimalRangeSchema } from "../decimal/range.js";
import { EntityTypeSchema } from "../entity/type.js";
import { IntRangeSchema } from "../int/range.js";
/**
 * Array and range filters for person list endpoints
 *
 * @openapiSchema PersonListArrayFilter
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonFilterSchema
 * @contractShape person.list-array-filter
 * @contractRole canonical
 */
export const PersonListArrayFilterSchema = z.object({
    amountInvestedRange: z.array(DecimalRangeSchema).nullish(),
    amountRaisedRange: z.array(DecimalRangeSchema).nullish(),
    /** Associated entity names. */
    entityName: z.array(z.string()).nullish(),
    /** Invested company names. */
    investedCompany: z.array(z.string()).nullish(),
    /** Person titles. */
    personTitle: z.array(z.string()).nullish(),
    /** Fundraise round labels. */
    round: z.array(z.string()).nullish(),
    totalInvestmentCount: z.array(IntRangeSchema).nullish(),
    /** Associated entity type scope. Omit or use [] for any associated type. */
    typeRecord: z.array(EntityTypeSchema).nullish(),
});
//# sourceMappingURL=list-array-filter.js.map