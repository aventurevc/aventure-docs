// Generated alternate api-schemas support copy from TypeScript source api-schemas/http/status-code.ts
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
export const HTTP_OK = 200;
export const HTTP_CREATED = 201;
export const HTTP_NO_CONTENT = 204;
export const HTTP_MOVED_PERMANENTLY = 301;
export const HTTP_FOUND = 302;
export const HTTP_TEMPORARY_REDIRECT = 307;
export const HTTP_PERMANENT_REDIRECT = 308;
export const HTTP_BAD_REQUEST = 400;
export const HTTP_UNAUTHORIZED = 401;
export const HTTP_FORBIDDEN = 403;
export const HTTP_NOT_FOUND = 404;
export const HTTP_METHOD_NOT_ALLOWED = 405;
export const HTTP_CONFLICT = 409;
export const HTTP_GONE = 410;
export const HTTP_UNPROCESSABLE_ENTITY = 422;
export const HTTP_TOO_MANY_REQUESTS = 429;
export const HTTP_INTERNAL_SERVER_ERROR = 500;
export const HTTP_NOT_IMPLEMENTED = 501;
export const HTTP_BAD_GATEWAY = 502;
export const HTTP_SERVICE_UNAVAILABLE = 503;
export const HTTP_GATEWAY_TIMEOUT = 504;
export const HTTP_SUCCESS_MIN = 200;
export const HTTP_SUCCESS_MAX = 300;
export const HTTP_REDIRECT_MIN = 300;
export const HTTP_REDIRECT_MAX = 400;
export const HTTP_CLIENT_ERROR_MIN = 400;
export const HTTP_CLIENT_ERROR_MAX = 500;
export const HTTP_SERVER_ERROR_MIN = 500;
export const HTTP_SERVER_ERROR_MAX = 600;
export const isSuccessStatus = (status) => status >= HTTP_SUCCESS_MIN && status < HTTP_SUCCESS_MAX;
export const isRedirectStatus = (status) => status >= HTTP_REDIRECT_MIN && status < HTTP_REDIRECT_MAX;
export const isClientErrorStatus = (status) => status >= HTTP_CLIENT_ERROR_MIN && status < HTTP_CLIENT_ERROR_MAX;
export const isServerErrorStatus = (status) => status >= HTTP_SERVER_ERROR_MIN && status < HTTP_SERVER_ERROR_MAX;
//# sourceMappingURL=status-code.js.map