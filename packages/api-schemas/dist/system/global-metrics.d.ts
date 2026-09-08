import { z } from "zod/v4";
declare const SystemGlobalMetricsSchemaDefinition: z.ZodObject<{
    cities: z.ZodNumber;
    companies: z.ZodNumber;
    countries: z.ZodNumber;
    dataPoints: z.ZodNumber;
    fundingLast30Days: z.ZodNumber;
    fundraiseRoundsLast30Days: z.ZodNumber;
    investors: z.ZodNumber;
    people: z.ZodNumber;
    refreshedAt: z.ZodISODateTime;
    totalFunding: z.ZodNumber;
}, z.core.$strip>;
type SystemGlobalMetricsDefinition = z.infer<typeof SystemGlobalMetricsSchemaDefinition>;
/**
 * Global platform metrics snapshot
 *
 * @openapiSchema SystemGlobalMetrics
 * @endpoint GET /v1/metrics
 * @contractShape system.global-metrics
 * @contractRole canonical
 */
export declare const SystemGlobalMetricsSchema: z.ZodType<SystemGlobalMetricsDefinition>;
export type SystemGlobalMetrics = z.infer<typeof SystemGlobalMetricsSchema>;
export {};
//# sourceMappingURL=global-metrics.d.ts.map