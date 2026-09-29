import { z } from "zod/v4";
/**
 * Actor boundary for a provenance write event
 *
 * @openapiSchema DatasourceProvenanceActorType
 * @endpoint POST /v1/web/search
 * @contractShape datasource.provenance-actor-type
 * @contractRole canonical
 */
export declare const DatasourceProvenanceActorTypeSchema: z.ZodEnum<{
    agent: "agent";
    employee: "employee";
}>;
export type DatasourceProvenanceActorType = z.infer<typeof DatasourceProvenanceActorTypeSchema>;
//# sourceMappingURL=provenance-actor-type.d.ts.map