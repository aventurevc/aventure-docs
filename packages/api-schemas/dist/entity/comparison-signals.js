// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundingStageSchema } from "../funding/stage.js";
/**
 * Competitive comparison signals for a provider entity — sells-to customers, pricing model, ownership, funding stage, total raised, and website. Projected from entity enrichment for side-by-side comparison; founded year rides the entity core.
 *
 * @openapiSchema EntityComparisonSignals
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @usedBySchema EntityRelationshipSchema
 * @contractShape entity.comparison-signals
 * @contractRole canonical
 */
export const EntityComparisonSignalsSchema = z.object({
    /** Latest funding stage when known */
    fundingStage: FundingStageSchema.nullish(),
    /** Provider ownership structure (current typeOwnership tags) */
    ownership: z.array(z.string()),
    /** Provider pricing/revenue model (current typeRevenue tags) */
    pricingModel: z.array(z.string()),
    /** Customer types the provider sells to (current typeCustomer tags) */
    sellsTo: z.array(z.string()),
    /** Total capital raised when known */
    totalRaised: z.number().nullish(),
    /** Provider website URL when known */
    website: z.string().nullish(),
});
//# sourceMappingURL=comparison-signals.js.map