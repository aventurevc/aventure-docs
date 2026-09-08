import { z } from "zod/v4";
/**
 * Authenticated actor that authored a provenance write event
 *
 * @openapiSchema DatasourceProvenanceActor
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @contractShape datasource.provenance-actor
 * @contractRole canonical
 */
export declare const DatasourceProvenanceActorSchema: z.ZodObject<{
    agent: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        chassis: z.ZodString;
        model: z.ZodString;
        modelFamily: z.ZodString;
    }, z.core.$strip>>>;
    displayName: z.ZodString;
    employeeDisplayName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    employeeUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodEnum<{
        agent: "agent";
        employee: "employee";
    }>;
}, z.core.$strip>;
export type DatasourceProvenanceActor = z.infer<typeof DatasourceProvenanceActorSchema>;
//# sourceMappingURL=provenance-actor.d.ts.map