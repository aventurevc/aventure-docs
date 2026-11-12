import { z } from "zod/v4";
declare const ResearchRunReportSourceSchemaDefinition: z.ZodObject<{
    quote: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodString;
}, z.core.$strip>;
type ResearchRunReportSourceDefinition = z.infer<typeof ResearchRunReportSourceSchemaDefinition>;
export interface ResearchRunReportSourceSchemaInput extends z.input<typeof ResearchRunReportSourceSchemaDefinition> {
}
/**
 * A page and verbatim evidence supporting a report paragraph
 *
 * @openapiSchema ResearchRunReportSource
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema ResearchRunReportParagraphSchema
 * @contractShape research.run-report-source
 * @contractRole canonical
 */
export declare const ResearchRunReportSourceSchema: z.ZodType<ResearchRunReportSourceDefinition, ResearchRunReportSourceSchemaInput>;
export type ResearchRunReportSource = z.infer<typeof ResearchRunReportSourceSchema>;
export {};
//# sourceMappingURL=run-report-source.d.ts.map