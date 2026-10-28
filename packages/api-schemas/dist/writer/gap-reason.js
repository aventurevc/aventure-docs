// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WriterGapReasonSchemaKnownMembers = z.enum([
    "NOT_DISCLOSED",
    "NOT_FOUND",
    "NOT_APPLICABLE",
    "CONFLICTING",
]);
/**
 * Reason a research gap remains unresolved.
 *
 * @openapiSchema WriterGapReason
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema WriterGapSchema
 * @contractShape writer.gap-reason
 * @contractRole canonical
 */
export const WriterGapReasonSchema = Object.assign(z.union([WriterGapReasonSchemaKnownMembers, z.string()]), { enum: WriterGapReasonSchemaKnownMembers.enum });
//# sourceMappingURL=gap-reason.js.map