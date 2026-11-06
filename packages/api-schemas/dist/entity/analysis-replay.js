// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityResearchSnippetSchema } from "./research-snippet.js";
import { HarnessRunEventSchema } from "../harness/run-event.js";
const EntityAnalysisReplaySchemaDefinition = z.object({
    /** Company the replayed session researched. */
    entityId: z.uuid(),
    /** Brand name of that company. */
    entityName: z.string(),
    /** Profile slug of that company. */
    entitySlug: z.string(),
    /** Retained legacy field, always empty. Conversation is withheld; publishedSection is a result, not a reply. */
    event: z.array(HarnessRunEventSchema),
    /** The accepted, current, visible snippet, with only its public source details. */
    publishedSection: EntityResearchSnippetSchema.nullish(),
    /** The single snippet type displayed by this public example. */
    section: z.array(z.string()),
});
/**
 * One accepted current published result shown read-only beside the Research tab's paywall. The same global example is selected independently of the requested profile.
 *
 * @openapiSchema EntityAnalysisReplay
 * @endpoint GET /v1/entities/{entityId}/analysis-replay
 * @contractShape entity.analysis-replay
 * @contractRole canonical
 */
export const EntityAnalysisReplaySchema = EntityAnalysisReplaySchemaDefinition;
//# sourceMappingURL=analysis-replay.js.map