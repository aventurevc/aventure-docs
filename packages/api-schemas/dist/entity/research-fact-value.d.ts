import { z } from "zod/v4";
declare const EntityResearchFactValueSchemaDefinition: z.ZodObject<{
    asOfDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currentEligible: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    dataConfidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
    }>>>;
    dateValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    numericValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    referenceValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    textValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    valueType: z.ZodEnum<{
        date: "date";
        monetary: "monetary";
        numeric: "numeric";
        percentage: "percentage";
        text: "text";
    }>;
}, z.core.$strip>;
type EntityResearchFactValueDefinition = z.infer<typeof EntityResearchFactValueSchemaDefinition>;
export interface EntityResearchFactValueSchemaInput extends z.input<typeof EntityResearchFactValueSchemaDefinition> {
}
/**
 * Canonical typed fact value nested under entity research fields
 *
 * @openapiSchema EntityResearchFactValue
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/employee-counts
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EmployeeCountSchema
 * @contractShape entity.research-fact-value
 * @contractRole canonical
 */
export declare const EntityResearchFactValueSchema: z.ZodType<EntityResearchFactValueDefinition, EntityResearchFactValueSchemaInput>;
export type EntityResearchFactValue = z.infer<typeof EntityResearchFactValueSchema>;
export {};
//# sourceMappingURL=research-fact-value.d.ts.map