// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Coarse operating-system family reported by the CLI
 *
 * @openapiSchema CliAuthorizationClientPlatform
 * @endpoint POST /v1/auth/cli-authorizations
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
 * @usedBySchema CliAuthorizationMutationSchema
 * @usedBySchema CliAuthorizationSchema
 * @contractShape cli.authorization-client-platform
 * @contractRole canonical
 */
export const CliAuthorizationClientPlatformSchema = z.enum(["MACOS", "LINUX", "WINDOWS", "OTHER"]);
//# sourceMappingURL=authorization-client-platform.js.map