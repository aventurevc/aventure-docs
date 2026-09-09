// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DomainConflictDetailsSchema } from "../domain/conflict-details.js";
import { JsonValueSchema } from "./json-value.js";
import { ProblemResolutionSchema } from "../problem/resolution.js";
import { CurrentSlugOwnerSchema } from "../redirect/current-slug-owner.js";
import { RedirectSlugPathSchema } from "../redirect/redirect-slug-path.js";
const ProblemDetailSchemaDefinition = z.object({
    circuitBreaker: z.string().nullish(),
    /** Machine-readable secondary code on ProblemDetail.code. Agents should branch on this value when the HTTP status alone does not identify the recovery path. Code groups include auth/session, rate limiting, job infrastructure, RBAC, external providers, image processing, R2 storage, search, and inference. Many codes indicate infra/admin-only conditions where the correct agent action is to surface the error and stop, not retry. */
    code: z
        .enum([
        "not_authorized",
        "rateLimited",
        "origin_detail_capacity",
        "origin_detail_shutdown",
        "suspectedShellStrip",
        "url_surface_misclassification",
        "JOBRUNR_DISABLED",
        "JOBRUNR_STORAGE_UNAVAILABLE",
        "rbac_lookup_unavailable",
        "GEOCODE_PROVIDER_ERROR",
        "sentry_api_error",
        "swagger_headers_unconfigured",
        "frontend_cache_epoch_mode_not_targeted",
        "image_blocklist_match",
        "image_monochrome",
        "image_too_small",
        "image_wrong_aspect",
        "image_monogram",
        "image_unreadable",
        "image_processing_error",
        "image_brand_mismatch",
        "web_crawl_fetch_failed",
        "news_rss_feed_fetch_failed",
        "news_rss_article_fetch_failed",
        "r2_fetch_failed",
        "r2_delete_failed",
        "r2_upload_failed",
        "source_document_body_unavailable",
        "source_document_capture_limit_exceeded",
        "news_similarity_embedding_unavailable",
        "search_provider_not_configured",
        "search_provider_error",
        "sec_edgar_fetch_failed",
        "github_fetch_failed",
        "INFERENCE_PROVIDER_ERROR",
        "INFERENCE_PROVIDER_RESPONSE_EMPTY",
        "INFERENCE_PROVIDER_INVALID_JSON",
        "INFERENCE_PROFILES_MISSING",
        "INFERENCE_PROFILE_API_KEY_MISSING",
    ])
        .nullish(),
    conflictingRecord: CurrentSlugOwnerSchema.nullish(),
    detail: z.string().optional(),
    /** Structured conflict details. Create duplicate reviews and deterministic lookup ambiguity return DuplicateCreateReview; the returned candidates are the decision surface for update, create-with-override, or block. score/threshold rank review priority and are not proof that the requested record is absent. */
    details: DomainConflictDetailsSchema.nullish(),
    error: z.record(z.string(), z.string()).nullish(),
    existingRedirect: RedirectSlugPathSchema.nullish(),
    feId: z.string().nullish(),
    field: z.string().nullish(),
    hammingDistance: z.number().int().nullish(),
    hint: z.string().nullish(),
    instance: z.string().optional(),
    limit: z.number().int().nullish(),
    limitType: z
        .enum([
        "FORM",
        "GLOBAL",
        "SUBNET",
        "IP",
        "UNKNOWN",
        "RESILIENCE4J",
        "WEB_SEARCH",
        "NATURAL_SEARCH",
        "BILLING_ALLOWANCE",
        "CLERK_PUBLIC_ADMISSION",
        "CLERK_SCRIPT_LOAD",
        "ORIGIN_DETAIL",
        "INFERENCE_PROVIDER",
    ])
        .nullish(),
    matchedBlocklistKey: z.string().nullish(),
    mediaType: z.string().nullish(),
    moderationReason: z.string().nullish(),
    parseError: z.string().nullish(),
    path: z.string().nullish(),
    properties: z.record(z.string(), JsonValueSchema).optional(),
    remaining: z.number().int().nullish(),
    requiredRole: z.string().nullish(),
    resetAt: z.iso.datetime({ offset: true }).nullish(),
    resolution: ProblemResolutionSchema.nullish(),
    retryAfterSeconds: z.number().int().nullish(),
    spanId: z.string().nullish(),
    status: z.int().optional(),
    suggestion: z.string().nullish(),
    suggestions: z.record(z.string(), z.string()).nullish(),
    suspectedFragment: z.string().nullish(),
    title: z.string().optional(),
    traceId: z.string().nullish(),
    type: z.string().optional(),
    unknownParameters: z.array(z.string()).nullish(),
    used: z.number().int().nullish(),
    validParameters: z.array(z.string()).nullish(),
    value: z.string().nullish(),
    windowSeconds: z.number().int().nullish(),
});
/**
 * RFC 9457 problem response with aVenture extensions.
 *
 * @openapiSchema ProblemDetail
 * @standardProblemResponse
 * @contractShape http.problem-detail
 * @contractRole canonical
 */
export const ProblemDetailSchema = ProblemDetailSchemaDefinition;
//# sourceMappingURL=problem-detail.js.map