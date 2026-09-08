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
export declare const CliAuthorizationClientPlatformSchema: z.ZodEnum<{
    LINUX: "LINUX";
    MACOS: "MACOS";
    OTHER: "OTHER";
    WINDOWS: "WINDOWS";
}>;
export type CliAuthorizationClientPlatform = z.infer<typeof CliAuthorizationClientPlatformSchema>;
//# sourceMappingURL=authorization-client-platform.d.ts.map