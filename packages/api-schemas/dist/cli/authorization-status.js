// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const CliAuthorizationStatusSchema = z.enum([
    "PENDING",
    "ISSUING",
    "KEY_READY",
    "REVOKING",
    "CONSUMED",
    "REVOKED",
    "DENIED",
    "EXPIRED",
    "FAILED",
]);
//# sourceMappingURL=authorization-status.js.map