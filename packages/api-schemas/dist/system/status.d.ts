import { z } from "zod/v4";
declare const SystemStatusSchemaDefinition: z.ZodObject<{
    operationFingerprint: z.ZodString;
    uptime: z.ZodType<{
        availability?: number | null | undefined;
        downtimeSeconds?: number | null | undefined;
        error?: string | null | undefined;
        incidents?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        availability?: number | null | undefined;
        downtimeSeconds?: number | null | undefined;
        error?: string | null | undefined;
        incidents?: number | null | undefined;
    }, unknown>>;
}, z.core.$strip>;
type SystemStatusDefinition = z.infer<typeof SystemStatusSchemaDefinition>;
/**
 * Uptime SLA from Better Stack and the identity of the served operation set
 *
 * @openapiSchema SystemStatus
 * @endpoint GET /v1/status
 * @contractShape system.status
 * @contractRole canonical
 */
export declare const SystemStatusSchema: z.ZodType<SystemStatusDefinition>;
export type SystemStatus = z.infer<typeof SystemStatusSchema>;
export {};
//# sourceMappingURL=status.d.ts.map