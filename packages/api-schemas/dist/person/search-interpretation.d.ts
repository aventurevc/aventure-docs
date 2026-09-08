import { z } from "zod/v4";
declare const PersonSearchInterpretationSchemaDefinition: z.ZodObject<{
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    execution: z.ZodType<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown, z.core.$ZodTypeInternals<{
        modeRequested: "auto" | "exact" | "keyword" | "natural" | "semantic";
        modeUsed: "auto" | "exact" | "keyword" | "natural" | "semantic";
    }, unknown>>;
    fallbackUsed: z.ZodBoolean;
    filter: z.ZodObject<{
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
    interpretation: z.ZodString;
    sort: z.ZodType<{
        order: {
            descending: boolean;
            field: "AMOUNT_INVESTED" | "CREATED_AT" | "FIRST_NAME" | "FULL_NAME" | "GENDER" | "ID" | "LAST_NAME" | "SLUG" | "STATUS" | "TOTAL_INVESTMENTS" | "UPDATED_AT";
        }[];
    }, unknown, z.core.$ZodTypeInternals<{
        order: {
            descending: boolean;
            field: "AMOUNT_INVESTED" | "CREATED_AT" | "FIRST_NAME" | "FULL_NAME" | "GENDER" | "ID" | "LAST_NAME" | "SLUG" | "STATUS" | "TOTAL_INVESTMENTS" | "UPDATED_AT";
        }[];
    }, unknown>>;
    unsupported: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type PersonSearchInterpretationDefinition = z.infer<typeof PersonSearchInterpretationSchemaDefinition>;
/**
 * Structured interpretation of a natural-language people search: canonical filter, sort, confidence, and any unsupported constraint the planner could not translate exactly.
 *
 * @openapiSchema PersonSearchInterpretation
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonNaturalSearchResultSchema
 * @contractShape person.search-interpretation
 * @contractRole canonical
 */
export declare const PersonSearchInterpretationSchema: z.ZodType<PersonSearchInterpretationDefinition>;
export type PersonSearchInterpretation = z.infer<typeof PersonSearchInterpretationSchema>;
export {};
//# sourceMappingURL=search-interpretation.d.ts.map