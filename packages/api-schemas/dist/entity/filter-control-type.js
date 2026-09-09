// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Render control discriminator for filter UI components
 *
 * @openapiSchema EntityFilterControlType
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape entity.filter-control-type
 * @contractRole canonical
 */
export const EntityFilterControlTypeSchema = z.enum([
    "checkbox",
    "range",
    "currencyRange",
    "dateRange",
]);
//# sourceMappingURL=filter-control-type.js.map