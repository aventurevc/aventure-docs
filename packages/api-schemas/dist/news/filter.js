// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const NewsFilterSchemaDefinition = z.object({
    /** Author initial filter. */
    authorInitial: z.string().nullish(),
    /** News category slug to include or exclude. */
    category: z.string().nullish(),
    /** Cursor token returned by the previous thin page. */
    cursor: z.string().nullish(),
    /** Exclude one news article by id. */
    excludeId: z.int().nullish(),
    /** Entity or person owner filter. */
    owner: EntityPersonOwnerSchema.nullish(),
    /** Earliest publication date, inclusive. */
    publishedAfter: z.iso.date().nullish(),
    /** Latest publication date, inclusive. */
    publishedBefore: z.iso.date().nullish(),
    /** Full-text news search term. */
    search: z.string().nullish(),
});
/**
 * Canonical news list/filter contract
 *
 * @openapiSchema NewsFilter
 * @endpoint POST /v1/news
 * @contractShape news.filter
 * @contractRole canonical
 */
export const NewsFilterSchema = NewsFilterSchemaDefinition;
//# sourceMappingURL=filter.js.map