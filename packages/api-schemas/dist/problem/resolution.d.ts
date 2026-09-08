import { z } from "zod/v4";
/**
 * Machine-readable next action for an aVenture ProblemDetail. For reviewCandidates, inspect ProblemDetail.details candidates and decide update, create-with-override, or block from those returned records.
 *
 * @openapiSchema ProblemResolution
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape problem.resolution
 * @contractRole canonical
 */
export declare const ProblemResolutionSchema: z.ZodObject<{
    acceptedValue: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    action: z.ZodEnum<{
        authenticate: "authenticate";
        removeParameter: "removeParameter";
        reviewCandidates: "reviewCandidates";
        setField: "setField";
        setParameter: "setParameter";
        useEndpoint: "useEndpoint";
    }>;
    endpoint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fieldPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parameter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    retryable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
export type ProblemResolution = z.infer<typeof ProblemResolutionSchema>;
//# sourceMappingURL=resolution.d.ts.map