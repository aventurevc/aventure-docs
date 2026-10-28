// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAnalysisCitationSchema } from "./analysis-citation.js";
import { EntityAnalysisFigureSchema } from "./analysis-figure.js";
import { EntityAnalysisParagraphSchema } from "./analysis-paragraph.js";
import { EntityAnalysisSectionOriginSchema } from "./analysis-section-origin.js";
import { WriterBriefSchema } from "../writer/brief.js";
const EntityAnalysisSectionMutationSchemaDefinition = z.object({
    /** Stored source documents and verbatim evidence quotes. */
    citation: z.array(EntityAnalysisCitationSchema),
    /** At most two figures grounded in the section's quotes; omit for no figures. */
    figure: z.array(EntityAnalysisFigureSchema).optional(),
    /** Exact research snippet typeValue, matching the section path key. */
    key: z.string(),
    /** Author hint; the server assigns origin from the credential. */
    origin: EntityAnalysisSectionOriginSchema,
    /** Catalog-ordered paragraphs; omit when supplying writerBrief. */
    paragraph: z.array(EntityAnalysisParagraphSchema).nullish(),
    /** Heading displayed above this section. */
    title: z.string(),
    /** Finished brief for the shared prose writer, supplied instead of paragraph. */
    writerBrief: WriterBriefSchema.nullish(),
});
/**
 * Replace a private analysis section with paragraphs or a finished writer brief.
 *
 * @openapiSchema EntityAnalysisSectionMutation
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @contractShape entity.analysis-section-mutation
 * @contractRole canonical
 */
export const EntityAnalysisSectionMutationSchema = EntityAnalysisSectionMutationSchemaDefinition;
//# sourceMappingURL=analysis-section-mutation.js.map