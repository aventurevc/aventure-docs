// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityDetailSchema } from "../entity/detail.js";
import { FederatedSearchProvenanceSchema } from "./search-provenance.js";
import { NaturalSearchResultSchema } from "../natural/search-result.js";
import { NewsEntityMentionSchema } from "../news/entity-mention.js";
import { PageResultNewsSchema } from "../pagination/schemas.js";
import { PersonDetailSchema } from "../person/detail.js";
import { PersonNaturalSearchResultSchema } from "../person/natural-search-result.js";
const FederatedSearchSchemaDefinition = z.object({
    /** Canonical entity natural-search result. */
    entity: NaturalSearchResultSchema,
    /** Public detail for Product/Service rows on the entity result page, in search rank order. Other entity types are not hydrated. */
    entityDetail: z.array(EntityDetailSchema),
    /** Canonical news page returned by the keyword list engine. */
    news: PageResultNewsSchema,
    /** Public entities each news row on the page links to, in news page order; a row with no public entity link has no entry. */
    newsEntityMention: z.array(NewsEntityMentionSchema),
    /** Canonical person natural-search result. */
    person: PersonNaturalSearchResultSchema,
    /** Public detail for people on the person result page, in search rank order, with at most two public entity associations per person; person address and URL enrichment is omitted. */
    personDetail: z.array(PersonDetailSchema),
    /** Requested and executed strategy for each search scope. */
    provenance: FederatedSearchProvenanceSchema,
});
/**
 * Federated entity, person, and news search result composed from each domain's canonical search result owner, with the strategy used for every scope.
 *
 * @openapiSchema FederatedSearch
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @usedBySchema LinkSearchSchema
 * @contractShape federated.search
 * @contractRole canonical
 */
export const FederatedSearchSchema = FederatedSearchSchemaDefinition;
//# sourceMappingURL=search.js.map