/**
 * OpenAPI component manifest — canonical mapping of OpenAPI component name
 * to its @aventurevc/api-schemas Zod owner module and exported schema symbol.
 *
 * Consumers (mcp/mcp-server/contract.ts) import this manifest directly to
 * resolve canonical Zod schemas without re-scanning generated files. Adding
 * a new component-bound schema to this package automatically surfaces here on
 * the next `make docs-zod` run.
 *
 * @contractShape http.openapi-component-manifest
 * @contractRole canonical
 * @ownerModule openapi-component-manifest.ts
 */
export interface OpenApiComponentBinding {
    readonly modulePath: string;
    readonly schemaName: string;
}
export declare const OPENAPI_COMPONENT_MANIFEST: Readonly<Record<string, OpenApiComponentBinding>>;
//# sourceMappingURL=openapi-component-manifest.d.ts.map