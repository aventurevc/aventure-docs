// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityDetailCoverageSlotSchema } from "./detail-coverage-slot.js";
import { EntitySuggestionSchema } from "./suggestion.js";
const EntitySuggestionResultSchemaDefinition = z.object({
    /** Per-entity completion-floor coverage of every other detail, with the owning read and how to obtain each gate. Sourced from the completion-gate coverage projection. */
    coverage: z.array(EntityDetailCoverageSlotSchema),
    /** Always false. These suggestions are a non-exhaustive hypothesis set; the agent must still verify each candidate and consult coverage for everything else. */
    exhaustive: z.boolean(),
    /** The single enrichment slot these candidates cover. */
    slot: z.string(),
    /** Advisory candidate hypotheses for this slot, ranked by semantic score. Empty means no embedding neighbors; it is never a claim that the slot is complete. */
    suggestion: z.array(EntitySuggestionSchema),
});
/**
 * Semantic suggestions for the named slot only. NOT a completeness signal. Each candidate is a hypothesis — verify with web search before writing. exhaustive is always false. See coverage for the remaining details and the owning read that proves each.
 *
 * @openapiSchema EntitySuggestionResult
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @contractShape entity.suggestion-result
 * @contractRole canonical
 */
export const EntitySuggestionResultSchema = EntitySuggestionResultSchemaDefinition;
//# sourceMappingURL=suggestion-result.js.map