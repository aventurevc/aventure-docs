import { z } from "zod/v4";
/**
 * Employee-count time-series point for an entity
 *
 * @openapiSchema EmployeeCount
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/employee-counts
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
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
 * @usedBySchema PageEmployeeCountSchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape employee.count
 * @contractRole canonical
 */
export declare const EmployeeCountSchema: z.ZodObject<{
    asOfDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fact: z.ZodType<{
        asOfDate?: string | null | undefined;
        currentEligible?: boolean | null | undefined;
        dataConfidence?: "high" | "low" | "medium" | null | undefined;
        dateValue?: string | null | undefined;
        decimalValue?: string | null | undefined;
        measurementBasis?: string | null | undefined;
        numericValue?: number | null | undefined;
        referenceValue?: string | null | undefined;
        reportingScope?: string | null | undefined;
        source?: string | null | undefined;
        textValue?: string | null | undefined;
        updatedAt?: string | null | undefined;
        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
    }, import("../entity/research-fact-value.ts").EntityResearchFactValueSchemaInput, z.core.$ZodTypeInternals<{
        asOfDate?: string | null | undefined;
        currentEligible?: boolean | null | undefined;
        dataConfidence?: "high" | "low" | "medium" | null | undefined;
        dateValue?: string | null | undefined;
        decimalValue?: string | null | undefined;
        measurementBasis?: string | null | undefined;
        numericValue?: number | null | undefined;
        referenceValue?: string | null | undefined;
        reportingScope?: string | null | undefined;
        source?: string | null | undefined;
        textValue?: string | null | undefined;
        updatedAt?: string | null | undefined;
        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
    }, import("../entity/research-fact-value.ts").EntityResearchFactValueSchemaInput>>;
    id: z.ZodString;
}, z.core.$strip>;
export type EmployeeCount = z.infer<typeof EmployeeCountSchema>;
//# sourceMappingURL=count.d.ts.map