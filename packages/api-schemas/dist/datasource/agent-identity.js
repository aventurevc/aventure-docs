// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const DatasourceAgentIdentitySchema = z.object({
    /** Wire token from app.contracts.agent-provenance.chassis keys. */
    chassis: z.string(),
    /** Full agent model identifier with the family prefix preserved. */
    model: z.string(),
    /** Model family derived from the leading token of the model identifier. */
    modelFamily: z.string(),
});
//# sourceMappingURL=agent-identity.js.map