// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SourceDocumentListSchemaDefinition = z.object({
    cacheHitCount: z.int(),
    createdAt: z.iso.datetime({ offset: true }),
    documentType: z.string(),
    expiresAt: z.iso.datetime({ offset: true }).nullish(),
    httpStatus: z.int().nullish(),
    /** Document id */
    id: z.uuid(),
    lastAccessedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Newest successful capture time in latestPerUrl mode; otherwise this version last fetch. Older API revisions omit this field. */
    lastFetchedAt: z.iso.datetime({ offset: true }).optional(),
    provider: z.string(),
    providerRequestId: z.string().nullish(),
    rawByteCount: z.number().int().nullish(),
    rawCharset: z.string().nullish(),
    rawMediaType: z.string().nullish(),
    /** What identifies this fetch: the normalized URL, a hash of the query, or a dataset name plus an external id */
    sourceKey: z.string(),
    upstreamContentEncoding: z.string().nullish(),
    /** Fetched page URL; also used to page through results by recency */
    url: z.string().nullish(),
});
/**
 * A stored source document's metadata, without its content.
 *
 * @openapiSchema SourceDocumentList
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape source.document-list
 * @contractRole canonical
 */
export const SourceDocumentListSchema = SourceDocumentListSchemaDefinition;
//# sourceMappingURL=document-list.js.map