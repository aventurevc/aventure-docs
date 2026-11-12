// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ResearchRunReportSourceSchemaDefinition = z.object({
    /** Verbatim quote from the page that supports the paragraph */
    quote: z.string(),
    /** Title of the page, when available */
    title: z.string().nullish(),
    /** Absolute HTTP or HTTPS URL of the page quoted */
    url: z.string(),
});
/**
 * A page and verbatim evidence supporting a report paragraph
 *
 * @openapiSchema ResearchRunReportSource
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema ResearchRunReportParagraphSchema
 * @contractShape research.run-report-source
 * @contractRole canonical
 */
export const ResearchRunReportSourceSchema = ResearchRunReportSourceSchemaDefinition;
//# sourceMappingURL=run-report-source.js.map