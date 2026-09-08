// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SystemGlobalMetricsSchemaDefinition = z.object({
    cities: z.number().int(),
    companies: z.number().int(),
    countries: z.number().int(),
    dataPoints: z.number().int(),
    /** Total positive funding announced by visible companies in the trailing 30-day window. */
    fundingLast30Days: z.number(),
    /** Count of positive funding rounds announced by visible companies in the trailing 30-day window. */
    fundraiseRoundsLast30Days: z.number().int(),
    investors: z.number().int(),
    people: z.number().int(),
    refreshedAt: z.iso.datetime({ offset: true }),
    totalFunding: z.number(),
});
/**
 * Global platform metrics snapshot
 *
 * @openapiSchema SystemGlobalMetrics
 * @endpoint GET /v1/metrics
 * @contractShape system.global-metrics
 * @contractRole canonical
 */
export const SystemGlobalMetricsSchema = SystemGlobalMetricsSchemaDefinition;
//# sourceMappingURL=global-metrics.js.map