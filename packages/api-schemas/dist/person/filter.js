// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { InvestorActivityFilterSchema } from "../investor/activity-filter.js";
import { PersonListArrayFilterSchema } from "./list-array-filter.js";
/**
 * Canonical person criteria contract for GET/POST/batch endpoints
 *
 * @openapiSchema PersonFilter
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonNaturalSearchSchema
 * @usedBySchema PersonSearchInterpretationSchema
 * @contractShape person.filter
 * @contractRole canonical
 */
export const PersonFilterSchema = z.object({
    /** Array and range filters */
    arrayFilter: PersonListArrayFilterSchema.optional(),
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
    /** Associated entity role or title. */
    role: z.string().nullish(),
    /** Search keyword or phrase. Single characters valid; stop words rejected. */
    search: z.string().nullish(),
    /** Semantic person search phrase. */
    semanticQuery: z.string().nullish(),
    /** Person workflow status. */
    status: z.string().nullish(),
});
//# sourceMappingURL=filter.js.map