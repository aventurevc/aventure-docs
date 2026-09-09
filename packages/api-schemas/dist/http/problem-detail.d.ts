import { z } from "zod/v4";
declare const ProblemDetailSchemaDefinition: z.ZodObject<{
    circuitBreaker: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    code: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        GEOCODE_PROVIDER_ERROR: "GEOCODE_PROVIDER_ERROR";
        INFERENCE_PROFILES_MISSING: "INFERENCE_PROFILES_MISSING";
        INFERENCE_PROFILE_API_KEY_MISSING: "INFERENCE_PROFILE_API_KEY_MISSING";
        INFERENCE_PROVIDER_ERROR: "INFERENCE_PROVIDER_ERROR";
        INFERENCE_PROVIDER_INVALID_JSON: "INFERENCE_PROVIDER_INVALID_JSON";
        INFERENCE_PROVIDER_RESPONSE_EMPTY: "INFERENCE_PROVIDER_RESPONSE_EMPTY";
        JOBRUNR_DISABLED: "JOBRUNR_DISABLED";
        JOBRUNR_STORAGE_UNAVAILABLE: "JOBRUNR_STORAGE_UNAVAILABLE";
        frontend_cache_epoch_mode_not_targeted: "frontend_cache_epoch_mode_not_targeted";
        github_fetch_failed: "github_fetch_failed";
        image_blocklist_match: "image_blocklist_match";
        image_brand_mismatch: "image_brand_mismatch";
        image_monochrome: "image_monochrome";
        image_monogram: "image_monogram";
        image_processing_error: "image_processing_error";
        image_too_small: "image_too_small";
        image_unreadable: "image_unreadable";
        image_wrong_aspect: "image_wrong_aspect";
        news_rss_article_fetch_failed: "news_rss_article_fetch_failed";
        news_rss_feed_fetch_failed: "news_rss_feed_fetch_failed";
        news_similarity_embedding_unavailable: "news_similarity_embedding_unavailable";
        not_authorized: "not_authorized";
        origin_detail_capacity: "origin_detail_capacity";
        origin_detail_shutdown: "origin_detail_shutdown";
        r2_delete_failed: "r2_delete_failed";
        r2_fetch_failed: "r2_fetch_failed";
        r2_upload_failed: "r2_upload_failed";
        rateLimited: "rateLimited";
        rbac_lookup_unavailable: "rbac_lookup_unavailable";
        search_provider_error: "search_provider_error";
        search_provider_not_configured: "search_provider_not_configured";
        sec_edgar_fetch_failed: "sec_edgar_fetch_failed";
        sentry_api_error: "sentry_api_error";
        source_document_body_unavailable: "source_document_body_unavailable";
        source_document_capture_limit_exceeded: "source_document_capture_limit_exceeded";
        suspectedShellStrip: "suspectedShellStrip";
        swagger_headers_unconfigured: "swagger_headers_unconfigured";
        url_surface_misclassification: "url_surface_misclassification";
        web_crawl_fetch_failed: "web_crawl_fetch_failed";
    }>>>;
    conflictingRecord: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        deletedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        id: z.ZodString;
        isHidden: z.ZodBoolean;
        nameBrand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resourceType: z.ZodEnum<{
            blog: "blog";
            content: "content";
            entity: "entity";
            news: "news";
            person: "person";
        }>;
        showOnSitemap: z.ZodBoolean;
        slug: z.ZodString;
    }, z.core.$strip>>>;
    detail: z.ZodOptional<z.ZodString>;
    details: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodType<{
        existingJoin: {
            owner: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            };
            urlId: number;
        }[];
        fragmentIgnored: boolean;
        guidance: string;
        normalizedUrl?: string | null | undefined;
        requestedOwner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        url: string;
        urlType: string;
    }, unknown, z.core.$ZodTypeInternals<{
        existingJoin: {
            owner: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            };
            urlId: number;
        }[];
        fragmentIgnored: boolean;
        guidance: string;
        normalizedUrl?: string | null | undefined;
        requestedOwner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        url: string;
        urlType: string;
    }, unknown>>, z.ZodType<{
        candidateEntityId: string[];
        candidatePersonId: string[];
        hint: string;
        normalizedUrl?: string | null | undefined;
        url: string;
        urlType?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        candidateEntityId: string[];
        candidatePersonId: string[];
        hint: string;
        normalizedUrl?: string | null | undefined;
        url: string;
        urlType?: string | null | undefined;
    }, unknown>>, z.ZodType<{
        candidate?: {
            externalId?: string | null | undefined;
            id: string;
            name?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicPath?: string | null | undefined;
            reason: string[];
            score: number;
            slug?: string | null | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
        }[] | null | undefined;
        newsCandidate?: {
            externalId?: string | null | undefined;
            id: number;
            reason: string[];
            score: number;
            slug?: string | null | undefined;
        }[] | null | undefined;
        overridePath?: string | null | undefined;
        threshold: number;
    }, unknown, z.core.$ZodTypeInternals<{
        candidate?: {
            externalId?: string | null | undefined;
            id: string;
            name?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicPath?: string | null | undefined;
            reason: string[];
            score: number;
            slug?: string | null | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
        }[] | null | undefined;
        newsCandidate?: {
            externalId?: string | null | undefined;
            id: number;
            reason: string[];
            score: number;
            slug?: string | null | undefined;
        }[] | null | undefined;
        overridePath?: string | null | undefined;
        threshold: number;
    }, unknown>>, z.ZodType<{
        availableOverrides: ("ATTACH_INACTIVE" | "REACTIVATE")[];
        slug: string;
        tagId: number;
    }, unknown, z.core.$ZodTypeInternals<{
        availableOverrides: ("ATTACH_INACTIVE" | "REACTIVATE")[];
        slug: string;
        tagId: number;
    }, unknown>>, z.ZodType<{
        conflictingArticleId: number;
        conflictingArticleSlug: string;
        conflictingArticleTitle: string;
    }, unknown, z.core.$ZodTypeInternals<{
        conflictingArticleId: number;
        conflictingArticleSlug: string;
        conflictingArticleTitle: string;
    }, unknown>>]>>>;
    error: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>>;
    existingRedirect: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        newUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        oldUrl: z.ZodString;
        targetCurrentSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        targetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        targetResourceType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            blog: "blog";
            content: "content";
            entity: "entity";
            news: "news";
            person: "person";
        }>>>;
    }, z.core.$strip>>>;
    feId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hammingDistance: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    hint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    instance: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    limitType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        BILLING_ALLOWANCE: "BILLING_ALLOWANCE";
        CLERK_PUBLIC_ADMISSION: "CLERK_PUBLIC_ADMISSION";
        CLERK_SCRIPT_LOAD: "CLERK_SCRIPT_LOAD";
        FORM: "FORM";
        GLOBAL: "GLOBAL";
        INFERENCE_PROVIDER: "INFERENCE_PROVIDER";
        IP: "IP";
        NATURAL_SEARCH: "NATURAL_SEARCH";
        ORIGIN_DETAIL: "ORIGIN_DETAIL";
        RESILIENCE4J: "RESILIENCE4J";
        SUBNET: "SUBNET";
        UNKNOWN: "UNKNOWN";
        WEB_SEARCH: "WEB_SEARCH";
    }>>>;
    matchedBlocklistKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mediaType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    moderationReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parseError: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("./json-value.ts").JsonValue, unknown, z.core.$ZodTypeInternals<import("./json-value.ts").JsonValue, unknown>>>>;
    remaining: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    requiredRole: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resetAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    resolution: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        acceptedValue: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        action: z.ZodEnum<{
            authenticate: "authenticate";
            removeParameter: "removeParameter";
            reviewCandidates: "reviewCandidates";
            setField: "setField";
            setParameter: "setParameter";
            useEndpoint: "useEndpoint";
        }>;
        endpoint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fieldPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        parameter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        retryable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>>>;
    retryAfterSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    spanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodInt>;
    suggestion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    suggestions: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>>;
    suspectedFragment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodString>;
    traceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodOptional<z.ZodString>;
    unknownParameters: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    used: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    validParameters: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    value: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    windowSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type ProblemDetailDefinition = z.infer<typeof ProblemDetailSchemaDefinition>;
/**
 * RFC 9457 problem response with aVenture extensions.
 *
 * @openapiSchema ProblemDetail
 * @standardProblemResponse
 * @contractShape http.problem-detail
 * @contractRole canonical
 */
export declare const ProblemDetailSchema: z.ZodType<ProblemDetailDefinition>;
export type ProblemDetail = z.infer<typeof ProblemDetailSchema>;
export {};
//# sourceMappingURL=problem-detail.d.ts.map