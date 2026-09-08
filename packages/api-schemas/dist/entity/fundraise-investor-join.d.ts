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
    leadInvestor: z.ZodBoolean;
    transactionId: z.ZodUUID;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type EntityFundraiseInvestorJoinDefinition = z.infer<typeof EntityFundraiseInvestorJoinSchemaDefinition>;
/**
 * Canonical fundraise investor join row for API serialization
 *
 * @openapiSchema EntityFundraiseInvestorJoin
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins/{joinId}
 * @usedBySchema PageEntityFundraiseInvestorJoinSchema
 * @contractShape entity.fundraise-investor-join
 * @contractRole canonical
 */
export declare const EntityFundraiseInvestorJoinSchema: z.ZodType<EntityFundraiseInvestorJoinDefinition>;
export type EntityFundraiseInvestorJoin = z.infer<typeof EntityFundraiseInvestorJoinSchema>;
export {};
//# sourceMappingURL=fundraise-investor-join.d.ts.map