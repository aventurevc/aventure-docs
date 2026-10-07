// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageResultPersonSchema } from "../pagination/schemas.js";
import { PersonSearchInterpretationSchema } from "./search-interpretation.js";
import { SearchInvestmentSchema } from "../search/investment.js";
const PersonNaturalSearchResultSchemaDefinition = z.object({
    /** Structured interpretation used to run the people query. */
    interpretation: PersonSearchInterpretationSchema,
    /** Personal investment participation supporting the returned people. Firm portfolio activity is never attributed to employees. Empty for other question intents. */
    investment: z.array(SearchInvestmentSchema),
    /** Person page returned by the canonical person list engine. */
    result: PageResultPersonSchema,
    /** Id of this search's stored record; send it with createSearchInteraction to record which results the user selected or opened. Null when the search was not recorded. */
    searchRequestId: z.uuid().nullish(),
});
/**
 * Natural-language people search result: planner interpretation plus the canonical person page produced by the person list engine.
 *
 * @openapiSchema PersonNaturalSearchResult
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape person.natural-search-result
 * @contractRole canonical
 */
export const PersonNaturalSearchResultSchema = PersonNaturalSearchResultSchemaDefinition;
//# sourceMappingURL=natural-search-result.js.map