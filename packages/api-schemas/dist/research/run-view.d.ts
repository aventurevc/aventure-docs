import { z } from "zod/v4";
/**
 * Shape of a research run listing: FULL pages full run rows; SUMMARY returns compact rows for polling
 *
 * @openapiSchema ResearchRunView
 * @endpoint GET /v1/research/runs
 * @contractShape research.run-view
 * @contractRole canonical
 */
export declare const ResearchRunViewSchema: z.ZodEnum<{
    FULL: "FULL";
    SUMMARY: "SUMMARY";
}>;
export type ResearchRunView = z.infer<typeof ResearchRunViewSchema>;
//# sourceMappingURL=run-view.d.ts.map