// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DomainConflictDetailsSchema } from "../domain/conflict-details.js";
import { JsonValueSchema } from "./json-value.js";
import { ProblemResolutionSchema } from "../problem/resolution.js";
import { CurrentSlugOwnerSchema } from "../redirect/current-slug-owner.js";
import { RedirectSlugPathSchema } from "../redirect/redirect-slug-path.js";
const ProblemDetailSchemaDefinition = z.object({
    /** Which monthly allowance a BILLING_ALLOWANCE refusal exhausted. */
    allowanceType: z
        .enum(["NEW_COMPANY", "UPDATE", "NEW_PERSON", "UPDATE_PERSON", "ENTITY_VIEW", "PERSON_VIEW"])
        .nullish(),
    circuitBreaker: z.string().nullish(),
    /** Machine-readable secondary code on ProblemDetail.code. Agents should branch on this value when the HTTP status alone does not identify the recovery path. Code groups include auth/session, rate limiting, job infrastructure, RBAC, external providers, image processing, R2 storage, search, and inference. Many codes indicate infra/admin-only conditions where the correct agent action is to surface the error and stop, not retry. */
    code: z
        .enum([
        /** Caller is authenticated but lacks the required role for this operation. Agent action: surface the requiredRole field on the ProblemDetail and stop; do not retry without role escalation. */
        "not_authorized",
        /** Request was throttled. Agent action: wait at least retryAfterSeconds (also on ProblemDetail) before retrying. Repeated 429s on the same key indicate a burst-rate violation, not a sustained-rate one. */
        "rateLimited",
        /** Request was throttled. Agent action: wait at least retryAfterSeconds (also on ProblemDetail) before retrying. Repeated 429s on the same key indicate a burst-rate violation, not a sustained-rate one. */
        "rate_limited",
        /** Caller is authenticated but the subscription on their account does not include this operation. Agent action: surface ProblemDetail.detail explaining the subscription requirement and stop. The identical request cannot succeed until the account changes plan, so never retry it. */
        "subscription_required",
        /** Caller's subscription was canceled or its first payment expired unpaid, so it no longer includes this operation. Agent action: surface ProblemDetail.detail and stop; the account must subscribe again through the resolution's Checkout endpoint before the identical request can succeed. */
        "subscription_canceled",
        /** Caller's subscription has a failed or unfinished payment, so it does not include this operation until the payment succeeds. Agent action: surface ProblemDetail.detail and stop; the account must update its payment method through the resolution's Billing Portal endpoint. */
        "subscription_past_due",
        /** Caller's subscription is paused, so it does not include this operation. Agent action: surface ProblemDetail.detail and stop; the account must resume the subscription through the resolution's Billing Portal endpoint. */
        "subscription_paused",
        /** The caller's metered allowance for this operation is spent for the current period. Agent action: stop and report ProblemDetail.allowanceType, limit, used, remaining, and resetAt; resetAt is when the meter refills and is typically weeks away. Do not retry inside the period even though the status is 429. */
        "billing_allowance_exhausted",
        /** The caller's monthly allowance is spent and the next additional-usage unit would pass the monthly spend cap or the prepaid credit left. Agent action: stop and report ProblemDetail.allowanceType, limit, used, remaining, and resetAt; raise the cap or buy credit through /v1/billing/additional-usage, or wait for resetAt. */
        "billing_additional_usage_cap_reached",
        /** Detail-origin cold-miss coalescing is saturated. Agent action: treat as backend capacity impairment, back off, and inspect backend pool/bulkhead metrics; this is not a caller throttle. */
        "origin_detail_capacity",
        /** Detail-origin cold-miss scheduler rejected work because this instance is shutting down for a redeploy. Agent action: retry shortly; the platform routes the retry to a healthy instance. This is deploy-window noise, not a capacity defect — do not treat it as backend saturation. */
        "origin_detail_shutdown",
        /** Request prose looks shell-mangled around a money phrase: either shell expansion stripped a leading dollar sign ('50 million' where '$50 million' was meant) or an escape character survived into the text ('\$50 million', standalone '/$50 million'). Agent action: write '$' literally and re-run with JSON body input via --from-file or stdin, or ANSI-C $'...' quoting; use allowSuspectedShellStrip only when the value is intentional. */
        "suspectedShellStrip",
        /** Request prose looks shell-mangled around a money phrase: either shell expansion stripped a leading dollar sign ('50 million' where '$50 million' was meant) or an escape character survived into the text ('\$50 million', standalone '/$50 million'). Agent action: write '$' literally and re-run with JSON body input via --from-file or stdin, or ANSI-C $'...' quoting; use allowSuspectedShellStrip only when the value is intentional. */
        "suspected_shell_strip",
        /** A URL was submitted to the wrong write surface. Agent action: move the URL to the specific surface named by ProblemDetail.hint/resolution, for example EntityUrl.urlType=ycombinator via entities urls create instead of News.newsUrlOriginal. */
        "url_surface_misclassification",
        /** JobRunr background worker is disabled in this environment. Agent action: stop (this is an admin/ops configuration condition, not a retriable user error). */
        "JOBRUNR_DISABLED",
        /** JobRunr background worker is disabled in this environment. Agent action: stop (this is an admin/ops configuration condition, not a retriable user error). */
        "jobrunr_disabled",
        /** JobRunr backing storage (Postgres) is unavailable. Agent action: stop; retrying will not help until DB connectivity is restored. */
        "JOBRUNR_STORAGE_UNAVAILABLE",
        /** JobRunr backing storage (Postgres) is unavailable. Agent action: stop; retrying will not help until DB connectivity is restored. */
        "jobrunr_storage_unavailable",
        /** RBAC role lookup failed (app_user read did not return). Agent action: retry once; persistent failure indicates a database outage. */
        "rbac_lookup_unavailable",
        /** Geocoding provider (Google Maps Platform) call failed. Agent action: surface the error; address fields can be submitted without normalization as a fallback. */
        "GEOCODE_PROVIDER_ERROR",
        /** Geocoding provider (Google Maps Platform) call failed. Agent action: surface the error; address fields can be submitted without normalization as a fallback. */
        "geocode_provider_error",
        /** Sentry API call failed (used by error-triage endpoints). Agent action: surface; Sentry outages do not affect the primary application path. */
        "sentry_api_error",
        /** Frontend cache epoch requires the cache invalidation outbox consumer to run in targeted mode. Agent action: stop polling; this 503 is a designed cutover guard, and only the operator switching the outbox mode to targeted (docs/database/cache-invalidation.md) makes the epoch readable. */
        "frontend_cache_epoch_mode_not_targeted",
        /** Image upload matched a blocklist entry (visually similar to a known bad asset). Agent action: do not retry the same image; supply a different image or stop. */
        "image_blocklist_match",
        /** Image upload was blank or a flat monochrome canvas. Agent action: supply a source image with visible logo or photo detail; retrying the same bytes will not pass. */
        "image_monochrome",
        /** Image upload failed minimum dimension/file-size check. Agent action: supply a higher-resolution source image; retrying the same one will not pass. */
        "image_too_small",
        /** Image upload's visible content is a wide banner/wordmark when a square logo or photo was required. Agent action: supply a square (or near-square) source image — a favicon, app icon, square logo, or cropped headshot — not a horizontal wordmark or og:image banner; retrying the same bytes will not pass. */
        "image_wrong_aspect",
        /** Image upload was classified as a monogram (single letter / generated initial) when a real photograph or logo was required. Agent action: supply a non-monogram image or set permitMonogram=true on the read endpoint if a monogram is acceptable for the use case. */
        "image_monogram",
        /** Image upload could not be decoded (corrupt file, unsupported format). Agent action: supply a valid PNG/JPEG/WebP; retrying the same bytes will not pass. */
        "image_unreadable",
        /** Image processing pipeline (resize/encode/hash) threw an unexpected error. Agent action: retry once; persistent failure indicates an infra issue. */
        "image_processing_error",
        /** Logo/photo upload was rejected because the server-side brand-match vision check found it does not depict the target's own brand (a generic favicon, a parent/provider/acquirer mark, an OpenGraph/banner/social card, or an unrelated image). Agent action: supply the target entity's OWN brand mark and re-run; retrying the same image, or any generic/og/banner/parent asset, will not pass. */
        "image_brand_mismatch",
        /** An outbound fetch from an external target site (robots.txt, sitemap, page, or logo or thumbnail image) failed after retries or with the breaker open. Agent action: the failure belongs to the target; crawl jobs may fall back to rendered extraction; do not retry immediately. */
        "web_crawl_fetch_failed",
        /** A crawl-run request named an entity or person that has no current primary website URL. Agent action: add or activate the owner's website URL, then resubmit; retrying the unchanged request cannot succeed. */
        "primary_website_missing",
        /** RSS news-ingest feed fetch failed after retries or with the breaker open. Agent action: inspect the configured feed URL and upstream status; do not retry the enqueue immediately. */
        "news_rss_feed_fetch_failed",
        /** RSS news-ingest article page fetch failed after retries or with the breaker open. Agent action: inspect the source article URL and upstream status; the ingest job may skip that article. */
        "news_rss_article_fetch_failed",
        /** Cloudflare R2 object fetch failed during a read operation. Agent action: retry once with backoff; persistent failure indicates R2 outage or asset deletion. */
        "r2_fetch_failed",
        /** Cloudflare R2 object delete failed during a cleanup operation. Agent action: surface; retrying may produce duplicate-delete errors. */
        "r2_delete_failed",
        /** Cloudflare R2 object upload failed during a write operation. Agent action: retry once with the same payload; persistent failure indicates R2 outage. */
        "r2_upload_failed",
        /** Stored source-document raw bytes could not be served: the row's inline-or-R2 raw authority is incomplete or failed digest verification. Agent action: surface; the stored authority needs operator reconciliation before this body can be read. */
        "source_document_body_unavailable",
        /** A source-document capture stopped before retaining a provider response over this service's configured byte limit. Agent action: this is a designed containment boundary, not a provider outage or a service defect; do not retry the same request expecting a different outcome. */
        "source_document_capture_limit_exceeded",
        /** News similarity cannot run because the target embedding is unavailable or live similarity capacity is full. Agent action: surface the 503 and retry later; this endpoint does not fall back to lexical ranking. */
        "news_similarity_embedding_unavailable",
        /** Search provider (e.g., SerpAPI) is not configured for this environment. Agent action: stop; admin/ops must configure the provider key before this endpoint will succeed. */
        "search_provider_not_configured",
        /** Search provider call failed. Agent action: surface; provider outages affect search endpoints only. */
        "search_provider_error",
        /** SEC EDGAR lookup failed (ticker catalog or company submissions). Agent action: surface; SEC outages or rate limiting affect the public-company preview endpoint only. */
        "sec_edgar_fetch_failed",
        /** GitHub repository fetch failed (account, listing, or single repo). Agent action: surface; GitHub outages or rate limiting affect github-repo sync endpoints only. */
        "github_fetch_failed",
        /** LLM inference provider call failed. Agent action: retry once with backoff; persistent failure indicates provider outage or invalid profile config. */
        "INFERENCE_PROVIDER_ERROR",
        /** LLM inference provider call failed. Agent action: retry once with backoff; persistent failure indicates provider outage or invalid profile config. */
        "inference_provider_error",
        /** LLM inference provider returned an empty response body. Agent action: retry once; persistent empty responses indicate prompt or provider misconfiguration. */
        "INFERENCE_PROVIDER_RESPONSE_EMPTY",
        /** LLM inference provider returned an empty response body. Agent action: retry once; persistent empty responses indicate prompt or provider misconfiguration. */
        "inference_provider_response_empty",
        /** LLM inference provider returned a response that failed JSON parsing. Agent action: surface; the prompt or response schema may need adjustment. */
        "INFERENCE_PROVIDER_INVALID_JSON",
        /** LLM inference provider returned a response that failed JSON parsing. Agent action: surface; the prompt or response schema may need adjustment. */
        "inference_provider_invalid_json",
        /** Inference profile catalog is missing or empty. Agent action: stop; admin/ops must configure inference profiles before this endpoint will succeed. */
        "INFERENCE_PROFILES_MISSING",
        /** Inference profile catalog is missing or empty. Agent action: stop; admin/ops must configure inference profiles before this endpoint will succeed. */
        "inference_profiles_missing",
        /** Inference profile is configured but its API key is missing from secret storage. Agent action: stop; admin/ops must populate the API key in secret storage. */
        "INFERENCE_PROFILE_API_KEY_MISSING",
        /** Inference profile is configured but its API key is missing from secret storage. Agent action: stop; admin/ops must populate the API key in secret storage. */
        "inference_profile_api_key_missing",
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
    /** Cap the limitType meter allows for its current period. */
    limit: z.number().int().nullish(),
    /** Which meter refused the request; names what limit/used/remaining count. */
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
        "BILLING_ADDITIONAL_USAGE",
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
    /** Cap minus used for the limitType meter, never negative. */
    remaining: z.number().int().nullish(),
    requiredRole: z.string().nullish(),
    /** When the limitType meter refills and the request can succeed again. */
    resetAt: z.iso.datetime({ offset: true }).nullish(),
    resolution: ProblemResolutionSchema.nullish(),
    /** Seconds to wait before the same request can succeed. A BILLING_ALLOWANCE meter resets at the UTC month boundary, so this reaches weeks: read limitType before treating it as a burst backoff. */
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
    /** Requests already charged against the limitType meter this period. */
    used: z.number().int().nullish(),
    validParameters: z.array(z.string()).nullish(),
    value: z.string().nullish(),
    /** Length of a rolling throttle window; absent for period meters. */
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