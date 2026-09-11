import { z } from "zod/v4";
/**
 * Employee-count time-series point for an entity
 *
 * @openapiSchema EmployeeCount
 * @endpoint GET /v1/entities/{entityId}/people/time-series
 * @endpoint GET /v1/people/{personId}/graph
 * @usedBySchema PageEmployeeCountSchema
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape employee.count
 * @contractRole canonical
 */
export declare const EmployeeCountSchema: z.ZodObject<{
    asOfDate: z.ZodISODateTime;
    fact: z.ZodType<{
        asOfDate?: string | null | undefined;
        dataConfidence?: "high" | "low" | "medium" | null | undefined;
        dateValue?: string | null | undefined;
        numericValue?: number | null | undefined;
        referenceValue?: string | null | undefined;
        source?: string | null | undefined;
        textValue?: string | null | undefined;
        updatedAt?: string | null | undefined;
        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
    }, unknown, z.core.$ZodTypeInternals<{
        asOfDate?: string | null | undefined;
        dataConfidence?: "high" | "low" | "medium" | null | undefined;
        dateValue?: string | null | undefined;
        numericValue?: number | null | undefined;
        referenceValue?: string | null | undefined;
        source?: string | null | undefined;
        textValue?: string | null | undefined;
        updatedAt?: string | null | undefined;
        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
    }, unknown>>;
    id: z.ZodString;
}, z.core.$strip>;
export type EmployeeCount = z.infer<typeof EmployeeCountSchema>;
//# sourceMappingURL=count.d.ts.map