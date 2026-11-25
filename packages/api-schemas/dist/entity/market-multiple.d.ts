import { z } from "zod/v4";
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
export declare const EntityMarketMultipleSchema: z.ZodObject<{
    peerGroup: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        asOfDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
        computedAt: z.ZodISODateTime;
        ebitdaMargin: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        evToEbit: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        evToEbitda: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        evToFreeCashFlow: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        evToGrossProfit: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        evToRevenue: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        freeCashFlowMargin: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        grossMargin: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        netMargin: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        operatingMargin: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        peerCount: z.ZodInt;
        priceToEarnings: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        revenueGrowthYoy: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            median: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sampleCount: z.ZodInt;
        }, z.core.$strip>>>;
        selfIncluded: z.ZodBoolean;
        valuedPeerCount: z.ZodInt;
    }, z.core.$strip>>>;
    valuation: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
}, z.core.$strip>;
export interface EntityMarketMultipleSchemaInput extends z.input<typeof EntityMarketMultipleSchema> {
}
export type EntityMarketMultiple = z.infer<typeof EntityMarketMultipleSchema>;
//# sourceMappingURL=market-multiple.d.ts.map