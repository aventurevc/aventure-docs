import { z } from "zod/v4";
declare const LookupMentionSchemaDefinition: z.ZodObject<{
    name: z.ZodString;
    searchQuery: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        COMPANY: "COMPANY";
        PERSON: "PERSON";
    }>;
}, z.core.$strip>;
type LookupMentionDefinition = z.infer<typeof LookupMentionSchemaDefinition>;
/**
 * One company or person a caller read from a page or screenshot it did not send.
 *
 * @openapiSchema LookupMention
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @usedBySchema LookupJobMutationSchema
 * @contractShape lookup.mention
 * @contractRole canonical
 */
export declare const LookupMentionSchema: z.ZodType<LookupMentionDefinition>;
export type LookupMention = z.infer<typeof LookupMentionSchema>;
export {};
//# sourceMappingURL=mention.d.ts.map