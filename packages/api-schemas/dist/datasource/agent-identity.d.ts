import { z } from "zod/v4";
/**
 * Validated automated-agent attribution for a write request. Travels on agentChassis and agentModel query parameters; actorType is not required at the OpenAPI/HTTP layer only because the web boundary infers actorType=agent from this complete pair before the domain factory and persistence write lane enforce actor context. Chassis is a CLI/SDK token, modelFamily is the derived LLM family prefix, and model is the full model identifier.
 *
 * @openapiSchema DatasourceAgentIdentity
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema DatasourceProvenanceActorSchema
 * @contractShape datasource.agent-identity
 * @contractRole canonical
 */
export declare const DatasourceAgentIdentitySchema: z.ZodObject<{
    chassis: z.ZodString;
    model: z.ZodString;
    modelFamily: z.ZodString;
}, z.core.$strip>;
export type DatasourceAgentIdentity = z.infer<typeof DatasourceAgentIdentitySchema>;
//# sourceMappingURL=agent-identity.d.ts.map