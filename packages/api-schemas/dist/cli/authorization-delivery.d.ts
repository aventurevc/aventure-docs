import { z } from "zod/v4";
/**
 * RSA-wrapped AES-256-GCM delivery of one personal API-key secret
 *
 * @openapiSchema CliAuthorizationDelivery
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @usedBySchema CliAuthorizationPollSchema
 * @contractShape cli.authorization-delivery
 * @contractRole canonical
 */
export declare const CliAuthorizationDeliverySchema: z.ZodObject<{
    algorithm: z.ZodEnum<{
        RSA_OAEP_256_A256_GCM_V1: "RSA_OAEP_256_A256_GCM_V1";
    }>;
    authenticationTag: z.ZodString;
    ciphertext: z.ZodString;
    nonce: z.ZodString;
    wrappedKey: z.ZodString;
}, z.core.$strip>;
export type CliAuthorizationDelivery = z.infer<typeof CliAuthorizationDeliverySchema>;
//# sourceMappingURL=authorization-delivery.d.ts.map