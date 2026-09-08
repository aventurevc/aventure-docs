// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const UptimeSchemaDefinition = z.object({
    /** Uptime percentage */
    availability: z.number().nullish(),
    /** Total downtime in seconds */
    downtimeSeconds: z.int().nullish(),
    /** Error message if unavailable */
    error: z.string().nullish(),
    /** Number of incidents */
    incidents: z.int().nullish(),
});
/**
 * Uptime SLA data from Better Stack monitoring
 *
 * @openapiSchema Uptime
 * @endpoint GET /v1/status
 * @usedBySchema SystemStatusSchema
 * @contractShape uptime.uptime
 * @contractRole canonical
 */
export const UptimeSchema = UptimeSchemaDefinition;
//# sourceMappingURL=uptime.js.map