import { z } from "zod/v4";
declare const AcceleratorParticipationFilterSchemaDefinition: z.ZodObject<{
    acceleratorEntityId: z.ZodUUID;
    detail: z.ZodType<{
        batch: string;
        program?: string | null | undefined;
    }, import("./participation-detail.ts").AcceleratorParticipationDetailSchemaInput, z.core.$ZodTypeInternals<{
        batch: string;
        program?: string | null | undefined;
    }, import("./participation-detail.ts").AcceleratorParticipationDetailSchemaInput>>;
}, z.core.$strip>;
type AcceleratorParticipationFilterDefinition = z.infer<typeof AcceleratorParticipationFilterSchemaDefinition>;
export interface AcceleratorParticipationFilterSchemaInput extends z.input<typeof AcceleratorParticipationFilterSchemaDefinition> {
}
/**
 * @openapiSchema AcceleratorParticipationFilter
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
 * @endpoint POST /v1/research/runs
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape accelerator.participation-filter
 * @contractRole canonical
 */
export declare const AcceleratorParticipationFilterSchema: z.ZodType<AcceleratorParticipationFilterDefinition, AcceleratorParticipationFilterSchemaInput>;
export type AcceleratorParticipationFilter = z.infer<typeof AcceleratorParticipationFilterSchema>;
export {};
//# sourceMappingURL=participation-filter.d.ts.map