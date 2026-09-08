// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Closed write-time value shape token. Shape, not valueType, selects which write fields and validation rules apply.
 *
 * @openapiSchema ResearchValueShapeType
 * @endpoint GET /v1/entities/research/details/types
 * @usedBySchema ResearchDetailTypeSchema
 * @contractShape research.value-shape-type
 * @contractRole canonical
 */
export const ResearchValueShapeTypeSchema = z.enum([
    "acceleratorParticipation",
    "enumeratedToken",
    "freeText",
    "isoCurrencyCode",
    "monetaryFlow",
    "monetaryFlowOverPeriod",
    "monetaryStock",
    "numericCount",
    "numericCountOrRange",
    "numericGrowthRate",
    "numericRatio",
    "numericScore",
    "targetDateAbsolute",
]);
//# sourceMappingURL=value-shape-type.js.map