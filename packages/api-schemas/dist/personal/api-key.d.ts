import { z } from "zod/v4";
declare const PersonalApiKeySchemaDefinition: z.ZodObject<{
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
type PersonalApiKeyDefinition = z.infer<typeof PersonalApiKeySchemaDefinition>;
/**
 * Personal API-key metadata sourced from Clerk; never contains the key secret
 *
 * @openapiSchema PersonalApiKey
 * @endpoint GET /v1/auth/personal-api-key
 * @endpoint DELETE /v1/auth/personal-api-key
 * @contractShape personal.api-key
 * @contractRole canonical
 */
export declare const PersonalApiKeySchema: z.ZodType<PersonalApiKeyDefinition>;
export type PersonalApiKey = z.infer<typeof PersonalApiKeySchema>;
export {};
//# sourceMappingURL=api-key.d.ts.map