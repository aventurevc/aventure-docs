// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPeerMultipleSummarySchema } from "./peer-multiple-summary.js";
import { EntityPeerValuationSnapshotSchema } from "./peer-valuation-snapshot.js";
/**
 * Precomputed public market valuation and comparable-peer multiple benchmarks for an entity.
 *
 * @openapiSchema EntityMarketMultiple
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityResearchSchema
 * @contractShape entity.market-multiple
 * @contractRole canonical
 */
export const EntityMarketMultipleSchema = z.object({
    /** Summary multiples and operating margins across self and comparablePeer companies. */
    peerGroup: EntityPeerMultipleSummarySchema.nullish(),
    /** Subject entity's own daily public market valuation when publicly quoted. */
    valuation: EntityPeerValuationSnapshotSchema.nullish(),
});
//# sourceMappingURL=market-multiple.js.map