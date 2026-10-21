import { z } from "zod/v4";
declare const EntityFundraiseInvestorJoinSchemaDefinition: z.ZodObject<{
    amountInvested: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodISODateTime;
    financialInstrumentType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Bond: "Bond";
        "Common Stock": "Common Stock";
        "Convertible Note": "Convertible Note";
        Grant: "Grant";
        Loan: "Loan";
        "Other Debt": "Other Debt";
        "Other Equity": "Other Equity";
        "Preferred Stock": "Preferred Stock";
        SAFE: "SAFE";
        Token: "Token";
    }>>>;
    id: z.ZodUUID;
    investor: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    investorName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    investorSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    leadInvestor: z.ZodBoolean;
    transactionId: z.ZodUUID;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type EntityFundraiseInvestorJoinDefinition = z.infer<typeof EntityFundraiseInvestorJoinSchemaDefinition>;
export interface EntityFundraiseInvestorJoinSchemaInput extends z.input<typeof EntityFundraiseInvestorJoinSchemaDefinition> {
}
/**
 * Canonical fundraise investor join row for API serialization
 *
 * @openapiSchema EntityFundraiseInvestorJoin
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-investor-joins
 * @endpoint GET /v1/entities/{entityId}/fundraise-investor-joins/{joinId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFundraiseTransactionSchema
 * @usedBySchema PageEntityFundraiseInvestorJoinSchema
 * @contractShape entity.fundraise-investor-join
 * @contractRole canonical
 */
export declare const EntityFundraiseInvestorJoinSchema: z.ZodType<EntityFundraiseInvestorJoinDefinition, EntityFundraiseInvestorJoinSchemaInput>;
export type EntityFundraiseInvestorJoin = z.infer<typeof EntityFundraiseInvestorJoinSchema>;
export {};
//# sourceMappingURL=fundraise-investor-join.d.ts.map