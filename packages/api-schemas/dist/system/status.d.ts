import { z } from "zod/v4";
declare const SystemStatusSchemaDefinition: z.ZodObject<{
    operationFingerprint: z.ZodString;
}, z.core.$strip>;
type SystemStatusDefinition = z.infer<typeof SystemStatusSchemaDefinition>;
export interface SystemStatusSchemaInput extends z.input<typeof SystemStatusSchemaDefinition> {
}
/**
 * System status reported by the API
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