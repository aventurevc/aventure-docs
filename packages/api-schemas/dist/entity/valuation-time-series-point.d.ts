import { z } from "zod/v4";
declare const EntityValuationTimeSeriesPointSchemaDefinition: z.ZodObject<{
    amountRaised: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    asOfDate: z.ZodISODateTime;
    confidence: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
    }>;
    currency: z.ZodString;
    declaredBasis: z.ZodEnum<{
        postMoney: "postMoney";
        preMoney: "preMoney";
        reported: "reported";
    }>;
    derivation: z.ZodEnum<{
        derivedFromPostMinusRaised: "derivedFromPostMinusRaised";
        derivedFromPreAndRaised: "derivedFromPreAndRaised";
        reportedAssumedPost: "reportedAssumedPost";
        stored: "stored";
    }>;
    detailId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodEnum<{
        fundraiseRound: "fundraiseRound";
        researchDetail: "researchDetail";
    }>;
    sourceRef: z.ZodString;
    valuationPostMoney: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    valuationPreMoney: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type EntityValuationTimeSeriesPointDefinition = z.infer<typeof EntityValuationTimeSeriesPointSchemaDefinition>;
/**
 * A single valuation datapoint. `valuationPostMoney` is the canonical charted value; filled when directly recorded or safely derivable from pre-money + amount raised (same currency only). `derivation` explains whether the value was stored or inferred. Only `researchDetail` points have a `detailId` and can be changed here; `fundraiseRound` points are changed through fundraise-round commands.
 *
 * @openapiSchema EntityValuationTimeSeriesPoint
 * @endpoint GET /v1/entities/{entityId}/valuations
 * @usedBySchema PageEntityValuationTimeSeriesPointSchema
 * @contractShape entity.valuation-time-series-point
 * @contractRole canonical
 */
export declare const EntityValuationTimeSeriesPointSchema: z.ZodType<EntityValuationTimeSeriesPointDefinition>;
export type EntityValuationTimeSeriesPoint = z.infer<typeof EntityValuationTimeSeriesPointSchema>;
export {};
//# sourceMappingURL=valuation-time-series-point.d.ts.map