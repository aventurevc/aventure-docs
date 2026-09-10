// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityNameAliasPersonAliasTypeSchema } from "../entity/name-alias-person-alias-type.js";
import { EntityPersonAssociationSchema } from "../entity/person-association.js";
import { PersonEnrichmentSchema } from "./enrichment.js";
import { PersonInvestmentSchema } from "./investment.js";
import { PersonSchema } from "./person.js";
const PersonDetailSchemaDefinition = z.object({
    articleCount: z.int().nullish(),
    /** Entity associations for this person */
    association: z.array(EntityPersonAssociationSchema),
    core: PersonSchema,
    enrichment: PersonEnrichmentSchema,
    /** Investments associated with this person */
    investment: z.array(PersonInvestmentSchema),
    /** Display and search aliases for this person */
    nameAlias: z.array(EntityNameAliasPersonAliasTypeSchema),
    pendingApproval: z.int().nullish(),
});
/**
 * Composed person wrapper: core identity + enrichment + associations + investments. Access core fields via .core (for example .core.slug or .core.nameFull).
 *
 * @openapiSchema PersonDetail
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @usedBySchema EntityDetailSchema
 * @usedBySchema PagePersonDetailSchema
 * @usedBySchema PersonInvestorParticipationSchema
 * @contractShape person.detail
 * @contractRole canonical
 */
export const PersonDetailSchema = PersonDetailSchemaDefinition;
//# sourceMappingURL=detail.js.map