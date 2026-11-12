import { z } from "zod/v4";
declare const ResearchRunReportParagraphSchemaDefinition: z.ZodObject<{
    source: z.ZodArray<z.ZodType<{
        quote: string;
        title?: string | null | undefined;
        url: string;
    }, import("./run-report-source.ts").ResearchRunReportSourceSchemaInput, z.core.$ZodTypeInternals<{
        quote: string;
        title?: string | null | undefined;
        url: string;
    }, import("./run-report-source.ts").ResearchRunReportSourceSchemaInput>>>;
    text: z.ZodString;
}, z.core.$strip>;
type ResearchRunReportParagraphDefinition = z.infer<typeof ResearchRunReportParagraphSchemaDefinition>;
export interface ResearchRunReportParagraphSchemaInput extends z.input<typeof ResearchRunReportParagraphSchemaDefinition> {
}
/**
 * One paragraph and its supporting sources
 *
 * @openapiSchema ResearchRunReportParagraph
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema ResearchRunReportSchema
 * @contractShape research.run-report-paragraph
 * @contractRole canonical
 */
export declare const ResearchRunReportParagraphSchema: z.ZodType<ResearchRunReportParagraphDefinition, ResearchRunReportParagraphSchemaInput>;
export type ResearchRunReportParagraph = z.infer<typeof ResearchRunReportParagraphSchema>;
export {};
//# sourceMappingURL=run-report-paragraph.d.ts.map