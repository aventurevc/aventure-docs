/**
 * The one method-plus-path matching rule for aVenture API operations. The MCP server resolves an
 * `aventure_*` call that names a method and path with it, and `operation/route` answers the same
 * question for callers that only hold that method and path.
 *
 * @shared primitive:multi route matching for MCP and its consumers; not generated from OpenAPI
 * @contractShape http.route
 * @contractRole canonical
 * @ownerModule http/route.ts
 */
/** The path a request names, without its query string or fragment. */
export declare function pathWithoutQuery(path: string): string;
/**
 * A concrete request path matches a template when both have the same segment count and each
 * template segment is either the same literal or one `{name}` parameter. A path that still carries
 * a raw or percent-encoded `{name}` segment matches nothing, because it never filled the parameter.
 */
export declare function routeTemplateMatches(template: string, path: string): boolean;
//# sourceMappingURL=route.d.ts.map