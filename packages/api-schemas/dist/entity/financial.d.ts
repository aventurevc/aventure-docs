import { z } from "zod/v4";
declare const EntityFinancialSchemaDefinition: z.ZodObject<{
    currency: z.ZodNullable<z.ZodString>;
    entityId: z.ZodUUID;
    functionalCurrency: z.ZodNullable<z.ZodString>;
    id: z.ZodInt;
    period: z.ZodString;
    revenue: z.ZodNullable<z.ZodString>;
    year: z.ZodInt;
}, z.core.$strip>;
type EntityFinancialDefinition = z.infer<typeof EntityFinancialSchemaDefinition>;
export interface EntityFinancialSchemaInput extends z.input<typeof EntityFinancialSchemaDefinition> {
}
/**
 * Stored financial facts for one exact year and period
 *
 * @openapiSchema EntityFinancial
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityResearchSchema
 * @contractShape entity.financial
 * @contractRole canonical
 */
export declare const EntityFinancialSchema: z.ZodType<EntityFinancialDefinition, EntityFinancialSchemaInput>;
export type EntityFinancial = z.infer<typeof EntityFinancialSchema>;
export {};
//# sourceMappingURL=financial.d.ts.map