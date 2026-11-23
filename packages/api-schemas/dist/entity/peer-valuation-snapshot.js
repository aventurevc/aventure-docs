// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Precomputed public equity valuation snapshot in USD; multiples are expressed in times (16.5 = 16.5x) and margins/growth in percentage points (71.0 = 71%).
 *
 * @openapiSchema EntityPeerValuationSnapshot
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityComparisonSignalsSchema
 * @usedBySchema EntityMarketMultipleSchema
 * @usedBySchema EntityRelationshipSchema
 * @contractShape entity.peer-valuation-snapshot
 * @contractRole canonical
 */
export const EntityPeerValuationSnapshotSchema = z.object({
    /** Cash, cash equivalents, and short-term marketable investments in USD. */
    cashAndShortTermInvestmentsUsd: z.number().nullish(),
    /** Closing or last regular-session price in USD. */
    closePriceUsd: z.number(),
    /** UTC timestamp when this derived valuation snapshot was computed. */
    computedAt: z.iso.datetime({ offset: true }),
    /** EBITDA margin in percentage points (`71.0 = 71%`). */
    ebitdaMargin: z.number().nullish(),
    /** Enterprise value in USD (`marketCapUsd + netDebtUsd`). */
    enterpriseValueUsd: z.number().nullish(),
    /** Enterprise value to LTM EBIT multiple in times. */
    evToEbit: z.number().nullish(),
    /** Enterprise value to LTM EBITDA multiple in times. */
    evToEbitda: z.number().nullish(),
    /** Enterprise value to LTM free cash flow multiple in times. */
    evToFreeCashFlow: z.number().nullish(),
    /** Enterprise value to LTM gross profit multiple in times. */
    evToGrossProfit: z.number().nullish(),
    /** Enterprise value to LTM revenue multiple in times. */
    evToRevenue: z.number().nullish(),
    /** Primary US listing exchange from Nasdaq Trader directory. */
    exchange: z.string().nullish(),
    /** Free cash flow margin in percentage points (`71.0 = 71%`). */
    freeCashFlowMargin: z.number().nullish(),
    /** Gross profit margin in percentage points (`71.0 = 71%`). */
    grossMargin: z.number().nullish(),
    /** Annual/LTM EBITDA in USD. */
    ltmEbitdaUsd: z.number().nullish(),
    /** Annual/LTM operating income (EBIT) in USD. */
    ltmEbitUsd: z.number().nullish(),
    /** Annual/LTM free cash flow in USD. */
    ltmFreeCashFlowUsd: z.number().nullish(),
    /** Annual/LTM gross profit in USD. */
    ltmGrossProfitUsd: z.number().nullish(),
    /** Annual/LTM net income in USD. */
    ltmNetIncomeUsd: z.number().nullish(),
    /** Annual/LTM operating cash flow in USD. */
    ltmOperatingCashFlowUsd: z.number().nullish(),
    /** Annual/LTM revenue in USD. */
    ltmRevenueUsd: z.number().nullish(),
    /** Equity market capitalization in USD (`closePriceUsd * sharesOutstanding`). */
    marketCapUsd: z.number().nullish(),
    /** Net debt in USD (`totalDebtUsd - cashAndShortTermInvestmentsUsd`). */
    netDebtUsd: z.number().nullish(),
    /** Net income margin in percentage points (`71.0 = 71%`). */
    netMargin: z.number().nullish(),
    /** Operating (EBIT) margin in percentage points (`71.0 = 71%`). */
    operatingMargin: z.number().nullish(),
    /** Trading date of the quote used for valuation. */
    priceDate: z.iso.date(),
    /** Market feed identifier supplying the quote (e.g. iex_tops_1_6). */
    priceSource: z.string(),
    /** Quote freshness or split anomaly classification (`fresh`, `carried_forward`, or `split_pending`). */
    priceStatus: z.string(),
    /** Market capitalization to LTM net income multiple in times. */
    priceToEarnings: z.number().nullish(),
    /** Year-over-year annual revenue growth in percentage points (`25.0 = 25%`). */
    revenueGrowthYoy: z.number().nullish(),
    /** Latest current common shares outstanding used for market cap. */
    sharesOutstanding: z.number().nullish(),
    /** Normalized exchange ticker symbol. */
    ticker: z.string(),
    /** Total debt in USD. */
    totalDebtUsd: z.number().nullish(),
});
//# sourceMappingURL=peer-valuation-snapshot.js.map