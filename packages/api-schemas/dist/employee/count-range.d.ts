import { z } from "zod/v4";
declare const EmployeeCountRangeSchemaDefinition: z.ZodObject<{
    matchMode: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        containment: "containment";
        numeric: "numeric";
        overlap: "overlap";
    }>, z.ZodString]> & {
        enum: {
            containment: "containment";
            numeric: "numeric";
            overlap: "overlap";
        };
    }>>;
    max: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    min: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type EmployeeCountRangeDefinition = z.infer<typeof EmployeeCountRangeSchemaDefinition>;
export interface EmployeeCountRangeSchemaInput extends z.input<typeof EmployeeCountRangeSchemaDefinition> {
}
/**
 * Inclusive range applied to one current workforce observation.
 *
 * @openapiSchema EmployeeCountRange
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/people
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/exports
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape employee.count-range
 * @contractRole canonical
 */
export declare const EmployeeCountRangeSchema: z.ZodType<EmployeeCountRangeDefinition, EmployeeCountRangeSchemaInput>;
export type EmployeeCountRange = z.infer<typeof EmployeeCountRangeSchema>;
export {};
//# sourceMappingURL=count-range.d.ts.map