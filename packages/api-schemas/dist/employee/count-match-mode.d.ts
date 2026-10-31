import { z } from "zod/v4";
/**
 * How the requested bounds match the selected current workforce observation.
 *
 * @openapiSchema EmployeeCountMatchMode
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
 * @usedBySchema EmployeeCountRangeSchema
 * @contractShape employee.count-match-mode
 * @contractRole canonical
 */
export declare const EmployeeCountMatchModeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    containment: "containment";
    numeric: "numeric";
    overlap: "overlap";
}>, z.ZodString]> & {
    enum: {
        containment: "containment";
        numeric: "numeric";
        overlap: "overlap";
    };
};
export type EmployeeCountMatchMode = z.infer<typeof EmployeeCountMatchModeSchema>;
//# sourceMappingURL=count-match-mode.d.ts.map