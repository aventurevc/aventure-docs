import { z } from "zod/v4";
declare const CliAuthorizationMutationSchemaDefinition: z.ZodObject<{
    clientLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    clientPlatform: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        LINUX: "LINUX";
        MACOS: "MACOS";
        OTHER: "OTHER";
        WINDOWS: "WINDOWS";
    }>>>;
    encryptionAlgorithm: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        RSA_OAEP_256_A256_GCM_V1: "RSA_OAEP_256_A256_GCM_V1";
    }>>>;
    encryptionPublicKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type CliAuthorizationMutationDefinition = z.infer<typeof CliAuthorizationMutationSchemaDefinition>;
/**
 * Creates a short-lived CLI authorization request bound to an ephemeral key
 *
 * @openapiSchema CliAuthorizationMutation
 * @endpoint POST /v1/auth/cli-authorizations
 * @contractShape cli.authorization-mutation
 * @contractRole canonical
 */
export declare const CliAuthorizationMutationSchema: z.ZodType<CliAuthorizationMutationDefinition>;
export type CliAuthorizationMutation = z.infer<typeof CliAuthorizationMutationSchema>;
export {};
//# sourceMappingURL=authorization-mutation.d.ts.map