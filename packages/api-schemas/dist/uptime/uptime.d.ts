import { z } from "zod/v4";
declare const UptimeSchemaDefinition: z.ZodObject<{
    availability: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    downtimeSeconds: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    error: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    incidents: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type UptimeDefinition = z.infer<typeof UptimeSchemaDefinition>;
/**
 * Uptime SLA data from Better Stack monitoring
 *
 * @openapiSchema Uptime
 * @endpoint GET /v1/status
 * @usedBySchema SystemStatusSchema
 * @contractShape uptime.uptime
 * @contractRole canonical
 */
export declare const UptimeSchema: z.ZodType<UptimeDefinition>;
export type Uptime = z.infer<typeof UptimeSchema>;
export {};
//# sourceMappingURL=uptime.d.ts.map