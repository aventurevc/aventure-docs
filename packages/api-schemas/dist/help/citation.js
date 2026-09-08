// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HelpSourceTypeSchema } from "./source-type.js";
const HelpCitationSchemaDefinition = z.object({
    /** Verbatim excerpt from the cited document supporting the answer. */
    excerpt: z.string(),
    /** Stable id within the source type: an operationId, a skill/prompt name, or a completion gate id. */
    sourceId: z.string(),
    /** Which part of the platform corpus this citation comes from. */
    sourceType: HelpSourceTypeSchema,
    /** Immutable version of the cited document when one exists (skill/prompt content version); null for catalog-derived sources. */
    sourceVersion: z.string().nullish(),
});
/**
 * A single corpus document the help answer is grounded in.
 *
 * @openapiSchema HelpCitation
 * @endpoint POST /v1/agents/help
 * @usedBySchema AgentHelpSchema
 * @contractShape help.citation
 * @contractRole canonical
 */
export const HelpCitationSchema = HelpCitationSchemaDefinition;
//# sourceMappingURL=citation.js.map