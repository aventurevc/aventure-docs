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
export declare const EntityPeerValuationSnapshotSchema: z.ZodObject<{
    cashAndShortTermInvestmentsUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    closePriceUsd: z.ZodNumber;
    computedAt: z.ZodISODateTime;
    ebitdaMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    enterpriseValueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    evToEbit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    evToEbitda: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    evToFreeCashFlow: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    evToGrossProfit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    evToRevenue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    freeCashFlowMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    grossMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ltmEbitdaUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ltmEbitUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ltmFreeCashFlowUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ltmGrossProfitUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ltmNetIncomeUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ltmOperatingCashFlowUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ltmRevenueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    marketCapUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    netDebtUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    netMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    operatingMargin: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    priceDate: z.ZodISODate;
    priceSource: z.ZodString;
    priceStatus: z.ZodString;
    priceToEarnings: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    revenueGrowthYoy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    sharesOutstanding: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    ticker: z.ZodString;
    totalDebtUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export interface EntityPeerValuationSnapshotSchemaInput extends z.input<typeof EntityPeerValuationSnapshotSchema> {
}
export type EntityPeerValuationSnapshot = z.infer<typeof EntityPeerValuationSnapshotSchema>;
//# sourceMappingURL=peer-valuation-snapshot.d.ts.map