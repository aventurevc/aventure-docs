import { z } from "zod/v4";
/**
 * Which canonical store the point came from.
 *
 * @openapiSchema EntityValuationSource
 * @endpoint GET /v1/entities/detail/financial/valuation
 * @usedBySchema EntityValuationTimeSeriesPointSchema
 * @contractShape entity.valuation-source
 * @contractRole canonical
 */
export declare const EntityValuationSourceSchema: z.ZodEnum<{
    fundraiseRound: "fundraiseRound";
    researchDetail: "researchDetail";
}>;
export type EntityValuationSource = z.infer<typeof EntityValuationSourceSchema>;
//# sourceMappingURL=valuation-source.d.ts.map