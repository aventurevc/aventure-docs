// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DatasourceDataSourceTypeSchema } from "./data-source-type.js";
import { DatasourceProvenanceActorTypeSchema } from "./provenance-actor-type.js";
/**
 * Write provenance supplied on mutation query parameters.
 *
 * @openapiSchema DatasourceProvenanceSource
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @contractShape datasource.provenance-source
 * @contractRole canonical
 */
export const DatasourceProvenanceSourceSchema = z.object({
    /** Actor type; inferred as agent when agentChassis and agentModel are supplied, or as employee from an authenticated user JWT session. */
    actorType: DatasourceProvenanceActorTypeSchema.optional(),
    /** Agent chassis token for agent-authored writes. */
    agentChassis: z.string().nullish(),
    /** Agent model id for agent-authored writes. */
    agentModel: z.string().nullish(),
    /** Source detail or reviewer reference for the write. */
    sourceDetail: z.string(),
    /** Provider name for provider-native IDs or slugs. */
    sourceProvider: z.string().nullish(),
    /** Provider-native source ID. */
    sourceProviderId: z.string().nullish(),
    /** Provider-native source slug. */
    sourceProviderSlug: z.string().nullish(),
    /** Write provenance source type. */
    sourceType: DatasourceDataSourceTypeSchema,
});
//# sourceMappingURL=provenance-source.js.map