// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAnalysisSectionSchema } from "./analysis-section.js";
import { EntityAnalysisVerificationSchema } from "./analysis-verification.js";
const EntityAnalysisDraftSchemaDefinition = z.object({
    /** Entity researched by this run. */
    entityId: z.uuid(),
    /** Run that owns this private draft. */
    runId: z.uuid(),
    /** Current sections, each identified by its snippet type key. */
    section: z.array(EntityAnalysisSectionSchema),
    /** Acceptance and publication outcomes recorded for this draft version. */
    verification: EntityAnalysisVerificationSchema.nullish(),
    /** Latest analysis-section event sequence; zero before the first section. */
    version: z.int().min(0),
});
/**
 * Private analysis for one research run, with section acceptance outcomes.
 *
 * @openapiSchema EntityAnalysisDraft
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @contractShape entity.analysis-draft
 * @contractRole canonical
 */
export const EntityAnalysisDraftSchema = EntityAnalysisDraftSchemaDefinition;
//# sourceMappingURL=analysis-draft.js.map