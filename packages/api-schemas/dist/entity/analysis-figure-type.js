// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityAnalysisFigureTypeSchemaKnownMembers = z.enum([
    "COMPARISON",
    "TIMELINE",
    "FLOW",
    "METRIC",
]);
/**
 * Figure layout: COMPARISON matrix of parties by attribute, dated TIMELINE, ordered FLOW of steps, or METRIC key figures.
 *
 * @openapiSchema EntityAnalysisFigureType
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisFigureSchema
 * @contractShape entity.analysis-figure-type
 * @contractRole canonical
 */
export const EntityAnalysisFigureTypeSchema = Object.assign(z.union([EntityAnalysisFigureTypeSchemaKnownMembers, z.string()]), { enum: EntityAnalysisFigureTypeSchemaKnownMembers.enum });
//# sourceMappingURL=analysis-figure-type.js.map