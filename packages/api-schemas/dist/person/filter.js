// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterSchema } from "../entity/filter.js";
import { EntityPersonAssociationFilterSchema } from "../entity/person-association-filter.js";
import { InvestorActivityFilterSchema } from "../investor/activity-filter.js";
import { PersonListArrayFilterSchema } from "./list-array-filter.js";
/**
 * Canonical person criteria contract for GET/POST/batch endpoints
 *
 * @openapiSchema PersonFilter
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonNaturalSearchSchema
 * @usedBySchema PersonSearchInterpretationSchema
 * @usedBySchema SearchInterpretationSchema
 * @usedBySchema SharedDirectoryMutationSchema
 * @usedBySchema SharedDirectorySchema
 * @contractShape person.filter
 * @contractRole canonical
 */
export const PersonFilterSchema = z.object({
    /** Require a second, independent association of the same person, AND-ed with the primary association constraints, e.g. a past employer. */
    additionalAssociation: EntityPersonAssociationFilterSchema.nullish(),
    /** Array and range filters */
    arrayFilter: PersonListArrayFilterSchema.optional(),
    /** Constraints on the associated entity, as on POST /v1/search/natural/entities: a person matches when an association (current unless isCurrent=false) points at an entity matching every field and visible in entity listings, such as yearFoundedRange, hasFundraising, or fundraiseActivity.totalRaisedRange. Omit for no associated-entity constraint. */
    entityFilter: EntityFilterSchema.optional(),
    /** Associated entity UUID. */
    entityId: z.uuid().nullish(),
    /** Associated entity slug. */
    entitySlug: z.string().nullish(),
    /** Person first name. */
    firstName: z.string().nullish(),
    /** Include addresses on each person */
    includeAddress: z.boolean().nullish(),
    /** Include URL links on each person */
    includeUrl: z.boolean().nullish(),
    /** Aggregate investor activity filters. */
    investorActivity: InvestorActivityFilterSchema.optional(),
    /** Filter current associations. */
    isCurrent: z.boolean().nullish(),
    /** Person last name. */
    lastName: z.string().nullish(),
    /** First-name initial. */
    letter: z.string().nullish(),
    /** Restrict results to specific person IDs. Omit or use [] for no ID restriction. */
    personId: z.array(z.uuid()).max(200).optional(),
    /** Exact normalized match against a person's full name or slug. */
    personName: z.array(z.string()).optional(),
    /** Rank people who run the most prominent matching employers first, ahead of sort (founders and management, then other operators, then board seats). Applies only when entityId, entitySlug, arrayFilter.entityName, or the entityId, slug, entityName, or fundraiseActivity.investorName of entityFilter or additionalAssociation.entityFilter names the employers. */
    rankByEmployer: z.boolean().nullish(),
    /** Associated entity role or title. */
    role: z.string().nullish(),
    /** Search keyword or phrase. Single characters valid; stop words rejected. */
    search: z.string().nullish(),
    /** Semantic person search phrase. A semantic page ranks a bounded nearest-neighbor window: totalElements counts the ranked candidates reachable through continuation, not every matching person. */
    semanticQuery: z.string().nullish(),
    /** Person workflow status. */
    status: z.string().nullish(),
});
//# sourceMappingURL=filter.js.map