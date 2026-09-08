import { z } from "zod/v4";
/**
 * How the point's valuationPostMoney and valuationPreMoney were obtained.
 *
 * @openapiSchema EntityValuationDerivation
 * @endpoint GET /v1/entities/detail/financial/valuation
 * @usedBySchema EntityValuationTimeSeriesPointSchema
 * @contractShape entity.valuation-derivation
 * @contractRole canonical
 */
export declare const EntityValuationDerivationSchema: z.ZodEnum<{
    derivedFromPostMinusRaised: "derivedFromPostMinusRaised";
    derivedFromPreAndRaised: "derivedFromPreAndRaised";
    reportedAssumedPost: "reportedAssumedPost";
    stored: "stored";
}>;
export type EntityValuationDerivation = z.infer<typeof EntityValuationDerivationSchema>;
//# sourceMappingURL=valuation-derivation.d.ts.map