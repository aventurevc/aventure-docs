import { z } from "zod/v4";
/**
 * A prompt offered beside a broad query's results, with rewritten queries that narrow or widen it.
 *
 * @openapiSchema SearchQualifier
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape search.qualifier
 * @contractRole canonical
 */
export declare const SearchQualifierSchema: z.ZodObject<{
    key: z.ZodString;
    option: z.ZodArray<z.ZodType<{
        label: string;
        query: string;
    }, import("./qualifier-option.ts").SearchQualifierOptionSchemaInput, z.core.$ZodTypeInternals<{
        label: string;
        query: string;
    }, import("./qualifier-option.ts").SearchQualifierOptionSchemaInput>>>;
    prompt: z.ZodString;
}, z.core.$strip>;
export type SearchQualifier = z.infer<typeof SearchQualifierSchema>;
//# sourceMappingURL=qualifier.d.ts.map