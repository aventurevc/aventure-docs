import { z } from "zod/v4";
/**
 * Canonical request value shape derived from the bound Kotlin property type.
 *
 * @openapiSchema EntityFilterRequestValueShape
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterRequestBindingSchema
 * @contractShape entity.filter-request-value-shape
 * @contractRole canonical
 */
export declare const EntityFilterRequestValueShapeSchema: z.ZodUnion<readonly [z.ZodEnum<{
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
export type EntityFilterRequestValueShape = z.infer<typeof EntityFilterRequestValueShapeSchema>;
//# sourceMappingURL=filter-request-value-shape.d.ts.map