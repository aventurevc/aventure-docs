import { z } from "zod/v4";
/**
 * API response fragment for entity filter metadata
 *
 * @openapiSchema EntityFilterMeta
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape entity.filter-meta
 * @contractRole canonical
 */
export declare const EntityFilterMetaSchema: z.ZodObject<{
    applicableTypeRecord: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
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
    requestBinding: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        path: z.ZodArray<z.ZodString>;
        rangeBound: z.ZodArray<z.ZodString>;
        valueShape: z.ZodUnion<readonly [z.ZodEnum<{
            ARRAY: "ARRAY";
            BOOLEAN: "BOOLEAN";
            DECIMAL_RANGE_ARRAY: "DECIMAL_RANGE_ARRAY";
            INTEGER_RANGE_ARRAY: "INTEGER_RANGE_ARRAY";
        }>, z.ZodString]> & {
            enum: {
                ARRAY: "ARRAY";
                BOOLEAN: "BOOLEAN";
                DECIMAL_RANGE_ARRAY: "DECIMAL_RANGE_ARRAY";
                INTEGER_RANGE_ARRAY: "INTEGER_RANGE_ARRAY";
            };
        };
    }, z.core.$strip>>>;
    ui: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        headquartersOption: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            country: z.ZodArray<z.ZodType<{
                country: string;
                state: {
                    city: string[];
                    state: string;
                }[];
            }, import("./filter-headquarters-country.ts").EntityFilterHeadquartersCountrySchemaInput, z.core.$ZodTypeInternals<{
                country: string;
                state: {
                    city: string[];
                    state: string;
                }[];
            }, import("./filter-headquarters-country.ts").EntityFilterHeadquartersCountrySchemaInput>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type EntityFilterMeta = z.infer<typeof EntityFilterMetaSchema>;
//# sourceMappingURL=filter-meta.d.ts.map