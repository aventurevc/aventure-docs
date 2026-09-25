// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ApiKeySchemaDefinition = z.object({
    /** Provider creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Optional user-visible key description */
    description: z.string().nullish(),
    /** Provider expiry timestamp */
    expiresAt: z.iso.datetime({ offset: true }).nullish(),
    /** Clerk API-key identifier */
    id: z.string().regex(/^ak_[0-9A-Fa-f]{32}$/),
    /** Most recent provider-recorded use timestamp */
    lastUsedAt: z.iso.datetime({ offset: true }).nullish(),
    /** User-visible key name */
    name: z.string(),
    /** Provider revocation explanation */
    revocationReason: z.string().nullish(),
    /** Clerk scopes assigned to this key */
    scopes: z.array(z.string()),
    /** Provider-derived current lifecycle state */
    status: z.enum(["ACTIVE", "REVOKED", "EXPIRED"]),
    /** Owning Clerk user subject */
    subject: z.string(),
    /** Provider metadata update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Clerk API-key metadata; never contains the key secret
 *
 * @openapiSchema ApiKey
 * @endpoint GET /v1/auth/api-key
 * @endpoint DELETE /v1/auth/api-key
 * @contractShape api.key
 * @contractRole canonical
 */
export const ApiKeySchema = ApiKeySchemaDefinition;
//# sourceMappingURL=key.js.map