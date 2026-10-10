// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { LookupJobMentionSchema } from "../lookup/job-mention.js";
const MentionLookupSchemaDefinition = z.object({
    /** Each distinct name, in the order the source shows it. */
    mention: z.array(LookupJobMentionSchema),
    /** True when the page names more than this answer holds: more names than one live lookup reads, or a body longer than the read limit. A lookup job with maxNames reads every name. */
    truncated: z.boolean().optional(),
});
/**
 * Every company, organization, investor, and person a page or screenshot names, each identified against stored records.
 *
 * @openapiSchema MentionLookup
 * @endpoint POST /v1/lookup-mentions
 * @contractShape mention.lookup
 * @contractRole canonical
 */
export const MentionLookupSchema = MentionLookupSchemaDefinition;
//# sourceMappingURL=lookup.js.map