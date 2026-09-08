import { z } from "zod/v4";
declare const ResolvedHandleSchemaDefinition: z.ZodObject<{
    matchedBy: z.ZodEnum<{
        EXTERNAL_ID: "EXTERNAL_ID";
        PUBLIC_ID: "PUBLIC_ID";
        SLUG: "SLUG";
        UUID: "UUID";
    }>;
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type ResolvedHandleDefinition = z.infer<typeof ResolvedHandleSchemaDefinition>;
/**
 * Canonical subject a universal-lookup token resolved to. Exactly one of owner.entityId / owner.personId is set. Echoes the subject's canonical public handle and slug. Fetch display fields with GET /v1/entities/detail or GET /v1/people/detail.
 *
 * @openapiSchema ResolvedHandle
 * @endpoint GET /v1/resolve/{token}
 * @contractShape resolved.handle
 * @contractRole canonical
 */
export declare const ResolvedHandleSchema: z.ZodType<ResolvedHandleDefinition>;
export type ResolvedHandle = z.infer<typeof ResolvedHandleSchema>;
export {};
//# sourceMappingURL=handle.d.ts.map