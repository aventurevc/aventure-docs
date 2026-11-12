// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchRunReportParagraphSchema } from "./run-report-paragraph.js";
/**
 * Written research with evidence for each paragraph
 *
 * @openapiSchema ResearchRunReport
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema HarnessRunDetailSchema
 * @contractShape research.run-report
 * @contractRole canonical
 */
export const ResearchRunReportSchema = z.object({
    /** Cited paragraphs in reading order */
    paragraph: z.array(ResearchRunReportParagraphSchema),
});
//# sourceMappingURL=run-report.js.map