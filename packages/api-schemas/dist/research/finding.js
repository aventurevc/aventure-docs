// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ResearchFindingSchemaDefinition = z.object({
    /** Completion gate the fact fills, when known; omit it and the run picks the field the fact belongs to. */
    gateId: z.string().nullish(),
    /** The exact text on sourceUrl that states the fact, copied verbatim; a fragment short enough to appear on any page is refused. */
    quote: z.string(),
    /** Absolute http or https URL of the page that supports the fact; aVenture pages are refused. */
    sourceUrl: z.string(),
    /** The fact to write, in plain words. */
    statement: z.string(),
});
/**
 * One fact you researched, with the page and exact text that support it. The run checks the quote against the page before it writes the fact.
 *
 * @openapiSchema ResearchFinding
 * @endpoint POST /v1/harness/runs
 * @usedBySchema HarnessRunCreateSchema
 * @contractShape research.finding
 * @contractRole canonical
 */
export const ResearchFindingSchema = ResearchFindingSchemaDefinition;
//# sourceMappingURL=finding.js.map