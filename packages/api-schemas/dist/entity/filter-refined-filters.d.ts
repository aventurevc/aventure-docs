import { z } from "zod/v4";
declare const EntityFilterRefinedFiltersSchemaDefinition: z.ZodObject<{
    filter: z.ZodArray<z.ZodType<{
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
    meta: z.ZodType<{
        degraded: boolean;
        limit: number;
        page: number;
        total?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        degraded: boolean;
        limit: number;
        page: number;
        total?: number | null | undefined;
    }, unknown>>;
}, z.core.$strip>;
type EntityFilterRefinedFiltersDefinition = z.infer<typeof EntityFilterRefinedFiltersSchemaDefinition>;
/**
 * Refined filters
 *
 * @openapiSchema EntityFilterRefinedFilters
 * @endpoint POST /v1/entities/filters/refine
 * @contractShape entity.filter-refined-filters
 * @contractRole canonical
 */
export declare const EntityFilterRefinedFiltersSchema: z.ZodType<EntityFilterRefinedFiltersDefinition>;
export type EntityFilterRefinedFilters = z.infer<typeof EntityFilterRefinedFiltersSchema>;
export {};
//# sourceMappingURL=filter-refined-filters.d.ts.map