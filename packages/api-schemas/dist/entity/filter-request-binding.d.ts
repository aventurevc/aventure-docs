import { z } from "zod/v4";
/**
 * Property path and value shape in the canonical EntityFilter JSON body.
 *
 * @openapiSchema EntityFilterRequestBinding
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterMetaSchema
 * @contractShape entity.filter-request-binding
 * @contractRole canonical
 */
export declare const EntityFilterRequestBindingSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type EntityFilterRequestBinding = z.infer<typeof EntityFilterRequestBindingSchema>;
//# sourceMappingURL=filter-request-binding.d.ts.map