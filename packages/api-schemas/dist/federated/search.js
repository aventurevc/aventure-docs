// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityDetailSchema } from "../entity/detail.js";
import { FederatedSearchProvenanceSchema } from "./search-provenance.js";
import { NaturalSearchResultSchema } from "../natural/search-result.js";
import { NewsEntityMentionSchema } from "../news/entity-mention.js";
import { PageResultNewsSchema } from "../pagination/schemas.js";
import { PersonDetailSchema } from "../person/detail.js";
import { PersonNaturalSearchResultSchema } from "../person/natural-search-result.js";
import { SearchQualifierSchema } from "../search/qualifier.js";
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
    /** Whether people lead this page: the query names a person, a web-found person's profile shows, or the query asks for people by a search catalog people term. */
    personLead: z.boolean(),
    /** Requested and executed strategy for each search scope. */
    provenance: FederatedSearchProvenanceSchema,
    /** A prompt with rewritten queries offered beside a broad query's results, from the search catalog revision the search read; null when no qualifier rule matches. */
    qualifier: SearchQualifierSchema.nullish(),
    /** Result sections from most to least relevant. People lead when `personLead` is true and come last otherwise. Companies, products and services, and investors follow the rank of each section's best entity row, so a name whose best match is an investment firm leads with investors; sections with no entity row follow in that same fixed order. */
    section: z.array(z.enum(["person", "company", "productService", "investor"])).optional(),
});
/**
 * Federated entity, person, and news search result composed from each domain's canonical search result owner, with the strategy used for every scope.
 *
 * @openapiSchema FederatedSearch
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema LinkSearchSchema
 * @usedBySchema SharedSearchSchema
 * @contractShape federated.search
 * @contractRole canonical
 */
export const FederatedSearchSchema = FederatedSearchSchemaDefinition;
//# sourceMappingURL=search.js.map