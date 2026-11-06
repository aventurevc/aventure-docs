// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterSchema } from "./filter.js";
import { NaturalSearchSchema } from "../natural/search.js";
const EntityNaturalSearchSchemaDefinition = z.object({
    /** Explicit entity constraints. Caller-supplied fields override planner values; the planner fills only fields left at their canonical defaults. */
    filter: EntityFilterSchema.optional(),
    /** The plain-English search request and the search method to use. */
    search: NaturalSearchSchema,
    /** The stored aVenture news article this search started from. Its approved public Company and Business Line mentions are ordered subjects, rather than candidates judged from the headline. An unknown or non-public article, or one without such mentions, keeps the ordinary search. */
    sourceNewsId: z.int().min(1).nullish(),
});
/**
 * Plain-English entity search plus explicit hard constraints. The planner may fill only filter fields the caller leaves unset.
 *
 * @openapiSchema EntityNaturalSearch
 * @endpoint POST /v1/search/natural/entities
 * @contractShape entity.natural-search
 * @contractRole canonical
 */
export const EntityNaturalSearchSchema = EntityNaturalSearchSchemaDefinition;
//# sourceMappingURL=natural-search.js.map