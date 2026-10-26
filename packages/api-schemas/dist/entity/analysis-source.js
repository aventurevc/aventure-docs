// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityResearchPublicSourceSchema } from "./research-public-source.js";
const EntityAnalysisSourceSchemaDefinition = z.object({
    /** Published page URL and fetch times; absent for unavailable, private, internal, or legal sources. */
    publicSource: EntityResearchPublicSourceSchema.nullish(),
    /** Source document UUID a draft quote points to. */
    sourceDocumentId: z.uuid(),
});
/**
 * Public page behind a source document a draft quotes; never persisted in a draft.
 *
 * @openapiSchema EntityAnalysisSource
 * @endpoint GET /v1/research-runs/{runId}/draft/sources
 * @contractShape entity.analysis-source
 * @contractRole canonical
 */
export const EntityAnalysisSourceSchema = EntityAnalysisSourceSchemaDefinition;
//# sourceMappingURL=analysis-source.js.map