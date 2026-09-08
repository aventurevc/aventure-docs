// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * CLI authorization terminal explanation
 *
 * @openapiSchema CliAuthorizationTerminalReason
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @usedBySchema CliAuthorizationPollSchema
 * @usedBySchema CliAuthorizationSchema
 * @contractShape cli.authorization-terminal-reason
 * @contractRole canonical
 */
export const CliAuthorizationTerminalReasonSchema = z.enum([
    "Denied by user",
    "Authorization request expired",
    "CLI authorization expired before acknowledgement",
    "Credential issuance recovery revoked an unrecoverable key",
    "Revoked by user",
    "Clerk create response validation failed",
    "Credential issuance failed",
    "Credential issuance could not be recovered",
    "Personal API-key quota reached",
    "Credential issuance lost its database claim",
    "Credential delivery encryption failed",
    "Credential issuance finalization was lost",
]);
//# sourceMappingURL=authorization-terminal-reason.js.map