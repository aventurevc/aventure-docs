import { z } from "zod/v4";
declare const AuthProviderCatalogSchemaDefinition: z.ZodObject<{
    clerkPublishableKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    oauthClient: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        authorizationServer: z.ZodString;
        clientId: z.ZodString;
        redirectUri: z.ZodString;
        resource: z.ZodString;
        scope: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type AuthProviderCatalogDefinition = z.infer<typeof AuthProviderCatalogSchemaDefinition>;
/**
 * @openapiSchema AuthProviderCatalog
 * @endpoint GET /v1/auth/providers
 * @contractShape auth.provider-catalog
 * @contractRole canonical
 */
export declare const AuthProviderCatalogSchema: z.ZodType<AuthProviderCatalogDefinition>;
export type AuthProviderCatalog = z.infer<typeof AuthProviderCatalogSchema>;
export {};
//# sourceMappingURL=provider-catalog.d.ts.map