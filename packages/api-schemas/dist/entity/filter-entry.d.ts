import { z } from "zod/v4";
declare const EntityFilterEntrySchemaDefinition: z.ZodObject<{
    chart: z.ZodArray<z.ZodType<{
        amount: number;
        end: number;
        start: number;
    }, unknown, z.core.$ZodTypeInternals<{
        amount: number;
        end: number;
        start: number;
    }, unknown>>>;
    choiceOption: z.ZodArray<z.ZodType<{
        label: string;
        scope?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        } | null | undefined;
        value: string;
    }, unknown, z.core.$ZodTypeInternals<{
        label: string;
        scope?: {
            max?: number | null | undefined;
            min?: number | null | undefined;
        } | null | undefined;
        value: string;
    }, unknown>>>;
    choiceOptionTotal: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    choiceOptionTruncated: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    controlType: z.ZodEnum<{
        checkbox: "checkbox";
        currencyRange: "currencyRange";
        dateRange: "dateRange";
        range: "range";
    }>;
    filterKey: z.ZodString;
    filterMeta: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        ui: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            headquartersOption: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                country: z.ZodArray<z.ZodType<{
                    country: string;
                    state: {
                        city: string[];
                        state: string;
                    }[];
                }, unknown, z.core.$ZodTypeInternals<{
                    country: string;
                    state: {
                        city: string[];
                        state: string;
                    }[];
                }, unknown>>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    label: z.ZodString;
    scope: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strict>>>;
}, z.core.$strip>;
type EntityFilterEntryDefinition = z.infer<typeof EntityFilterEntrySchemaDefinition>;
/**
 * Filter entry payload served by list filter endpoints
 *
 * @openapiSchema EntityFilterEntry
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterOptionSetSchema
 * @usedBySchema EntityFilterRefinedFiltersSchema
 * @contractShape entity.filter-entry
 * @contractRole canonical
 */
export declare const EntityFilterEntrySchema: z.ZodType<EntityFilterEntryDefinition>;
export type EntityFilterEntry = z.infer<typeof EntityFilterEntrySchema>;
export {};
//# sourceMappingURL=filter-entry.d.ts.map