import { z } from "zod/v4";
declare const WebSearchSchemaDefinition: z.ZodObject<{
    document: z.ZodType<{
        cacheHitCount: number;
        createdAt: string;
        documentType: string;
        expiresAt?: string | null | undefined;
        httpStatus?: number | null | undefined;
        id: string;
        lastAccessedAt?: string | null | undefined;
        provider: string;
        providerRequestId?: string | null | undefined;
        rawByteCount?: number | null | undefined;
        rawCharset?: string | null | undefined;
        rawMediaType?: string | null | undefined;
        sourceKey: string;
        upstreamContentEncoding?: string | null | undefined;
    }, import("../source/document-list.ts").SourceDocumentListSchemaInput, z.core.$ZodTypeInternals<{
        cacheHitCount: number;
        createdAt: string;
        documentType: string;
        expiresAt?: string | null | undefined;
        httpStatus?: number | null | undefined;
        id: string;
        lastAccessedAt?: string | null | undefined;
        provider: string;
        providerRequestId?: string | null | undefined;
        rawByteCount?: number | null | undefined;
        rawCharset?: string | null | undefined;
        rawMediaType?: string | null | undefined;
        sourceKey: string;
        upstreamContentEncoding?: string | null | undefined;
    }, import("../source/document-list.ts").SourceDocumentListSchemaInput>>;
    result: z.ZodArray<z.ZodType<{
        relevanceScore: number;
        snippet: string;
        title: string;
        url: string;
    }, import("../search/hit.ts").SearchHitSchemaInput, z.core.$ZodTypeInternals<{
        relevanceScore: number;
        snippet: string;
        title: string;
        url: string;
    }, import("../search/hit.ts").SearchHitSchemaInput>>>;
    search: z.ZodType<{
        allowSuspectedShellStrip?: boolean | null | undefined;
        bypassCache?: boolean | undefined;
        cacheKey?: string | null | undefined;
        catalogRevision?: number | null | undefined;
        deep?: boolean | undefined;
        language?: string | null | undefined;
        region?: string | null | undefined;
        resultLimit?: number | null | undefined;
        retrievedFor?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        search: string;
        source?: string | null | undefined;
        tenant?: "development" | "production" | "staging" | "unassigned" | null | undefined;
        tenantPolicyRevision?: number | null | undefined;
    }, import("../search/search.ts").SearchSchemaInput, z.core.$ZodTypeInternals<{
        allowSuspectedShellStrip?: boolean | null | undefined;
        bypassCache?: boolean | undefined;
        cacheKey?: string | null | undefined;
        catalogRevision?: number | null | undefined;
        deep?: boolean | undefined;
        language?: string | null | undefined;
        region?: string | null | undefined;
        resultLimit?: number | null | undefined;
        retrievedFor?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        search: string;
        source?: string | null | undefined;
        tenant?: "development" | "production" | "staging" | "unassigned" | null | undefined;
        tenantPolicyRevision?: number | null | undefined;
    }, import("../search/search.ts").SearchSchemaInput>>;
}, z.core.$strip>;
type WebSearchDefinition = z.infer<typeof WebSearchSchemaDefinition>;
export interface WebSearchSchemaInput extends z.input<typeof WebSearchSchemaDefinition> {
}
/**
 * Live web search result with its backing source-document row and normalized items
 *
 * @openapiSchema WebSearch
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @contractShape web.search
 * @contractRole canonical
 */
export declare const WebSearchSchema: z.ZodType<WebSearchDefinition, WebSearchSchemaInput>;
export type WebSearch = z.infer<typeof WebSearchSchema>;
export {};
//# sourceMappingURL=search.d.ts.map