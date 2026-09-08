// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NaturalSearchSchema } from "../natural/search.js";
import { PersonFilterSchema } from "./filter.js";
const PersonNaturalSearchSchemaDefinition = z.object({
    /** Explicit people constraints. Caller-supplied fields override planner values; the planner fills only fields left at their canonical defaults. */
    filter: PersonFilterSchema.optional(),
    /** Canonical plain-English search request and strategy. */
    search: NaturalSearchSchema,
});
/**
 * Plain-English people search plus explicit hard constraints. The planner may fill only filter fields the caller leaves unset.
 *
 * @openapiSchema PersonNaturalSearch
 * @endpoint POST /v1/people/natural-search
 * @contractShape person.natural-search
 * @contractRole canonical
 */
export const PersonNaturalSearchSchema = PersonNaturalSearchSchemaDefinition;
//# sourceMappingURL=natural-search.js.map