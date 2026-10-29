import { z } from "zod/v4";
/**
 * Mechanical file-only projection: null path segments mean array items, never object keys.
 * @usedByEndpoint none:external-root
 * @shared primitive:multi OpenAPI file-map boundary metadata; not direct because consumers project schema structure rather than endpoint payloads
 * @contractShape http.openapi-request-body-file-map
 * @contractRole canonical
 * @ownerModule http/openapi-metadata.ts
 */
export declare const RequestBodyFileMapSchema: z.ZodObject<{
    bodyPath: z.ZodString;
    valueField: z.ZodReadonly<z.ZodArray<z.ZodObject<{
        path: z.ZodReadonly<z.ZodArray<z.ZodNullable<z.ZodString>>>;
        type: z.ZodEnum<{
            array: "array";
            boolean: "boolean";
            integer: "integer";
            number: "number";
            object: "object";
            string: "string";
        }>;
        nullable: z.ZodBoolean;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type RequestBodyFileMap = z.infer<typeof RequestBodyFileMapSchema>;
/**
 * @usedByEndpoint none:external-root
 * @shared primitive:multi OpenAPI readback boundary metadata; not direct because consumers interpret source-owned extension values rather than endpoint payloads
 * @contractShape http.openapi-mutation-readback
 * @contractRole canonical
 * @ownerModule http/openapi-metadata.ts
 */
export declare const OpenApiWriteReadbackSchema: z.ZodObject<{
    readOperationId: z.ZodString;
    writePointer: z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>;
    readPointer: z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>;
    readParameter: z.ZodOptional<z.ZodString>;
    submittedMap: z.ZodOptional<z.ZodArray<z.ZodObject<{
        bodyPointer: z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>;
        readPointer: z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>;
        identityPointer: z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>;
    }, z.core.$strict>>>;
    fallback: z.ZodOptional<z.ZodObject<{
        writePointer: z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>;
        readPointer: z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>;
        readQueryName: z.ZodString;
        readQueryValue: z.ZodString;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type OpenApiWriteReadback = z.infer<typeof OpenApiWriteReadbackSchema>;
//# sourceMappingURL=openapi-metadata.d.ts.map