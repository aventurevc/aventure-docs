import { z } from "zod/v4";
declare const EntityFilterOptionSetSchemaDefinition: z.ZodObject<{
    arrayFilterEntry: z.ZodArray<z.ZodType<{
        chart: {
            amount: number;
            end: number;
            start: number;
        }[];
        choiceOption: {
            label: string;
            scope?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            } | null | undefined;
            value: string;
        }[];
        choiceOptionTotal?: number | null | undefined;
        choiceOptionTruncated?: boolean | null | undefined;
        controlType: "checkbox" | "currencyRange" | "dateRange" | "range";
        filterKey: string;
        filterMeta?: {
            ui?: {
                headquartersOption?: {
                    country: {
                        country: string;
                        state: {
                            city: string[];
                            state: string;
                        }[];
                    }[];
                } | null | undefined;
            } | null | undefined;
        } | null | undefined;
        label: string;
        scope?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        } | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        chart: {
            amount: number;
            end: number;
            start: number;
        }[];
        choiceOption: {
            label: string;
            scope?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            } | null | undefined;
            value: string;
        }[];
        choiceOptionTotal?: number | null | undefined;
        choiceOptionTruncated?: boolean | null | undefined;
        controlType: "checkbox" | "currencyRange" | "dateRange" | "range";
        filterKey: string;
        filterMeta?: {
            ui?: {
                headquartersOption?: {
                    country: {
                        country: string;
                        state: {
                            city: string[];
                            state: string;
                        }[];
                    }[];
                } | null | undefined;
            } | null | undefined;
        } | null | undefined;
        label: string;
        scope?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        } | null | undefined;
    }, unknown>>>;
    filtersMeta: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
    rangeFilterEntry: z.ZodArray<z.ZodType<{
        chart: {
            amount: number;
            end: number;
            start: number;
        }[];
        choiceOption: {
            label: string;
            scope?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            } | null | undefined;
            value: string;
        }[];
        choiceOptionTotal?: number | null | undefined;
        choiceOptionTruncated?: boolean | null | undefined;
        controlType: "checkbox" | "currencyRange" | "dateRange" | "range";
        filterKey: string;
        filterMeta?: {
            ui?: {
                headquartersOption?: {
                    country: {
                        country: string;
                        state: {
                            city: string[];
                            state: string;
                        }[];
                    }[];
                } | null | undefined;
            } | null | undefined;
        } | null | undefined;
        label: string;
        scope?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        } | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        chart: {
            amount: number;
            end: number;
            start: number;
        }[];
        choiceOption: {
            label: string;
            scope?: {
                max?: number | null | undefined;
                min?: number | null | undefined;
            } | null | undefined;
            value: string;
        }[];
        choiceOptionTotal?: number | null | undefined;
        choiceOptionTruncated?: boolean | null | undefined;
        controlType: "checkbox" | "currencyRange" | "dateRange" | "range";
        filterKey: string;
        filterMeta?: {
            ui?: {
                headquartersOption?: {
                    country: {
                        country: string;
                        state: {
                            city: string[];
                            state: string;
                        }[];
                    }[];
                } | null | undefined;
            } | null | undefined;
        } | null | undefined;
        label: string;
        scope?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        } | null | undefined;
    }, unknown>>>;
}, z.core.$strip>;
type EntityFilterOptionSetDefinition = z.infer<typeof EntityFilterOptionSetSchemaDefinition>;
/**
 * Available filter options for list endpoints
 *
 * @openapiSchema EntityFilterOptionSet
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/people/filters
 * @contractShape entity.filter-option-set
 * @contractRole canonical
 */
export declare const EntityFilterOptionSetSchema: z.ZodType<EntityFilterOptionSetDefinition>;
export type EntityFilterOptionSet = z.infer<typeof EntityFilterOptionSetSchema>;
export {};
//# sourceMappingURL=filter-option-set.d.ts.map