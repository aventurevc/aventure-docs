// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Filter option mode
 *
 * @openapiSchema EntityFilterOptionMode
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterOptionSetMetaSchema
 * @contractShape entity.filter-option-mode
 * @contractRole canonical
 */
export const EntityFilterOptionModeSchema = z.enum(["TOP_RESULTS", "FULL_RESULTS"]);
//# sourceMappingURL=filter-option-mode.js.map