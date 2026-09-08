// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { CliAuthorizationDeliverySchema } from "./authorization-delivery.js";
import { CliAuthorizationStatusSchema } from "./authorization-status.js";
import { CliAuthorizationTerminalReasonSchema } from "./authorization-terminal-reason.js";
const CliAuthorizationPollSchemaDefinition = z.object({
    /** Encrypted one-time delivery, present only for KEY_READY */
    delivery: CliAuthorizationDeliverySchema.nullish(),
    /** Authorization request expiry timestamp */
    expiresAt: z.iso.datetime({ offset: true }),
    /** Current broker lifecycle state */
    status: CliAuthorizationStatusSchema,
    /** Non-secret terminal-state explanation */
    terminalReason: CliAuthorizationTerminalReasonSchema.nullish(),
});
/**
 * Current broker state and encrypted delivery when the key is ready
 *
 * @openapiSchema CliAuthorizationPoll
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @contractShape cli.authorization-poll
 * @contractRole canonical
 */
export const CliAuthorizationPollSchema = CliAuthorizationPollSchemaDefinition;
//# sourceMappingURL=authorization-poll.js.map