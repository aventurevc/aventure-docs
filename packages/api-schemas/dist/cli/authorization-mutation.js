// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { CliAuthorizationClientPlatformSchema } from "./authorization-client-platform.js";
import { CliAuthorizationEncryptionAlgorithmSchema } from "./authorization-encryption-algorithm.js";
const CliAuthorizationMutationSchemaDefinition = z.object({
    /** Label for this CLI installation */
    clientLabel: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(120)
        .nullish(),
    /** Coarse operating-system family */
    clientPlatform: CliAuthorizationClientPlatformSchema.nullish(),
    /** Requested hybrid encryption suite */
    encryptionAlgorithm: CliAuthorizationEncryptionAlgorithmSchema.nullish(),
    /** Base64-encoded DER SubjectPublicKeyInfo for an ephemeral RSA public key */
    encryptionPublicKey: z.string().min(344).max(12000).nullish(),
});
/**
 * Creates a short-lived CLI authorization request bound to an ephemeral key
 *
 * @openapiSchema CliAuthorizationMutation
 * @endpoint POST /v1/auth/cli-authorizations
 * @contractShape cli.authorization-mutation
 * @contractRole canonical
 */
export const CliAuthorizationMutationSchema = CliAuthorizationMutationSchemaDefinition;
//# sourceMappingURL=authorization-mutation.js.map