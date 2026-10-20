// Generated alternate api-schemas support copy from TypeScript source api-schemas/http/openapi-metadata.ts
import { z } from "zod/v4";
/**
 * Mechanical file-only projection: null path segments mean array items, never object keys.
 * @usedByEndpoint none:external-root
 * @shared primitive:multi OpenAPI file-map boundary metadata; not direct because consumers project schema structure rather than endpoint payloads
 * @contractShape http.openapi-request-body-file-map
 * @contractRole canonical
 * @ownerModule http/openapi-metadata.ts
 */
export const RequestBodyFileMapSchema = z.object({
    bodyPath: z.string(),
    valueField: z
        .array(z.object({
        path: z.array(z.string().nullable()).readonly(),
        type: z.enum(["object", "array", "string", "number", "integer", "boolean"]),
        nullable: z.boolean(),
    }))
        .readonly(),
});
const OpenApiJsonPointerSchema = z.union([
    z.literal(""),
    z.string().regex(/^(?:\/(?:[^~/]|~[01])*)+$/),
]);
/**
 * @usedByEndpoint none:external-root
 * @shared primitive:multi OpenAPI readback boundary metadata; not direct because consumers interpret source-owned extension values rather than endpoint payloads
 * @contractShape http.openapi-mutation-readback
 * @contractRole canonical
 * @ownerModule http/openapi-metadata.ts
 */
export const OpenApiWriteReadbackSchema = z.strictObject({
    readOperationId: z.string().min(1),
    writePointer: OpenApiJsonPointerSchema,
    readPointer: OpenApiJsonPointerSchema,
    readParameter: z.string().min(1).optional(),
    submittedMap: z
        .array(z.strictObject({
        bodyPointer: OpenApiJsonPointerSchema,
        readPointer: OpenApiJsonPointerSchema,
        identityPointer: OpenApiJsonPointerSchema,
    }))
        .min(1)
        .optional(),
});
//# sourceMappingURL=openapi-metadata.js.map