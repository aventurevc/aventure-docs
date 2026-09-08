// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageResultPersonSchema } from "../pagination/schemas.js";
import { PersonSearchInterpretationSchema } from "./search-interpretation.js";
const PersonNaturalSearchResultSchemaDefinition = z.object({
    /** Structured interpretation used to run the people query. */
    interpretation: PersonSearchInterpretationSchema,
    /** Person page returned by the canonical person list engine. */
    result: PageResultPersonSchema,
});
/**
 * Natural-language people search result: planner interpretation plus the canonical person page produced by the person list engine.
 *
 * @openapiSchema PersonNaturalSearchResult
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema FederatedSearchSchema
 * @contractShape person.natural-search-result
 * @contractRole canonical
 */
export const PersonNaturalSearchResultSchema = PersonNaturalSearchResultSchemaDefinition;
//# sourceMappingURL=natural-search-result.js.map