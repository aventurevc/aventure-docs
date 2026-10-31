// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobEnqueueSchema } from "../job/enqueue.js";
import { LookupJobMentionSchema } from "../lookup/job-mention.js";
import { LookupSourceReadSchema } from "../lookup/source-read.js";
import { NewsSchema } from "../news/news.js";
const MentionLookupSchemaDefinition = z.object({
    /** Present only for callers that sent Prefer: respond-async. Identifications are settled but shell filing is pending. Poll statusUrl until the lookup job completes; merge its filing outcomes by mentionType and name. */
    filing: JobEnqueueSchema.nullish(),
    /** Each distinct name: the page's own company first, then the order the source shows them, with news outlets and the page's bylined authors last. */
    mention: z.array(LookupJobMentionSchema),
    /** The stored aVenture news article the source page is, when it is one; absent otherwise. */
    news: NewsSchema.nullish(),
    /** Publisher reading state, available before the first name settles; a continuation is present only after its durable job commits. */
    sourceRead: LookupSourceReadSchema.nullish(),
    /** True when the page names more than this answer holds: more names than one live lookup reads, or a body longer than the read limit. A lookup job with maxNames reads every name. */
    truncated: z.boolean().optional(),
});
/**
 * Every company, organization, investor, and person a page or screenshot names, each identified against stored records.
 *
 * @openapiSchema MentionLookup
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @contractShape mention.lookup
 * @contractRole canonical
 */
export const MentionLookupSchema = MentionLookupSchemaDefinition;
//# sourceMappingURL=lookup.js.map