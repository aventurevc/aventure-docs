import { z } from "zod/v4";
declare const CliAuthorizationStartSchemaDefinition: z.ZodObject<{
    comparisonCode: z.ZodString;
    expiresAt: z.ZodISODateTime;
    id: z.ZodUUID;
    intervalSeconds: z.ZodNumber;
    pollSecret: z.ZodString;
    verificationUrl: z.ZodString;
}, z.core.$strip>;
type CliAuthorizationStartDefinition = z.infer<typeof CliAuthorizationStartSchemaDefinition>;
/**
 * New CLI authorization handle and one-time poll credential
 *
 * @openapiSchema CliAuthorizationStart
 * @endpoint POST /v1/auth/cli-authorizations
 * @contractShape cli.authorization-start
 * @contractRole canonical
 */
export declare const CliAuthorizationStartSchema: z.ZodType<CliAuthorizationStartDefinition>;
export type CliAuthorizationStart = z.infer<typeof CliAuthorizationStartSchema>;
export {};
//# sourceMappingURL=authorization-start.d.ts.map