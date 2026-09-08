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
export declare const CliAuthorizationEncryptionAlgorithmSchema: z.ZodEnum<{
    RSA_OAEP_256_A256_GCM_V1: "RSA_OAEP_256_A256_GCM_V1";
}>;
export type CliAuthorizationEncryptionAlgorithm = z.infer<typeof CliAuthorizationEncryptionAlgorithmSchema>;
//# sourceMappingURL=authorization-encryption-algorithm.d.ts.map