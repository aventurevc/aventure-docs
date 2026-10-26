// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityAnalysisSectionOriginSchemaKnownMembers = z.enum(["AGENT", "USER"]);
/**
 * Author of a draft section: the run's agent or its signed-in owner.
 *
 * @openapiSchema EntityAnalysisSectionOrigin
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisSectionSchema
 * @contractShape entity.analysis-section-origin
 * @contractRole canonical
 */
export const EntityAnalysisSectionOriginSchema = Object.assign(z.union([EntityAnalysisSectionOriginSchemaKnownMembers, z.string()]), { enum: EntityAnalysisSectionOriginSchemaKnownMembers.enum });
//# sourceMappingURL=analysis-section-origin.js.map