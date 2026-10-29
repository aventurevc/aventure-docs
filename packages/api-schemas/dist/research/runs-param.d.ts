import { z } from "zod/v4";
export declare const RESEARCH_RUNS_ENDPOINT: "/v1/research/runs";
/**
 * Request-side query params for `GET /v1/research/runs`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/research/runs
 * @contractShape research.runs-param
 * @contractRole canonical
 */
export declare const ResearchRunsParamSchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    entitySlug: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    taskPresetKey: z.ZodOptional<z.ZodArray<z.ZodString>>;
    view: z.ZodOptional<z.ZodEnum<{
        FULL: "FULL";
        SUMMARY: "SUMMARY";
    }>>;
}, z.core.$strip>;
export type ResearchRunsParam = z.infer<typeof ResearchRunsParamSchema>;
//# sourceMappingURL=runs-param.d.ts.map