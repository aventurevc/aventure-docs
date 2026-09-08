// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { UptimeSchema } from "../uptime/uptime.js";
const SystemStatusSchemaDefinition = z.object({
    /** Short hash identifying the exact set of operations this deployment serves. A generated client stamps the same value from the OpenAPI document it was built from; an unequal value means the client catalog is stale. `vc.aventure.application.usecase.system.status.OperationInventory` owns how it is computed. */
    operationFingerprint: z.string(),
    /** Uptime SLA data from Better Stack monitoring */
    uptime: UptimeSchema,
});
/**
 * Uptime SLA from Better Stack and the identity of the served operation set
 *
 * @openapiSchema SystemStatus
 * @endpoint GET /v1/status
 * @contractShape system.status
 * @contractRole canonical
 */
export const SystemStatusSchema = SystemStatusSchemaDefinition;
//# sourceMappingURL=status.js.map