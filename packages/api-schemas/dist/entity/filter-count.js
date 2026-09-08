// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityFilterCountSchemaDefinition = z.object({
    /** Minimum count threshold */
    minCount: z.int().min(0).nullish(),
    /** Tag name values to filter counts */
    name: z.array(z.string()).max(100),
    /** Maximum number of results */
    size: z.int().min(1).max(200).nullish(),
    /** Entity type (Company, Investment Firm, etc.) */
    typeRecord: z.string().nullish(),
});
/**
 * Request body for entity filter tag counts
 *
 * @openapiSchema EntityFilterCount
 * @endpoint POST /v1/entities/filters/counts
 * @contractShape entity.filter-count
 * @contractRole canonical
 */
export const EntityFilterCountSchema = EntityFilterCountSchemaDefinition;
//# sourceMappingURL=filter-count.js.map