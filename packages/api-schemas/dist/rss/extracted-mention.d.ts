import { z } from "zod/v4";
declare const RssExtractedMentionSchemaDefinition: z.ZodObject<{
    name: z.ZodString;
    searchQuery: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        COMPANY: "COMPANY";
        PERSON: "PERSON";
    }>;
}, z.core.$strip>;
type RssExtractedMentionDefinition = z.infer<typeof RssExtractedMentionSchemaDefinition>;
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
export declare const RssExtractedMentionSchema: z.ZodType<RssExtractedMentionDefinition>;
export type RssExtractedMention = z.infer<typeof RssExtractedMentionSchema>;
export {};
//# sourceMappingURL=extracted-mention.d.ts.map