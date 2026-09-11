// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Which side of the pre/post relationship the source declared.
 *
 * @openapiSchema ValuationType
 * @endpoint GET /v1/entities/{entityId}/valuations
 * @usedBySchema EntityValuationTimeSeriesPointSchema
 * @contractShape valuation.type
 * @contractRole canonical
 */
export const ValuationTypeSchema = z.enum(["preMoney", "postMoney", "reported"]);
//# sourceMappingURL=type.js.map