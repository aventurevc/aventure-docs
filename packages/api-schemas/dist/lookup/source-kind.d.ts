import { z } from "zod/v4";
/**
 * What a lookup's source is, so a client names it while it loads: a news article, a LinkedIn or X post, or a supplied profile. An unknown future kind reads as a generic source.
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
export declare const LookupSourceKindSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ARTICLE: "ARTICLE";
    POST: "POST";
    PROFILE: "PROFILE";
}>, z.ZodString]> & {
    enum: {
        ARTICLE: "ARTICLE";
        POST: "POST";
        PROFILE: "PROFILE";
    };
};
export type LookupSourceKind = z.infer<typeof LookupSourceKindSchema>;
//# sourceMappingURL=source-kind.d.ts.map