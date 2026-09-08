import { z } from "zod/v4";
/**
 * CLI authorization broker lifecycle state
 *
 * @openapiSchema CliAuthorizationStatus
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @usedBySchema CliAuthorizationPollSchema
 * @usedBySchema CliAuthorizationSchema
 * @contractShape cli.authorization-status
 * @contractRole canonical
 */
export declare const CliAuthorizationStatusSchema: z.ZodEnum<{
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
export type CliAuthorizationStatus = z.infer<typeof CliAuthorizationStatusSchema>;
//# sourceMappingURL=authorization-status.d.ts.map