import { z } from "zod/v4";
/**
 * Current eligible valuation with its own amount, basis, currency and source date.
 *
 * @openapiSchema EntityValuation
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFundingDetailSchema
 * @contractShape entity.valuation
 * @contractRole canonical
 */
export declare const EntityValuationSchema: z.ZodObject<{
    amount: z.ZodString;
    asOfDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    basis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        postMoney: "postMoney";
        preMoney: "preMoney";
        reported: "reported";
    }>>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postMoneyUsd: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    referenceValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodEnum<{
        fundraiseRound: "fundraiseRound";
        researchDetail: "researchDetail";
    }>;
    sourceRef: z.ZodString;
}, z.core.$strip>;
export type EntityValuation = z.infer<typeof EntityValuationSchema>;
//# sourceMappingURL=valuation.d.ts.map