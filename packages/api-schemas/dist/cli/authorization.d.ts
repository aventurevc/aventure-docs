import { z } from "zod/v4";
declare const CliAuthorizationSchemaDefinition: z.ZodObject<{
    approvedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    clientLabel: z.ZodString;
    clientPlatform: z.ZodEnum<{
        LINUX: "LINUX";
        MACOS: "MACOS";
        OTHER: "OTHER";
        WINDOWS: "WINDOWS";
    }>;
    comparisonCode: z.ZodString;
    consumedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    createdAt: z.ZodISODateTime;
    expiresAt: z.ZodISODateTime;
    id: z.ZodUUID;
    intervalSeconds: z.ZodNumber;
    keyReadyAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
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
    terminalAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
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
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type CliAuthorizationDefinition = z.infer<typeof CliAuthorizationSchemaDefinition>;
/**
 * Browser-approved CLI authorization metadata. Secret poll and encrypted-delivery material are exposed only by their dedicated one-time response contracts.
 *
 * @openapiSchema CliAuthorization
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
 * @contractShape cli.authorization
 * @contractRole canonical
 */
export declare const CliAuthorizationSchema: z.ZodType<CliAuthorizationDefinition>;
export type CliAuthorization = z.infer<typeof CliAuthorizationSchema>;
export {};
//# sourceMappingURL=authorization.d.ts.map