// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Which canonical store the point came from.
 *
 * @openapiSchema EntityValuationSource
 * @endpoint GET /v1/entities/{entityId}/valuations
 * @usedBySchema EntityValuationTimeSeriesPointSchema
 * @contractShape entity.valuation-source
 * @contractRole canonical
 */
export const EntityValuationSourceSchema = z.enum(["fundraiseRound", "researchDetail"]);
//# sourceMappingURL=valuation-source.js.map