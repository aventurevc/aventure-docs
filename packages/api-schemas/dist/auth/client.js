// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * @openapiSchema AuthClient
 * @endpoint GET /v1/auth/providers
 * @usedBySchema AuthProviderCatalogSchema
 * @contractShape auth.client
 * @contractRole canonical
 */
export const AuthClientSchema = z.object({
    /** OAuth authorization server URI */
    authorizationServer: z.string(),
    /** Public OAuth client identifier */
    clientId: z.string(),
    /** Registered loopback callback URI template */
    redirectUri: z.string(),
    /** OAuth resource indicator accepted by the API */
    resource: z.string(),
    /** OAuth scope requested by the CLI */
    scope: z.array(z.string()),
});
//# sourceMappingURL=client.js.map