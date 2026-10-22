import { z } from "zod/v4";
declare const WebSearchSchemaDefinition: z.ZodObject<{
    aiOverview: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        reference: z.ZodArray<z.ZodType<{
            index: number;
            snippet?: string | null | undefined;
            source?: string | null | undefined;
            title: string;
            url: string;
        }, import("../search/ai-overview-reference.ts").SearchAiOverviewReferenceSchemaInput, z.core.$ZodTypeInternals<{
            index: number;
            snippet?: string | null | undefined;
            source?: string | null | undefined;
            title: string;
            url: string;
        }, import("../search/ai-overview-reference.ts").SearchAiOverviewReferenceSchemaInput>>>;
        text: z.ZodString;
    }, z.core.$strip>>>;
    answerBox: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        answer: z.ZodString;
        snippet: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
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
    knowledgeGraph: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        attribute: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
            name: string;
            value: string;
        }, import("../search/knowledge-graph-attribute.ts").SearchKnowledgeGraphAttributeSchemaInput, z.core.$ZodTypeInternals<{
            name: string;
            value: string;
        }, import("../search/knowledge-graph-attribute.ts").SearchKnowledgeGraphAttributeSchemaInput>>>>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    relatedQuestion: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        question: string;
        snippet?: string | null | undefined;
        title?: string | null | undefined;
        url?: string | null | undefined;
    }, import("../search/related-question.ts").SearchRelatedQuestionSchemaInput, z.core.$ZodTypeInternals<{
        question: string;
        snippet?: string | null | undefined;
        title?: string | null | undefined;
        url?: string | null | undefined;
    }, import("../search/related-question.ts").SearchRelatedQuestionSchemaInput>>>>>;
    relatedSearch: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    result: z.ZodArray<z.ZodType<{
        image?: string | null | undefined;
        relevanceScore: number;
        snippet: string;
        title: string;
        url: string;
    }, import("../search/hit.ts").SearchHitSchemaInput, z.core.$ZodTypeInternals<{
        image?: string | null | undefined;
        relevanceScore: number;
        snippet: string;
        title: string;
        url: string;
    }, import("../search/hit.ts").SearchHitSchemaInput>>>;
    search: z.ZodType<{
        allowSuspectedShellStrip?: boolean | null | undefined;
        bypassCache?: boolean | undefined;
        cacheKey?: string | null | undefined;
        deep?: boolean | undefined;
        deferredAiOverview?: boolean | undefined;
        language?: string | null | undefined;
        provider?: string | null | undefined;
        region?: string | null | undefined;
        resultLimit?: number | null | undefined;
        retrievedFor?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        search: string;
        source?: string | null | undefined;
    }, import("../search/search.ts").SearchSchemaInput, z.core.$ZodTypeInternals<{
        allowSuspectedShellStrip?: boolean | null | undefined;
        bypassCache?: boolean | undefined;
        cacheKey?: string | null | undefined;
        deep?: boolean | undefined;
        deferredAiOverview?: boolean | undefined;
        language?: string | null | undefined;
        provider?: string | null | undefined;
        region?: string | null | undefined;
        resultLimit?: number | null | undefined;
        retrievedFor?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        search: string;
        source?: string | null | undefined;
    }, import("../search/search.ts").SearchSchemaInput>>;
    sportsResult: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        league: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        team: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
            name: string;
            seeding?: number | null | undefined;
        }, import("../search/sports-team.ts").SearchSportsTeamSchemaInput, z.core.$ZodTypeInternals<{
            name: string;
            seeding?: number | null | undefined;
        }, import("../search/sports-team.ts").SearchSportsTeamSchemaInput>>>>>;
        venue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
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