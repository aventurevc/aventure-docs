// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPeerMetricSummarySchema } from "./peer-metric-summary.js";
/**
 * Precomputed peer-group averages, medians, ranges, and sample counts combining the subject (when publicly valued) and its active outgoing comparablePeer targets.
 *
 * @openapiSchema EntityPeerMultipleSummary
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
 * @usedBySchema EntityMarketMultipleSchema
 * @contractShape entity.peer-multiple-summary
 * @contractRole canonical
 */
export const EntityPeerMultipleSummarySchema = z.object({
    /** Latest market quote date represented in the peer-group aggregation. */
    asOfDate: z.iso.date().nullish(),
    /** UTC timestamp when the peer summary was computed. */
    computedAt: z.iso.datetime({ offset: true }),
    /** Peer-group EBITDA margin summary in percentage points. */
    ebitdaMargin: EntityPeerMetricSummarySchema.nullish(),
    /** Peer-group enterprise value to LTM EBIT multiple summary in times. */
    evToEbit: EntityPeerMetricSummarySchema.nullish(),
    /** Peer-group enterprise value to LTM EBITDA multiple summary in times. */
    evToEbitda: EntityPeerMetricSummarySchema.nullish(),
    /** Peer-group enterprise value to LTM free cash flow multiple summary in times. */
    evToFreeCashFlow: EntityPeerMetricSummarySchema.nullish(),
    /** Peer-group enterprise value to LTM gross profit multiple summary in times. */
    evToGrossProfit: EntityPeerMetricSummarySchema.nullish(),
    /** Peer-group enterprise value to LTM revenue multiple summary in times. */
    evToRevenue: EntityPeerMetricSummarySchema.nullish(),
    /** Peer-group free cash flow margin summary in percentage points. */
    freeCashFlowMargin: EntityPeerMetricSummarySchema.nullish(),
    /** Peer-group gross profit margin summary in percentage points. */
    grossMargin: EntityPeerMetricSummarySchema.nullish(),
    /** Peer-group net income margin summary in percentage points. */
    netMargin: EntityPeerMetricSummarySchema.nullish(),
    /** Peer-group operating (EBIT) margin summary in percentage points. */
    operatingMargin: EntityPeerMetricSummarySchema.nullish(),
    /** Count of active outgoing comparablePeer edges for the subject. */
    peerCount: z.int(),
    /** Peer-group market capitalization to LTM net income multiple summary in times. */
    priceToEarnings: EntityPeerMetricSummarySchema.nullish(),
    /** Peer-group year-over-year revenue growth summary in percentage points. */
    revenueGrowthYoy: EntityPeerMetricSummarySchema.nullish(),
    /** Whether the subject entity itself held a public market valuation included in the peer summary. */
    selfIncluded: z.boolean(),
    /** Count of comparablePeer targets holding a derived market valuation. */
    valuedPeerCount: z.int(),
});
//# sourceMappingURL=peer-multiple-summary.js.map