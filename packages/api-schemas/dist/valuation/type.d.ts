import { z } from "zod/v4";
/**
 * Which side of the pre/post relationship the source declared.
 *
 * @openapiSchema ValuationType
 * @endpoint GET /v1/entities/detail/financial/valuation
 * @usedBySchema EntityValuationTimeSeriesPointSchema
 * @contractShape valuation.type
 * @contractRole canonical
 */
export declare const ValuationTypeSchema: z.ZodEnum<{
    postMoney: "postMoney";
    preMoney: "preMoney";
    reported: "reported";
}>;
export type ValuationType = z.infer<typeof ValuationTypeSchema>;
//# sourceMappingURL=type.d.ts.map