import { z } from "zod/v4";
/**
 * Fundraise transaction metadata linked to a person investment
 *
 * @openapiSchema EntityFundraise
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investments
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonInvestmentSchema
 * @contractShape entity.fundraise
 * @contractRole canonical
 */
export declare const EntityFundraiseSchema: z.ZodObject<{
    amountRaised: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    dateAnnounced: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodUUID;
    image: z.ZodType<{
        isMonogram: boolean;
        logo?: string | null | undefined;
        logoSquare?: string | null | undefined;
    }, import("./image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        logo?: string | null | undefined;
        logoSquare?: string | null | undefined;
    }, import("./image.ts").EntityImageSchemaInput>>;
    investorCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    nameBrand: z.ZodString;
    round: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    valuationPostMoney: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type EntityFundraise = z.infer<typeof EntityFundraiseSchema>;
//# sourceMappingURL=fundraise.d.ts.map