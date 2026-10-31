// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const LookupSourceReadPhaseSchemaKnownMembers = z.enum(["READING", "MATCHING"]);
/**
 * Observed article-reading activity; unknown future phases retain their supplied copy.
 *
 * @openapiSchema LookupSourceReadPhase
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @usedBySchema LookupSourceReadSchema
 * @contractShape lookup.source-read-phase
 * @contractRole canonical
 */
export const LookupSourceReadPhaseSchema = Object.assign(z.union([LookupSourceReadPhaseSchemaKnownMembers, z.string()]), { enum: LookupSourceReadPhaseSchemaKnownMembers.enum });
//# sourceMappingURL=source-read-phase.js.map