// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Known RFC 9457 error type URIs.
 *
 * @openapiSchema ProblemType
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape problem.type
 * @contractRole canonical
 */
export const ProblemTypeSchema = z.enum({
    VALIDATION_FAILED: "https://api.aventure.vc/errors/validation-failed",
    MISSING_PARAMETER: "https://api.aventure.vc/errors/missing-parameter",
    INVALID_PARAMETER_TYPE: "https://api.aventure.vc/errors/invalid-parameter-type",
    UNKNOWN_PARAMETER: "https://api.aventure.vc/errors/unknown-parameter",
    INVALID_ARGUMENT: "https://api.aventure.vc/errors/invalid-argument",
    INVALID_REQUEST: "https://api.aventure.vc/errors/invalid-request",
    INVALID_TOKEN: "https://api.aventure.vc/errors/invalid-token",
    TOKEN_EXPIRED: "https://api.aventure.vc/errors/token-expired",
    INVALID_AUTHENTICATION: "https://api.aventure.vc/errors/invalid-authentication",
    CLIENT_CLOSED_REQUEST: "https://api.aventure.vc/errors/client-closed-request",
    INVALID_JSON: "https://api.aventure.vc/errors/invalid-json",
    METHOD_NOT_ALLOWED: "https://api.aventure.vc/errors/method-not-allowed",
    NOT_ACCEPTABLE: "https://api.aventure.vc/errors/not-acceptable",
    UNSUPPORTED_MEDIA_TYPE: "https://api.aventure.vc/errors/unsupported-media-type",
    INTERNAL_ERROR: "https://api.aventure.vc/errors/internal-error",
    UNEXPECTED_ERROR: "https://api.aventure.vc/errors/unexpected-error",
    NOT_IMPLEMENTED: "https://api.aventure.vc/errors/not-implemented",
    AUTHENTICATION_REQUIRED: "https://api.aventure.vc/errors/authentication-required",
    AUTH_DOCS_REQUIRED: "https://api.aventure.vc/errors/auth.docs-required",
    AUTH_ADMIN_KEY_NOT_CONFIGURED: "https://api.aventure.vc/errors/auth.admin-key-not-configured",
    AUTH_EMPTY_ADMIN_KEY: "https://api.aventure.vc/errors/auth.empty-admin-key",
    AUTH_EMPTY_ADMIN_BEARER: "https://api.aventure.vc/errors/auth.empty-admin-bearer",
    AUTH_INVALID_ADMIN_KEY: "https://api.aventure.vc/errors/auth.invalid-admin-key",
    AUTH_MISSING_ADMIN_KEY: "https://api.aventure.vc/errors/auth.missing-admin-key",
    AUTH_METRICS_UNAUTHORIZED: "https://api.aventure.vc/errors/auth.metrics-unauthorized",
    ACCESS_DENIED: "https://api.aventure.vc/errors/access-denied",
    NOT_FOUND: "https://api.aventure.vc/errors/not-found",
    GONE: "https://api.aventure.vc/errors/gone",
    RATE_LIMITED: "https://api.aventure.vc/errors/rate-limited",
    PRECONDITION_FAILED: "https://api.aventure.vc/errors/precondition-failed",
    PRECONDITION_REQUIRED: "https://api.aventure.vc/errors/precondition-required",
    BILLING_ALLOWANCE_EXHAUSTED: "https://api.aventure.vc/errors/billing-allowance-exhausted",
    SUBSCRIPTION_REQUIRED: "https://api.aventure.vc/errors/subscription-required",
    SERVICE_UNAVAILABLE: "https://api.aventure.vc/errors/service-unavailable",
    MALFORMED_FORM_BODY: "https://api.aventure.vc/errors/malformed-form-body",
    STATE_CONFLICT: "https://api.aventure.vc/errors/state-conflict",
    SLUG_HELD_BY_RECORD: "https://api.aventure.vc/errors/slug-held-by-record",
    SLUG_HELD_BY_REDIRECT: "https://api.aventure.vc/errors/slug-held-by-redirect",
    SLUG_AMBIGUOUS: "https://api.aventure.vc/errors/slug-ambiguous",
    DUPLICATE: "https://api.aventure.vc/errors/duplicate",
    DUPLICATE_KEY: "https://api.aventure.vc/errors/duplicate-key",
    INTEGRITY_VIOLATION: "https://api.aventure.vc/errors/integrity-violation",
    CIRCUIT_BREAKER_OPEN: "https://api.aventure.vc/errors/circuit-breaker-open",
    BULKHEAD_FULL: "https://api.aventure.vc/errors/bulkhead-full",
    WRITE_LANE_BUSY: "https://api.aventure.vc/errors/write-lane-busy",
    DATABASE_UNAVAILABLE: "https://api.aventure.vc/errors/database-unavailable",
    DATABASE_ERROR: "https://api.aventure.vc/errors/database-error",
    FILE_TOO_LARGE: "https://api.aventure.vc/errors/file-too-large",
    MISSING_FILE_PART: "https://api.aventure.vc/errors/missing-file-part",
    INVALID_MULTIPART_BOUNDARY: "https://api.aventure.vc/errors/invalid-multipart-boundary",
    MULTIPART_PARSE_ERROR: "https://api.aventure.vc/errors/multipart-parse-error",
    NON_ENGLISH_ARTICLE: "https://api.aventure.vc/errors/non-english-article",
    INVALID_IMAGE: "https://api.aventure.vc/errors/invalid-image",
    UPSTREAM_EDGE_CHALLENGED: "https://api.aventure.vc/errors/upstream-edge-challenged",
    ACCELERATOR_DETAIL_RESTATES_TARGET: "https://api.aventure.vc/errors/accelerator-detail-restates-target",
});
//# sourceMappingURL=type.js.map