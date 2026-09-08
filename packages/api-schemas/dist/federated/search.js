// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FederatedSearchProvenanceSchema } from "./search-provenance.js";
import { NaturalSearchResultSchema } from "../natural/search-result.js";
import { PageResultNewsSchema } from "../pagination/schemas.js";
import { PersonNaturalSearchResultSchema } from "../person/natural-search-result.js";
const FederatedSearchSchemaDefinition = z.object({
    /** Canonical entity natural-search result. */
    entity: NaturalSearchResultSchema,
    /** Canonical news page returned by the keyword list engine. */
    news: PageResultNewsSchema,
    /** Canonical person natural-search result. */
    person: PersonNaturalSearchResultSchema,
    /** Requested and executed strategy for each search scope. */
    provenance: FederatedSearchProvenanceSchema,
});
/**
 * Federated entity, person, and news search result composed from each domain's canonical search result owner, with the strategy used for every scope.
 *
 * @openapiSchema FederatedSearch
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/search/all
 * @usedBySchema LinkSearchSchema
 * @contractShape federated.search
 * @contractRole canonical
 */
export const FederatedSearchSchema = FederatedSearchSchemaDefinition;
//# sourceMappingURL=search.js.map