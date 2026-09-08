import { z } from "zod/v4";
/**
 * Array and range filters for person list endpoints
 *
 * @openapiSchema PersonListArrayFilter
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonFilterSchema
 * @contractShape person.list-array-filter
 * @contractRole canonical
 */
export declare const PersonListArrayFilterSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type PersonListArrayFilter = z.infer<typeof PersonListArrayFilterSchema>;
//# sourceMappingURL=list-array-filter.d.ts.map