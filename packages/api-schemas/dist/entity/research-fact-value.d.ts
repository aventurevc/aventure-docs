import { z } from "zod/v4";
declare const EntityResearchFactValueSchemaDefinition: z.ZodObject<{
    asOfDate: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    dataConfidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
    }>>>;
    dateValue: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
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
/**
 * Canonical typed fact value nested under entity research fields
 *
 * @openapiSchema EntityResearchFactValue
 * @endpoint GET /v1/entities/{entityId}/people/time-series
 * @endpoint GET /v1/people/{personId}/graph
 * @usedBySchema EmployeeCountSchema
 * @contractShape entity.research-fact-value
 * @contractRole canonical
 */
export declare const EntityResearchFactValueSchema: z.ZodType<EntityResearchFactValueDefinition>;
export type EntityResearchFactValue = z.infer<typeof EntityResearchFactValueSchema>;
export {};
//# sourceMappingURL=research-fact-value.d.ts.map