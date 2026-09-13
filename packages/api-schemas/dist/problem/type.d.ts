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
export declare const ProblemTypeSchema: z.ZodEnum<{
    readonly VALIDATION_FAILED: "https://api.aventure.vc/errors/validation-failed";
    readonly MISSING_PARAMETER: "https://api.aventure.vc/errors/missing-parameter";
    readonly INVALID_PARAMETER_TYPE: "https://api.aventure.vc/errors/invalid-parameter-type";
    readonly UNKNOWN_PARAMETER: "https://api.aventure.vc/errors/unknown-parameter";
    readonly INVALID_ARGUMENT: "https://api.aventure.vc/errors/invalid-argument";
    readonly INVALID_REQUEST: "https://api.aventure.vc/errors/invalid-request";
    readonly INVALID_TOKEN: "https://api.aventure.vc/errors/invalid-token";
    readonly TOKEN_EXPIRED: "https://api.aventure.vc/errors/token-expired";
    readonly INVALID_AUTHENTICATION: "https://api.aventure.vc/errors/invalid-authentication";
    readonly CLIENT_CLOSED_REQUEST: "https://api.aventure.vc/errors/client-closed-request";
    readonly INVALID_JSON: "https://api.aventure.vc/errors/invalid-json";
    readonly METHOD_NOT_ALLOWED: "https://api.aventure.vc/errors/method-not-allowed";
    readonly NOT_ACCEPTABLE: "https://api.aventure.vc/errors/not-acceptable";
    readonly UNSUPPORTED_MEDIA_TYPE: "https://api.aventure.vc/errors/unsupported-media-type";
    readonly INTERNAL_ERROR: "https://api.aventure.vc/errors/internal-error";
    readonly UNEXPECTED_ERROR: "https://api.aventure.vc/errors/unexpected-error";
    readonly NOT_IMPLEMENTED: "https://api.aventure.vc/errors/not-implemented";
    readonly AUTHENTICATION_REQUIRED: "https://api.aventure.vc/errors/authentication-required";
    readonly AUTH_DOCS_REQUIRED: "https://api.aventure.vc/errors/auth.docs-required";
    readonly AUTH_ADMIN_KEY_NOT_CONFIGURED: "https://api.aventure.vc/errors/auth.admin-key-not-configured";
    readonly AUTH_EMPTY_ADMIN_KEY: "https://api.aventure.vc/errors/auth.empty-admin-key";
    readonly AUTH_EMPTY_ADMIN_BEARER: "https://api.aventure.vc/errors/auth.empty-admin-bearer";
    readonly AUTH_INVALID_ADMIN_KEY: "https://api.aventure.vc/errors/auth.invalid-admin-key";
    readonly AUTH_MISSING_ADMIN_KEY: "https://api.aventure.vc/errors/auth.missing-admin-key";
    readonly AUTH_METRICS_UNAUTHORIZED: "https://api.aventure.vc/errors/auth.metrics-unauthorized";
    readonly ACCESS_DENIED: "https://api.aventure.vc/errors/access-denied";
    readonly NOT_FOUND: "https://api.aventure.vc/errors/not-found";
    readonly GONE: "https://api.aventure.vc/errors/gone";
    readonly RATE_LIMITED: "https://api.aventure.vc/errors/rate-limited";
    readonly PRECONDITION_FAILED: "https://api.aventure.vc/errors/precondition-failed";
    readonly PRECONDITION_REQUIRED: "https://api.aventure.vc/errors/precondition-required";
    readonly BILLING_ALLOWANCE_EXHAUSTED: "https://api.aventure.vc/errors/billing-allowance-exhausted";
    readonly SUBSCRIPTION_REQUIRED: "https://api.aventure.vc/errors/subscription-required";
    readonly SERVICE_UNAVAILABLE: "https://api.aventure.vc/errors/service-unavailable";
    readonly MALFORMED_FORM_BODY: "https://api.aventure.vc/errors/malformed-form-body";
    readonly STATE_CONFLICT: "https://api.aventure.vc/errors/state-conflict";
    readonly SLUG_HELD_BY_RECORD: "https://api.aventure.vc/errors/slug-held-by-record";
    readonly SLUG_HELD_BY_REDIRECT: "https://api.aventure.vc/errors/slug-held-by-redirect";
    readonly SLUG_AMBIGUOUS: "https://api.aventure.vc/errors/slug-ambiguous";
    readonly DUPLICATE: "https://api.aventure.vc/errors/duplicate";
    readonly DUPLICATE_KEY: "https://api.aventure.vc/errors/duplicate-key";
    readonly INTEGRITY_VIOLATION: "https://api.aventure.vc/errors/integrity-violation";
    readonly CIRCUIT_BREAKER_OPEN: "https://api.aventure.vc/errors/circuit-breaker-open";
    readonly BULKHEAD_FULL: "https://api.aventure.vc/errors/bulkhead-full";
    readonly WRITE_LANE_BUSY: "https://api.aventure.vc/errors/write-lane-busy";
    readonly DATABASE_UNAVAILABLE: "https://api.aventure.vc/errors/database-unavailable";
    readonly DATABASE_ERROR: "https://api.aventure.vc/errors/database-error";
    readonly FILE_TOO_LARGE: "https://api.aventure.vc/errors/file-too-large";
    readonly MISSING_FILE_PART: "https://api.aventure.vc/errors/missing-file-part";
    readonly INVALID_MULTIPART_BOUNDARY: "https://api.aventure.vc/errors/invalid-multipart-boundary";
    readonly MULTIPART_PARSE_ERROR: "https://api.aventure.vc/errors/multipart-parse-error";
    readonly NON_ENGLISH_ARTICLE: "https://api.aventure.vc/errors/non-english-article";
    readonly INVALID_IMAGE: "https://api.aventure.vc/errors/invalid-image";
    readonly UPSTREAM_EDGE_CHALLENGED: "https://api.aventure.vc/errors/upstream-edge-challenged";
    readonly ACCELERATOR_DETAIL_RESTATES_TARGET: "https://api.aventure.vc/errors/accelerator-detail-restates-target";
}>;
export type ProblemType = z.infer<typeof ProblemTypeSchema>;
//# sourceMappingURL=type.d.ts.map