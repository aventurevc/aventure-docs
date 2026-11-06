// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const LookupSourceKindSchemaKnownMembers = z.enum(["ARTICLE", "POST", "PROFILE", "DOCUMENT"]);
/**
 * What a lookup's source is, so a client names it while it loads: a news article, a LinkedIn or X post, a supplied profile, or the caller's own captured document (sourceDocumentId). An unknown future kind reads as a generic source.
 *
 * @openapiSchema LookupSourceKind
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @usedBySchema LookupSourceReadSchema
 * @contractShape lookup.source-kind
 * @contractRole canonical
 */
export const LookupSourceKindSchema = Object.assign(z.union([LookupSourceKindSchemaKnownMembers, z.string()]), { enum: LookupSourceKindSchemaKnownMembers.enum });
//# sourceMappingURL=source-kind.js.map