// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PersonGraphCareerContextSchema } from "./graph-career-context.js";
import { PersonGraphCoInvestorSchema } from "./graph-co-investor.js";
import { PersonGraphRolePeerSchema } from "./graph-role-peer.js";
const PersonGraphSchemaDefinition = z.object({
    /** One entry per entity the person holds or held an association with, current first */
    careerContext: z.array(PersonGraphCareerContextSchema),
    /** People who participated in the same fundraise transactions or invested in the same companies, ranked by overlap count and recency */
    coInvestor: z.array(PersonGraphCoInvestorSchema),
    /** Instant the document was materialized; null only when no document exists yet and an asynchronous recompute has been requested */
    computedAt: z.iso.datetime({ offset: true }).nullish(),
    /** People holding the same title at sector-comparable companies, ranked by entity prominence */
    rolePeer: z.array(PersonGraphRolePeerSchema),
});
/**
 * Precomputed professional-graph document for one person: career context per associated entity (entity facts, recent news, colleagues, similar entities with key people), plus co-investors and role peers. Lists are capped and pre-ranked server-side; the response is the display order. Served from a precomputed store with member names, images, and slugs hydrated from live person records at read time; computedAt is null only when the document has not been materialized yet.
 *
 * @openapiSchema PersonGraph
 * @endpoint GET /v1/people/{personId}/graph
 * @contractShape person.graph
 * @contractRole canonical
 */
export const PersonGraphSchema = PersonGraphSchemaDefinition;
//# sourceMappingURL=graph.js.map