// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityAnalysisCitationSchemaDefinition = z.object({
    /** Nonempty verbatim quote to verify against the archived document. */
    quote: z.string(),
    /** Canonical archived source document UUID. */
    sourceDocumentId: z.uuid(),
});
/**
 * Verbatim evidence from an archived source document.
 *
 * @openapiSchema EntityAnalysisCitation
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisSectionMutationSchema
 * @usedBySchema EntityAnalysisSectionSchema
 * @contractShape entity.analysis-citation
 * @contractRole canonical
 */
export const EntityAnalysisCitationSchema = EntityAnalysisCitationSchemaDefinition;
//# sourceMappingURL=analysis-citation.js.map