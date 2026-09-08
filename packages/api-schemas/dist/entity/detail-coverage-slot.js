// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { CompletionGateCoverageSchema } from "../completion/gate-coverage.js";
const EntityDetailCoverageSlotSchemaDefinition = z.object({
    /** Resolved row/value count backing this gate. */
    count: z.int(),
    /** Coverage verdict for this gate on the assembled detail. NOT_EVALUABLE means the detail does not carry the gate, so it is neither satisfied nor unsatisfied here — grade it from owningRead instead of treating it as an unmet gate. */
    coverage: CompletionGateCoverageSchema,
    /** Canonical dotted completion gate id. */
    gateId: z.string(),
    /** What to do to obtain this gate when it is not present. */
    howToObtain: z.string(),
    /** Human-readable gate name. */
    label: z.string(),
    /** OpenAPI operationId of the canonical read that proves the gate. */
    owningRead: z.string(),
    /** Parent person this slot was instantiated for when indexed per person. Null on flat and Product/Service-indexed gates. Two per-person slots sharing a gateId are distinguished by this id; per-person slots remain advisory rather than required. */
    parentPersonId: z.uuid().nullish(),
    /** Parent Product/Service this slot was instantiated for when indexed per offering. Null on flat and per-person gates. Required Product/Service slots sharing a gateId are addressed independently by this id. */
    parentProductServiceId: z.uuid().nullish(),
    /** Whether this read can decide and demand the gate. True for mandatory flat-floor gates and for server-decidable indexed Product/Service gates. False for indexed per-person slots: their source-backed unobtainable relief lives only in the run completion ledger, so the server cannot terminally decide them. */
    required: z.boolean(),
    /** Whether the governed completion contract permits source-backed unobtainable evidence to relieve this exact absent slot. */
    unobtainableAllowed: z.boolean(),
});
/**
 * One completion gate evaluated against the assembled entity detail.
 *
 * @openapiSchema EntityDetailCoverageSlot
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @usedBySchema EntitySuggestionResultSchema
 * @contractShape entity.detail-coverage-slot
 * @contractRole canonical
 */
export const EntityDetailCoverageSlotSchema = EntityDetailCoverageSlotSchemaDefinition;
//# sourceMappingURL=detail-coverage-slot.js.map