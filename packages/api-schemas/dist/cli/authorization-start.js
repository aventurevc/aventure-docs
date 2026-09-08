// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const CliAuthorizationStartSchemaDefinition = z.object({
    /** Human comparison code shown by both the CLI and browser */
    comparisonCode: z.string(),
    /** Authorization request expiry timestamp */
    expiresAt: z.iso.datetime({ offset: true }),
    /** Public authorization request identifier */
    id: z.uuid(),
    /** Minimum poll interval in seconds */
    intervalSeconds: z.number().int().min(1),
    /** One-time high-entropy credential required to poll and acknowledge delivery */
    pollSecret: z.string(),
    /** Browser verification URL */
    verificationUrl: z.string(),
});
/**
 * New CLI authorization handle and one-time poll credential
 *
 * @openapiSchema CliAuthorizationStart
 * @endpoint POST /v1/auth/cli-authorizations
 * @contractShape cli.authorization-start
 * @contractRole canonical
 */
export const CliAuthorizationStartSchema = CliAuthorizationStartSchemaDefinition;
//# sourceMappingURL=authorization-start.js.map