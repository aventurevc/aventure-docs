// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PersonGraphCareerContextSchema } from "./graph-career-context.js";
import { PersonGraphCoInvestorSchema } from "./graph-co-investor.js";
/**
 * Precomputed professional-graph document for one person: career context per associated entity (entity facts, recent news, colleagues, similar entities with key people), plus co-investors. Lists are capped and pre-ranked server-side; the response is the display order. Served from a precomputed store with member names, images, and slugs hydrated from live person records at read time; computedAt is null only when the document has not been materialized yet.
 *
 * @openapiSchema PersonGraph
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonDetailSchema
 * @contractShape person.graph
 * @contractRole canonical
 */
export const PersonGraphSchema = z.object({
    /** One entry per entity the person holds or held an association with, current first */
    careerContext: z.array(PersonGraphCareerContextSchema),
    /** People who participated in the same fundraise transactions or invested in the same companies, ranked by overlap count and recency */
    coInvestor: z.array(PersonGraphCoInvestorSchema),
    /** Instant the document was materialized; null only when no document exists yet and an asynchronous recompute has been requested */
    computedAt: z.iso.datetime({ offset: true }).nullish(),
});
//# sourceMappingURL=graph.js.map