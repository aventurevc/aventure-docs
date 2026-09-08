import { z } from "zod/v4";
/**
 * Canonical person criteria contract for GET/POST/batch endpoints
 *
 * @openapiSchema PersonFilter
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonNaturalSearchSchema
 * @usedBySchema PersonSearchInterpretationSchema
 * @contractShape person.filter
 * @contractRole canonical
 */
export declare const PersonFilterSchema: z.ZodObject<{
    arrayFilter: z.ZodOptional<z.ZodObject<{
        amountInvestedRange: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>>;
        amountRaisedRange: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>>;
        entityName: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        investedCompany: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        personTitle: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        round: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        totalInvestmentCount: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>>;
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>>>>;
    }, z.core.$strip>>;
    entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    entitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    firstName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    includeAddress: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    includeUrl: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    investorActivity: z.ZodOptional<z.ZodObject<{
        averageAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        largestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        smallestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        totalAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        totalInvestmentRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
    }, z.core.$strip>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    lastName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    letter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    search: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    semanticQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type PersonFilter = z.infer<typeof PersonFilterSchema>;
//# sourceMappingURL=filter.d.ts.map