import { z } from "zod/v4";
/**
 * @openapiSchema AuthClient
 * @endpoint GET /v1/auth/providers
 * @usedBySchema AuthProviderCatalogSchema
 * @contractShape auth.client
 * @contractRole canonical
 */
export declare const AuthClientSchema: z.ZodObject<{
    authorizationServer: z.ZodString;
    clientId: z.ZodString;
    redirectUri: z.ZodString;
    resource: z.ZodString;
    scope: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type AuthClient = z.infer<typeof AuthClientSchema>;
//# sourceMappingURL=client.d.ts.map