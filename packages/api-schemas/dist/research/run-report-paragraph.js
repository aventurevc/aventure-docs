// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchRunReportSourceSchema } from "./run-report-source.js";
const ResearchRunReportParagraphSchemaDefinition = z.object({
    /** Sources supporting the claims in this paragraph */
    source: z.array(ResearchRunReportSourceSchema),
    /** Written finding */
    text: z.string(),
});
/**
 * One paragraph and its supporting sources
 *
 * @openapiSchema ResearchRunReportParagraph
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema ResearchRunReportSchema
 * @contractShape research.run-report-paragraph
 * @contractRole canonical
 */
export const ResearchRunReportParagraphSchema = ResearchRunReportParagraphSchemaDefinition;
//# sourceMappingURL=run-report-paragraph.js.map