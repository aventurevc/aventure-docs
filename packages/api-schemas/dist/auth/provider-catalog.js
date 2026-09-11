// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AuthClientSchema } from "./client.js";
const AuthProviderCatalogSchemaDefinition = z.object({
    /** Clerk publishable key for browser sign-in; absent when the environment has no Clerk instance */
    clerkPublishableKey: z.string().nullish(),
    /** OAuth PKCE client configuration for the CLI; absent until its client configuration is complete */
    oauthClient: AuthClientSchema.nullish(),
});
/**
 * @openapiSchema AuthProviderCatalog
 * @endpoint GET /v1/auth/providers
 * @contractShape auth.provider-catalog
 * @contractRole canonical
 */
export const AuthProviderCatalogSchema = AuthProviderCatalogSchemaDefinition;
//# sourceMappingURL=provider-catalog.js.map