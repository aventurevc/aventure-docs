// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const RssExtractedMentionSchemaDefinition = z.object({
    /** Name as the source writes it. */
    name: z.string(),
    /** Query to search this name by; defaults to name. */
    searchQuery: z.string().optional(),
    /** Whether the source names a company or a person. */
    type: z.enum(["COMPANY", "PERSON"]),
});
/**
 * One company or person a caller read from a source it did not send.
 *
 * @openapiSchema RssExtractedMention
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @usedBySchema LookupJobMutationSchema
 * @contractShape rss.extracted-mention
 * @contractRole canonical
 */
export const RssExtractedMentionSchema = RssExtractedMentionSchemaDefinition;
//# sourceMappingURL=extracted-mention.js.map