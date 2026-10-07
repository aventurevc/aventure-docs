// Generated alternate api-schemas support copy from TypeScript source api-schemas/http/route.ts
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
export function pathWithoutQuery(path) {
    return new URL(path, "https://placeholder.invalid").pathname;
}
/**
 * A concrete request path matches a template when both have the same segment count and each
 * template segment is either the same literal or one `{name}` parameter. A path that still carries
 * a raw or percent-encoded `{name}` segment matches nothing, because it never filled the parameter.
 */
export function routeTemplateMatches(template, path) {
    const templateParts = template.split("/").filter(Boolean);
    const pathParts = path.split("/").filter(Boolean);
    if (templateParts.length !== pathParts.length)
        return false;
    if (pathParts.some(isUnresolvedTemplateSegment))
        return false;
    return templateParts.every((templatePart, index) => isOpenApiTemplateSegment(templatePart) || templatePart === pathParts[index]);
}
function isOpenApiTemplateSegment(pathSegment) {
    const innerSegment = pathSegment.slice(1, -1);
    return (pathSegment.startsWith("{") &&
        pathSegment.endsWith("}") &&
        innerSegment.length > 0 &&
        !innerSegment.includes("/") &&
        !innerSegment.includes("{") &&
        !innerSegment.includes("}"));
}
function isUnresolvedTemplateSegment(pathSegment) {
    if (isOpenApiTemplateSegment(pathSegment))
        return true;
    const lowerSegment = pathSegment.toLowerCase();
    const innerSegment = pathSegment.slice(3, -3);
    return (lowerSegment.startsWith("%7b") &&
        lowerSegment.endsWith("%7d") &&
        innerSegment.length > 0 &&
        !innerSegment.includes("/") &&
        !innerSegment.includes("%") &&
        !innerSegment.includes("{") &&
        !innerSegment.includes("}"));
}
//# sourceMappingURL=route.js.map