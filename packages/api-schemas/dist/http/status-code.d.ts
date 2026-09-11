/**
 * Canonical HTTP status constants and helpers for downstream consumers.
 *
 * Names mirror Spring's HttpStatus enum (SCREAMING_SNAKE) with HTTP_ prefix.
 * Values are numeric literals from RFC 9110 / RFC 6585 / RFC 7231.
 *
 * @shared primitive:multi reusable cross-repo HTTP constant; not generated from OpenAPI
 * @contractShape http.status-code
 * @contractRole canonical
 * @ownerModule http/status-code.ts
 */
export declare const HTTP_OK: 200;
export declare const HTTP_CREATED: 201;
export declare const HTTP_NO_CONTENT: 204;
export declare const HTTP_MOVED_PERMANENTLY: 301;
export declare const HTTP_FOUND: 302;
export declare const HTTP_TEMPORARY_REDIRECT: 307;
export declare const HTTP_PERMANENT_REDIRECT: 308;
export declare const HTTP_BAD_REQUEST: 400;
export declare const HTTP_UNAUTHORIZED: 401;
export declare const HTTP_FORBIDDEN: 403;
export declare const HTTP_NOT_FOUND: 404;
export declare const HTTP_METHOD_NOT_ALLOWED: 405;
export declare const HTTP_CONFLICT: 409;
export declare const HTTP_GONE: 410;
export declare const HTTP_UNPROCESSABLE_ENTITY: 422;
export declare const HTTP_TOO_MANY_REQUESTS: 429;
export declare const HTTP_INTERNAL_SERVER_ERROR: 500;
export declare const HTTP_NOT_IMPLEMENTED: 501;
export declare const HTTP_BAD_GATEWAY: 502;
export declare const HTTP_SERVICE_UNAVAILABLE: 503;
export declare const HTTP_GATEWAY_TIMEOUT: 504;
export declare const HTTP_SUCCESS_MIN: 200;
export declare const HTTP_SUCCESS_MAX: 300;
export declare const HTTP_REDIRECT_MIN: 300;
export declare const HTTP_REDIRECT_MAX: 400;
export declare const HTTP_CLIENT_ERROR_MIN: 400;
export declare const HTTP_CLIENT_ERROR_MAX: 500;
export declare const HTTP_SERVER_ERROR_MIN: 500;
export declare const HTTP_SERVER_ERROR_MAX: 600;
export declare const isSuccessStatus: (status: number) => boolean;
export declare const isRedirectStatus: (status: number) => boolean;
export declare const isClientErrorStatus: (status: number) => boolean;
export declare const isServerErrorStatus: (status: number) => boolean;
//# sourceMappingURL=status-code.d.ts.map