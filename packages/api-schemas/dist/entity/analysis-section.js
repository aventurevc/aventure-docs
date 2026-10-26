// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAnalysisCitationSchema } from "./analysis-citation.js";
import { EntityAnalysisFigureSchema } from "./analysis-figure.js";
import { EntityAnalysisParagraphSchema } from "./analysis-paragraph.js";
import { EntityAnalysisSectionOriginSchema } from "./analysis-section-origin.js";
const EntityAnalysisSectionSchemaDefinition = z.object({
    /** Stored source documents and verbatim evidence quotes; verification occurs before publication. */
    citation: z.array(EntityAnalysisCitationSchema),
    /** At most two figures illustrating this section; each cell excerpts one of its quotes. */
    figure: z.array(EntityAnalysisFigureSchema).optional(),
    /** Exact typeValue from GET /v1/entities/research-snippets/types; also the section path key. */
    key: z.string(),
    /** Author of this edit; the server derives this from the authenticated caller. */
    origin: EntityAnalysisSectionOriginSchema,
    /** Paragraphs in catalog order, satisfying paragraphShape and analysisSectionLabel. */
    paragraph: z.array(EntityAnalysisParagraphSchema),
    /** Heading displayed above this section. */
    title: z.string(),
});
/**
 * One unverified analysis section; replace it by its snippet type key.
 *
 * @openapiSchema EntityAnalysisSection
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisDraftSchema
 * @contractShape entity.analysis-section
 * @contractRole canonical
 */
export const EntityAnalysisSectionSchema = EntityAnalysisSectionSchemaDefinition;
//# sourceMappingURL=analysis-section.js.map