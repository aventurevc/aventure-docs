// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const RefinementMetaSchemaDefinition = z.object({
    /** Whether retrying may improve scoped choice totals */
    degraded: z.boolean(),
    /** Maximum entities sampled for displayed choices. */
    limit: z.int(),
    /** Zero-based result page used to build the refinement. */
    page: z.int(),
    /** Total entities matching the active filter; null when unavailable. */
    total: z.int().nullish(),
});
/**
 * Meta
 *
 * @openapiSchema RefinementMeta
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterRefinedFiltersSchema
 * @contractShape refinement.meta
 * @contractRole canonical
 */
export const RefinementMetaSchema = RefinementMetaSchemaDefinition;
//# sourceMappingURL=meta.js.map