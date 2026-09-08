import { z } from "zod/v4";
declare const CliAuthorizationPollSchemaDefinition: z.ZodObject<{
    delivery: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        algorithm: z.ZodEnum<{
            RSA_OAEP_256_A256_GCM_V1: "RSA_OAEP_256_A256_GCM_V1";
        }>;
        authenticationTag: z.ZodString;
        ciphertext: z.ZodString;
        nonce: z.ZodString;
        wrappedKey: z.ZodString;
    }, z.core.$strip>>>;
    expiresAt: z.ZodISODateTime;
    status: z.ZodEnum<{
        CONSUMED: "CONSUMED";
        DENIED: "DENIED";
        EXPIRED: "EXPIRED";
        FAILED: "FAILED";
        ISSUING: "ISSUING";
        KEY_READY: "KEY_READY";
        PENDING: "PENDING";
        REVOKED: "REVOKED";
        REVOKING: "REVOKING";
    }>;
    terminalReason: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "Authorization request expired": "Authorization request expired";
        "CLI authorization expired before acknowledgement": "CLI authorization expired before acknowledgement";
        "Clerk create response validation failed": "Clerk create response validation failed";
        "Credential delivery encryption failed": "Credential delivery encryption failed";
        "Credential issuance could not be recovered": "Credential issuance could not be recovered";
        "Credential issuance failed": "Credential issuance failed";
        "Credential issuance finalization was lost": "Credential issuance finalization was lost";
        "Credential issuance lost its database claim": "Credential issuance lost its database claim";
        "Credential issuance recovery revoked an unrecoverable key": "Credential issuance recovery revoked an unrecoverable key";
        "Denied by user": "Denied by user";
        "Personal API-key quota reached": "Personal API-key quota reached";
        "Revoked by user": "Revoked by user";
    }>>>;
}, z.core.$strip>;
type CliAuthorizationPollDefinition = z.infer<typeof CliAuthorizationPollSchemaDefinition>;
/**
 * Current broker state and encrypted delivery when the key is ready
 *
 * @openapiSchema CliAuthorizationPoll
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @contractShape cli.authorization-poll
 * @contractRole canonical
 */
export declare const CliAuthorizationPollSchema: z.ZodType<CliAuthorizationPollDefinition>;
export type CliAuthorizationPoll = z.infer<typeof CliAuthorizationPollSchema>;
export {};
//# sourceMappingURL=authorization-poll.d.ts.map