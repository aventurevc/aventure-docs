import { z } from "zod/v4";
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
export declare const EntityPeerMultipleSummarySchema: z.ZodObject<{
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
}, z.core.$strip>;
export interface EntityPeerMultipleSummarySchemaInput extends z.input<typeof EntityPeerMultipleSummarySchema> {
}
export type EntityPeerMultipleSummary = z.infer<typeof EntityPeerMultipleSummarySchema>;
//# sourceMappingURL=peer-multiple-summary.d.ts.map