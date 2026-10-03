// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const LookupMentionSchemaDefinition = z.object({
    /** Name as the source writes it. */
    name: z.string(),
    /** PRODUCT_SERVICE only: the organization that offers it, as the source writes it. When the offering resolves among offerings and its provider settles on an organization record, the match is limited to that record's offerings. */
    providerName: z.string().nullish(),
    /** Ignored: the lookup searches by name. Still accepted so callers that send it keep working; omit it. */
    searchQuery: z.string().optional(),
    /** Whether the source names a company, a Product or Service (PRODUCT_SERVICE), or a person. A Product or Service resolves like a company first, then among Product and Service records when that finds no match, and never files a shell. */
    type: z.enum(["COMPANY", "PERSON", "PRODUCT_SERVICE"]),
});
/**
 * One company, Product or Service, or person a caller read from a page or screenshot it did not send.
 *
 * @openapiSchema LookupMention
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @usedBySchema LookupJobMutationSchema
 * @contractShape lookup.mention
 * @contractRole canonical
 */
export const LookupMentionSchema = LookupMentionSchemaDefinition;
//# sourceMappingURL=mention.js.map