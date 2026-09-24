import { z } from "zod/v4";
declare const ApiKeySchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodString;
    lastUsedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    name: z.ZodString;
    revocationReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scopes: z.ZodArray<z.ZodString>;
    status: z.ZodEnum<{
        ACTIVE: "ACTIVE";
        EXPIRED: "EXPIRED";
        REVOKED: "REVOKED";
    }>;
    subject: z.ZodString;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type ApiKeyDefinition = z.infer<typeof ApiKeySchemaDefinition>;
/**
 * Clerk API-key metadata; never contains the key secret
 *
 * @openapiSchema ApiKey
 * @endpoint GET /v1/auth/api-key
 * @endpoint DELETE /v1/auth/api-key
 * @contractShape api.key
 * @contractRole canonical
 */
export declare const ApiKeySchema: z.ZodType<ApiKeyDefinition>;
export type ApiKey = z.infer<typeof ApiKeySchema>;
export {};
//# sourceMappingURL=key.d.ts.map