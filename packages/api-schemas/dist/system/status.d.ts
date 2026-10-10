import { z } from "zod/v4";
declare const SystemStatusSchemaDefinition: z.ZodObject<{
    latestIosBuild: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    latestIosVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    latestMacosBuild: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    latestMacosVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    minimumIosBuild: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    minimumIosVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    minimumMacosBuild: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    minimumMacosVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    operationFingerprint: z.ZodString;
    uptime: z.ZodType<{
        availability?: number | null | undefined;
        downtimeSeconds?: number | null | undefined;
        error?: string | null | undefined;
        incidents?: number | null | undefined;
    }, import("../uptime/uptime.ts").UptimeSchemaInput, z.core.$ZodTypeInternals<{
        availability?: number | null | undefined;
        downtimeSeconds?: number | null | undefined;
        error?: string | null | undefined;
        incidents?: number | null | undefined;
    }, import("../uptime/uptime.ts").UptimeSchemaInput>>;
}, z.core.$strip>;
type SystemStatusDefinition = z.infer<typeof SystemStatusSchemaDefinition>;
export interface SystemStatusSchemaInput extends z.input<typeof SystemStatusSchemaDefinition> {
}
/**
 * Uptime SLA, served-operation identity, and Apple app update policy
 *
 * @openapiSchema SystemStatus
 * @endpoint GET /v1/status
 * @contractShape system.status
 * @contractRole canonical
 */
export declare const SystemStatusSchema: z.ZodType<SystemStatusDefinition, SystemStatusSchemaInput>;
export type SystemStatus = z.infer<typeof SystemStatusSchema>;
export {};
//# sourceMappingURL=status.d.ts.map