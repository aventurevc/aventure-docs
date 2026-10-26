// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityAnalysisParagraphSchemaDefinition = z.object({
    /** Catalog analysisSectionLabel at this position; null for ordinary prose. */
    label: z.string().nullish(),
    /** One nonempty paragraph without embedded line breaks. */
    text: z.string(),
});
/**
 * A single paragraph of analysis.
 *
 * @openapiSchema EntityAnalysisParagraph
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisSectionSchema
 * @contractShape entity.analysis-paragraph
 * @contractRole canonical
 */
export const EntityAnalysisParagraphSchema = EntityAnalysisParagraphSchemaDefinition;
//# sourceMappingURL=analysis-paragraph.js.map