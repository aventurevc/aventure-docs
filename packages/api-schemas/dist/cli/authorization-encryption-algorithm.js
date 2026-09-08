// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Versioned hybrid encryption suite for one-time CLI credential delivery
 *
 * @openapiSchema CliAuthorizationEncryptionAlgorithm
 * @endpoint POST /v1/auth/cli-authorizations
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @usedBySchema CliAuthorizationDeliverySchema
 * @usedBySchema CliAuthorizationMutationSchema
 * @contractShape cli.authorization-encryption-algorithm
 * @contractRole canonical
 */
export const CliAuthorizationEncryptionAlgorithmSchema = z.enum(["RSA_OAEP_256_A256_GCM_V1"]);
//# sourceMappingURL=authorization-encryption-algorithm.js.map