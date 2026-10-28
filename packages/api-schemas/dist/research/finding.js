// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WriterClaimSurfaceSchema } from "../writer/claim-surface.js";
const ResearchFindingSchemaDefinition = z.object({
    /** Profile field the fact fills, when known; omit it and the run picks the field the fact belongs to. */
    gateId: z.string().nullish(),
    /** The exact text on sourceUrl that states the fact, copied verbatim; a fragment short enough to appear on any page is refused. */
    quote: z.string(),
    /** Absolute http or https URL of the page that supports the fact; aVenture pages are refused. Direct writes require a resolved sourceDetail page and may supplement it with eligible pages associated with the subject or explicitly bound through sourceDocumentId on a pending full create; harness-run writes use the sourceDetail page or eligible pages read through aVenture by the authorizing run. Each quote must occur in its page's stored text. */
    sourceUrl: z.string(),
    /** The fact to write, in plain words. */
    statement: z.string(),
    /** Surface this sourced claim may enter: durable entity text, point-in-time research snippets, or both. New writer briefs must declare it. */
    writerSurface: WriterClaimSurfaceSchema.nullish(),
});
/**
 * One fact you researched, with the page and exact text that support it. The run checks the quote against the page before it writes the fact.
 *
 * @openapiSchema ResearchFinding
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EnrichmentPromptSchema
 * @usedBySchema HarnessRunCreateSchema
 * @usedBySchema WriterBriefSchema
 * @contractShape research.finding
 * @contractRole canonical
 */
export const ResearchFindingSchema = ResearchFindingSchemaDefinition;
//# sourceMappingURL=finding.js.map