// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { CliAuthorizationEncryptionAlgorithmSchema } from "./authorization-encryption-algorithm.js";
/**
 * RSA-wrapped AES-256-GCM delivery of one personal API-key secret
 *
 * @openapiSchema CliAuthorizationDelivery
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @usedBySchema CliAuthorizationPollSchema
 * @contractShape cli.authorization-delivery
 * @contractRole canonical
 */
export const CliAuthorizationDeliverySchema = z.object({
    /** Hybrid encryption suite used for this delivery */
    algorithm: CliAuthorizationEncryptionAlgorithmSchema,
    /** Base64-encoded 16-byte AES-GCM authentication tag */
    authenticationTag: z.string(),
    /** Base64-encoded encrypted UTF-8 personal API-key secret bytes */
    ciphertext: z.string(),
    /** Base64-encoded 12-byte AES-GCM nonce */
    nonce: z.string(),
    /** Base64-encoded RSA-OAEP-wrapped AES key */
    wrappedKey: z.string(),
});
//# sourceMappingURL=authorization-delivery.js.map