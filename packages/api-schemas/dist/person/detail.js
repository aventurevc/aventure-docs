// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BlogPostSchema } from "../blog/post.js";
import { EntityFundraiseInvestorActivitySchema } from "../entity/fundraise-investor-activity.js";
import { EntityNameAliasPersonAliasTypeSchema } from "../entity/name-alias-person-alias-type.js";
import { EntityPersonAssociationSchema } from "../entity/person-association.js";
import { PersonEnrichmentSchema } from "./enrichment.js";
import { PersonGraphSchema } from "./graph.js";
import { PersonInvestmentSchema } from "./investment.js";
import { PersonSchema } from "./person.js";
import { PersonSimilarityResultSchema } from "./similarity-result.js";
const PersonDetailSchemaDefinition = z.object({
    articleCount: z.int().nullish(),
    /** Entity associations for this person */
    association: z.array(EntityPersonAssociationSchema),
    /** Newest active blog posts first; present only when include names blogPost */
    blogPost: z.array(BlogPostSchema).nullish(),
    core: PersonSchema,
    /** The queued or running full-research run covering this record; null when none, and always null on people embedded in another record. */
    coveringRunId: z.uuid().nullish(),
    enrichment: PersonEnrichmentSchema,
    /** Precomputed person graph; present only when include names graph */
    graph: PersonGraphSchema.nullish(),
    /** Investments associated with this person. When include names investment, these are newest first, the same rows as GET /v1/people/{personId}/investments?sort=date,desc&size=200 page 0: fewer than 200 rows is the whole list, otherwise continue at page=1 with the same sort and size. */
    investment: z.array(PersonInvestmentSchema),
    /** Investor activity rollup; present only when include names investorActivity */
    investorActivity: EntityFundraiseInvestorActivitySchema.nullish(),
    /** Display and search aliases for this person */
    nameAlias: z.array(EntityNameAliasPersonAliasTypeSchema),
    /** Most similar people, highest score first; present only when include names similar */
    similar: z.array(PersonSimilarityResultSchema).nullish(),
});
/**
 * Composed person wrapper: core identity + enrichment + associations + investments. Access core fields via .core (for example .core.slug or .core.nameFull).
 *
 * @openapiSchema PersonDetail
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema FederatedSearchSchema
 * @usedBySchema PagePersonDetailSchema
 * @usedBySchema PersonInvestorParticipationSchema
 * @contractShape person.detail
 * @contractRole canonical
 */
export const PersonDetailSchema = PersonDetailSchemaDefinition;
//# sourceMappingURL=detail.js.map