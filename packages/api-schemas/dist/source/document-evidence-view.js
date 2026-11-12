// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SourceDocumentEvidenceViewSchemaKnownMembers = z.enum(["LEGACY", "ARTICLE_V1"]);
/**
 * Captured-text representation: LEGACY preserves existing offsets; ARTICLE_V1 reads the captured article without page controls.
 *
 * @openapiSchema SourceDocumentEvidenceView
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft/sections/{sectionKey}/writes/{writeId}
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisCitationSchema
 * @usedBySchema ResearchFindingSchema
 * @contractShape source.document-evidence-view
 * @contractRole canonical
 */
export const SourceDocumentEvidenceViewSchema = Object.assign(z.union([SourceDocumentEvidenceViewSchemaKnownMembers, z.string()]), { enum: SourceDocumentEvidenceViewSchemaKnownMembers.enum });
//# sourceMappingURL=document-evidence-view.js.map