import { z } from "zod/v4";
/**
 * Written research with evidence for each paragraph
 *
 * @openapiSchema ResearchRunReport
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema HarnessRunDetailSchema
 * @contractShape research.run-report
 * @contractRole canonical
 */
export declare const ResearchRunReportSchema: z.ZodObject<{
    paragraph: z.ZodArray<z.ZodType<{
        source: {
            quote: string;
            title?: string | null | undefined;
            url: string;
        }[];
        text: string;
    }, import("./run-report-paragraph.ts").ResearchRunReportParagraphSchemaInput, z.core.$ZodTypeInternals<{
        source: {
            quote: string;
            title?: string | null | undefined;
            url: string;
        }[];
        text: string;
    }, import("./run-report-paragraph.ts").ResearchRunReportParagraphSchemaInput>>>;
}, z.core.$strip>;
export type ResearchRunReport = z.infer<typeof ResearchRunReportSchema>;
//# sourceMappingURL=run-report.d.ts.map