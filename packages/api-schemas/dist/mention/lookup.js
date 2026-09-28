// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { LookupJobMentionSchema } from "../lookup/job-mention.js";
import { LookupJobMutationSchema } from "../lookup/job-mutation.js";
const MentionLookupSchemaDefinition = z.object({
    /** Each distinct name, in the order the source shows it. */
    mention: z.array(LookupJobMentionSchema),
    /** The page read; absent when only a screenshot was sent. */
    source: LookupJobMutationSchema.nullish(),
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