import { z } from "zod/v4";
declare const AcceleratorParticipationDetailSchemaDefinition: z.ZodObject<{
    batch: z.ZodString;
    program: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type AcceleratorParticipationDetailDefinition = z.infer<typeof AcceleratorParticipationDetailSchemaDefinition>;
export interface AcceleratorParticipationDetailSchemaInput extends z.input<typeof AcceleratorParticipationDetailSchemaDefinition> {
}
/**
 * @openapiSchema AcceleratorParticipationDetail
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
 * @usedBySchema AcceleratorParticipationFilterSchema
 * @contractShape accelerator.participation-detail
 * @contractRole canonical
 */
export declare const AcceleratorParticipationDetailSchema: z.ZodType<AcceleratorParticipationDetailDefinition, AcceleratorParticipationDetailSchemaInput>;
export type AcceleratorParticipationDetail = z.infer<typeof AcceleratorParticipationDetailSchema>;
export {};
//# sourceMappingURL=participation-detail.d.ts.map