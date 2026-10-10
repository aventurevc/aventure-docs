import { z } from "zod/v4";
/**
 * Array and range filters for person list endpoints
 *
 * @openapiSchema PersonListArrayFilter
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonFilterSchema
 * @contractShape person.list-array-filter
 * @contractRole canonical
 */
export declare const PersonListArrayFilterSchema: z.ZodObject<{
    amountInvestedRange: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>>;
    amountRaisedRange: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>>;
    entityName: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    investedCompany: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    personTitle: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    round: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    totalInvestmentCount: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, import("../int/range.ts").IntRangeSchemaInput, z.core.$ZodTypeInternals<{
        max?: number | null | undefined;
        min?: number | null | undefined;
    }, import("../int/range.ts").IntRangeSchemaInput>>>>>;
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