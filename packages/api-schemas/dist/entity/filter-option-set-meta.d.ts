import { z } from "zod/v4";
/**
 * Generator metadata for a filter payload
 *
 * @openapiSchema EntityFilterOptionSetMeta
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterOptionSetSchema
 * @contractShape entity.filter-option-set-meta
 * @contractRole canonical
 */
export declare const EntityFilterOptionSetMetaSchema: z.ZodObject<{
    defaultOptionLimit: z.ZodInt;
    defaultTypeGroup: z.ZodOptional<z.ZodEnum<{
        Investor: "Investor";
        Organization: "Organization";
    }>>;
    distributionKey: z.ZodArray<z.ZodString>;
    generatedAt: z.ZodISODateTime;
    includeDistribution: z.ZodBoolean;
    includedTypeRecord: z.ZodArray<z.ZodString>;
    includePrivate: z.ZodBoolean;
    optionMode: z.ZodEnum<{
        FULL_RESULTS: "FULL_RESULTS";
        TOP_RESULTS: "TOP_RESULTS";
    }>;
    requestedTypeGroup: z.ZodString;
    typeGroupMembership: z.ZodOptional<z.ZodArray<z.ZodType<{
        typeGroup: "Investor" | "Organization";
        typeRecord: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[];
    }, unknown, z.core.$ZodTypeInternals<{
        typeGroup: "Investor" | "Organization";
        typeRecord: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[];
    }, unknown>>>>;
}, z.core.$strip>;
export type EntityFilterOptionSetMeta = z.infer<typeof EntityFilterOptionSetMetaSchema>;
//# sourceMappingURL=filter-option-set-meta.d.ts.map