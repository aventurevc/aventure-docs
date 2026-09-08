// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterSchema } from "./filter.js";
import { NaturalSearchSchema } from "../natural/search.js";
const EntityNaturalSearchSchemaDefinition = z.object({
    /** Explicit entity constraints. Caller-supplied fields override planner values; the planner fills only fields left at their canonical defaults. */
    filter: EntityFilterSchema.optional(),
    /** Canonical plain-English search request and strategy. */
    search: NaturalSearchSchema,
});
/**
 * Plain-English entity search plus explicit hard constraints. The planner may fill only filter fields the caller leaves unset.
 *
 * @openapiSchema EntityNaturalSearch
 * @endpoint POST /v1/entities/natural-search
 * @contractShape entity.natural-search
 * @contractRole canonical
 */
export const EntityNaturalSearchSchema = EntityNaturalSearchSchemaDefinition;
//# sourceMappingURL=natural-search.js.map